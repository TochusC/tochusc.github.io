export interface Award {
  tier: 'national' | 'provincial' | 'school';
  rank: string;
  name: string;
  projectLink?: string;
  competition: string;
  competitionLink?: string;
  date: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
  status: 'published' | 'preprint' | 'accepted' | 'poster';
  role?: string;
  note?: string;
}

export interface NewsItem {
  tag: 'publication' | 'award' | 'scholarship' | 'activity';
  date: string;
  title: string;
  titleLink?: string;
  description: string;
  descriptionLink?: string;
}

export interface ProfileData {
  name: string;
  school: string;
  undergraduate: string;
  undergraduateMajor: string;
  major: string;
  status: string;
  advisorHeader: string;
  advisor: string;
  advisorLink: string;
  awardsHeader: string;
  publicationsHeader: string;
  newsHeader: string;
  awards: Award[];
  publications: Publication[];
  news: NewsItem[];
  social: {
    github: string;
    email: string;
    twitter: string;
    bilibili: string;
    scholar: string;
  };
}

// Profile facts updated from archived materials on 2026-09-12.
export const profileData: ProfileData = {
  "name": "许祖耀",
  "school": "南开大学",
  "undergraduate": "中国石油大学（华东）",
  "undergraduateMajor": "计算机科学与技术",
  "major": "网络空间安全",
  "status": "2025级硕士研究生",
  "advisorHeader": "导师",
  "advisor": "李想",
  "advisorLink": "https://lixiang521.com/",
  "awardsHeader": "获奖经历",
  "publicationsHeader": "学术发表",
  "newsHeader": "最新动态",
  "social": {
    "github": "https://github.com/tochusc",
    "email": "mailto:xuzuyao@mail.nankai.edu.cn",
    "twitter": "https://x.com/xu_zu_yao",
    "bilibili": "https://space.bilibili.com/10478211",
    "scholar": "https://scholar.google.com/citations?user=Q1bu9LoAAAAJ&hl=en"
  },
  "publications": [
    {
      "title": "Ollama in the Wild: A Longitudinal Measurement of Exposed Ollama LLM Endpoints at Internet Scale",
      "authors": "Zuyao Xu et al.",
      "venue": "ACM IMC 2026",
      "year": 2026,
      "status": "accepted",
      "role": "共同第一作者（第三顺位）",
      "note": "互联网尺度的开放 Ollama 服务长期测量。"
    },
    {
      "title": "GhostCite: A Large-Scale Analysis of Citation Validity in the Age of Large Language Models",
      "authors": "Zuyao Xu, Yuqi Qiu, Lu Sun, Fasheng Miao et al.",
      "venue": "IEEE S&P 2026 Poster · CCF-NSS 2026 Poster",
      "year": 2026,
      "link": "https://arxiv.org/abs/2602.06718",
      "status": "poster",
      "role": "共同第一作者（第一顺位）",
      "note": "大规模分析大语言模型时代的引用有效性，研究成果获两项 Poster 录用。"
    },
    {
      "title": "Agent Transfer Protocol: Server-Mediated Authentication and Messaging for Agent-to-Agent Communication",
      "authors": "Xiang Li, Yuqi Qiu, Zuyao Xu, Lu Sun, Fasheng Miao, Fubin Wu, Haixin Duan, Zheli Liu",
      "venue": "ACM IMC 2026 Poster · CCF-NSS 2026 Poster",
      "year": 2026,
      "status": "accepted",
      "role": "第三作者",
      "note": "智能体间通信协议；CCF-NSS 版本题名为 Agent Transfer Protocol: A Server-Mediated Agent-to-Agent Communication Protocol for the Internet of Agents。"
    },
    {
      "title": "aCAPTCHA: Verifying That an Entity Is a Capable Agent via Asymmetric Hardness",
      "authors": "Zuyao Xu, Xiang Li, Fubin Wu, Yuqi Qiu, Lu Sun, Fasheng Miao",
      "venue": "arXiv",
      "year": 2026,
      "link": "https://arxiv.org/abs/2603.07116",
      "status": "preprint",
      "note": "基于非对称难度的智能体能力验证。"
    },
    {
      "title": "RebirthDay Attack: Reviving DNS Cache Poisoning with the Birthday Paradox",
      "authors": "Xiang Li, Mingming Zhang, Zuyao Xu et al.",
      "venue": "ACM CCS 2025",
      "year": 2025,
      "link": "https://doi.org/10.1145/3719027.3744832",
      "status": "published",
      "role": "第三作者",
      "note": "基于生日悖论的 DNS 缓存投毒攻击研究。"
    }
  ],
  "awards": [
    {
      "tier": "national",
      "rank": "三等奖 · 第20名",
      "name": "互联网威胁分析赛道",
      "competition": "DataCon 2025 大数据安全分析竞赛",
      "date": "2025-11"
    },
    {
      "tier": "national",
      "rank": "赛道冠军（二等奖）",
      "name": "DAF 漏洞利用挑战赛",
      "competition": "GeekCon 2025 安全极客大赛",
      "date": "2025-10"
    },
    {
      "tier": "provincial",
      "rank": "二等奖",
      "name": "网络安全实战技能竞赛",
      "competition": "天津市滨海新区",
      "date": "2025-09"
    },
    {
      "tier": "national",
      "rank": "三等奖",
      "name": "大数据安全分析竞赛",
      "competition": "DataCon 2024",
      "date": "2024-12"
    },
    {
      "tier": "school",
      "rank": "校级奖学金",
      "name": "2023-2024突出成绩奖学金",
      "competition": "中国石油大学（华东）",
      "date": "2024-12"
    },
    {
      "tier": "school",
      "rank": "校级奖学金",
      "name": "2023-2024卓越之星奖学金",
      "competition": "中国石油大学（华东）",
      "date": "2024-12"
    },
    {
      "tier": "national",
      "rank": "国家奖学金",
      "name": "荣获国家奖学金（￥10000, 2/120）",
      "competition": "中国石油大学（华东）",
      "date": "2024-11"
    },
    {
      "tier": "school",
      "rank": "校级奖学金",
      "name": "2023-2024年科技创新奖学金",
      "competition": "中国石油大学（华东）",
      "date": "2024-10"
    },
    {
      "tier": "national",
      "rank": "国家三等奖",
      "name": "基于多模态分析的心理健康群防教育系统",
      "competition": "中国高校计算机大赛-网络技术挑战赛（A1创意赛道）",
      "competitionLink": "https://net.c4best.cn/",
      "date": "2024-09"
    },
    {
      "tier": "national",
      "rank": "国家二等奖",
      "name": "\"通慧智教\"——有温度，有感情的个性化教学平台",
      "projectLink": "https://www.bilibili.com/video/BV1UDWzeyEBB/",
      "competition": "第13届\"中国软件杯\"大学生软件设计大赛（A5赛道）",
      "competitionLink": "https://www.cnsoftbei.com/",
      "date": "2024-08"
    },
    {
      "tier": "national",
      "rank": "国家一等奖",
      "name": "基于文心大模型的第二课堂智能数据分析平台",
      "projectLink": "https://www.bilibili.com/video/BV15MvLejEt5",
      "competition": "中国大学生计算机设计大赛（软件应用与开发赛道）",
      "competitionLink": "https://jsjds.blcu.edu.cn/",
      "date": "2024-07"
    },
    {
      "tier": "national",
      "rank": "Honorable Mention",
      "name": "MCM Problem B：搜索潜水艇",
      "competition": "美国大学生数学建模大赛",
      "competitionLink": "https://www.comap.com/contests",
      "date": "2024-05"
    },
    {
      "tier": "provincial",
      "rank": "山东省一等奖",
      "name": "B题多波束测线问题",
      "competition": "全国大学生数学建模竞赛",
      "competitionLink": "http://www.mcm.edu.cn/",
      "date": "2023-09"
    },
    {
      "tier": "national",
      "rank": "国家三等奖",
      "name": "深度学习风力发电实时预测系统",
      "projectLink": "https://www.bilibili.com/video/BV1kG411d7Zr/",
      "competition": "第13届\"中国软件杯\"大学生软件设计大赛",
      "competitionLink": "https://www.cnsoftbei.com/",
      "date": "2023-07"
    },
    {
      "tier": "provincial",
      "rank": "华东赛区二等奖",
      "name": "SDN运维管理系统",
      "competition": "中国高校计算机大赛-网络技术挑战赛（BEP-4赛道）",
      "date": "2023-06"
    }
  ],
  "news": [
    {
      "tag": "publication",
      "date": "2026-09",
      "title": "ATP 获 IMC 2026 Poster 录用",
      "description": "智能体间认证与消息通信协议，第三作者。"
    },
    {
      "tag": "publication",
      "date": "2026-08",
      "title": "Ollama in the Wild 获 IMC 2026 录用",
      "description": "开放 Ollama 端点的长期互联网测量，共同第一作者（第三顺位）。"
    },
    {
      "tag": "publication",
      "date": "2026-07",
      "title": "GhostCite 与 ATP 获 CCF-NSS Poster 录用",
      "description": "围绕引用可信性与智能体通信开展研究。"
    },
    {
      "tag": "publication",
      "date": "2026-04",
      "title": "GhostCite 获 IEEE S&P 2026 Poster 录用",
      "description": "共同第一作者（第一顺位）。"
    },
    {
      "tag": "award",
      "date": "2025-12",
      "title": "XMap 获 ACSAC 2025 成果影响力奖第二名",
      "description": "Fast Internet-wide IPv4 and IPv6 Network Scanner。"
    },
    {
      "tag": "publication",
      "date": "2025-10",
      "title": "CVE-2025-8677 获 ISC 官方致谢",
      "description": "BIND 9 DNSKEY 处理资源耗尽漏洞，CVSS 3.1：7.5。",
      "descriptionLink": "https://kb.isc.org/docs/cve-2025-8677"
    }
  ]
};

