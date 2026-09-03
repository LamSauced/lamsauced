export interface Project {
  name: string;
  description: string;
  tags: string[];
  url: string;
}

export const projects: Project[] = [
  {
    name: 'ClubHub',
    description:
      'A Roku TV app built during a summer internship with Roku. Self-taught BrightScript and Scenegraph — coded ~80% of the app.',
    tags: ['BrightScript', 'Scenegraph', 'Roku'],
    url: 'https://github.com/LamSauced/ClubHub',
  },
  {
    name: '2024-Code',
    description:
      'Robot code for FRC 2024 “Crescendo”, built as Programming Team Lead for Team 2643.',
    tags: ['Java', 'FRC'],
    url: 'https://github.com/2643/2024-Code',
  },
  {
    name: 'PoRTS',
    description: 'A Python project for waveform generation and analysis.',
    tags: ['Python'],
    url: 'https://github.com/LamSauced/PoRTS',
  },
];
