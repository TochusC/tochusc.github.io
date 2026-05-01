export interface Award {
  tier: 'national' | 'provincial' | 'school';
  rank: string;
  name: string;
  projectLink?: string;
  competition: string;
  competitionLink?: string;
  date: string;
}

export interface NewsItem {
  tag: 'gold' | 'blue' | 'green';
  date: string;
  title: string;
  titleLink?: string;
  description: string;
  descriptionLink?: string;
}

export interface ProfileData {
  name: string;
  school: string;
  major: string;
  status: string;
  advisorHeader: string;
  advisor: string;
  advisorLink: string;
  awardsHeader: string;
  newsHeader: string;
  awards: Award[];
  news: NewsItem[];
  social: {
    github: string;
    email: string;
    twitter: string;
    bilibili: string;
  };
}

export const profileData: ProfileData = {
  name: '许祖耀',
  school: '南开大学',
  major: '网络空间安全',
  status: '2025级硕士研究生',
  advisorHeader: '导师',
  advisor: '李想',
  advisorLink: 'https://lixiang521.com/',
  awardsHeader: '获奖经历',
  newsHeader: '最新动态',
  social: {
    github: 'https://github.com/tochusc',
    email: 'mailto:tochsus@163.com',
    twitter: 'https://x.com/xu_zu_yao',
    bilibili: 'https://space.bilibili.com/10478211',
  },
  awards: [
    {
      tier: 'national',
      rank: '国家奖学金',
      name: '荣获国家奖学金（￥10000, 2/120）',
      projectLink: 'https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E5%A5%96%E5%AD%A6%E9%87%91/9693046?fr=ge_ala',
      competition: '中国石油大学（华东）',
      date: '2024-11-03',
    },
    {
      tier: 'national',
      rank: '国家一等奖',
      name: '基于文心大模型的第二课堂智能数据分析平台',
      projectLink: 'https://www.bilibili.com/video/BV15MvLejEt5',
      competition: '(第16届)中国大学生计算机设计大赛（软件应用与开发赛道）',
      competitionLink: 'https://jsjds.blcu.edu.cn/',
      date: '2024-07-25',
    },
    {
      tier: 'national',
      rank: '国家二等奖',
      name: '"通慧智教"——有温度，有感情的个性化教学平台',
      projectLink: 'https://www.bilibili.com/video/BV1UDWzeyEBB/',
      competition: '第13届"中国软件杯"大学生软件设计大赛（A5赛道）',
      competitionLink: 'https://www.cnsoftbei.com/',
      date: '2024-08-23',
    },
    {
      tier: 'national',
      rank: '国家三等奖',
      name: '基于多模态分析的心理健康群防教育系统',
      competition: '2024中国高校计算机大赛-网络技术挑战赛（A1创意赛道）',
      competitionLink: 'https://net.c4best.cn/',
      date: '2024-09-09',
    },
    {
      tier: 'national',
      rank: '国家三等奖',
      name: '深度学习风力发电实时预测系统',
      projectLink: 'https://www.bilibili.com/video/BV1kG411d7Zr/',
      competition: '第13届"中国软件杯"大学生软件设计大赛',
      competitionLink: 'https://www.cnsoftbei.com/',
      date: '2023-07-31',
    },
    {
      tier: 'national',
      rank: 'Honorable Mention',
      name: 'MCM Problem B：搜索潜水艇',
      competition: '美国大学生数学建模大赛',
      competitionLink: 'https://www.comap.com/contests',
      date: '2024-05-06',
    },
    {
      tier: 'provincial',
      rank: '山东省一等奖',
      name: 'B题多波束测线问题',
      competition: '全国大学生数学建模竞赛',
      competitionLink: 'http://www.mcm.edu.cn/',
      date: '2023-09-20',
    },
    {
      tier: 'provincial',
      rank: '华东赛区二等奖',
      name: 'SDN运维管理系统',
      competition: '2023中国高校计算机大赛-网络技术挑战赛（BEP-4赛道）',
      date: '2023-06-26',
    },
    {
      tier: 'provincial',
      rank: '北部区域赛三等奖',
      name: 'AI赋能的个性化智能教学平台',
      competition: '第十五届中国大学生服务外包-创新创业大赛',
      date: '2024-06-01',
    },
    {
      tier: 'school',
      rank: '校级奖学金',
      name: '2023-2024突出成绩奖学金',
      competition: '中国石油大学（华东）',
      date: '2024-12-07',
    },
    {
      tier: 'school',
      rank: '校级奖学金',
      name: '2023-2024卓越之星奖学金',
      competition: '中国石油大学（华东）',
      date: '2024-12-07',
    },
    {
      tier: 'school',
      rank: '校级奖学金',
      name: '2023-2024年科技创新奖学金',
      competition: '中国石油大学（华东）',
      date: '2024-10-22',
    },
  ],
  news: [
    {
      tag: 'gold',
      date: '2024-12',
      title: '荣获突出成绩奖学金',
      description: '因国家级竞赛获奖，团队荣获突出成绩奖学金！+3000￥',
    },
    {
      tag: 'gold',
      date: '2024-12',
      title: '荣获卓越之星奖学金',
      description: '因国家级竞赛获奖，团队荣获卓越之星奖学金！+2000￥',
    },
    {
      tag: 'gold',
      date: '2024-12',
      title: '荣获科技创新奖学金',
      description: '基于获奖积分，荣获科技创新奖学金！+800￥',
    },
    {
      tag: 'blue',
      date: '2024-11',
      title: '荣获国家奖学金',
      description: '以专业排名 2/120 的成绩荣获国家奖学金！+10000￥',
    },
    {
      tag: 'blue',
      date: '2024-09',
      title: '网络技术挑战赛国赛三等奖',
      description: '基于多模态分析的心理健康群防教育系统获得国赛三等奖',
    },
    {
      tag: 'green',
      date: '2024-08',
      title: '中国软件杯国赛二等奖',
      description: '"通慧智教"个性化教学平台获得国赛二等奖',
    },
  ],
};

