export const site = {
  title: "Shuaihang Chen",
  role: "Robotics PhD Candidate",
  affiliation: "Zhongguancun Academy",
  bio: "Scalable offline RL on large robot datasets and real-world evaluation for action-model pretraining.",
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
    laWam: "https://rlinf.github.io/LaWAM/",
    tex3d: "https://vla-attack.github.io/tex3d/",
    steam: "https://rlinf.github.io/steam/",
  },
  emailText: "s-chensh24 [at] bza [dot] edu [dot] cn",
  footer: "Shuaihang Chen, 2024-2026",
};

export type TextSegment = { text: string; href?: string; strong?: boolean };

export type NewsItem = {
  date: string;
  text: TextSegment[];
};

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
    { text: "My primary research focus is ", strong: false },
    { text: "scalable offline reinforcement learning on large robot datasets", strong: true },
    {
      text: " for robot policies. I study how to improve embodied policies from large, heterogeneous collections of offline robot trajectories.",
    },
  ],
  [
    { text: "In parallel, I work on ", strong: false },
    { text: "large-scale real-world robot evaluation for Homebody action-model pretraining", strong: true },
    {
      text: ", studying how pretrained action representations transfer to downstream manipulation tasks through systematic evaluation on real robots.",
    },
  ],
  [
    { text: "Previously, I explored " },
    { text: "reward modeling for VLA post-training", strong: true },
    { text: " and built the supporting post-training infrastructure in " },
    { text: "RLinf", href: site.links.rlinf, strong: true },
    {
      text: ". This line of work resulted in ",
    },
    { text: "STEAM", strong: true },
    { text: "." },
  ],
  [
    { text: "Before that, I worked on " },
    { text: "latent action models", strong: true },
    { text: ", resulting in " },
    { text: "LaWAM", href: site.links.laWam, strong: true },
    { text: "." },
  ],
  [
    { text: "Earlier, I developed " },
    { text: "RL-Co", href: site.links.rlCo, strong: true },
    {
      text: ", a two-stage framework for reinforcement-learning-based sim-real co-training of Vision-Language-Action models.",
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
  "Scalable offline reinforcement learning on large robot datasets",
  "Action Model Pretraining",
];

export const newsItems: NewsItem[] = [
  {
    date: "2026.09",
    text: [
      { text: "RL-Co", href: site.links.rlCo },
      { text: " was accepted to CoRL 2026." },
    ],
  },
  {
    date: "2026.09",
    text: [
      { text: "A paper I co-authored, " },
      { text: "LaWAM", href: site.links.laWam },
      { text: ", was accepted to CoRL 2026." },
    ],
  },
  {
    date: "2026.09",
    text: [
      { text: "A paper I co-authored, " },
      { text: "Tex3D", href: site.links.tex3d },
      { text: ", was accepted to ACM MM 2026." },
    ],
  },
  {
    date: "2026.02",
    text: [
      { text: "Released " },
      { text: "RL-Co", href: site.links.rlCo },
      { text: ", a sim-real co-training project for reinforcement learning with VLA models." },
    ],
  },
  {
    date: "2024.12",
    text: [{ text: "Posted a survey on LLM-based multi-agent systems." }],
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
    title: "STEAM: Self-Supervised Temporal Ensemble Advantage Modeling for Real-World Robot Learning",
    authors: "Zhihao Liu, Qiuyi Gu, Yitao Wang, Dongming Qiao, Yixian Zhang, Shuaihang Chen, Liangzhi Shi, Tianxing Zhou, Zefang Huang, Kang Chen, Zhen Guo, Quanlu Zhang, Jincheng Yu, Xiaodan Liang, Guoliang Fan, Yu Wang, Feng Gao, Xinlei Chen, Chao Yu",
    venue: "arXiv preprint, 2026.",
    description: "Self-supervised frame-level advantage modeling for learning from mixed-quality real-robot trajectories.",
    paperHref: "https://arxiv.org/abs/2606.29834",
    projectHref: site.links.steam,
  },
  {
    title: "LaWAM: Latent World Action Models for Efficient Dynamics-Aware Robot Policies",
    authors: "Jialei Chen, Kai Wang, Kang Chen, Shuaihang Chen, Feng Gao, Wenhao Tang, Zhiyuan Li, Weilin Liu, Zhuyu Yao, Boxun Li, Yuanbo Xu, Chao Yu",
    venue: "Conference on Robot Learning (CoRL), 2026.",
    description: "Dynamics-aware robot policies conditioned on compact latent visual subgoals.",
    paperHref: "https://arxiv.org/abs/2606.15768",
    projectHref: site.links.laWam,
  },
  {
    title: "Tex3D: Objects as Attack Surfaces via Adversarial 3D Textures for Vision-Language-Action Models",
    authors: "Jiawei Chen, Simin Huang, Jiawei Du, Shuaihang Chen, Yu Tian, Mingjie Wei, Chao Yu, Zhaoxia Yin",
    venue: "ACM International Conference on Multimedia (ACM MM), 2026.",
    description: "Physically grounded 3D texture attacks that reveal vulnerabilities in vision-language-action models.",
    paperHref: "https://arxiv.org/abs/2604.01618",
    projectHref: site.links.tex3d,
  },
  {
    title: "Beyond Imitation: Reinforcement Learning-Based Sim-Real Co-Training for VLA Models",
    authors: "Liangzhi Shi, Shuaihang Chen, Feng Gao, Yinuo Chen, Kang Chen, Tonghe Zhang, Hongzhi Zang, Jiakai Zhou, Weinan Zhang, Chao Yu, Yu Wang",
    venue: "Conference on Robot Learning (CoRL), 2026.",
    description: "A two-stage RL-based sim-real co-training framework for real-world VLA policies.",
    paperHref: "https://arxiv.org/abs/2602.12628",
    projectHref: site.links.rlCo,
    imageSrc: "/img/projects/rl-co.png",
    imageAlt: "RL-Co overview diagram",
  },
  {
    title: "A Survey on LLM-based Multi-Agent System: Recent Advances and New Frontiers in Application",
    authors: "Shuaihang Chen, Yuanxing Liu, Wei Han, Weinan Zhang, Ting Liu",
    venue: "arXiv preprint, 2024.",
    description: "A survey of LLM-based multi-agent systems, their applications, challenges, and future directions.",
    paperHref: "https://arxiv.org/abs/2412.17481",
    codeHref: site.links.masSurvey,
    imageSrc: "/img/projects/survey.png",
    imageAlt: "LLM-based multi-agent systems overview diagram",
  },
];
