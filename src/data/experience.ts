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
        bullets: [
          'Mentored ~30 incoming software engineering interns throughout the 2024 internship program, handling technical onboarding, architectural code reviews, and project guidance.',
          'Architected and deployed a full-stack React companion app with interactive BrightScript development guides and project documentation to streamline intern onboarding.',
        ],
      },
      {
        title: 'Software Programmer Intern',
        start: 'Jun 2023',
        end: 'Aug 2023',
        duration: '3 months',
        bullets: [
          'Independently mastered BrightScript and SceneGraph to build ~80% of a production-ready Roku TV application for a company-wide technical showcase.',
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
          'Hardened Windows Server systems and configured Active Directory security policies.',
          'Monitored incoming and outgoing requests, managed network users, and closed off malicious access.',
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
          'Directed robot software architecture and structured the team codebase for the 2023–2024 FRC season.',
          'Coached 10+ junior developers in Java, WPILib, and Git workflows.',
          'Communicated with other subteams and the project manager to ensure completion of the robot.',
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
        title: 'Assistant Scoutmaster',
        start: 'Aug 2024',
        end: 'Jun 2026',
        duration: '2 yrs',
        bullets: [
          'Served as assistant scoutmaster for two years while attending community college.',
        ],
      },
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
