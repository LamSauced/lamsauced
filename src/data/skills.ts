export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    group: 'Programming',
    items: ['C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'HTML', 'CSS', 'SQL', 'BrightScript', 'Scenegraph'],
  },
  {
    group: 'Systems & Security',
    items: ['Windows Server', 'Malware remediation', 'Network monitoring', 'x86 Assembly', 'MIPS Assembly'],
  },
  {
    group: 'Other',
    items: ['Research', 'Workforce Planning', 'Nonprofit Organizations'],
  },
  {
    group: 'Languages',
    items: ['English', 'Vietnamese (Professional Working)'],
  },
];
