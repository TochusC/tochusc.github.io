var news = [
    {
      "tag": "gold",
      "date": "10/2024",
      "title": "Awarded Xiaomi Scholarship💯",
      "titleLink": "http://fund.upc.edu.cn/_t239/2023/1024/c19027a252855/page.psp",
      "description": "Received the Xiaomi Scholarship (￥5000, 1/120) during the scholarship defense👏"
    },
    {
      "tag": "blue",
      "date": "09/2024",
      "title": "Contributed PR to NLnet Labs⚡",
      "titleLink": "https://github.com/NLnetLabs",
      "description": "Contributed a PR to NLnet Labs' open-source resolver Unbound, first time participating in an open-source project!🐞"
    },
    {
      "tag": "gold",
      "date": "09/2024",
      "title": "Pre-admitted to Nankai University🌟",
      "titleLink": "https://cc.nankai.edu.cn/2024/0930/c13297a552214/page.htm",
      "description": "Pre-admitted to Nankai University's School of Cyber Science and Technology with the first place in the interview, under the supervision of Associate Professor Li Xiang, embarking on a new journey!🎓"
    },
    {
      "tag": "green",
      "date": "09/2024",
      "title": "Xiaohui🤖 Won National Third Prize",
      "titleLink": "https://net.c4best.cn/",
      "description": "Congratulations to AI assistant Xiaohui for winning the National Third Prize in the 2024 China Collegiate Computing Contest - Network Technology Challenge!🥉",
    },
    {
      "tag": "green",
      "date": "08/2024",
      "title": "Xiaohui🤖 Won National Second Prize",
      "description": "Congratulations to AI assistant Xiaohui for winning the National Second Prize in the 13th China Software Cup University Software Design Competition!🥈",
      "titleLink": "https://www.bilibili.com/video/BV1UDWzeyEBB/"
    },
    {
      "tag": "gold",
      "date": "07/2024",
      "title": "Xiaohui🤖 Won National First Prize",
      "description": "Warm congratulations to AI assistant Xiaohui for winning the National First Prize in the 16th China Collegiate Computing Design Competition (Software Application and Development Track)!🥇",
      "titleLink": "https://www.bilibili.com/video/BV15MvLejEt5"
    },
  ]
  var awards = [
    {
      "tier": "National",
      "rank": "Xiaomi Scholarship",
      "name": "Awarded Xiaomi Scholarship (￥5000, 1/120)",
      "projectLink": "http://fund.upc.edu.cn/_t239/2023/1024/c19027a252855/page.psp",
      "competition": "China University of Petroleum (East China)",
      "date": "2024-07-25"
    },
    {
      "tier": "National",
      "rank": "National First Prize",
      "name": "Intelligent Data Analysis Platform for Extracurricular Activities Based on Wenxin Large Model",
      "projectLink": "https://www.bilibili.com/video/BV15MvLejEt5",
      "competition": "(16th) China Collegiate Computing Design Competition (Software Application and Development Track)",
      "competitionLink": "https://jsjds.blcu.edu.cn/",
      "date": "2024-07-25"
    },
    {
      "tier": "National",
      "rank": "National Second Prize",
      "name": "\"Tonghui Zhijiao\" - A Personalized Teaching Platform with Warmth and Emotion",
      "projectLink": "https://www.bilibili.com/video/BV1UDWzeyEBB/",
      "competition": "13th China Software Cup University Software Design Competition (A5 Track)",
      "competitionLink": "https://www.cnsoftbei.com/",
      "date": "2024-08-23"
    },
    {
      "tier": "National",
      "rank": "National Third Prize",
      "name": "Psychological Health Group Prevention Education System Based on Multimodal Analysis",
      "competition": "2024 China Collegiate Computing Contest - Network Technology Challenge (A1 Creative Track)",
      "competitionLink": "https://net.c4best.cn/",
      "date": "2024-09-09"
    },
    {
      "tier": "National",
      "rank": "National Third Prize",
      "name": "Real-time Prediction System for Wind Power Generation Based on Deep Learning",
      "projectLink": "https://www.bilibili.com/video/BV1kG411d7Zr/",
      "competition": "13th China Software Cup University Software Design Competition",
      "competitionLink": "https://www.cnsoftbei.com/",
      "date": "2023-07-31"
    },
    {
      "tier": "National",
      "rank": "Honorable Mention",
      "name": "MCM Problem B: Submarine Search",
      "competition": "Mathematical Contest in Modeling (MCM)",
      "competitionLink": "https://www.comap.com/contests",
      "date": "2024-05-06"
    },
    {
      "tier": "Provincial",
      "rank": "First Prize in Shandong Province",
      "name": "B Topic Multibeam Survey Line Problem",
      "competition": "National University Mathematical Contest in Modeling",
      "competitionLink": "http://www.mcm.edu.cn/",
      "date": "2023-09-20"
    },
    {
      "tier": "Provincial",
      "rank": "Second Prize in East China Region",
      "name": "SDN Operation and Maintenance Management System",
      "competition": "2023 China Collegiate Computing Contest - Network Technology Challenge (BEP-4 Track)",
      "date": "2023-06-26"
    },
    {
      "tier": "Provincial",
      "rank": "Third Prize in Northern Region",
      "name": "AI-powered Personalized Intelligent Teaching Platform",
      "competition": "15th China Collegiate Service Outsourcing Innovation and Entrepreneurship Competition",
      "date": "2024-06-01"
    },
    {
      "tier": "Provincial",
      "rank": "Excellence Award in Provincial Competition",
      "name": "Traditional Chinese Medicine Process",
      "competition": "(15th) China Collegiate Computing Design Competition (Digital Media Game Interaction Track)",
      "date": "2023-08-01"
    },
    {
      "tier": "Provincial",
      "rank": "Provincial Orienteering Sports Event",
      "name": "2023 Grand Canal Orienteering Tour - Position: 87",
      "competition": "Jiangsu International Sports Exchange Center",
      "date": "2023-05-03"
    },
    {
      "tier": "School",
      "rank": "School Honor",
      "name": "2021-2022 Outstanding Student",
      "competition": "China University of Petroleum (East China)",
      "date": "2023-02-01"
    },
    {
      "tier": "School",
      "rank": "School Honor",
      "name": "2022-2023 Outstanding Student",
      "competition": "China University of Petroleum (East China)",
      "date": "2023-11-01"
    },
    {
      "tier": "School",
      "rank": "School Honor",
      "name": "2021-2022 Comprehensive Excellence Scholarship",
      "competition": "China University of Petroleum (East China)",
      "date": "2022-12-01"
    },
    {
      "tier": "School",
      "rank": "School Honor",
      "name": "2022-2023 Comprehensive Excellence Scholarship",
      "competition": "China University of Petroleum (East China)",
      "date": "2023-12-01"
    },
    {
      "tier": "School",
      "rank": "School Honor",
      "name": "Outstanding Communist Youth League Member",
      "competition": "Communist Youth League Committee of China University of Petroleum (East China)",
      "date": "2023-12-01"
    },
  ]