"""Compose portfolio previews from original figures and screenshots.

Run with Python + Pillow. Original figures stay separate for detail pages.
Images are fitted proportionally; chart axes, legends, and screenshot content are
never cropped to fill a frame.
"""
from pathlib import Path
import json
from PIL import Image, ImageDraw, ImageFont, ImageChops, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
OUTPUT = PUBLIC / 'media/previews'
OUTPUT.mkdir(parents=True, exist_ok=True)
FONT = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 20) if Path('/System/Library/Fonts/Supplemental/Arial.ttf').exists() else ImageFont.load_default()
CAPTIONS = {
    'ollama-in-the-wild': ('Version turnover: daily version-share evolution (Figure 5).','版本更替：每日版本占比变化（图 5）。'),
    'ghostcite': ('The CiteVerifier framework and experimental pipeline (Figure 1).','CiteVerifier 框架与实验流程（图 1）。'),
    'agent-transfer-protocol': ('Cross-domain architecture from the related ATP arXiv paper (2610.38398), Figure 1.','取自相关 ATP arXiv 论文（2610.38398）的跨域架构图，图 1。'),
    'proof-of-agentness': ('Human users, AI agents, and scripted abuse on the Web (Figure 1).','Web 中的人类用户、AI 智能体与脚本滥用（图 1）。'),
    'cairn': ('Exploration over a shared FACT–INTENT DAG (Figure 1).','共享 FACT–INTENT DAG 上的探索流程（图 1）。'),
    'acaptcha': ('Timing separation and threshold sensitivity. Agent data are empirical; human timings are simulated (Figures 2–3).','时间差异与阈值敏感性。智能体为实测数据，人类时间为模拟结果（图 2–3）。'),
    'rebirthday': ('Birthday attack mitigation and the RebirthDay threat model (Figures 4–5).','生日攻击防护与 RebirthDay 威胁模型（图 4–5）。'),
    'xmap': ('Architecture of XMap.','XMap 架构。'),
    'ai-teaching': ('The teaching platform and learning-progress interface.','教学平台与学习进度界面。'),
    'windpower': ('Turbine management in dark mode and forecasting tasks.','深色风机管理界面与预测任务。'),
    'qq-robot': ('Conversation examples from the QQ assistant.','QQ 助理的对话示例。'),
    'ros2-yolov8': ('YOLOv8 detection results and the terminal session.','YOLOv8 检测结果与终端会话。'),
    'pybicc': ('The graphical compiler and assembly execution workspace.','图形化编译器与汇编运行工作区。'),
    'cgdms': ('Graduation-project management portal and student login.','毕业设计管理系统入口与学生登录界面。'),
    'ource': ('Ource boot screen and virtual-machine console.','Ource 启动画面与虚拟机控制台。'),
}


def load_image(src):
    path = PUBLIC / src.lstrip('/')
    image = Image.open(path).convert('RGB')
    # Remove only empty outer white margins; keep all non-white figure content.
    difference = ImageChops.difference(image, Image.new('RGB', image.size, 'white'))
    bbox = difference.convert('L').point(lambda v: 255 if v > 5 else 0).getbbox()
    if bbox:
        x0, y0, x1, y1 = bbox
        image = image.crop((max(0,x0-10),max(0,y0-10),min(image.width,x1+10),min(image.height,y1+10)))
    return image


def panel(canvas, src, box, label=''):
    x, y, w, h = box
    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle((x,y,x+w,y+h), radius=14, fill='white', outline='#dededb', width=2)
    padding = 18
    label_height = 32 if label else 0
    if label:
        draw.text((x+padding,y+13), label, font=FONT, fill='#686863')
    image = load_image(src)
    image = ImageOps.contain(image, (w-padding*2,h-padding*2-label_height), Image.Resampling.LANCZOS)
    canvas.paste(image,(x+(w-image.width)//2,y+label_height+(h-label_height-image.height)//2))


def compose(detail, kind):
    slug = detail['slug']
    images = detail['images']
    canvas = Image.new('RGB',(1200,760),'#f4f4f1')
    sources = {Path(i['src']).stem:i['src'] for i in images}
    if slug == 'ollama-in-the-wild':
        canvas = Image.new('RGB',(1200,440),'#f4f4f1')
        panel(canvas,sources['ollama-version-turnover'],(24,24,1152,392),'FIGURE 5 / VERSION TURNOVER')
    elif slug == 'ghostcite':
        canvas = Image.new('RGB',(1200,590),'#f4f4f1')
        panel(canvas,sources['ghostcite-framework'],(24,24,1152,542),'FIGURE 1 / CITEVERIFIER')
    elif slug == 'cairn':
        canvas = Image.new('RGB',(1200,440),'#f4f4f1')
        panel(canvas,sources['cairn-dag'],(24,24,1152,392),'FIGURE 1 / SHARED FACT-INTENT DAG')
    elif slug == 'agent-transfer-protocol':
        panel(canvas,sources['atp-paper-architecture'],(28,28,1144,704),'FIGURE 1 / CROSS-DOMAIN ARCHITECTURE')
    elif slug == 'proof-of-agentness':
        canvas = Image.new('RGB',(1200,530),'#f4f4f1')
        panel(canvas,sources['poa-web-context'],(24,24,1152,482),'FIGURE 1 / HUMANS, AGENTS, AND SCRIPTED ABUSE')
    elif slug == 'acaptcha':
        panel(canvas,sources['acaptcha-timing'],(28,130,640,500),'FIGURE 2 / TIMING SEPARATION')
        panel(canvas,sources['acaptcha-threshold'],(690,200,482,360),'FIGURE 3 / THRESHOLD')
    elif slug == 'rebirthday':
        panel(canvas,sources['rebirthday-comparison'],(28,85,520,590),'FIGURE 4 / BIRTHDAY ATTACK')
        panel(canvas,sources['rebirthday-model'],(570,205,602,350),'FIGURE 5 / THREAT MODEL')
    elif slug == 'qq-robot':
        for i,key in enumerate(['qq-robot','qq-robot-conversation','qq-robot-voice']):
            panel(canvas,sources[key],(24+i*392,28,368,704))
    elif slug == 'windpower':
        panel(canvas,sources['windpower-dark'],(28,28,610,704))
        panel(canvas,sources['windpower-forecast'],(660,130,512,500))
    elif kind == 'projects' and len(images) > 1:
        panel(canvas,images[0]['src'],(28,28,1040,618))
        panel(canvas,images[1]['src'],(642,404,530,328))
    else:
        panel(canvas,images[0]['src'],(28,28,1144,704))
    canvas.save(OUTPUT / (slug+'.webp'),'WEBP',quality=92,method=6)
    detail['preview'] = {
        'src':f'/media/previews/{slug}.webp','width':canvas.width,'height':canvas.height,
        'caption':dict(zip(('en','zh'),CAPTIONS[slug])),
        'source': images[0]['source'],
        'sourceLabel': 'Original figures' if kind == 'research' else 'Repository screenshots',
    }


def read_collection(code, name):
    prefix = f'export const {name}: WorkDetail[] = '
    start = code.index(prefix)+len(prefix)
    value, length = json.JSONDecoder().raw_decode(code[start:])
    return start, start+length, value


path = ROOT / 'src/lib/portfolio.ts'
code = path.read_text()
count = 0
for name,kind in [('paperDetails','research'),('projectDetails','projects')]:
    start,end,details = read_collection(code,name)
    for detail in details:
        compose(detail,kind)
        count += 1
    code = code[:start]+json.dumps(details,ensure_ascii=False,indent=2)+code[end:]
path.write_text(code)
print(f'Updated {count} portfolio previews.')
