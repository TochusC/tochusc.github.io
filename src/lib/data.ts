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
  status: 'published' | 'preprint';
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

export const profileData: ProfileData = {
  name: '许祖耀',
  school: '南开大学',
  undergraduate: '中国石油大学（华东）',
  undergraduateMajor: '计算机科学与技术',
  major: '网络空间安全',
  status: '2025级硕士研究生',
  advisorHeader: '导师',
  advisor: '李想',
  advisorLink: 'https://lixiang521.com/',
  awardsHeader: '获奖经历',
  publicationsHeader: '学术发表',
  newsHeader: '最新动态',
  social: {
    github: 'https://github.com/tochusc',
    email: 'mailto:tochsus@163.com',
    twitter: 'https://x.com/xu_zu_yao',
    bilibili: 'https://space.bilibili.com/10478211',
    scholar: 'https://scholar.google.com/citations?user=Q1bu9LoAAAAJ&hl=en',
  },
  publications: [
    {
      title: 'GhostCite: A Large-Scale Analysis of Citation Validity in the Age of Large Language Models',
      authors: 'Z Xu, Y Qiu, L Sun, FS Miao, F Wu, X Wang, X Li, H Lu, ZZ Zhang, Y Hu, ...',
      venue: 'arXiv preprint',
      year: 2026,
      link: 'https://arxiv.org/abs/2602.06718',
      status: 'preprint',
    },
    {
      title: 'aCAPTCHA: Verifying That an Entity Is a Capable Agent via Asymmetric Hardness',
      authors: 'Z Xu, X Li, F Wu, Y Qiu, L Sun, FS Miao',
      venue: 'arXiv preprint',
      year: 2026,
      link: 'https://arxiv.org/abs/2603.07116',
      status: 'preprint',
    },
    {
      title: 'RebirthDay Attack: Reviving DNS Cache Poisoning with the Birthday Paradox',
      authors: 'X Li, M Zhang, Z Xu, F Miao, Y Qiu, B Liu, J Zhang, X Zheng, H Duan, ...',
      venue: 'ACM CCS 2025',
      year: 2025,
      link: 'https://scholar.google.com/citations?user=Q1bu9LoAAAAJ&hl=en',
      status: 'published',
    },
  ],
  awards: [
    {
      tier: 'national',
      rank: '国家奖学金',
      name: '荣获国家奖学金（￥10000, 2/120）',
      competition: '中国石油大学（华东）',
      date: '2024-11',
    },
    {
      tier: 'national',
      rank: '国家一等奖',
      name: '基于文心大模型的第二课堂智能数据分析平台',
      projectLink: 'https://www.bilibili.com/video/BV15MvLejEt5',
      competition: '中国大学生计算机设计大赛（软件应用与开发赛道）',
      competitionLink: 'https://jsjds.blcu.edu.cn/',
      date: '2024-07',
    },
    {
      tier: 'national',
      rank: '国家二等奖',
      name: '"通慧智教"——有温度，有感情的个性化教学平台',
      projectLink: 'https://www.bilibili.com/video/BV1UDWzeyEBB/',
      competition: '第13届"中国软件杯"大学生软件设计大赛（A5赛道）',
      competitionLink: 'https://www.cnsoftbei.com/',
      date: '2024-08',
    },
    {
      tier: 'national',
      rank: '国家三等奖',
      name: '基于多模态分析的心理健康群防教育系统',
      competition: '中国高校计算机大赛-网络技术挑战赛（A1创意赛道）',
      competitionLink: 'https://net.c4best.cn/',
      date: '2024-09',
    },
    {
      tier: 'national',
      rank: '国家三等奖',
      name: '深度学习风力发电实时预测系统',
      projectLink: 'https://www.bilibili.com/video/BV1kG411d7Zr/',
      competition: '第13届"中国软件杯"大学生软件设计大赛',
      competitionLink: 'https://www.cnsoftbei.com/',
      date: '2023-07',
    },
    {
      tier: 'national',
      rank: 'Honorable Mention',
      name: 'MCM Problem B：搜索潜水艇',
      competition: '美国大学生数学建模大赛',
      competitionLink: 'https://www.comap.com/contests',
      date: '2024-05',
    },
    {
      tier: 'provincial',
      rank: '山东省一等奖',
      name: 'B题多波束测线问题',
      competition: '全国大学生数学建模竞赛',
      competitionLink: 'http://www.mcm.edu.cn/',
      date: '2023-09',
    },
    {
      tier: 'provincial',
      rank: '华东赛区二等奖',
      name: 'SDN运维管理系统',
      competition: '中国高校计算机大赛-网络技术挑战赛（BEP-4赛道）',
      date: '2023-06',
    },
    {
      tier: 'school',
      rank: '校级奖学金',
      name: '2023-2024突出成绩奖学金',
      competition: '中国石油大学（华东）',
      date: '2024-12',
    },
    {
      tier: 'school',
      rank: '校级奖学金',
      name: '2023-2024卓越之星奖学金',
      competition: '中国石油大学（华东）',
      date: '2024-12',
    },
    {
      tier: 'school',
      rank: '校级奖学金',
      name: '2023-2024年科技创新奖学金',
      competition: '中国石油大学（华东）',
      date: '2024-10',
    },
  ],
  news: [
    {
      tag: 'activity',
      date: '2026-04',
      title: '完成半马挑战',
      description: '在赶论文DDL途中，顺带跑了个半马',
      descriptionLink: 'https://www.xiaohongshu.com/discovery/item/69e44d4d000000001f00019b',
    },
    {
      tag: 'activity',
      date: '2026-04',
      title: '参加清华第三届信息安全青训营',
      description: '清华大学信息安全青训营',
      descriptionLink: 'https://www.xiaohongshu.com/discovery/item/6975d44e000000001a02b324',
    },
    {
      tag: 'publication',
      date: '2026-03',
      title: 'aCAPTCHA 论文预印本发布',
      description: '提出基于非对称难度的 Agent 能力验证方案',
      descriptionLink: 'https://arxiv.org/abs/2603.07116',
    },
    {
      tag: 'publication',
      date: '2026-02',
      title: 'GhostCite 论文预印本发布',
      description: '大规模分析 LLM 时代引用有效性',
      descriptionLink: 'https://arxiv.org/abs/2602.06718',
    },
    {
      tag: 'publication',
      date: '2025',
      title: 'RebirthDay Attack 被 ACM CCS 2025 接收',
      description: '基于生日悖论的 DNS 缓存投毒攻击研究',
    },
    {
      tag: 'scholarship',
      date: '2024-12',
      title: '荣获突出成绩奖学金',
      description: '因国家级竞赛获奖，团队荣获突出成绩奖学金 +3000￥',
    },
    {
      tag: 'scholarship',
      date: '2024-11',
      title: '荣获国家奖学金',
      description: '以专业排名 2/120 的成绩荣获国家奖学金 +10000￥',
    },
    {
      tag: 'award',
      date: '2024-09',
      title: '网络技术挑战赛国赛三等奖',
      description: '基于多模态分析的心理健康群防教育系统',
    },
  ],
};

