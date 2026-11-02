export type Localized = { en: string; zh: string };
export interface WorkImage { src: string; width: number; height: number; caption: Localized; source: string; sourceLabel: string; }
export interface WorkSection { heading: Localized; paragraphs: Localized[]; bullets?: Localized[]; }
export interface WorkDetail { slug: string; match?: string; repo?: string; summary: Localized; sections: WorkSection[]; images: WorkImage[]; preview?: WorkImage; stack?: string[]; extraLinks?: {label: string; href: string}[]; versions?: {label:string; title:string; authors:string; href:string}[]; metadata?: import('./data').Publication; }

export const paperDetails: WorkDetail[] = [
  {
    "slug": "proof-of-agentness",
    "match": "Proof-of-Agentness: Towards Verifying Agents on the Web",
    "summary": {
      "en": "Evidence that a Web client is an AI agent, through active challenges and passive interaction signals.",
      "zh": "通过主动挑战与被动交互信号，获取 Web 客户端是否为 AI 智能体的证据。"
    },
    "images": [
      {
        "src": "/media/research/poa-web-context.webp",
        "width": 1530,
        "height": 522,
        "caption": {
          "en": "Human users, AI agents, and scripted abuse on the Web. Figure 1, page 2.",
          "zh": "Web 中的人类用户、AI 智能体与脚本滥用，论文第 2 页图 1。"
        },
        "source": "https://arxiv.org/pdf/2610.35288",
        "sourceLabel": "Paper figure"
      }
    ],
    "sections": [
      {
        "heading": {
          "en": "Why verify agentness?",
          "zh": "为什么验证智能体属性？"
        },
        "paragraphs": [
          {
            "en": "As Web services begin to admit AI agents, distinguishing agents from simple scripts becomes a different question from distinguishing humans from bots. Proof-of-Agentness studies evidence that a client performs agent-like inference rather than cheaply replaying requests.",
            "zh": "随着 Web 服务开始接纳 AI 智能体，区分智能体与简单脚本成为有别于人机区分的新问题。Proof-of-Agentness 研究客户端进行智能体式推理、而非廉价重放请求的证据。"
          }
        ]
      },
      {
        "heading": {
          "en": "Two complementary approaches",
          "zh": "两种互补路径"
        },
        "paragraphs": [
          {
            "en": "The proposed framework combines active challenge-response verification with passive analysis of service-visible interaction signals. Verified agent declarations and an AgentScore provide a design for guiding access to protected operations.",
            "zh": "所提出的框架结合主动挑战响应验证与服务端可见交互信号的被动分析，并通过可验证的智能体声明与 AgentScore，为受保护操作的访问控制提供设计。"
          }
        ]
      },
      {
        "heading": {
          "en": "Initial evaluation",
          "zh": "初步评估"
        },
        "paragraphs": [
          {
            "en": "Eight language models achieve 96.5% overall accuracy on the paper’s challenges, with an average overhead of 1,647 tokens. An IRB-approved interaction study includes twelve human participants and representative Bot and Agent implementations; four classifiers average 95.8% classification accuracy. These are initial results rather than a universal guarantee of agent identification.",
            "zh": "八个语言模型在论文挑战上的总体准确率为 96.5%，平均开销为 1,647 tokens。经 IRB 批准的交互研究包含十二位人类参与者及代表性的 Bot、Agent 实现，四种分类器的平均分类准确率为 95.8%。这些是初步评估结果，并非对所有智能体识别场景的普遍保证。"
          }
        ]
      }
    ],
    "extraLinks": [
      {
        "label": "Related work: aCAPTCHA",
        "href": "/research/acaptcha/"
      }
    ],
    "preview": {
      "src": "/media/previews/proof-of-agentness.webp",
      "width": 1200,
      "height": 530,
      "caption": {
        "en": "Human users, AI agents, and scripted abuse on the Web (Figure 1).",
        "zh": "Web 中的人类用户、AI 智能体与脚本滥用（图 1）。"
      },
      "source": "https://arxiv.org/pdf/2610.35288",
      "sourceLabel": "Original figures"
    }
  },
  {
    "slug": "ollama-in-the-wild",
    "match": "Ollama in the Wild",
    "summary": {
      "en": "A year-long view of exposed, self-hosted LLM infrastructure.",
      "zh": "从一年的持续测量中观察公网暴露的大模型服务。"
    },
    "sections": [
      {
        "heading": {
          "en": "Research question",
          "zh": "研究问题"
        },
        "paragraphs": [
          {
            "en": "How do self-hosted LLM services appear, persist, and change on the public Internet? This work studies exposed Ollama deployments as a distinct Internet service, connecting endpoint availability with software versions and deployment context.",
            "zh": "自托管大模型服务如何出现在公网，又如何持续存在和变化？这项研究将暴露的 Ollama 部署视为一类互联网服务，联合观察端点可用性、软件版本和部署环境。"
          }
        ]
      },
      {
        "heading": {
          "en": "Measurement approach",
          "zh": "测量方法"
        },
        "paragraphs": [
          {
            "en": "The study combines daily active probing with endpoint enrichment and longitudinal analysis, covering February 2025 to February 2026.",
            "zh": "研究覆盖 2025 年 2 月至 2026 年 2 月，将每日主动探测、端点信息补全与纵向分析结合起来。"
          }
        ],
        "bullets": [
          {
            "en": "152,137 cumulative IP addresses and approximately 4.8 million IP-day observations.",
            "zh": "累计观察 152,137 个 IP 地址，形成约 480 万条 IP-day 观测。"
          },
          {
            "en": "GeoIP, ASN, reverse DNS, and HTTPS observations describe deployment context.",
            "zh": "结合地理位置、ASN、反向 DNS 和 HTTPS 观测分析部署背景。"
          },
          {
            "en": "Survival, churn, and CVE-fix adoption analyses distinguish transient exposure from persistent deployments.",
            "zh": "通过存活时间、端点更替与漏洞修复版本采用情况，区分短暂暴露与长期部署。"
          }
        ]
      },
      {
        "heading": {
          "en": "What the measurements show",
          "zh": "主要观察"
        },
        "paragraphs": [
          {
            "en": "Exposure is persistent and concentrated in cloud and hosting infrastructure. Old versions and recurring deployment patterns remain visible throughout the observation window; the paper discusses the potential reach of provider-level mitigation.",
            "zh": "暴露现象持续存在，并集中于云和托管基础设施。旧版本与重复出现的部署模式贯穿观测周期，论文进一步讨论了服务商层面缓解措施的潜在作用。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/research/ollama-version-turnover.webp",
        "width": 1533,
        "height": 414,
        "caption": {
          "en": "Version turnover: daily version-share evolution. Figure 5, page 6.",
          "zh": "版本更替：每日版本占比变化，论文第 6 页图 5。"
        },
        "source": "https://arxiv.org/pdf/2609.07115",
        "sourceLabel": "Paper · Figure 5"
      }
    ],
    "preview": {
      "src": "/media/previews/ollama-in-the-wild.webp",
      "width": 1200,
      "height": 440,
      "caption": {
        "en": "Version turnover: daily version-share evolution (Figure 5).",
        "zh": "版本更替：每日版本占比变化（图 5）。"
      },
      "source": "https://arxiv.org/pdf/2609.07115",
      "sourceLabel": "Original figures"
    }
  },
  {
    "slug": "ghostcite",
    "match": "GhostCite",
    "summary": {
      "en": "Measuring citation validity in the age of language models.",
      "zh": "研究大语言模型时代学术引用的真实性。"
    },
    "sections": [
      {
        "heading": {
          "en": "The problem",
          "zh": "研究背景"
        },
        "paragraphs": [
          {
            "en": "Scientific references are a foundation of verifiable research. GhostCite examines how fabricated or invalid references enter academic workflows as language models become common writing tools.",
            "zh": "可核验的引用是学术研究的基础。GhostCite 研究语言模型逐渐成为常用写作工具之后，虚构或无效引用如何进入学术工作流。"
          }
        ]
      },
      {
        "heading": {
          "en": "CiteVerifier and the study",
          "zh": "验证框架与研究设计"
        },
        "paragraphs": [
          {
            "en": "CiteVerifier provides an automated citation-verification pipeline. The study combines model evaluation, analysis of published papers, and a researcher survey to examine the problem from several perspectives.",
            "zh": "CiteVerifier 提供自动化引用验证流程。研究结合模型评估、已发表论文分析与研究者问卷，从多个角度观察引用真实性问题。"
          }
        ],
        "bullets": [
          {
            "en": "Evaluate citation generation by 13 language models.",
            "zh": "评估 13 个语言模型生成引用的表现。"
          },
          {
            "en": "Analyze roughly 2.2 million citations from 56,381 papers at AI/ML and security venues.",
            "zh": "分析 AI/ML 与安全领域 56,381 篇论文中的约 220 万条引用。"
          },
          {
            "en": "Connect automated verification results with researchers’ writing and reviewing practices.",
            "zh": "将自动验证结果与研究者的写作、审稿习惯结合分析。"
          }
        ]
      },
      {
        "heading": {
          "en": "Why it matters",
          "zh": "研究意义"
        },
        "paragraphs": [
          {
            "en": "The results motivate citation checks as part of academic writing and reviewing, alongside better tooling and shared responsibility across the research community.",
            "zh": "研究结果支持在学术写作与审稿中加入引用检查，并推动更好的验证工具与研究共同体协作。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/research/ghostcite-framework.webp",
        "width": 1536,
        "height": 633,
        "caption": {
          "en": "CiteVerifier and the experimental pipeline. Figure 1, page 4.",
          "zh": "CiteVerifier 与实验流程，论文第 4 页图 1。"
        },
        "source": "https://arxiv.org/pdf/2602.06718",
        "sourceLabel": "Paper · Figure 1"
      },
      {
        "src": "/media/research/ghostcite-trends.webp",
        "width": 741,
        "height": 282,
        "caption": {
          "en": "Time trends of papers with invalid citations. Figure 5, page 10.",
          "zh": "含无效引用论文的时间趋势，论文第 10 页图 5。"
        },
        "source": "https://arxiv.org/pdf/2602.06718",
        "sourceLabel": "Paper figure"
      }
    ],
    "preview": {
      "src": "/media/previews/ghostcite.webp",
      "width": 1200,
      "height": 590,
      "caption": {
        "en": "The CiteVerifier framework and experimental pipeline (Figure 1).",
        "zh": "CiteVerifier 框架与实验流程（图 1）。"
      },
      "source": "https://arxiv.org/pdf/2602.06718",
      "sourceLabel": "Original figures"
    }
  },
  {
    "slug": "agent-transfer-protocol",
    "match": "Agent Transfer Protocol: Server-Mediated Authentication and Messaging for Agent-to-Agent Communication",
    "summary": {
      "en": "Stable agent addresses, offline delivery, and independently verifiable cross-domain messages.",
      "zh": "稳定的智能体地址、离线投递与可独立验证的跨域消息。"
    },
    "sections": [
      {
        "heading": {
          "en": "Communication beyond a running instance",
          "zh": "超越运行实例的通信"
        },
        "paragraphs": [
          {
            "en": "Long-lived collaboration should not require every agent instance to stay online. This work studies how administrative domains can maintain stable addresses and receive messages on behalf of logical agents.",
            "zh": "长期协作不应依赖每个智能体实例始终在线。这项工作研究管理域如何为逻辑智能体维持稳定地址，并代为接收消息。"
          }
        ]
      },
      {
        "heading": {
          "en": "Domain-mediated architecture",
          "zh": "域中介架构"
        },
        "paragraphs": [
          {
            "en": "ATP moves cross-domain transmission and message custody to domain servers. The sender signs the complete envelope; the receiving domain verifies and stores it for later retrieval by an execution instance.",
            "zh": "ATP 由域服务器承担跨域传输与消息保管。发送方签署完整消息信封，接收域校验并保存消息，供执行实例稍后读取。"
          }
        ],
        "bullets": [
          {
            "en": "Stable communication entries survive offline periods and instance replacement.",
            "zh": "稳定的通信入口支持离线期间和实例更替。"
          },
          {
            "en": "Saved envelopes support independent checks of source and integrity when verification keys remain trusted and obtainable.",
            "zh": "在验证密钥仍可信且可获得时，保存的信封支持独立检查来源与完整性。"
          },
          {
            "en": "DNS discovery connects participating administrative domains.",
            "zh": "通过 DNS 发现连接参与通信的管理域。"
          }
        ]
      },
      {
        "heading": {
          "en": "Prototype and evaluation",
          "zh": "原型与评估"
        },
        "paragraphs": [
          {
            "en": "The paper evaluates a prototype with a controlled cross-organization LLM-agent workflow, mechanism checks, and latency measurements. It examines continued processing after offline periods or instance migration, saved-message verification, and the overhead of domain mediation.",
            "zh": "论文通过受控的跨组织 LLM 智能体工作流、机制检查与延迟测量评估原型，考察离线或实例迁移后的持续处理、已保存消息的验证，以及域中介引入的开销。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/research/atp-paper-architecture.webp",
        "width": 738,
        "height": 402,
        "caption": {
          "en": "ATP cross-domain message path. Figure 1, page 4 of the arXiv paper.",
          "zh": "ATP 跨域消息路径，arXiv 论文第 4 页图 1。"
        },
        "source": "https://arxiv.org/pdf/2610.38398",
        "sourceLabel": "Paper figure"
      },
      {
        "src": "/media/research/atp-paper-latency.webp",
        "width": 741,
        "height": 333,
        "caption": {
          "en": "End-to-end latency distributions. Figure 3, page 6.",
          "zh": "端到端延迟分布，论文第 6 页图 3。"
        },
        "source": "https://arxiv.org/pdf/2610.38398",
        "sourceLabel": "Paper figure"
      }
    ],
    "extraLinks": [
      {
        "label": "IETF Draft",
        "href": "https://datatracker.ietf.org/doc/html/draft-li-atp-02"
      },
      {
        "label": "Code",
        "href": "https://github.com/NKU-AOSP-Lab/AgentTransferProtocol"
      }
    ],
    "versions": [
      {
        "label": "arXiv · 2026",
        "title": "Agent Transfer Protocol: Server-Mediated Agent-to-Agent Communication Architecture for the Agentic Web",
        "authors": "Yuqi Qiu, Zuyao Xu, Lu Sun, Xiang Li, Fasheng Miao, Fubin Wu, Haixin Duan, Zheli Liu",
        "href": "https://arxiv.org/abs/2610.38398"
      }
    ],
    "preview": {
      "src": "/media/previews/agent-transfer-protocol.webp",
      "width": 1200,
      "height": 760,
      "caption": {
        "en": "Cross-domain architecture from the related ATP arXiv paper (2610.38398), Figure 1.",
        "zh": "取自相关 ATP arXiv 论文（2610.38398）的跨域架构图，图 1。"
      },
      "source": "https://arxiv.org/pdf/2610.38398",
      "sourceLabel": "Original figures"
    }
  },
  {
    "slug": "cairn",
    "match": "CAIRN",
    "summary": {
      "en": "Coordinating multi-agent exploration through a shared graph of facts and intents.",
      "zh": "以共享的事实与意图图协调多智能体探索。"
    },
    "sections": [
      {
        "heading": {
          "en": "The idea",
          "zh": "核心思路"
        },
        "paragraphs": [
          {
            "en": "CAIRN represents observations and planned investigations as a dynamic directed acyclic graph. Facts preserve findings; intents record the next investigations and the evidence that supports them.",
            "zh": "CAIRN 将观测与计划中的探索表示为动态有向无环图。事实节点保存发现，意图节点记录接下来的调查以及支撑它们的证据。"
          }
        ]
      },
      {
        "heading": {
          "en": "How exploration proceeds",
          "zh": "探索如何推进"
        },
        "paragraphs": [
          {
            "en": "A reasoner interprets the shared graph and proposes intents. Workers execute investigations and publish new facts, allowing parallel branches to reuse evidence and converge on a goal.",
            "zh": "推理者读取共享图并提出意图，工作智能体执行调查并写入新事实，使并行分支能够复用证据并向共同目标收敛。"
          }
        ],
        "bullets": [
          {
            "en": "Persistent goals, dependencies, and findings across worker sessions.",
            "zh": "跨工作会话保留目标、依赖与发现。"
          },
          {
            "en": "Traceable execution paths for human inspection and intervention.",
            "zh": "通过可追踪的执行路径支持人工检查与干预。"
          },
          {
            "en": "Evaluation on cybersecurity and mathematical reasoning tasks.",
            "zh": "在网络安全与数学推理任务上进行评估。"
          }
        ]
      },
      {
        "heading": {
          "en": "The trade-off",
          "zh": "效果与代价"
        },
        "paragraphs": [
          {
            "en": "Graph-based coordination adds overhead on easier tasks. On high-effort tasks in the paper’s evaluation, CAIRN more often finds solutions faster, illustrating when parallel exploration can justify its coordination cost.",
            "zh": "图协调会给较简单任务带来额外开销。在论文评估的高投入任务中，CAIRN 更常实现更快求解，说明并行探索在何种情况下能够抵消协调成本。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/research/cairn-dag.webp",
        "width": 1206,
        "height": 330,
        "caption": {
          "en": "Exploration over a shared FACT–INTENT DAG. Figure 1, page 1.",
          "zh": "共享 FACT–INTENT DAG 上的探索流程，论文第 1 页图 1。"
        },
        "source": "https://arxiv.org/pdf/2609.32700",
        "sourceLabel": "Paper · Figure 1"
      }
    ],
    "preview": {
      "src": "/media/previews/cairn.webp",
      "width": 1200,
      "height": 440,
      "caption": {
        "en": "Exploration over a shared FACT–INTENT DAG (Figure 1).",
        "zh": "共享 FACT–INTENT DAG 上的探索流程（图 1）。"
      },
      "source": "https://arxiv.org/pdf/2609.32700",
      "sourceLabel": "Original figures"
    }
  },
  {
    "slug": "acaptcha",
    "match": "aCAPTCHA",
    "summary": {
      "en": "An entity-type verification protocol for admitting capable AI agents.",
      "zh": "用于验证并接纳具备能力的 AI 智能体的协议。"
    },
    "sections": [
      {
        "heading": {
          "en": "A different verification question",
          "zh": "验证问题"
        },
        "paragraphs": [
          {
            "en": "aCAPTCHA asks whether an interacting entity is a capable AI agent. It separates entity-type verification from checking an entity’s identity, and studies humans, scripts, and agents as distinct classes.",
            "zh": "aCAPTCHA 关注交互实体是否是具备能力的 AI 智能体，将实体类型验证与身份验证区分开来，并研究人类、脚本和智能体三个类别。"
          }
        ]
      },
      {
        "heading": {
          "en": "Asymmetric hardness",
          "zh": "非对称难度"
        },
        "paragraphs": [
          {
            "en": "The protocol combines action, reasoning, and memory requirements with a time limit. Its HTTP-based challenges use differences in human and model processing time to study an agent-admission mechanism.",
            "zh": "协议将行动、推理与记忆要求和时间限制结合起来，通过基于 HTTP 的挑战利用人类与模型处理速度的差异，研究智能体准入机制。"
          }
        ]
      },
      {
        "heading": {
          "en": "Evaluation scope",
          "zh": "评估范围"
        },
        "paragraphs": [
          {
            "en": "The paper reports preliminary agent trials alongside modeled human timing. The figure distinguishes empirical agent observations from simulated human response times; it should not be read as a completed human-subject experiment.",
            "zh": "论文报告初步智能体试验，并对人类响应时间建模。图中区分了智能体的实测数据和人类的模拟时间，不应将其理解为已完成的人类受试实验。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/research/acaptcha-timing.webp",
        "width": 741,
        "height": 504,
        "caption": {
          "en": "Timing separation in aCAPTCHA challenges. Agent times are empirical; human times are simulated. Figure 2, page 10.",
          "zh": "aCAPTCHA 挑战的时间差异：智能体为实测数据，人类为模拟时间。论文第 10 页图 2。"
        },
        "source": "https://arxiv.org/pdf/2603.07116",
        "sourceLabel": "Paper · Figure 2"
      },
      {
        "src": "/media/research/acaptcha-threshold.webp",
        "width": 738,
        "height": 465,
        "caption": {
          "en": "Threshold sensitivity. Agent curve uses empirical data; human curves use simulation. Figure 3, page 10.",
          "zh": "阈值敏感性：智能体曲线来自实测数据，人类曲线来自模拟。论文第 10 页图 3。"
        },
        "source": "https://arxiv.org/pdf/2603.07116",
        "sourceLabel": "Paper figure"
      }
    ],
    "preview": {
      "src": "/media/previews/acaptcha.webp",
      "width": 1200,
      "height": 760,
      "caption": {
        "en": "Timing separation and threshold sensitivity. Agent data are empirical; human timings are simulated (Figures 2–3).",
        "zh": "时间差异与阈值敏感性。智能体为实测数据，人类时间为模拟结果（图 2–3）。"
      },
      "source": "https://arxiv.org/pdf/2603.07116",
      "sourceLabel": "Original figures"
    }
  },
  {
    "slug": "rebirthday",
    "match": "RebirthDay Attack",
    "summary": {
      "en": "Revisiting DNS cache poisoning through the birthday paradox.",
      "zh": "重新审视生日悖论与 DNS 缓存投毒。"
    },
    "sections": [
      {
        "heading": {
          "en": "Research question",
          "zh": "研究问题"
        },
        "paragraphs": [
          {
            "en": "Can the classic DNS birthday attack become practical again despite query aggregation? RebirthDay investigates how protocol-compliant DNS extension behavior can undermine this mitigation.",
            "zh": "查询聚合机制已经存在的情况下，经典 DNS 生日攻击是否仍可能重新变得可行？RebirthDay 研究符合协议的 DNS 扩展行为如何削弱这一防护。"
          }
        ]
      },
      {
        "heading": {
          "en": "The mechanism",
          "zh": "机制概览"
        },
        "paragraphs": [
          {
            "en": "The work examines missing or inconsistent coherence checks for EDNS Client Subnet options. These weaknesses can let related queries bypass aggregation and revive the collision opportunities behind birthday-style cache poisoning.",
            "zh": "研究分析 EDNS Client Subnet 选项处理中缺失或不一致的一致性检查。这些问题可能让相关查询绕过聚合机制，重新引入生日型缓存投毒所依赖的碰撞机会。"
          }
        ]
      },
      {
        "heading": {
          "en": "Software ecosystem",
          "zh": "软件生态"
        },
        "paragraphs": [
          {
            "en": "The paper evaluates mainstream DNS implementations and reports coordinated findings to affected vendors. Its contribution connects protocol-extension handling with practical cache-poisoning defenses.",
            "zh": "论文评估主流 DNS 实现，并向受影响厂商协调报告发现，将协议扩展处理与实际缓存投毒防御联系起来。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/research/rebirthday-model.webp",
        "width": 738,
        "height": 345,
        "caption": {
          "en": "Threat model of the RebirthDay attack. Figure 5, page 6.",
          "zh": "RebirthDay 攻击威胁模型，论文第 6 页图 5。"
        },
        "source": "https://lixiang521.com/publication/ccs25/ccs2025-rebirthday-li.pdf",
        "sourceLabel": "Paper · Figure 5"
      },
      {
        "src": "/media/research/rebirthday-comparison.webp",
        "width": 738,
        "height": 639,
        "caption": {
          "en": "DNS birthday attack and its mitigation. Figure 4, page 5.",
          "zh": "DNS 生日攻击及其防护机制，论文第 5 页图 4。"
        },
        "source": "https://lixiang521.com/publication/ccs25/ccs2025-rebirthday-li.pdf",
        "sourceLabel": "Paper figure"
      }
    ],
    "preview": {
      "src": "/media/previews/rebirthday.webp",
      "width": 1200,
      "height": 760,
      "caption": {
        "en": "Birthday attack mitigation and the RebirthDay threat model (Figures 4–5).",
        "zh": "生日攻击防护与 RebirthDay 威胁模型（图 4–5）。"
      },
      "source": "https://lixiang521.com/publication/ccs25/ccs2025-rebirthday-li.pdf",
      "sourceLabel": "Original figures"
    }
  },
  {
    "slug": "xmap",
    "match": "XMap",
    "summary": {
      "en": "A research scanner for Internet-wide IPv4 and IPv6 measurement.",
      "zh": "支持互联网尺度 IPv4 与 IPv6 测量的扫描工具。"
    },
    "sections": [
      {
        "heading": {
          "en": "Purpose",
          "zh": "项目目标"
        },
        "paragraphs": [
          {
            "en": "XMap supports fast Internet-wide research scanning across IPv4 and IPv6. The paper describes its architecture, protocol support, and adoption as a measurement artifact.",
            "zh": "XMap 支持跨 IPv4 与 IPv6 的高速互联网尺度研究扫描。论文介绍其架构、协议支持以及作为测量工具的应用。"
          }
        ]
      },
      {
        "heading": {
          "en": "Architecture",
          "zh": "架构"
        },
        "paragraphs": [
          {
            "en": "The scanner separates target generation, packet transmission, response processing, and result output. Protocol modules allow a common pipeline to support different measurements.",
            "zh": "扫描器将目标生成、报文发送、响应处理与结果输出分离，通过协议模块让同一流程支持不同类型的测量。"
          }
        ]
      },
      {
        "heading": {
          "en": "Artifact recognition",
          "zh": "成果认可"
        },
        "paragraphs": [
          {
            "en": "XMap received second place in the ACSAC 2025 Cybersecurity Artifacts Impact Award. The linked paper provides details of its design and research impact.",
            "zh": "XMap 获得 ACSAC 2025 网络安全技术成果影响力奖第二名。链接论文进一步介绍其设计与研究影响。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/research/xmap-architecture.webp",
        "width": 1530,
        "height": 585,
        "caption": {
          "en": "Architecture of XMap. Figure 1, page 2.",
          "zh": "XMap 架构，论文第 2 页图 1。"
        },
        "source": "https://arxiv.org/pdf/2602.09333",
        "sourceLabel": "Paper · Figure 1"
      }
    ],
    "metadata": {
      "title": "XMap: Fast Internet-wide IPv4 and IPv6 Network Scanner",
      "authors": "Xiang Li, Zixuan Xie, Lu Sun, Yuqi Qiu, Zuyao Xu, Zheli Liu",
      "venue": "ACSAC 2025 · 2nd Place",
      "year": 2025,
      "status": "published",
      "link": "https://arxiv.org/abs/2602.09333",
      "resources": [
        {
          "label": "PDF",
          "href": "https://arxiv.org/pdf/2602.09333"
        }
      ]
    },
    "preview": {
      "src": "/media/previews/xmap.webp",
      "width": 1200,
      "height": 760,
      "caption": {
        "en": "Architecture of XMap.",
        "zh": "XMap 架构。"
      },
      "source": "https://arxiv.org/pdf/2602.09333",
      "sourceLabel": "Original figures"
    }
  }
];

export const projectDetails: WorkDetail[] = [
  {
    "slug": "ai-teaching",
    "repo": "ai-assistant-teaching-website",
    "summary": {
      "en": "A teaching platform with a conversational, voice-enabled virtual assistant.",
      "zh": "将语音、自然语言与虚拟助理带入教学平台。"
    },
    "sections": [
      {
        "heading": {
          "en": "A more conversational interface",
          "zh": "自然语言交互"
        },
        "paragraphs": [
          {
            "en": "TongHui ZhiJiao brings a virtual teaching assistant, XiaoHui, into a web-based learning platform. Users can interact through text and voice while browsing courses and learning information.",
            "zh": "通慧智教将虚拟教学助理“小慧”引入在线学习平台，让用户通过文字和语音交互，并浏览课程与学习信息。"
          }
        ]
      },
      {
        "heading": {
          "en": "What is implemented",
          "zh": "已实现的能力"
        },
        "paragraphs": [
          {
            "en": "The assistant supports natural-language route navigation. The interface also demonstrates learning-progress views and personalized learning-plan generation. The README distinguishes implemented navigation from proposed assignment and backend-data operations.",
            "zh": "助理支持自然语言路由导航，界面还展示学习进度视图与个性化学习计划生成。仓库说明明确区分了已实现的导航与设想中的作业、后台数据操作。"
          }
        ]
      },
      {
        "heading": {
          "en": "Implementation",
          "zh": "实现方式"
        },
        "paragraphs": [
          {
            "en": "Vue 3 and Unity WebGL provide the interface and virtual assistant. Django services handle the assistant, application data, and static resources; speech recognition, a language model, and speech synthesis form the conversational pipeline.",
            "zh": "Vue 3 与 Unity WebGL 构成界面和虚拟助理，Django 服务分别处理助理、业务数据与静态资源，语音识别、语言模型和语音合成组成对话流程。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/projects/teaching-home.webp",
        "width": 1600,
        "height": 863,
        "caption": {
          "en": "Course platform and XiaoHui assistant.",
          "zh": "课程平台与“小慧”助理。"
        },
        "source": "https://github.com/TochusC/ai-assistant-teaching-website/blob/HEAD/docs/example_image/example_1.png",
        "sourceLabel": "Repository screenshot"
      },
      {
        "src": "/media/projects/teaching-progress.webp",
        "width": 1600,
        "height": 863,
        "caption": {
          "en": "Learning progress and evaluation interface.",
          "zh": "学习进度与评估界面。"
        },
        "source": "https://github.com/TochusC/ai-assistant-teaching-website/blob/HEAD/docs/example_image/example_2.png",
        "sourceLabel": "Repository screenshot"
      }
    ],
    "stack": [
      "Vue 3",
      "Unity WebGL",
      "Django",
      "LLM",
      "Speech"
    ],
    "preview": {
      "src": "/media/previews/ai-teaching.webp",
      "width": 1200,
      "height": 760,
      "caption": {
        "en": "The teaching platform and learning-progress interface.",
        "zh": "教学平台与学习进度界面。"
      },
      "source": "https://github.com/TochusC/ai-assistant-teaching-website/blob/HEAD/docs/example_image/example_1.png",
      "sourceLabel": "Repository screenshots"
    }
  },
  {
    "slug": "windpower",
    "repo": "windpower-forecast-system",
    "summary": {
      "en": "From turbine data to forecasting tasks and visual results.",
      "zh": "连接风机数据、预测任务与结果可视化。"
    },
    "sections": [
      {
        "heading": {
          "en": "The system",
          "zh": "系统介绍"
        },
        "paragraphs": [
          {
            "en": "A wind-power forecasting website built around turbine management, a data workspace, a forecasting center, and operational statistics.",
            "zh": "围绕风机管理、数据空间、预测中心与运行统计构建的风电预测网站。"
          }
        ]
      },
      {
        "heading": {
          "en": "Forecasting workflow",
          "zh": "预测流程"
        },
        "paragraphs": [
          {
            "en": "Users manage turbine records, upload datasets, train prediction models, submit forecasting tasks, and inspect or download the results. The project combines TCN, LSTM, and MLP models using PaddlePaddle.",
            "zh": "用户可以管理风机记录、上传数据集、训练预测模型、下达预测任务，并查看或下载结果。项目使用 PaddlePaddle 实现 TCN、LSTM 与 MLP 模型。"
          }
        ]
      },
      {
        "heading": {
          "en": "Implementation",
          "zh": "实现方式"
        },
        "paragraphs": [
          {
            "en": "The Vue 3 frontend presents data and task workflows, while the Django backend coordinates the application’s data and prediction services.",
            "zh": "Vue 3 前端呈现数据与任务工作流，Django 后端负责应用数据与预测服务。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/projects/windpower-turbines.webp",
        "width": 1600,
        "height": 880,
        "caption": {
          "en": "Turbine management interface.",
          "zh": "风机管理界面。"
        },
        "source": "https://github.com/TochusC/windpower-forecast-system/blob/HEAD/docs/img/TurbineList.png",
        "sourceLabel": "Repository screenshot"
      },
      {
        "src": "/media/projects/windpower-forecast.webp",
        "width": 1110,
        "height": 1098,
        "caption": {
          "en": "Forecasting tasks and their status.",
          "zh": "预测任务及其状态。"
        },
        "source": "https://github.com/TochusC/windpower-forecast-system/blob/HEAD/docs/img/ForecastCenter.png",
        "sourceLabel": "Repository screenshot"
      },
      {
        "src": "/media/projects/windpower-dark.webp",
        "width": 997,
        "height": 1052,
        "caption": {
          "en": "Turbine management in dark mode.",
          "zh": "深色模式下的风机管理界面。"
        },
        "source": "https://github.com/TochusC/windpower-forecast-system/blob/HEAD/docs/img/DarkMode.png",
        "sourceLabel": "Repository screenshot"
      }
    ],
    "stack": [
      "Vue 3",
      "Django",
      "PaddlePaddle",
      "TCN",
      "LSTM"
    ],
    "preview": {
      "src": "/media/previews/windpower.webp",
      "width": 1200,
      "height": 760,
      "caption": {
        "en": "Turbine management in dark mode and forecasting tasks.",
        "zh": "深色风机管理界面与预测任务。"
      },
      "source": "https://github.com/TochusC/windpower-forecast-system/blob/HEAD/docs/img/TurbineList.png",
      "sourceLabel": "Repository screenshots"
    }
  },
  {
    "slug": "qq-robot",
    "repo": "OpenAI-MicrosoftTTS-QQ-Robot-by-YiriMirai",
    "summary": {
      "en": "Text conversations and expressive speech inside QQ.",
      "zh": "在 QQ 中实现文字对话与语音回复。"
    },
    "sections": [
      {
        "heading": {
          "en": "The bot",
          "zh": "机器人介绍"
        },
        "paragraphs": [
          {
            "en": "A Python QQ chatbot connecting YiriMirai and Mirai with OpenAI responses and Microsoft text-to-speech. It supports direct messages and group conversations through mentions.",
            "zh": "基于 Python 的 QQ 聊天机器人，将 YiriMirai、Mirai 与 OpenAI 回复、Microsoft 语音合成结合，支持私聊和群聊中的 @ 交互。"
          }
        ]
      },
      {
        "heading": {
          "en": "Conversation controls",
          "zh": "对话控制"
        },
        "paragraphs": [
          {
            "en": "Commands let users enable speech replies, configure conversation personas, retain or clear message history, and select supported speech emotions.",
            "zh": "用户可通过命令启用语音回复、配置对话人格、保留或清除消息历史，以及选择支持的语音情绪。"
          }
        ]
      },
      {
        "heading": {
          "en": "Project context",
          "zh": "项目背景"
        },
        "paragraphs": [
          {
            "en": "An early open-source experiment in bringing a language model and speech output into an existing messaging environment. Setup and supported commands are documented in the repository.",
            "zh": "这是将语言模型与语音输出接入既有即时通信环境的一项早期开源实践，仓库记录了配置方式与支持的命令。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/projects/qq-robot.webp",
        "width": 536,
        "height": 1090,
        "caption": {
          "en": "A conversation with the QQ assistant.",
          "zh": "QQ 助理对话示例。"
        },
        "source": "https://github.com/TochusC/OpenAI-MicrosoftTTS-QQ-Robot-by-YiriMirai/blob/HEAD/docs/img/005.png",
        "sourceLabel": "Repository screenshot"
      },
      {
        "src": "/media/projects/qq-robot-conversation.webp",
        "width": 538,
        "height": 1084,
        "caption": {
          "en": "QQ conversation example.",
          "zh": "QQ 对话示例。"
        },
        "source": "https://github.com/TochusC/OpenAI-MicrosoftTTS-QQ-Robot-by-YiriMirai/blob/HEAD/docs/img/002.png",
        "sourceLabel": "Repository screenshot"
      },
      {
        "src": "/media/projects/qq-robot-voice.webp",
        "width": 540,
        "height": 1091,
        "caption": {
          "en": "QQ assistant interaction example.",
          "zh": "QQ 助理交互示例。"
        },
        "source": "https://github.com/TochusC/OpenAI-MicrosoftTTS-QQ-Robot-by-YiriMirai/blob/HEAD/docs/img/004.png",
        "sourceLabel": "Repository screenshot"
      }
    ],
    "stack": [
      "Python",
      "YiriMirai",
      "OpenAI",
      "Microsoft TTS"
    ],
    "preview": {
      "src": "/media/previews/qq-robot.webp",
      "width": 1200,
      "height": 760,
      "caption": {
        "en": "Conversation examples from the QQ assistant.",
        "zh": "QQ 助理的对话示例。"
      },
      "source": "https://github.com/TochusC/OpenAI-MicrosoftTTS-QQ-Robot-by-YiriMirai/blob/HEAD/docs/img/005.png",
      "sourceLabel": "Repository screenshots"
    }
  },
  {
    "slug": "ros2-yolov8",
    "repo": "ros2-yolov8",
    "summary": {
      "en": "Connecting camera capture and object detection through ROS2.",
      "zh": "通过 ROS2 连接摄像头采集与目标检测。"
    },
    "sections": [
      {
        "heading": {
          "en": "Node-based vision",
          "zh": "节点化视觉处理"
        },
        "paragraphs": [
          {
            "en": "The project splits camera capture and object detection into ROS2 nodes. A capture node publishes camera frames, and a receiver uses YOLOv8 to detect objects and display annotated results.",
            "zh": "项目将摄像头采集与目标检测拆分为 ROS2 节点，采集节点发布画面，接收节点使用 YOLOv8 完成目标检测并显示标注结果。"
          }
        ]
      },
      {
        "heading": {
          "en": "Workflow",
          "zh": "运行流程"
        },
        "paragraphs": [
          {
            "en": "Build the package in a ROS2 workspace, then start the capturer and detector nodes. The repository includes launch instructions and a screenshot of a running detection session.",
            "zh": "在 ROS2 工作空间中构建后，分别启动 capturer 与 detector 节点。仓库提供了运行步骤和实际检测会话截图。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/projects/ros-detection.webp",
        "width": 719,
        "height": 417,
        "caption": {
          "en": "YOLOv8 detection output and the accompanying terminal session.",
          "zh": "YOLOv8 检测输出与对应终端会话。"
        },
        "source": "https://github.com/TochusC/ros2-yolov8/blob/HEAD/docs/img/result.png",
        "sourceLabel": "Repository screenshot"
      }
    ],
    "stack": [
      "ROS2",
      "YOLOv8",
      "Python",
      "Computer Vision"
    ],
    "preview": {
      "src": "/media/previews/ros2-yolov8.webp",
      "width": 1200,
      "height": 760,
      "caption": {
        "en": "YOLOv8 detection results and the terminal session.",
        "zh": "YOLOv8 检测结果与终端会话。"
      },
      "source": "https://github.com/TochusC/ros2-yolov8/blob/HEAD/docs/img/result.png",
      "sourceLabel": "Repository screenshots"
    }
  },
  {
    "slug": "pybicc",
    "repo": "pybicc",
    "summary": {
      "en": "A compiler and assembly interpreter with an inspectable graphical interface.",
      "zh": "可以在图形界面中观察编译与汇编解释过程。"
    },
    "sections": [
      {
        "heading": {
          "en": "From source to execution",
          "zh": "从源码到执行"
        },
        "paragraphs": [
          {
            "en": "Pybicc compiles a C-like language into Intel 80x86 assembly and includes an interpreter for running the generated instructions. A PyQt6 interface exposes the intermediate stages.",
            "zh": "Pybicc 将类 C 语言编译为 Intel 80x86 汇编，并提供解释器执行生成的指令，通过 PyQt6 界面展示中间阶段。"
          }
        ]
      },
      {
        "heading": {
          "en": "Compiler components",
          "zh": "编译器组成"
        },
        "paragraphs": [
          {
            "en": "The pipeline includes tokenization, parsing into an abstract syntax tree, code generation, and assembly interpretation. It supports functions, pointers, arrays, structures, and common control-flow constructs.",
            "zh": "流程涵盖词法分析、抽象语法树构建、代码生成与汇编解释，支持函数、指针、数组、结构体和常用控制流结构。"
          }
        ]
      },
      {
        "heading": {
          "en": "Interface and foundations",
          "zh": "界面与参考"
        },
        "paragraphs": [
          {
            "en": "The graphical interface uses PyQt6 and PyQt-Fluent-Widgets. The project acknowledges Chibicc as a reference and was developed as a compiler-construction course project.",
            "zh": "图形界面使用 PyQt6 与 PyQt-Fluent-Widgets。项目参考 Chibicc，作为编译原理课程设计完成。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/projects/pybicc-gui.webp",
        "width": 1600,
        "height": 1163,
        "caption": {
          "en": "The compiler’s graphical interface.",
          "zh": "编译器图形界面。"
        },
        "source": "https://github.com/TochusC/pybicc/blob/HEAD/docs/static/img/gui-preview.png",
        "sourceLabel": "Repository screenshot"
      },
      {
        "src": "/media/projects/pybicc-overview.webp",
        "width": 1350,
        "height": 1050,
        "caption": {
          "en": "Source code, assembly, and execution results in one workspace.",
          "zh": "同一工作区中的源码、汇编与运行结果。"
        },
        "source": "https://github.com/TochusC/pybicc/blob/HEAD/docs/static/img/overview.png",
        "sourceLabel": "Repository screenshot"
      }
    ],
    "stack": [
      "Python",
      "PyQt6",
      "Compiler",
      "x86"
    ],
    "preview": {
      "src": "/media/previews/pybicc.webp",
      "width": 1200,
      "height": 760,
      "caption": {
        "en": "The graphical compiler and assembly execution workspace.",
        "zh": "图形化编译器与汇编运行工作区。"
      },
      "source": "https://github.com/TochusC/pybicc/blob/HEAD/docs/static/img/gui-preview.png",
      "sourceLabel": "Repository screenshots"
    }
  },
  {
    "slug": "cgdms",
    "repo": "UPC_CGDMS",
    "summary": {
      "en": "A web application for university graduation-project workflows.",
      "zh": "面向高校毕业设计流程的 Web 管理系统。"
    },
    "sections": [
      {
        "heading": {
          "en": "The application",
          "zh": "应用介绍"
        },
        "paragraphs": [
          {
            "en": "A Django-based university graduation-project management system, developed as a database course project. The public repository includes interface previews and detailed design documentation.",
            "zh": "使用 Django 构建的高校毕业设计管理系统，作为数据库课程设计完成。公开仓库包含界面预览与详细设计文档。"
          }
        ]
      },
      {
        "heading": {
          "en": "Roles and data design",
          "zh": "角色与数据设计"
        },
        "paragraphs": [
          {
            "en": "The documentation describes student, supervisor, secretary, and academic-management workflows, alongside entity-relationship and data-flow diagrams.",
            "zh": "文档描述学生、指导教师、秘书和教学管理等角色的流程，并提供实体关系图与数据流图。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/projects/cgdms-home.webp",
        "width": 1600,
        "height": 873,
        "caption": {
          "en": "The graduation-project management portal.",
          "zh": "毕业设计管理系统入口。"
        },
        "source": "https://github.com/TochusC/UPC_CGDMS/blob/HEAD/docs/img/MainPage.png",
        "sourceLabel": "Repository screenshot"
      },
      {
        "src": "/media/projects/cgdms-workflow.webp",
        "width": 1600,
        "height": 884,
        "caption": {
          "en": "Student-facing login interface.",
          "zh": "面向学生的登录界面。"
        },
        "source": "https://github.com/TochusC/UPC_CGDMS/blob/HEAD/docs/img/001.png",
        "sourceLabel": "Repository screenshot"
      }
    ],
    "stack": [
      "Django",
      "JavaScript",
      "Database",
      "Web"
    ],
    "preview": {
      "src": "/media/previews/cgdms.webp",
      "width": 1200,
      "height": 760,
      "caption": {
        "en": "Graduation-project management portal and student login.",
        "zh": "毕业设计管理系统入口与学生登录界面。"
      },
      "source": "https://github.com/TochusC/UPC_CGDMS/blob/HEAD/docs/img/MainPage.png",
      "sourceLabel": "Repository screenshots"
    }
  },
  {
    "slug": "ource",
    "repo": "Ource",
    "summary": {
      "en": "A small operating-system kernel, from interrupts to multitasking.",
      "zh": "从中断处理到多任务调度的小型操作系统内核。"
    },
    "sections": [
      {
        "heading": {
          "en": "Learning by building a kernel",
          "zh": "通过构建内核学习"
        },
        "paragraphs": [
          {
            "en": "Ource is an operating-systems course project based on the Haribote system from 30 Days to Make an OS. The repository credits the book and the shared Chinese-language source.",
            "zh": "Ource 是基于《30 天自制操作系统》中 Haribote 系统的操作系统课程设计，仓库注明了书籍与中文源码的参考来源。"
          }
        ]
      },
      {
        "heading": {
          "en": "Implemented subsystems",
          "zh": "已实现的子系统"
        },
        "paragraphs": [
          {
            "en": "The kernel implements interrupt handling, timers, multitasking, segmented memory management, keyboard input, and basic FAT12 file reading.",
            "zh": "内核实现中断处理、定时器、多任务、分段内存管理、键盘输入与基础 FAT12 文件读取。"
          }
        ],
        "bullets": [
          {
            "en": "Priority queues and time-slice scheduling.",
            "zh": "优先队列与时间片调度。"
          },
          {
            "en": "System calls for console output.",
            "zh": "用于控制台输出的系统调用。"
          },
          {
            "en": "Bootable images and commands such as help, dir, type, and mem.",
            "zh": "提供可启动镜像以及 help、dir、type、mem 等命令。"
          }
        ]
      }
    ],
    "images": [
      {
        "src": "/media/projects/ource-desktop.webp",
        "width": 1539,
        "height": 1200,
        "caption": {
          "en": "Ource boot and console screen.",
          "zh": "Ource 启动与控制台画面。"
        },
        "source": "https://github.com/TochusC/Ource/blob/HEAD/docs/img/001.png",
        "sourceLabel": "Repository screenshot"
      },
      {
        "src": "/media/projects/ource-console.webp",
        "width": 1230,
        "height": 949,
        "caption": {
          "en": "Running the system in a virtual machine.",
          "zh": "在虚拟机中运行系统。"
        },
        "source": "https://github.com/TochusC/Ource/blob/HEAD/docs/img/002.png",
        "sourceLabel": "Repository screenshot"
      }
    ],
    "stack": [
      "C",
      "x86",
      "Operating Systems",
      "FAT12"
    ],
    "preview": {
      "src": "/media/previews/ource.webp",
      "width": 1200,
      "height": 760,
      "caption": {
        "en": "Ource boot screen and virtual-machine console.",
        "zh": "Ource 启动画面与虚拟机控制台。"
      },
      "source": "https://github.com/TochusC/Ource/blob/HEAD/docs/img/001.png",
      "sourceLabel": "Repository screenshots"
    }
  }
];

export const paperDetail = (title: string) => paperDetails.find(item => item.match && title.startsWith(item.match));
export const projectDetail = (repo: string) => projectDetails.find(item => item.repo === repo);
