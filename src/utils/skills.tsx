import { ReactNode } from 'react';
import { Icons } from '../components/Icons';

interface Skill {
  name: string;
  svg: ReactNode | null;
}

export const skills: Skill[] = [
  {
    name: 'Google Cloud Platform',
    svg: <Icons icon="devicon:googlecloud" />,
  },
  {
    name: 'Amazon Web Services',
    svg: <Icons icon="logos:aws" />,
  },
  {
    name: 'ReactJS',
    svg: <Icons icon="ri:reactjs-fill" color="#FFF" />,
  },
  {
    name: 'NextJS',
    svg: <Icons icon="teenyicons:nextjs-solid" />,
  },
  {
    name: 'NodeJS',
    svg: <Icons icon="fa6-brands:node" color="#66bb6a" />,
  },
  {
    name: 'StimulusJS',
    svg: <Icons icon="logos:stimulus-icon" />,
  },
  {
    name: 'Playwright',
    svg: <Icons icon="logos:playwright" />,
  },
  {
    name: 'Docker',
    svg: <Icons icon="logos:docker-icon" />,
  },
  {
    name: 'GitHub Actions',
    svg: <Icons icon="devicon:githubactions" />,
  },
  {
    name: 'Jira',
    svg: <Icons icon="logos:jira" />,
  },
  {
    name: 'Trello',
    svg: <Icons icon="logos:trello" />,
  },
  {
    name: 'PostgreSQL',
    svg: <Icons icon="logos:postgresql" />,
  },
  {
    name: 'Supabase',
    svg: <Icons icon="logos:supabase-icon" />,
  },
  {
    name: 'Linux',
    svg: <Icons icon="logos:linux-tux" />,
  },
  {
    name: 'Windows',
    svg: <Icons icon="logos:microsoft-windows-icon" />,
  },
  {
    name: 'JavaScript',
    svg: <Icons icon="vscode-icons:file-type-js-official" />,
  },
  {
    name: 'TypeScript',
    svg: <Icons icon="logos:typescript-icon" />,
  },
  {
    name: 'Ruby',
    svg: <Icons icon="logos:ruby" />,
  },
  {
    name: 'Go',
    svg: <Icons icon="devicon:go" />,
  },
  {
    name: 'Lua',
    svg: <Icons icon="logos:lua" />,
  },
  {
    name: 'Bash',
    svg: <Icons icon="skill-icons:bash-light" />,
  },
  {
    name: 'Git',
    svg: <Icons icon="devicon:git" />,
  },
  {
    name: 'GitHub',
    svg: <Icons icon="skill-icons:github-light" />,
  },
  {
    name: 'BitBucket',
    svg: <Icons icon="logos:bitbucket" />,
  },
];
