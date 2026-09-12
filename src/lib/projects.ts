export interface OpenSourceProject {
  name: string;
  repo: string;
  stars: number;
  language: string;
  courseScore?: number;
  description: { zh: string; en: string };
}

// Public repository metadata checked against the GitHub API on this date.
export const starsCheckedAt = '2026-09-12';
export const projects: OpenSourceProject[] = [
  {
    name: '通慧智教 · AI Assistant Teaching',
    repo: 'ai-assistant-teaching-website', stars: 94, language: 'Vue',
    description: {
      zh: '大模型辅助教学网站，通过 AI 教学助理“小慧”支持语音、文本和自然语言交互。',
      en: 'An AI-assisted teaching website with voice, text, and natural-language interaction through the XiaoHui assistant.'
    }
  },
  {
    name: 'Windpower Forecast System',
    repo: 'windpower-forecast-system', stars: 28, language: 'Vue',
    description: {
      zh: '结合 TCN、LSTM 与 MLP 的实时风电预测网站。',
      en: 'A real-time wind power forecasting website combining TCN, LSTM, and MLP models.'
    }
  },
  {
    name: 'OpenAI + Microsoft TTS QQ Robot',
    repo: 'OpenAI-MicrosoftTTS-QQ-Robot-by-YiriMirai', stars: 17, language: 'Python',
    description: {
      zh: '基于 YiriMirai，集成 OpenAI 与 Microsoft TTS API 的语音聊天 QQ 机器人。',
      en: 'A voice-enabled QQ chatbot built with YiriMirai, OpenAI, and Microsoft TTS APIs.'
    }
  },
  {
    name: 'ROS2 YOLOv8',
    repo: 'ros2-yolov8', stars: 10, language: 'Python',
    description: {
      zh: '基于 ROS2 通信的 YOLOv8 目标检测项目。',
      en: 'YOLOv8 object detection integrated with ROS2 communication.'
    }
  },
  {
    name: 'pybicc',
    repo: 'pybicc', stars: 9, language: 'Python', courseScore: 99,
    description: {
      zh: '编译原理课程设计：类 C 语言编译器与 Intel 80x86 汇编解释器，提供 PyQt6 图形界面。',
      en: 'Compiler construction course project: a C-like compiler and Intel 80x86 assembly interpreter with a PyQt6 graphical interface.'
    }
  },
  {
    name: 'UPC CGDMS',
    repo: 'UPC_CGDMS', stars: 4, language: 'JavaScript', courseScore: 95,
    description: {
      zh: '高校毕业设计管理系统课程设计。',
      en: 'A university graduation project management system developed as a course project.'
    }
  },
  {
    name: 'Ource',
    repo: 'Ource', stars: 1, language: 'C', courseScore: 100,
    description: {
      zh: '操作系统课程设计：实现基础中断处理、时钟管理、原语操作与资源管理的系统内核。',
      en: 'Operating systems course project: a kernel implementing basic interrupt handling, clock management, primitives, and resource management.'
    }
  }
];
