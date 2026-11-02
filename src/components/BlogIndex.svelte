<script lang="ts">
  import { onMount } from 'svelte';
  import { language } from '$lib/stores';
  import { ArrowUpRight, ArrowDown } from 'lucide-svelte';
  export let posts: {title:string;description:string;titleEn?:string;descriptionEn?:string;date:string;lang:string;tags:string[];href:string;kind?:string;source?:string;author?:string}[];
  let selected = 'All';
  let journal: HTMLElement;
  let entries: HTMLElement;
  function turnPage() {
    const origin = journal.offsetTop;
    const range = Math.min(window.innerHeight * .85, document.documentElement.scrollHeight - window.innerHeight - origin);
    window.scrollTo({ top: origin + range, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  function returnToCover() {
    entries.scrollTop = 0;
    window.scrollTo({top: journal.offsetTop, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
  onMount(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let origin = 0;
    let range = 1;
    let current = 0;
    let lastTime = 0;
    function measure() {
      origin = journal.offsetTop;
      range = Math.max(window.innerHeight * .85, 1);
      schedule();
    }
    function update(time: number) {
      frame = 0;
      const available = Math.max(1, Math.min(range, document.documentElement.scrollHeight - window.innerHeight - origin));
      const target = Math.min(Math.max((window.scrollY - origin) / available, 0), 1);
      const dt = Math.min(lastTime ? time - lastTime : 16.7, 64);
      lastTime = time;
      current = target;
      if (Math.abs(target - current) < .0005) current = target;
      journal.style.setProperty('--scatter', current.toFixed(5));
      journal.style.setProperty('--reading-events', current >= .95 ? 'auto' : 'none');
      if (current !== target) frame = requestAnimationFrame(update);
      else lastTime = 0;
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure);
    reduce.addEventListener('change', schedule);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', measure); reduce.removeEventListener('change', schedule); };
  });
  $: zh = $language === 'zh';
  $: tags = ['All', ...new Set(posts.flatMap(p => p.tags))];
  $: filtered = selected === 'All' ? posts : posts.filter(p => p.tags.includes(selected));
</script>
<main id="main" class="journal" bind:this={journal}>
  <div class="journal-stage">
  <section class="opening" aria-labelledby="journal-title">
    <div class="cover">
      <div class="cover-copy"><h1 id="journal-title" lang="en"><span class="title-first">Beyond</span><span class="title-second">the <em>work.</em><span class="title-dot">*</span></span></h1><a class="reading-link" href="#entries" on:click|preventDefault={turnPage}>{zh ? '请翻页' : 'Turn the page'}<ArrowDown size={15}/></a></div>
      <div class="cover-art" aria-hidden="true">
        <div class="art-grid"></div><div class="sun"></div><div class="arch"></div><div class="cutout"></div><div class="fine-orbit"></div><span class="art-star">✳</span>
      </div>
    </div>
    <p class="figure-credit" lang="en"><em>An open mind</em> — Figure by GPT-6</p>
  </section>
  <section bind:this={entries} id="entries" class="entries" aria-labelledby="entries-title">
    <div class="section-heading"><h2 id="entries-title">{zh ? '随笔与阅读' : 'Writing & reading'}<span class="entry-count">({String(posts.length).padStart(2,'0')})</span></h2><button class="cover-return" on:click={returnToCover}>{zh ? '返回封面 ↑' : 'Cover ↑'}</button></div>
    {#if posts.length}
      <div lang="en" class="filters" aria-label={zh ? '按标签筛选' : 'Filter by tag'}>{#each tags as tag}<button on:click={() => selected = tag} aria-pressed={selected === tag} class:chosen={selected === tag}>{tag}</button>{/each}</div>
      <div class="entry-list">{#each filtered as post,index}<article class="entry"><span class="entry-number">{String(index+1).padStart(2,'0')}</span><div><div class="entry-meta"><span class="entry-kind">{post.kind === 'link' ? (zh ? '阅读分享' : 'Reading') : (zh ? '原创' : 'Original')}</span><time datetime={post.date}>{post.date}</time>{#each post.tags as tag}<span>{tag}</span>{/each}</div><h3><a href={post.href} target={post.kind === 'link' ? '_blank' : undefined} rel={post.kind === 'link' ? 'noreferrer' : undefined}>{!zh && post.titleEn ? post.titleEn : post.title}<ArrowUpRight size={20}/></a></h3>{#if post.source}<p class="source-line">{post.source} · {post.author}</p>{/if}<div class="recommendation" lang={!zh && post.descriptionEn ? 'en' : post.lang}><p>{!zh && post.descriptionEn ? post.descriptionEn : post.description}</p></div>{#if post.kind === 'link'}<a class="source-link" href={post.href} target="_blank" rel="noreferrer">{zh ? '阅读原文' : 'Read the original'} ↗</a>{/if}</div></article>{/each}</div>
    {:else}
      <div class="empty-page"><span class="empty-mark" aria-hidden="true">“</span><div><p class="empty-title">{zh ? '故事，还在酝酿。' : 'The first page is still unwritten.'}</p><p class="empty-note">{zh ? '这里还没有发布的文章。等一些想法慢慢长成文字。' : 'No posts published yet. Giving a few ideas time to find their words.'}</p></div><span class="margin-note" lang="en">Room for<br/>what comes next.</span></div>
    {/if}
  <footer class="journal-footer"><a href="/">← {zh ? '回到我的主页' : 'Back to profile'}</a><span lang="en">Always a work in progress. ✳</span></footer>
  </section>
  </div>
</main>
<style>
.journal{max-width:1280px;margin:auto;padding:42px 32px 24px}.opening{position:relative}.cover{position:relative;min-height:640px;display:flex;align-items:center;padding:70px 0 110px}.cover-copy{position:relative;z-index:2;width:100%;pointer-events:none;color:hsl(var(--foreground))}h1{font-family:Georgia,'Times New Roman',serif;font-size:clamp(100px,13.4vw,194px);font-weight:400;line-height:.92;letter-spacing:-.07em;position:relative;color:inherit}h1 em{font-weight:400;color:#a84732}.title-dot{font-size:.48em;vertical-align:top;display:inline-block;transform:rotate(12deg);margin-left:16px}.reading-link{display:inline-flex;align-items:center;gap:30px;margin-top:48px;border-bottom:1px solid;padding-bottom:7px;font-size:12px;pointer-events:auto}.cover-art{position:absolute;inset:-42px calc((min(100vw,1280px) - 100vw)/2 - 32px) -10px;z-index:1;overflow:hidden;pointer-events:none}.art-grid{position:absolute;inset:0;opacity:.08;background-image:linear-gradient(#aaa18d 1px,transparent 1px),linear-gradient(90deg,#aaa18d 1px,transparent 1px);background-size:90px 90px;mask-image:linear-gradient(90deg,transparent 20%,#000)}.sun{position:absolute;width:clamp(230px,31vw,460px);aspect-ratio:1;border-radius:50%;background:#c05b3d;left:42%;top:4%}.arch{position:absolute;width:36%;height:88%;background:#38483a;border-radius:50% 50% 0 0;right:2%;bottom:-12%;transform:rotate(-12deg);transform-origin:bottom center}.cutout{position:absolute;width:15%;height:60%;background:var(--journal-paper);border-radius:60% 60% 0 0;right:12%;bottom:-18%;transform:rotate(-12deg)}.fine-orbit{position:absolute;width:86%;height:80%;top:3%;left:4%;border:1px solid #9e9c82;border-radius:50%;transform:rotate(-25deg) scaleX(.75)}.art-star{position:absolute;right:7%;top:9%;font-size:82px;line-height:1;color:#a84732}.entries{position:relative;z-index:3;background:var(--journal-paper)}.entries{margin-top:70px;scroll-margin-top:30px}.section-heading{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid;padding-bottom:18px}h2{font-family:Georgia,'Times New Roman',serif;font-size:30px;letter-spacing:-.035em}.entry-count{font-family:Arial,sans-serif;font-size:11px;margin-left:14px;vertical-align:super;color:hsl(var(--muted-foreground))}.empty-page{display:flex;gap:24px;align-items:center;padding:40px 0 48px;border-bottom:1px solid hsl(var(--border))}.empty-mark{font-family:Georgia,serif;font-size:100px;line-height:1;color:#a84732;align-self:start}.empty-title{font-family:Georgia,serif;font-size:24px;line-height:1.5}.empty-note{font-size:12px;line-height:1.9;color:hsl(var(--muted-foreground));margin-top:8px}.margin-note{margin-left:auto;font-family:Georgia,serif;font-style:italic;font-size:17px;line-height:1.5;color:hsl(var(--muted-foreground));transform:rotate(-6deg)}.journal-footer{display:flex;justify-content:space-between;gap:20px;padding-top:24px;font-size:10px;color:hsl(var(--muted-foreground))}.journal-footer a:hover{color:inherit;text-decoration:underline}.filters{display:flex;flex-wrap:wrap;gap:10px;margin:24px 0;font-size:12px}.filters button{border:1px solid hsl(var(--border));padding:5px 14px;border-radius:30px}.filters .chosen{background:#38483a;color:#fff}.entry{display:grid;grid-template-columns:40px 1fr;gap:20px;padding:30px 0;border-bottom:1px solid hsl(var(--border))}.entry-kind{border:1px solid hsl(var(--border));border-radius:20px;padding:2px 8px}.source-line{font-size:11px!important;margin-bottom:14px}.source-link{display:inline-block;margin-top:18px;font-size:11px;border-bottom:1px solid;padding-bottom:3px}.entry-number,.entry-meta{font-size:10px;color:hsl(var(--muted-foreground))}.entry-meta{display:flex;flex-wrap:wrap;align-items:center;gap:14px}.entry h3{font-family:Georgia,serif;font-size:28px;margin:12px 0}.entry h3 a{display:flex;justify-content:space-between;gap:20px}.entry p{font-size:14px;line-height:1.9;color:hsl(var(--muted-foreground))}
@media(max-width:700px){.journal{padding:28px 20px 24px}.cover{min-height:550px;padding:60px 0 120px;align-items:flex-start}.cover-copy h1{font-size:clamp(76px,18vw,126px)}.cover-art{inset:-28px -20px -10px;max-width:none;width:auto}.sun{width:60%;left:34%;top:11%}.arch{width:57%;height:67%;right:-3%;bottom:-5%}.cutout{width:23%;height:45%;right:12%;bottom:-9%}.fine-orbit{width:115%;height:70%;left:-25%;top:10%}.art-star{font-size:48px;right:7%;top:2%}.reading-link{margin-top:32px}.entries{margin-top:35px}.empty-page{gap:12px}.empty-title{font-size:22px}.margin-note{display:none}.journal-footer{font-size:9px}.entry h3{font-size:24px}}
.entries{margin-top:30px;padding:44px 0 0;border-top:1px solid hsl(var(--border));background:transparent;translate:0 calc(var(--scatter,0) * -55px)}
.section-heading{border:0;padding-bottom:22px}h2{font-family:Arial,sans-serif;font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:600}.entry-count{font-size:10px;vertical-align:baseline;margin-left:12px;letter-spacing:0}
.filters{margin:0 0 36px;gap:8px;font-size:10px}.filters button{padding:4px 12px}
.entry{grid-template-columns:64px minmax(0,1fr);padding:34px 0 45px;gap:20px;border-top:1px solid hsl(var(--border))}.entry-number{font-family:Georgia,serif;font-size:36px;line-height:1;color:#a84732;opacity:.7}.entry h3{font-size:clamp(26px,3.1vw,42px);line-height:1.45;max-width:960px;margin:18px 0 12px;letter-spacing:-.03em}.entry h3 a svg{flex-shrink:0;margin-top:10px}.entry p{max-width:720px;font-size:14px;line-height:2}.entry .source-line{font-size:11px!important;letter-spacing:.03em;margin-bottom:24px}.entry-meta{font-size:10px;gap:12px}.source-link{margin-top:24px}
@media(max-width:700px){.entries{padding-top:30px}.entry{grid-template-columns:30px minmax(0,1fr);gap:12px}.entry-number{font-size:24px}.entry h3{font-size:26px}.entry p{font-size:13px}.entry-meta{gap:8px}.filters{margin-bottom:24px}}

.journal{height:190dvh;max-width:none;padding:0;--scatter:0}
.journal-stage{position:sticky;top:0;height:100dvh;overflow:hidden;background:var(--journal-paper)}
.opening{position:absolute;inset:0;max-width:1280px;margin:auto;padding:0 32px;opacity:calc(1 - var(--scatter) * 1.3);pointer-events:none}
.cover{height:100%;min-height:0;padding:0 0 60px}.cover-art{inset:0 calc((min(100vw,1280px) - 100vw)/2 - 32px) 0}.cover-copy{translate:none!important}
.title-first,.title-second{display:block;will-change:translate;transition:none}
.title-first{translate:calc(var(--scatter) * -75vw) 0}.title-second{translate:calc(var(--scatter) * 75vw) 0}
.reading-link{opacity:calc(1 - var(--scatter) * 3)}
.entries{position:absolute;inset:0;margin:0 auto;max-width:1080px;padding:72px 32px 32px;border:0;background:var(--journal-paper);translate:0 calc((1 - var(--scatter)) * 105dvh);overflow-y:auto;scrollbar-width:none;will-change:translate;pointer-events:var(--reading-events,none)}
.entries::-webkit-scrollbar{display:none}
@media(max-width:700px){.opening{padding:0 20px}.cover{align-items:center;padding-bottom:100px}.cover-art{inset:0 -20px}.cover-copy h1{font-size:clamp(76px,18vw,126px)}.entries{padding:40px 20px 24px}.sun{top:18%}.arch{bottom:-8%}}
@media(prefers-reduced-motion:reduce){.title-first,.title-second{translate:none}.opening{opacity:calc(1 - var(--scatter))}.entries{translate:none;opacity:var(--scatter)}}
@media(prefers-reduced-motion:no-preference){
.cover-copy{animation:copy-arrive .55s cubic-bezier(.22,1,.36,1) both;translate:0 calc(var(--scatter,0) * -45px)}
.cover-art{animation:canvas-arrive .45s ease-out both}
.art-grid{animation:grid-arrive .45s ease-out both}
.sun{translate:calc(var(--scatter,0) * 170px) calc(var(--scatter,0) * -90px);animation:sun-arrive .65s cubic-bezier(.22,1,.36,1) .04s both}
.arch{translate:calc(var(--scatter,0) * 230px) calc(var(--scatter,0) * 65px);animation:arch-arrive .65s cubic-bezier(.22,1,.36,1) .08s both}
.cutout{translate:calc(var(--scatter,0) * 230px) calc(var(--scatter,0) * 65px);animation:cutout-arrive .65s cubic-bezier(.22,1,.36,1) .08s both}
.fine-orbit{translate:calc(var(--scatter,0) * -150px) calc(var(--scatter,0) * -40px);animation:orbit-arrive .7s cubic-bezier(.22,1,.36,1) .08s both}
.art-star{translate:calc(var(--scatter,0) * 100px) calc(var(--scatter,0) * -140px);rotate:calc(var(--scatter,0) * 65deg);animation:star-arrive .5s cubic-bezier(.22,1,.36,1) .12s both}
@keyframes copy-arrive{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
@keyframes canvas-arrive{from{opacity:0}to{opacity:1}}
@keyframes grid-arrive{from{opacity:0}to{opacity:.08}}
@keyframes sun-arrive{from{opacity:0;transform:translate(-12%,8%) scale(.94)}to{opacity:1;transform:translate(0,0) scale(1)}}
@keyframes arch-arrive{from{opacity:0;transform:translateY(15%) rotate(-6deg)}to{opacity:1;transform:translateY(0) rotate(-12deg)}}
@keyframes cutout-arrive{from{opacity:0;transform:translateY(15%) rotate(-6deg)}to{opacity:1;transform:translateY(0) rotate(-12deg)}}
@keyframes orbit-arrive{from{opacity:0;transform:rotate(-35deg) scaleX(.72)}to{opacity:1;transform:rotate(-25deg) scaleX(.75)}}
@keyframes star-arrive{from{opacity:0;transform:rotate(-15deg) scale(.9)}to{opacity:1;transform:rotate(0) scale(1)}}
.reading-link svg{transition:transform .2s}.reading-link:hover svg{transform:translateY(3px)}}

/* Reading surface: a quiet background and distinct paper cards. */
.entries{max-width:1140px;color:#292e27;background:#eae7df;border:1px solid #ddd8cd;border-radius:24px 24px 0 0;padding:48px clamp(24px,4vw,60px) 40px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;background-image:radial-gradient(ellipse at 100% 0, #dce1d5 0,transparent 55%)}
.section-heading{padding-bottom:20px;align-items:baseline}h2{font-family:inherit;font-size:28px;font-weight:600;text-transform:none;letter-spacing:-.035em;line-height:1.35}.entry-count{display:inline-flex;vertical-align:middle;font-size:12px;letter-spacing:0;background:#deded3;border-radius:20px;padding:4px 9px;margin-left:12px;color:#5b6253}
.filters{margin:0 0 28px;font-size:12px}.filters button{padding:6px 14px;color:#646a5e;background:#f4f2eb;border-color:#d5d0c5}.filters .chosen{background:#38483a;color:#fff;border-color:#38483a}.entry-list{display:grid;gap:24px}
.entry{border:1px solid #ded9cf;border-radius:16px;background:#fbfaf6;box-shadow:0 5px 22px #353c2906;grid-template-columns:34px minmax(0,1fr);padding:32px;gap:18px;position:relative;overflow:hidden}
.entry::before{content:"";position:absolute;top:30px;bottom:30px;left:0;width:3px;border-radius:2px;background:#86927c}
.entry-number{font-family:inherit;font-size:13px;font-weight:500;line-height:26px;opacity:1;color:#919587}.entry-meta{font-size:11px;line-height:1.7;color:#767a70;gap:10px}.entry-kind{background:#e9ede3;border:0;color:#465840;padding:3px 10px;font-weight:500}.entry h3{font-family:inherit;font-size:clamp(23px,2.4vw,30px);font-weight:600;line-height:1.55;letter-spacing:-.025em;margin:18px 0 12px;color:#292e27}.entry h3 a{gap:24px}.entry h3 a svg{color:#727c67}.entry .source-line{font-family:inherit;font-size:12px!important;color:#74776e;line-height:1.8;margin-bottom:24px;padding-bottom:22px;border-bottom:1px solid #e7e3da;letter-spacing:0}
.recommendation{max-width:660px}.entry .recommendation p{font-family:inherit;color:#4b5149;font-size:15px;line-height:1.95;letter-spacing:.015em;text-align:left}.source-link{font-size:12px;font-weight:500;color:#465840;border-color:#a4af99;margin-top:26px;padding-bottom:5px}.journal-footer{padding-top:30px;font-size:11px;color:#7b7f73}
:global(.dark) .entries{color:#edece4;background-color:#252c25;background-image:radial-gradient(ellipse at 100% 0,#354333 0,transparent 55%);border-color:#3c443a}
:global(.dark) .entry{background:#30372f;border-color:#485044;box-shadow:0 5px 22px #0001}
:global(.dark) .entry h3{color:#edece4}:global(.dark) .entry .recommendation p{color:#c7cec1}:global(.dark) .entry .source-line{color:#a8b2a1;border-color:#485044}:global(.dark) .entry-meta{color:#a6b19f}:global(.dark) .entry-kind,:global(.dark) .entry-count{background:#45533e;color:#dee6d7}:global(.dark) .filters button{background:#30372f;border-color:#485044}:global(.dark) .filters .chosen{background:#d5dfca;color:#253020}:global(.dark) .source-link{color:#d0dfc2}
@media(max-width:700px){.entries{padding:32px 18px 28px;border-radius:20px 20px 0 0}h2{font-size:25px}.entry{padding:24px 20px;grid-template-columns:minmax(0,1fr);gap:0}.entry-number{position:absolute;right:20px;top:25px;font-size:11px}.entry-meta{padding-right:28px;font-size:10px;gap:8px}.entry h3{font-size:23px;line-height:1.6}.entry .recommendation p{font-size:15px;line-height:1.95;letter-spacing:0}.entry .source-line{font-size:11px!important;margin-bottom:20px;padding-bottom:18px}.journal-footer{font-size:10px}.entry::before{top:24px;bottom:24px}}

/* Blend against the cover itself, including its paper ground. */
.opening{background:var(--journal-paper)}
.cover-copy{mix-blend-mode:difference;color:#fff}h1{color:#fff}h1 em{color:#e5ad94}
.entries{padding:32px clamp(24px,3vw,44px) 28px}.section-heading{padding-bottom:14px}.filters{margin-bottom:18px}.entry-list{gap:16px}
.entry{padding:24px;grid-template-columns:24px minmax(0,1fr);gap:14px}.entry h3{font-size:clamp(22px,2.1vw,28px);line-height:1.45;margin:12px 0 8px}.entry h3 a{gap:16px}.entry .source-line{margin-bottom:14px;padding-bottom:12px}.recommendation{max-width:850px}.entry .recommendation p{max-width:none;line-height:1.8;letter-spacing:0}.source-link{margin-top:16px}.journal-footer{padding-top:20px}
@media(max-width:700px){.entries{padding:26px 14px 20px}.entry{padding:20px 18px;grid-template-columns:minmax(0,1fr)}.entry h3{font-size:21px;line-height:1.5}.entry-number{top:21px;right:18px}.entry .source-line{margin-bottom:12px;padding-bottom:10px}.entry .recommendation p{line-height:1.8}}

/* Compact reading layout, without decorative card accents. */
.entries{max-width:1100px;padding:28px 32px 24px;background:var(--journal-paper);background-image:none;border:0;border-radius:0}
.section-heading{padding-bottom:12px}h2{font-size:23px}.entry-count{padding:2px 7px;font-size:11px}.filters{margin-bottom:16px;font-size:11px}.filters button{padding:4px 11px}
.entry-list{gap:12px}.entry{padding:18px 20px;gap:12px;border-radius:8px;box-shadow:none;background:#faf8f2;border-color:#ddd9cf;grid-template-columns:22px minmax(0,1fr)}.entry::before{display:none}
.entry h3{font-size:23px;line-height:1.45;margin:9px 0 6px}.entry-meta{font-size:10px;gap:9px}.entry-kind{padding:2px 8px}.entry .source-line{padding:0;margin-bottom:10px;border:0;font-size:11px!important}.recommendation{max-width:none}.entry .recommendation p{font-size:14px;line-height:1.75}.source-link{margin-top:12px;font-size:11px}.journal-footer{padding-top:16px}
:global(.dark) .entries{background:var(--journal-paper);background-image:none;border:0}:global(.dark) .entry{background:#2a3129;box-shadow:none;border-color:#424b3e}
@media(max-width:700px){.entries{padding:24px 14px 20px}.entry{padding:16px;grid-template-columns:minmax(0,1fr)}.entry h3{font-size:20px}.entry-number{right:16px;top:17px}.entry .recommendation p{font-size:14px;line-height:1.75}h2{font-size:22px}}
@media(prefers-reduced-motion:no-preference){.sun,.arch,.cutout,.fine-orbit,.art-star{will-change:translate}.entries{backface-visibility:hidden}}

.cover-copy{position:relative;top:32px}
.cover-return{font-size:11px;color:hsl(var(--muted-foreground));padding:4px 0;margin-left:auto}
.cover-return:hover{text-decoration:underline;text-underline-offset:4px}
.recommendation p::first-letter{float:left;font-family:Georgia,"Songti SC","SimSun",serif;font-size:3.35em;line-height:.95;padding:.08em .14em 0 0;color:#465840}
:global(.dark) .recommendation p::first-letter{color:#d0dfc2}
@media(max-width:700px){.cover-copy{top:22px}}

.figure-credit{position:absolute;left:32px;bottom:24px;font-size:10px;letter-spacing:.025em;color:hsl(var(--muted-foreground));z-index:3}
.entries{padding-top:88px;scroll-padding-top:88px}
@media(max-width:700px){.figure-credit{left:20px;bottom:24px;font-size:9px}.entries{padding-top:84px}}
</style>