export const profileDataEn: ProfileData = {
  name: 'Zuyao Xu',
  school: 'Nankai University',
  major: 'Cyber Security',
  status: '2025 Master Student',
  advisorHeader: 'Advisor',
  advisor: 'Xiang Li',
  advisorLink: 'https://lixiang521.com/',
  awardsHeader: 'Awards',
  newsHeader: 'Recent News',
  social: {
    github: 'https://github.com/tochusc',
    email: 'mailto:tochsus@163.com',
    twitter: 'https://x.com/xu_zu_yao',
    bilibili: 'https://space.bilibili.com/10478211',
  },
  awards: [
    {
      tier: 'national',
      rank: 'National Scholarship',
      name: 'Awarded National Scholarship (￥10000, 2/120)',
      competition: 'China University of Petroleum (East China)',
      date: '2024-11-03',
    },
    {
      tier: 'national',
      rank: 'National First Prize',
      name: 'Second Classroom Intelligent Data Analysis Platform Based on Wenxin LLM',
      projectLink: 'https://www.bilibili.com/video/BV15MvLejEt5',
      competition: '16th China Collegiate Computing Competition (Software Application)',
      competitionLink: 'https://jsjds.blcu.edu.cn/',
      date: '2024-07-25',
    },
    {
      tier: 'national',
      rank: 'National Second Prize',
      name: '"TongHui ZhiJiao" - Personalized Teaching Platform with Temperature and Emotion',
      projectLink: 'https://www.bilibili.com/video/BV1UDWzeyEBB/',
      competition: '13th "China Software Cup" Software Design Competition (Track A5)',
      competitionLink: 'https://www.cnsoftbei.com/',
      date: '2024-08-23',
    },
    {
      tier: 'national',
      rank: 'National Third Prize',
      name: 'Mental Health Education System Based on Multi-modal Analysis',
      competition: '2024 China Collegiate Computing Competition - Network Technology Challenge',
      competitionLink: 'https://net.c4best.cn/',
      date: '2024-09-09',
    },
    {
      tier: 'national',
      rank: 'Honorable Mention',
      name: 'MCM Problem B: Searching for Submarines',
      competition: 'Mathematical Contest in Modeling',
      competitionLink: 'https://www.comap.com/contests',
      date: '2024-05-06',
    },
    {
      tier: 'provincial',
      rank: 'Provincial First Prize',
      name: 'Problem B: Multi-beam Sounding',
      competition: 'National Mathematical Modeling Contest',
      competitionLink: 'http://www.mcm.edu.cn/',
      date: '2023-09-20',
    },
    {
      tier: 'school',
      rank: 'School Scholarship',
      name: '2023-2024 Outstanding Achievement Scholarship',
      competition: 'China University of Petroleum (East China)',
      date: '2024-12-07',
    },
    {
      tier: 'school',
      rank: 'School Scholarship',
      name: '2023-2024 Star of Excellence Scholarship',
      competition: 'China University of Petroleum (East China)',
      date: '2024-12-07',
    },
  ],
  news: [
    {
      tag: 'gold',
      date: '2024-12',
      title: 'Awarded Outstanding Achievement Scholarship',
      description: 'For national competition awarding, the team was awarded the Outstanding Achievement Scholarship! +3000￥',
    },
    {
      tag: 'gold',
      date: '2024-12',
      title: 'Awarded Star of Excellence Scholarship',
      description: 'For national competition awarding, the team was awarded the Star of Excellence Scholarship! +2000￥',
    },
    {
      tag: 'gold',
      date: '2024-12',
      title: 'Awarded Science and Technology Innovation Scholarship',
      description: 'Based on award points, awarded the Science and Technology Innovation Scholarship! +800￥',
    },
    {
      tag: 'blue',
      date: '2024-11',
      title: 'Awarded National Scholarship',
      description: 'Awarded National Scholarship with GPA ranking 2/120! +10000￥',
    },
    {
      tag: 'blue',
      date: '2024-09',
      title: 'Network Technology Challenge National Third Prize',
      description: 'Mental Health Education System Based on Multi-modal Analysis won National Third Prize',
    },
    {
      tag: 'green',
      date: '2024-08',
      title: 'China Software Cup National Second Prize',
      description: '"TongHui ZhiJiao" Personalized Teaching Platform won National Second Prize',
    },
  ],
};
