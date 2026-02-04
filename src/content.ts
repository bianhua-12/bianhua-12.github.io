export const site = {
  title: "Shuaihang Chen",
  bio: "PhD student at ZGCA & HIT. Working on reinforcement learning for VLA (Vision-Language-Action) models.",
  links: {
    github: "https://github.com/bianhua-12/",
    scholar: "https://scholar.google.com/citations?user=mvKthu0AAAAJ&hl=zh-CN",
    x: "https://x.com/shuaihangEAI/",
    email: "mailto:shchen@ir.hit.edu.cn",
    rlinf: "https://github.com/bianhua-12/RLinf",
    masSurvey: "https://github.com/bianhua-12/Multi-generative_Agent_System_survey",
    chaoYu: "https://nicsefc.ee.tsinghua.edu.cn/people/ChaoYu",
    weiNanZhang: "https://homepage.hit.edu.cn/zhangweinan",
    dtGroup: "https://hit-scir-dt.github.io/page/",
  },
  footer: "Shuaihang Chen 2024–2026",
};

export type Card = { title: string; description: string; href?: string; paperHref?: string };

export type Project = Card & { imageSrc?: string; imageAlt?: string };

export type TextSegment = { text: string; href?: string };

export const aboutParagraphs: TextSegment[][] = [
  [
    { text: "I am currently conducting research at Zhongguancun Academy, supervised by " },
    { text: "Chao Yu", href: site.links.chaoYu },
    { text: "." },
  ],
  [{ text: "My research focuses on reinforcement learning for VLA (Vision-Language-Action) models." }],
  [
    {
      text: "I am a PhD student in the ",
    },
    { text: "DT Group", href: site.links.dtGroup },
    { text: " at SCIR-DT, Harbin Institute of Technology (HIT), supervised by " },
    { text: "Prof. Wei-Nan Zhang", href: site.links.weiNanZhang },
    { text: "." },
  ],
];

export const researchProjects: Project[] = [
  {
    title: "RL-Co",
    description: "RL based Sim-Real Cotraining project (link not public).",
    imageSrc: "/img/projects/rl-co.png",
    imageAlt: "RL-based Sim-Real co-training diagram",
  },
  // {
  //   title: "RLinf",
  //   description: "Reinforcement Learning Infrastructure for Post-training.",
  //   href: site.links.rlinf,
  //   imageSrc: "/img/projects/rlinf.png",
  //   imageAlt: "RLinf project image",
  // },
  
  {
    title:
      "A Survey on LLM-based Multi-Agent System",
    description: "Survey on LLM-based multi-agent systems.",
    href: site.links.masSurvey,
    paperHref: "https://arxiv.org/abs/2412.17481",
    imageSrc: "/img/projects/survey.png",
    imageAlt: "LLM-based multi-agent systems overview diagram",
  },
  // {
  //   title: "Social Simulation",
  //   description: "A project for simulating LLM based users in social media.",
  // },
];
