import { RxLinkedinLogo } from 'react-icons/rx';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
export const SOCIALS = [
  {
    name: 'Upwork',
    icon: SiUpwork,
    link: 'https://www.upwork.com/freelancers/~01881e3af3a211f8e3',
  },
  {
    name: 'Fivver',
    icon: SiFiverr,
    link: 'https://www.fiverr.com/harisankar111?public_mode=true',
  },
  {
    name: 'Linkedin',
    icon: RxLinkedinLogo,
    link: 'https://www.linkedin.com/in/hari-sankar-2a1a20332/',
  },
] as const;
// types.ts (or wherever you store your constants)

// A helper type for a single skill
export type Skill = {
  skill_name: string;
  image: string;
  width: number;
  height: number;
};

// A type for the new categorized structure
export type SkillCategory = {
  title: string;
  skills: readonly Skill[];
};

// Your new, organized skill data
export const SKILL_CATEGORIES: Record<string, SkillCategory> = {
  frontend: {
    title: 'Frontend Development',
    skills: [
      { skill_name: 'JavaScript', image: 'js.png', width: 65, height: 65 },
      { skill_name: 'TypeScript', image: 'ts.png', width: 80, height: 80 },
      { skill_name: 'React', image: 'react.png', width: 80, height: 80 },
      { skill_name: 'Next.js 14', image: 'next.png', width: 80, height: 80 },
      { skill_name: 'Redux', image: 'redux.png', width: 80, height: 80 },
      {
        skill_name: 'React Query',
        image: 'reactquery.png',
        width: 80,
        height: 80,
      },
      {
        skill_name: 'Tailwind CSS',
        image: 'tailwind.png',
        width: 80,
        height: 80,
      },
      { skill_name: 'Material UI', image: 'mui.png', width: 80, height: 80 },
      {
        skill_name: 'Framer Motion',
        image: 'framer.png',
        width: 80,
        height: 80,
      },
    ],
  },
  backend: {
    title: 'Backend Development',
    skills: [
      { skill_name: 'Node.js', image: 'node.png', width: 80, height: 80 },
      { skill_name: 'Express.js', image: 'express.png', width: 80, height: 80 },
      {
        skill_name: 'PostgreSQL',
        image: 'postgresql.png',
        width: 70,
        height: 70,
      },
      { skill_name: 'MongoDB', image: 'mongodb.png', width: 40, height: 40 },
      { skill_name: 'MySQL', image: 'mysql.png', width: 70, height: 70 },
      { skill_name: 'Firebase', image: 'firebase.png', width: 55, height: 55 },
      { skill_name: 'Prisma', image: 'prisma.png', width: 70, height: 70 },
      { skill_name: 'Graphql', image: 'graphql.png', width: 80, height: 80 },
      { skill_name: 'Python', image: 'python.png', width: 70, height: 70 },
    ],
  },
  ai: {
    title: 'AI',
    skills: [
      // Populated with common AI/ML tools for a consultant
      { skill_name: 'Python', image: 'python.png', width: 70, height: 70 },
      {
        skill_name: 'Google ADK',
        image: 'gadk.png',
        width: 70,
        height: 70,
      },
      {
        skill_name: 'OpenAI agents',
        image: 'openai.png',
        width: 70,
        height: 70,
      },
      {
        skill_name: 'LangChain',
        image: 'langchain.png',
        width: 80,
        height: 80,
      },
      { skill_name: 'Pinecone', image: 'pinecone.png', width: 80, height: 80 },
      { skill_name: 'Livekit', image: 'livekit.png', width: 80, height: 80 },
    ],
  },
  automation: {
    title: 'Automation',
    skills: [
      // Populated with common Automation/DevOps tools
      { skill_name: 'Docker', image: 'docker.png', width: 70, height: 70 }, // Moved from FULLSTACK_SKILL
      {
        skill_name: 'N8N',
        image: 'n8n.png',
        width: 70,
        height: 70,
      },
      { skill_name: 'Stripe', image: 'stripe.png', width: 80, height: 80 },
    ],
  },
  mobile: {
    title: 'Mobile & Desktop',
    skills: [
      // Grouped from your FULLSTACK_SKILL list
      {
        skill_name: 'React Native',
        image: 'reactnative.png',
        width: 70,
        height: 70,
      },
      { skill_name: 'Kotlin', image: 'kotlin.png', width: 70, height: 70 },
      { skill_name: 'Electron', image: 'electron.png', width: 70, height: 70 }, // Added this as it's common
    ],
  },
};
export const FOOTER_DATA = [
  {
    title: 'Reach Me', // Already renamed from previous step
    data: [
      {
        name: 'Upwork',
        icon: SiUpwork,
        link: 'https://www.upwork.com/freelancers/~01881e3af3a211f8e3',
      },
      {
        name: 'Fiverr',
        icon: SiFiverr,
        link: 'https://www.fiverr.com/harisankar111?public_mode=true',
      },
      {
        name: 'LinkedIn',
        icon: RxLinkedinLogo,
        link: 'https://www.linkedin.com/in/hari-sankar-2a1a20332/',
      },
      {
        name: 'Email',
        icon: HiOutlineMail, // You'll need to import this or similar icon
        link: 'mailto:codeforyou4161@gmail.com',
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: 'About me',
    link: '/#about-me',
  },
  {
    title: 'Skills',
    link: '/#skills',
  },
  {
    title: 'Projects',
    link: '/#projects',
  },
] as const;

export const LINKS = {
  sourceCode: 'https://github.com/sanidhyy/space-portfolio',
};
