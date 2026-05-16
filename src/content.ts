export const site = {
  title: "Shuaihang Chen",
  role: "PhD Student",
  affiliation: "Zhongguancun Academy",
  bio: "My research focuses on reinforcement learning for Vision-Language-Action models and post-training infrastructure for large VLA models.",
  links: {
    github: "https://github.com/bianhua-12/",
    scholar: "https://scholar.google.com/citations?user=mvKthu0AAAAJ&hl=zh-CN",
    x: "https://x.com/shuaihangEAI/",
    rlinf: "https://github.com/bianhua-12/RLinf",
    masSurvey: "https://github.com/bianhua-12/Multi-generative_Agent_System_survey",
    chaoYu: "https://nicsefc.ee.tsinghua.edu.cn/people/ChaoYu",
    weiNanZhang: "https://homepage.hit.edu.cn/zhangweinan",
    dtGroup: "https://hit-scir-dt.github.io/page/",
    rlCo: "https://rl-co-training.github.io/",
  },
  emailText: "shchen [at] ir [dot] hit [dot] edu [dot] cn",
  footer: "Shuaihang Chen, 2024-2026",
};

export type TextSegment = { text: string; href?: string };

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  paperHref?: string;
  projectHref?: string;
  codeHref?: string;
};

export type ResearchProject = {
  title: string;
  description: string;
  href?: string;
  paperHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const aboutParagraphs: TextSegment[][] = [
  [
    { text: "I am a PhD student at Zhongguancun Academy, advised by " },
    { text: "Chao Yu", href: site.links.chaoYu },
    { text: "." },
  ],
  [
    { text: "Before that, I was in the " },
    { text: "DT Group", href: site.links.dtGroup },
    { text: " at SCIR-DT, Harbin Institute of Technology, advised by " },
    { text: "Prof. Wei-Nan Zhang", href: site.links.weiNanZhang },
    { text: "." },
  ],
  [{ text: site.bio }],
];

export const researchInterests = [
  "Reinforcement learning for VLA models",
  "Post-training infrastructure for large VLA models",
];

export const newsItems = [
  {
    date: "2026.02",
    text: "Released RL-Co, a sim-real co-training project for reinforcement learning with VLA models.",
  },
  {
    date: "2024.12",
    text: "Posted a survey on LLM-based multi-agent systems.",
  },
];

export const publications: Publication[] = [
  {
    title: "RL-Co: RL-based Sim-Real Co-training for Vision-Language-Action Models",
    authors: "Shuaihang Chen et al.",
    venue: "arXiv preprint, 2026.",
    paperHref: "https://arxiv.org/abs/2602.12628v2",
    projectHref: site.links.rlCo,
  },
  {
    title: "A Survey on LLM-based Multi-Agent Systems",
    authors: "Shuaihang Chen et al.",
    venue: "arXiv preprint, 2024.",
    paperHref: "https://arxiv.org/abs/2412.17481",
    codeHref: site.links.masSurvey,
  },
];

export const researchProjects: ResearchProject[] = [
  {
    title: "RL-Co",
    description:
      "RL-based sim-real co-training for improving Vision-Language-Action models in embodied tasks.",
    href: site.links.rlCo,
    imageSrc: "/img/projects/rl-co.png",
    imageAlt: "RL-Co overview diagram",
    paperHref: "https://arxiv.org/abs/2602.12628v2",
  },
  {
    title: "LLM-based Multi-Agent Systems",
    description:
      "A survey project organizing recent work on architectures, coordination mechanisms, applications, and evaluation of LLM-based multi-agent systems.",
    href: site.links.masSurvey,
    paperHref: "https://arxiv.org/abs/2412.17481",
    imageSrc: "/img/projects/survey.png",
    imageAlt: "LLM-based multi-agent systems overview diagram",
  },
];