export const profileDataEn: ProfileData = {
  name: 'Zuyao Xu',
  school: 'Nankai University',
  undergraduate: 'China University of Petroleum (East China)',
  undergraduateMajor: 'Computer Science and Technology',
  major: 'Cyber Security',
  status: '2025 Master Student',
  advisorHeader: 'Advisor',
  advisor: 'Xiang Li',
  advisorLink: 'https://lixiang521.com/',
  awardsHeader: 'Awards',
  publicationsHeader: 'Publications',
  newsHeader: 'Recent News',
  social: {
    github: 'https://github.com/tochusc',
    email: 'mailto:tochsus@163.com',
    twitter: 'https://x.com/xu_zu_yao',
    bilibili: 'https://space.bilibili.com/10478211',
    scholar: 'https://scholar.google.com/citations?user=Q1bu9LoAAAAJ&hl=en',
  },
  publications: [
    {
      title: 'GhostCite: A Large-Scale Analysis of Citation Validity in the Age of Large Language Models',
      authors: 'Z Xu, Y Qiu, L Sun, FS Miao, F Wu, X Wang, X Li, H Lu, ZZ Zhang, Y Hu, ...',
      venue: 'arXiv preprint',
      year: 2026,
      link: 'https://arxiv.org/abs/2602.06718',
      status: 'preprint',
    },
    {
      title: 'aCAPTCHA: Verifying That an Entity Is a Capable Agent via Asymmetric Hardness',
      authors: 'Z Xu, X Li, F Wu, Y Qiu, L Sun, FS Miao',
      venue: 'arXiv preprint',
      year: 2026,
      link: 'https://arxiv.org/abs/2603.07116',
      status: 'preprint',
    },
    {
      title: 'RebirthDay Attack: Reviving DNS Cache Poisoning with the Birthday Paradox',
      authors: 'X Li, M Zhang, Z Xu, F Miao, Y Qiu, B Liu, J Zhang, X Zheng, H Duan, ...',
      venue: 'ACM CCS 2025',
      year: 2025,
      link: 'https://scholar.google.com/citations?user=Q1bu9LoAAAAJ&hl=en',
      status: 'published',
    },
  ],
  awards: [
    {
      tier: 'national',
      rank: 'National Scholarship',
      name: 'Awarded National Scholarship (￥10000, 2/120)',
      competition: 'China University of Petroleum (East China)',
      date: '2024-11',
    },
    {
      tier: 'national',
      rank: 'National First Prize',
      name: 'Second Classroom Intelligent Data Analysis Platform Based on Wenxin LLM',
      projectLink: 'https://www.bilibili.com/video/BV15MvLejEt5',
      competition: '16th China Collegiate Computing Competition (Software Application)',
      competitionLink: 'https://jsjds.blcu.edu.cn/',
      date: '2024-07',
    },
    {
      tier: 'national',
      rank: 'National Second Prize',
      name: '"TongHui ZhiJiao" - Personalized Teaching Platform with Temperature and Emotion',
      projectLink: 'https://www.bilibili.com/video/BV1UDWzeyEBB/',
      competition: '13th "China Software Cup" Software Design Competition (Track A5)',
      competitionLink: 'https://www.cnsoftbei.com/',
      date: '2024-08',
    },
    {
      tier: 'national',
      rank: 'National Third Prize',
      name: 'Mental Health Education System Based on Multi-modal Analysis',
      competition: '2024 China Collegiate Computing Competition - Network Technology Challenge',
      competitionLink: 'https://net.c4best.cn/',
      date: '2024-09',
    },
    {
      tier: 'national',
      rank: 'Honorable Mention',
      name: 'MCM Problem B: Searching for Submarines',
      competition: 'Mathematical Contest in Modeling',
      competitionLink: 'https://www.comap.com/contests',
      date: '2024-05',
    },
    {
      tier: 'provincial',
      rank: 'Provincial First Prize',
      name: 'Problem B: Multi-beam Sounding',
      competition: 'National Mathematical Modeling Contest',
      competitionLink: 'http://www.mcm.edu.cn/',
      date: '2023-09',
    },
    {
      tier: 'school',
      rank: 'School Scholarship',
      name: '2023-2024 Outstanding Achievement Scholarship',
      competition: 'China University of Petroleum (East China)',
      date: '2024-12',
    },
    {
      tier: 'school',
      rank: 'School Scholarship',
      name: '2023-2024 Star of Excellence Scholarship',
      competition: 'China University of Petroleum (East China)',
      date: '2024-12',
    },
  ],
  news: [
    {
      tag: 'activity',
      date: '2026-04',
      title: 'Completed Half Marathon',
      description: 'Ran a half marathon while rushing paper deadline',
      descriptionLink: 'https://www.xiaohongshu.com/discovery/item/69e44d4d000000001f00019b',
    },
    {
      tag: 'activity',
      date: '2026-04',
      title: 'Tsinghua 3rd InfoSec Summer Camp',
      description: 'Attended Tsinghua University Information Security Summer Camp',
      descriptionLink: 'https://www.xiaohongshu.com/discovery/item/6975d44e000000001a02b324',
    },
    {
      tag: 'publication',
      date: '2026-03',
      title: 'aCAPTCHA Preprint Released',
      description: 'Proposing asymmetric hardness-based Agent capability verification',
      descriptionLink: 'https://arxiv.org/abs/2603.07116',
    },
    {
      tag: 'publication',
      date: '2026-02',
      title: 'GhostCite Preprint Released',
      description: 'Large-scale analysis of citation validity in the age of LLMs',
      descriptionLink: 'https://arxiv.org/abs/2602.06718',
    },
    {
      tag: 'publication',
      date: '2025',
      title: 'RebirthDay Attack Accepted by ACM CCS 2025',
      description: 'DNS cache poisoning research based on birthday paradox',
    },
    {
      tag: 'scholarship',
      date: '2024-12',
      title: 'Awarded Outstanding Achievement Scholarship',
      description: 'For national competition awarding +3000￥',
    },
    {
      tag: 'scholarship',
      date: '2024-11',
      title: 'Awarded National Scholarship',
      description: 'GPA ranking 2/120 +10000￥',
    },
    {
      tag: 'award',
      date: '2024-09',
      title: 'Network Technology Challenge National Third Prize',
      description: 'Mental Health Education System Based on Multi-modal Analysis',
    },
  ],
};
