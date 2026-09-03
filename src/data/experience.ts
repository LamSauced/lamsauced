export interface Role {
  title: string;
  start: string;
  end: string;
  duration: string;
  bullets: string[];
}

export interface Organization {
  name: string;
  location: string;
  roles: Role[];
}

export const experience: Organization[] = [
  {
    name: 'Roku',
    location: 'San Jose, CA',
    roles: [
      {
        title: 'Intern Mentor',
        start: 'Jan 2024',
        end: 'Jul 2024',
        duration: '7 months',
        bullets: [],
      },
      {
        title: 'Software Programmer',
        start: 'Jun 2023',
        end: 'Aug 2023',
        duration: '3 months',
        bullets: [
          "In charge of programming a TV app for the team's workshop.",
          'Self-taught BrightScript and Scenegraph; coded ~80% of the app.',
        ],
      },
      {
        title: 'Vice President — Student Program',
        start: 'Aug 2022',
        end: 'Aug 2023',
        duration: '1 yr 1 mo',
        bullets: [
          'Managed student internship groups throughout the school year and on-site during the summer.',
          'Managed student paperwork, project progress, and fees.',
        ],
      },
    ],
  },
  {
    name: 'AFA CyberPatriot',
    location: 'San Jose, CA',
    roles: [
      {
        title: 'Windows Server Specialist',
        start: 'Aug 2023',
        end: 'Jun 2024',
        duration: '11 months',
        bullets: [
          'Secured Windows Server systems.',
          'Monitored incoming and outgoing requests.',
          'Managed network users and prevented malicious attacks.',
        ],
      },
      {
        title: 'Vice President',
        start: 'May 2023',
        end: 'Jun 2024',
        duration: '1 yr 2 mo',
        bullets: [
          'Assisted in managing club activities and operations.',
          'Trained people for cybersecurity competitions under the Air Force CyberPatriot organization.',
        ],
      },
      {
        title: 'Windows Specialist',
        start: 'Aug 2022',
        end: 'Aug 2023',
        duration: '1 yr 1 mo',
        bullets: [
          'Secured Windows systems and repaired vulnerabilities.',
          'Repaired instances of malware, registry issues, and persistent unwanted software.',
          'Competed to a State Round Platinum finish — the highest overall team score of that year.',
        ],
      },
    ],
  },
  {
    name: 'MESA (Mathematics, Engineering, Science Achievement)',
    location: 'San Jose, CA',
    roles: [
      {
        title: 'Vice President',
        start: 'May 2023',
        end: 'Jun 2024',
        duration: '1 yr 2 mo',
        bullets: [
          'Assisted in managing club projects and presentation materials.',
          'Handled paperwork within the club.',
          'Represented the club at Inter Club Council meetings.',
          "Represented the club's UCMC cohort.",
        ],
      },
    ],
  },
  {
    name: 'FRC Team 2643',
    location: 'San Jose, CA',
    roles: [
      {
        title: 'Programming Team Lead',
        start: 'May 2023',
        end: 'Jun 2024',
        duration: '1 yr 2 mo',
        bullets: [
          'Guided the direction of the programming team for the 2023–2024 FRC season.',
          'Communicated with other subteams and the project manager to ensure completion of the robot.',
          'Coached new programmers on robot code and Java.',
        ],
      },
      {
        title: 'Programmer',
        start: 'Aug 2022',
        end: 'May 2023',
        duration: '10 months',
        bullets: [
          'Worked on robot subsystem code.',
          'Familiarized myself with robot code syntax and logic.',
        ],
      },
    ],
  },
  {
    name: 'Boy Scouts of America',
    location: 'San Jose, CA',
    roles: [
      {
        title: 'Senior Patrol Leader',
        start: 'Jan 2021',
        end: 'Jan 2024',
        duration: '3 yrs 1 mo',
        bullets: [
          'Organized troop meetings.',
          'Educated youth in life skills.',
          'Developed leadership through communication with leaders and the troop.',
          'Life Scout working toward Eagle.',
        ],
      },
      {
        title: 'Scribe',
        start: 'Jan 2020',
        end: 'Jan 2021',
        duration: '1 yr 1 mo',
        bullets: [
          'Recorded meeting notes and minutes.',
          'Delivered important information between leaders and scouts.',
        ],
      },
    ],
  },
];
