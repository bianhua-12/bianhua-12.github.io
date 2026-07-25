export const site = {
  title: "Shuaihang Chen",
  role: "Robotics PhD Candidate",
  affiliation: "Zhongguancun Academy & HIT",
  bio: "Robot reward modeling, VLA post-training, and reinforcement-learning-based sim-real co-training.",
  links: {
    github: "https://github.com/bianhua-12/",
    scholar: "https://scholar.google.com/citations?user=mvKthu0AAAAJ&hl=zh-CN",
    x: "https://x.com/shuaihangEAI/",
    rlinf: "https://github.com/RLinf/RLinf",
    masSurvey: "https://github.com/bianhua-12/Multi-generative_Agent_System_survey",
    chaoYu: "https://zoeyuchao.github.io/",
    weiNanZhang: "https://homepage.hit.edu.cn/zhangweinan",
    dtGroup: "http://81.70.39.211:2611/",
    rlCo: "https://rl-co-training.github.io/",
  },
  emailText: "s-chensh24 [at] bza [dot] edu [dot] cn",
  footer: "Shuaihang Chen, 2024-2026",
};

export type TextSegment = { text: string; href?: string; strong?: boolean };

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  description: string;
  paperHref?: string;
  projectHref?: string;
  codeHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type EngineeringContribution = {
  eyebrow: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
};

export const aboutParagraphs: TextSegment[][] = [
  [
    { text: "I am a ", strong: false },
    { text: "Robotics PhD candidate", strong: true },
    { text: " in the joint program between Zhongguancun Academy and Harbin Institute of Technology, advised by " },
    { text: "Chao Yu", href: site.links.chaoYu },
    { text: "." },
  ],
  [
    { text: "My research centers on ", strong: false },
    { text: "robot reward modeling for Vision-Language-Action (VLA) post-training", strong: true },
    {
      text: ". I study how to learn scalable progress, quality, and value signals from mixed-quality robot trajectories, with the goal of building general-purpose reward and value models that can evaluate and improve policies on real-world manipulation tasks.",
    },
  ],
  [
    { text: "I also work on reinforcement-learning-based sim-real co-training. In " },
    { text: "RL-Co", href: site.links.rlCo, strong: true },
    {
      text: ", I led end-to-end OpenVLA post-training and evaluation across four real-world manipulation tasks. Our two-stage recipe improved average success rate from 40% to 64% over a behavior-cloning-based sim-real co-training baseline, while using reinforcement learning in simulation with real-data regularization.",
    },
  ],
  [
    { text: "Alongside algorithmic research, I build reliable VLA post-training infrastructure and contribute to " },
    { text: "RLinf", href: site.links.rlinf, strong: true },
    {
      text: ", with a focus on reward-model serving, training correctness, and scalable evaluation pipelines for embodied reinforcement learning.",
    },
  ],
  [
    { text: "Before starting my PhD, I received my B.Eng. in Software Engineering from HIT, where I worked with the " },
    { text: "DT Group", href: site.links.dtGroup },
    { text: " at SCIR-DT under " },
    { text: "Prof. Wei-Nan Zhang", href: site.links.weiNanZhang },
    { text: "." },
  ],
];

export const researchInterests = [
  "Robot reward, value, and advantage modeling for VLA post-training",
  "Learning from mixed-quality robot trajectories",
  "RL-based sim-real co-training for real-world manipulation",
  "Scalable VLA training and evaluation infrastructure",
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

export const engineeringContributions: EngineeringContribution[] = [
  {
    eyebrow: "RLinf · Reward infrastructure",
    title: "SGLang-backed VLM reward serving for embodied RL",
    description:
      "Designed and upstreamed an OpenAI-compatible reward worker and a Ray-managed SGLang serving path for history-based VLM rewards. The work includes ManiSkill/Qwen examples, installation and CI coverage, documentation, and 2-GPU end-to-end validation; it also fixes a routing mismatch that could deadlock environment and rollout workers.",
    links: [
      {
        label: "Merged PR #1314",
        href: "https://github.com/RLinf/RLinf/pull/1314",
      },
      {
        label: "Earlier exploration #1128",
        href: "https://github.com/RLinf/RLinf/pull/1128",
      },
      {
        label: "Earlier exploration #1191",
        href: "https://github.com/RLinf/RLinf/pull/1191",
      },
    ],
  },
  {
    eyebrow: "RL-Co · Training correctness",
    title: "Restoring the intended sim-real co-training objective",
    description:
      "Found and fixed a silent optimization bug in RLinf's RL-Co path: the weighted SFT loss was computed and logged but did not contribute to backpropagation. The merged patch restores joint optimization of the reinforcement-learning and supervised objectives.",
    links: [
      {
        label: "Merged bug fix #1368",
        href: "https://github.com/RLinf/RLinf/pull/1368",
      },
      {
        label: "RL-Co project",
        href: "https://rl-co-training.github.io/",
      },
    ],
  },
];

export const publications: Publication[] = [
  {
    title: "RL-Co: RL-based Sim-Real Co-training for Vision-Language-Action Models",
    authors: "Shuaihang Chen et al.",
    venue: "arXiv preprint, 2026.",
    description:
      "RL-based sim-real co-training for improving Vision-Language-Action models in embodied tasks.",
    paperHref: "https://arxiv.org/abs/2602.12628",
    projectHref: site.links.rlCo,
    imageSrc: "/img/projects/rl-co.png",
    imageAlt: "RL-Co overview diagram",
  },
  {
    title: "A Survey on LLM-based Multi-Agent Systems",
    authors: "Shuaihang Chen et al.",
    venue: "arXiv preprint, 2024.",
    description:
      "A survey project organizing recent work on architectures, coordination mechanisms, applications, and evaluation of LLM-based multi-agent systems.",
    paperHref: "https://arxiv.org/abs/2412.17481",
    codeHref: site.links.masSurvey,
    imageSrc: "/img/projects/survey.png",
    imageAlt: "LLM-based multi-agent systems overview diagram",
  },
];