export const profileDataEn: ProfileData = {
  "name": "Zuyao Xu",
  "school": "Nankai University",
  "undergraduate": "China University of Petroleum (East China)",
  "undergraduateMajor": "Computer Science and Technology",
  "major": "Cyber Security",
  "status": "Master’s student · Class of 2025",
  "advisorHeader": "Advisor",
  "advisor": "Xiang Li",
  "advisorLink": "https://lixiang521.com/",
  "awardsHeader": "Awards",
  "publicationsHeader": "Publications",
  "newsHeader": "Recent News",
  "social": {
    "github": "https://github.com/tochusc",
    "email": "mailto:xuzuyao@mail.nankai.edu.cn",
    "twitter": "https://x.com/xu_zu_yao",
    "bilibili": "https://space.bilibili.com/10478211",
    "scholar": "https://scholar.google.com/citations?user=Q1bu9LoAAAAJ&hl=en"
  },
  "publications": [
    {
      "title": "Ollama in the Wild: A Longitudinal Measurement of Exposed Ollama LLM Endpoints at Internet Scale",
      "authors": "Zuyao Xu et al.",
      "venue": "ACM IMC 2026",
      "year": 2026,
      "status": "accepted",
      "role": "Equal contribution · third listed",
      "note": "A longitudinal measurement of exposed Ollama endpoints at Internet scale."
    },
    {
      "title": "GhostCite: A Large-Scale Analysis of Citation Validity in the Age of Large Language Models",
      "authors": "Zuyao Xu, Yuqi Qiu, Lu Sun, Fasheng Miao et al.",
      "venue": "IEEE S&P 2026 Poster · CCF-NSS 2026 Poster",
      "year": 2026,
      "link": "https://arxiv.org/abs/2602.06718",
      "status": "poster",
      "role": "Equal contribution · first listed",
      "note": "Large-scale analysis of citation validity in the age of LLMs; accepted as posters at IEEE S&P and CCF-NSS."
    },
    {
      "title": "Agent Transfer Protocol: Server-Mediated Authentication and Messaging for Agent-to-Agent Communication",
      "authors": "Xiang Li, Yuqi Qiu, Zuyao Xu, Lu Sun, Fasheng Miao, Fubin Wu, Haixin Duan, Zheli Liu",
      "venue": "ACM IMC 2026 Poster · CCF-NSS 2026 Poster",
      "year": 2026,
      "status": "accepted",
      "role": "Third author",
      "note": "Agent-to-agent authentication and messaging. The CCF-NSS version is titled “Agent Transfer Protocol: A Server-Mediated Agent-to-Agent Communication Protocol for the Internet of Agents.”"
    },
    {
      "title": "aCAPTCHA: Verifying That an Entity Is a Capable Agent via Asymmetric Hardness",
      "authors": "Zuyao Xu, Xiang Li, Fubin Wu, Yuqi Qiu, Lu Sun, Fasheng Miao",
      "venue": "arXiv",
      "year": 2026,
      "link": "https://arxiv.org/abs/2603.07116",
      "status": "preprint",
      "note": "Verifying agent capability through asymmetric hardness."
    },
    {
      "title": "RebirthDay Attack: Reviving DNS Cache Poisoning with the Birthday Paradox",
      "authors": "Xiang Li, Mingming Zhang, Zuyao Xu et al.",
      "venue": "ACM CCS 2025",
      "year": 2025,
      "link": "https://doi.org/10.1145/3719027.3744832",
      "status": "published",
      "role": "Third author",
      "note": "Revisiting DNS cache poisoning through the birthday paradox."
    }
  ],
  "awards": [
    {
      "tier": "national",
      "rank": "Third Prize · 20th place",
      "name": "Internet Threat Analysis",
      "competition": "DataCon 2025",
      "date": "2025-11"
    },
    {
      "tier": "national",
      "rank": "Track winner (Second Prize)",
      "name": "DAF Vulnerability & Exploitation Challenge",
      "competition": "GeekCon 2025",
      "date": "2025-10"
    },
    {
      "tier": "provincial",
      "rank": "Second Prize",
      "name": "Cybersecurity Practical Skills Competition",
      "competition": "Tianjin Binhai New Area",
      "date": "2025-09"
    },
    {
      "tier": "national",
      "rank": "Third Prize",
      "name": "Big Data Security Analysis Competition",
      "competition": "DataCon 2024",
      "date": "2024-12"
    },
    {
      "tier": "school",
      "rank": "School Scholarship",
      "name": "2023-2024 Outstanding Achievement Scholarship",
      "competition": "China University of Petroleum (East China)",
      "date": "2024-12"
    },
    {
      "tier": "school",
      "rank": "School Scholarship",
      "name": "2023-2024 Star of Excellence Scholarship",
      "competition": "China University of Petroleum (East China)",
      "date": "2024-12"
    },
    {
      "tier": "national",
      "rank": "National Scholarship",
      "name": "Awarded National Scholarship (￥10000, 2/120)",
      "competition": "China University of Petroleum (East China)",
      "date": "2024-11"
    },
    {
      "tier": "national",
      "rank": "National Third Prize",
      "name": "Mental Health Education System Based on Multi-modal Analysis",
      "competition": "2024 China Collegiate Computing Competition - Network Technology Challenge",
      "competitionLink": "https://net.c4best.cn/",
      "date": "2024-09"
    },
    {
      "tier": "national",
      "rank": "National Second Prize",
      "name": "\"TongHui ZhiJiao\" - Personalized Teaching Platform with Temperature and Emotion",
      "projectLink": "https://www.bilibili.com/video/BV1UDWzeyEBB/",
      "competition": "13th \"China Software Cup\" Software Design Competition (Track A5)",
      "competitionLink": "https://www.cnsoftbei.com/",
      "date": "2024-08"
    },
    {
      "tier": "national",
      "rank": "National First Prize",
      "name": "Second Classroom Intelligent Data Analysis Platform Based on Wenxin LLM",
      "projectLink": "https://www.bilibili.com/video/BV15MvLejEt5",
      "competition": "16th China Collegiate Computing Competition (Software Application)",
      "competitionLink": "https://jsjds.blcu.edu.cn/",
      "date": "2024-07"
    },
    {
      "tier": "national",
      "rank": "Honorable Mention",
      "name": "MCM Problem B: Searching for Submarines",
      "competition": "Mathematical Contest in Modeling",
      "competitionLink": "https://www.comap.com/contests",
      "date": "2024-05"
    },
    {
      "tier": "provincial",
      "rank": "Provincial First Prize",
      "name": "Problem B: Multi-beam Sounding",
      "competition": "National Mathematical Modeling Contest",
      "competitionLink": "http://www.mcm.edu.cn/",
      "date": "2023-09"
    }
  ],
  "news": [
    {
      "tag": "publication",
      "date": "2026-09",
      "title": "ATP accepted to IMC 2026 Posters",
      "description": "Agent-to-agent authentication and messaging; third author."
    },
    {
      "tag": "publication",
      "date": "2026-08",
      "title": "Ollama in the Wild accepted to IMC 2026",
      "description": "Longitudinal Internet measurement; equal contribution, third listed."
    },
    {
      "tag": "publication",
      "date": "2026-07",
      "title": "GhostCite and ATP accepted to CCF-NSS Posters",
      "description": "Research on citation validity and agent communication."
    },
    {
      "tag": "publication",
      "date": "2026-04",
      "title": "GhostCite accepted to IEEE S&P 2026 Posters",
      "description": "Equal contribution, first listed."
    },
    {
      "tag": "award",
      "date": "2025-12",
      "title": "XMap receives ACSAC 2025 Artifacts Impact Award, 2nd place",
      "description": "Fast Internet-wide IPv4 and IPv6 Network Scanner."
    },
    {
      "tag": "publication",
      "date": "2025-10",
      "title": "ISC acknowledges CVE-2025-8677 report",
      "description": "BIND 9 resource exhaustion through DNSKEY handling; CVSS 3.1: 7.5.",
      "descriptionLink": "https://kb.isc.org/docs/cve-2025-8677"
    }
  ]
};
