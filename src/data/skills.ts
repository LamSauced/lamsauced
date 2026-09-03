export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    group: 'Programming',
    items: ['Java', 'Python', 'BrightScript', 'Scenegraph'],
  },
  {
    group: 'Systems & Security',
    items: ['Windows Server', 'Malware remediation', 'Network monitoring'],
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
