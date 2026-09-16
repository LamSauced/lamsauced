export interface School {
  school: string;
  detail?: string;
  dates: string;
  current?: boolean;
  note?: string;
  points?: { label: string; text: string }[];
}

export const education: School[] = [
  {
    school: 'California Polytechnic State University — San Luis Obispo',
    detail: 'B.S. Computer Science',
    dates: 'Expected May 2028',
    current: true,
    note: 'Transferred from De Anza College',
    points: [
      {
        label: 'Relevant coursework',
        text: 'Databases, Systems Programming, Data Structures & Algorithms, Computer Architecture.',
      },
    ],
  },
  {
    school: 'De Anza College',
    detail: 'Computer Science & Engineering coursework',
    dates: '2024 – 2026',
    points: [
      {
        label: 'Coursework',
        text: 'Data Structures, x86 Assembly, MIPS Assembly, Linear Algebra, Differential Equations.',
      },
      {
        label: 'Activities',
        text: 'ACM Club and 3D Printing / CAD Club; collaborative hardware-software prototyping workshops.',
      },
    ],
  },
  {
    school: 'Mission College',
    detail: 'Computer Science',
    dates: 'Jan 2023 – Apr 2023',
  },
  {
    school: 'Santa Teresa High School',
    dates: 'Aug 2020 – Jun 2024',
  },
];
