export interface Project {
  name: string;
  description: string;
  tags: string[];
  url?: string;
  context?: string;
}

export const projects: Project[] = [
  {
    name: 'Desktop AI Vision Assistant',
    description:
      'A floating-orb desktop overlay in PySide/Qt that continuously captures screen context and delivers real-time AI suggestions with sub-second latency. Wired screen capture into local and cloud multimodal LLMs, fine-tuned LLaMA 7B, and ran open-weight models (Gemma 2 27B, Qwen 2.5) through llama.cpp and Ollama.',
    tags: ['Python', 'OpenCV', 'PySide/Qt', 'Multimodal LLMs', 'llama.cpp', 'Ollama'],
    context: 'LA Hacks',
  },
  {
    name: 'Assistive Transcription Glasses & PoRTS',
    description:
      'A wearable assistive-technology prototype for Deaf and hard-of-hearing users, with custom 3D-printed CAD enclosures and integrated circuitry. The Linux/Python companion app uses Bash scripting for system service automation, CAVA audio visualization, and automated timestamped note generation.',
    tags: ['Python', 'Linux', 'CAVA', 'Bash', '3D CAD'],
    url: 'https://github.com/LamSauced/PoRTS',
    context: 'Personal project',
  },
  {
    name: 'Piezoelectric Energy Harvesting Floor Tile',
    description:
      'A modular floor tile that converts foot traffic into electrical power. Owned the embedded hardware integration and CAD design, and earned two monetary S4CA Product Showcase Awards for the green-energy concept and proof of execution.',
    tags: ['C/C++', 'Embedded', 'CAD / 3D Printing'],
    context: 'S4CA Showcase Award',
  },
  {
    name: 'FRC Crescendo Autonomous Robot',
    description:
      "Swerve drive control supporting field- and robot-relative modes on WPILib's command-based architecture, plus Limelight/OpenCV target tracking and a PhotonVision prototype on an Orange Pi 5 for autonomous trajectory planning and vision-guided scoring.",
    tags: ['Java', 'WPILib', 'PathPlanner', 'OpenCV', 'Limelight'],
    url: 'https://github.com/2643/2024-Code',
    context: 'Team 2643',
  },
  {
    name: 'ClubHub',
    description:
      'A production-ready Roku TV app built for a company-wide technical showcase. Self-taught BrightScript and SceneGraph over the summer and coded ~80% of the app.',
    tags: ['BrightScript', 'SceneGraph', 'Roku'],
    url: 'https://github.com/LamSauced/ClubHub',
    context: 'Roku internship',
  },
  {
    name: 'Low-Level Systems & Assembly Programming',
    description:
      'Assembly and C modules implementing low-level bitwise operations, custom bitmasking procedures, register manipulation, and memory-mapped I/O hardware device drivers.',
    tags: ['x86 Assembly', 'MIPS', 'C', 'GDB'],
    context: 'Academic project',
  },
];
