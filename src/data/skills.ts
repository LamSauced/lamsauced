export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    group: 'Languages & Frameworks',
    items: [
      'Java',
      'Python',
      'C/C++',
      'JavaScript',
      'TypeScript',
      'SQL',
      'x86 Assembly',
      'MIPS Assembly',
      'R',
      'BrightScript',
      'React',
      'Astro',
      'Node.js',
      'HTML/CSS',
    ],
  },
  {
    group: 'Developer Tools & AI',
    items: [
      'Git',
      'Linux (Arch/CachyOS, Ubuntu, Fedora)',
      'Bash scripting',
      'GDB',
      'llama.cpp',
      'Ollama',
      'Fine-tuning (LoRA)',
      'OpenCV',
      'pandas',
      'NumPy',
      'Tidyverse',
    ],
  },
  {
    group: 'Hardware & Systems',
    items: [
      'Embedded systems',
      'CAD / 3D printing',
      'WPILib',
      'Windows Server administration',
      'Active Directory',
    ],
  },
  {
    group: 'Languages',
    items: ['English', 'Vietnamese (Professional Working)'],
  },
];
