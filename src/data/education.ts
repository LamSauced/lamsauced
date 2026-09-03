export interface School {
  school: string;
  detail?: string;
  dates: string;
  current?: boolean;
  note?: string;
}

export const education: School[] = [
  {
    school: 'California Polytechnic State University — San Luis Obispo',
    detail: 'B.S. Computer Science',
    dates: 'Aug 2026 – May 2028',
    current: true,
    note: 'Transferred from De Anza College',
  },
  {
    school: 'De Anza College',
    detail: 'Computer Science',
    dates: '2024 – 2026',
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
