export type Project = {
  id: string;
  slug: string;
  title: string;
  year: number;
  role: string;
  thumbnail: string;
  description: string;
  keyFeatures: string[];
  platform: string;
  techStack: string[];
};

export const projects: Project[] = [
  {
    id: 'scentify',
    slug: 'scentify',
    title: 'Scentify',
    year: 2026,
    role: 'Project Manager, Lead Back-End & AI Engineer',
    thumbnail: '/scentify.png',
    description: 'An advanced perfume e-commerce platform equipped with an AI assistant named "Scenty". This project focuses on integrating traditional e-commerce with a search experience based on RAG and Hybrid Search.',
    keyFeatures: [
      'Laravel MVC architecture with a 27-table relational database',
      'Integration of "Scenty" AI Chatbot using RAG (Retrieval-Augmented Generation)',
      'Hybrid Search for accurate product discovery',
      'Utilization of Hugging Face API',
      'Security mitigation against prompt injection'
    ],
    platform: 'Web Application',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Python', 'AI / RAG', 'Hugging Face API', 'Tailwind CSS']
  },
  {
    id: 'nekochef',
    slug: 'nekochef',
    title: 'Nekochef',
    year: 2025,
    role: 'Project Manager, System & Database Designer',
    thumbnail: '/nekochef.png',
    description: 'An innovative culinary application for sweet potato ball MSMEs. Focused on designing a user-friendly system from the requirements analysis phase to interactive prototype creation.',
    keyFeatures: [
      'System requirements analysis for MSMEs',
      'Modern and responsive UI/UX prototyping',
      'End-to-end project management'
    ],
    platform: 'UI/UX Prototype (Desktop)',
    techStack: ['Figma', 'System Analysis']
  },
  {
    id: 'pharmaplus',
    slug: 'pharmaplus',
    title: 'PharmaPlus Application',
    year: 2025,
    role: 'Programmer & Database Designer',
    thumbnail: '/pharmaplus.png',
    description: 'A desktop-based pharmacy management system to simplify medical inventory and transaction management.',
    keyFeatures: [
      'Complex relational database design for medical inventory',
      'Interactive Graphical User Interface (GUI) using JavaSwing',
      'Collaborative team development (5 members)'
    ],
    platform: 'Desktop Application',
    techStack: ['Java', 'JavaSwing', 'MySQL']
  },
  {
    id: 'silent-help-uc',
    slug: 'silent-help-uc',
    title: 'Silent Help UC',
    year: 2026,
    role: 'Full Stack Developer',
    thumbnail: '/silent-help.png',
    description: 'A personal project consisting of a community support website platform specifically designed for the Universitas Ciputra environment (prototype).',
    keyFeatures: [
      "Database-driven App State",
      'User Authentication dan Authorization',
      'Chat / Conversations',
      'Security & Access Control',
      'Community support platform for students',
      'Clean and user-friendly interface design'
    ],
    platform: 'Web Application',
    techStack: ['HTML', 'CSS', 'PHP', 'MySQL', 'React']
  },
  {
    id: 'synapse-website',
    slug: 'synapse-website',
    title: 'Synapse Website',
    year: 2025,
    role: 'UI/UX Designer & Front-End Developer',
    thumbnail: '/synapse.png',
    description: 'The official website for the ISB Student Union "Synapse Cabinet". Aimed at optimizing the layout and UI of the student organization website.',
    keyFeatures: [
      'Responsive and modern interface design',
      'Implementation of a production-ready template aligned with cabinet branding',
      'Front-End integration with Laravel backend'
    ],
    platform: 'Web Application',
    techStack: ['Laravel', 'PHP', 'HTML', 'CSS', 'Bootstrap']
  },
  {
    id: 'epic-website',
    slug: 'epic-website',
    title: 'Epic 2026 Website',
    year: 2025,
    role: 'Back-End Developer',
    thumbnail: '/epic.png',
    description: 'Co-developed the Epic Event Website using Laravel to support the real-time operations of the Epic National Competition 2026. This platform digitized a multi-station "Rally" and an "Escape Room" puzzle challenge by integrating a secure backend with Google Sheets, enabling dynamic team authentication, live game tracking, and optimized real-time leaderboards.',
    keyFeatures: [
      'Interactive Game Modules',
      'Asynchronous Webhooks & Integration',
      'High-Traffic Optimization',
      'Defensive Data Management',
      'Google Sheets API Integration'
    ],
    platform: 'Web Application',
    techStack: ['Laravel', 'PHP', 'HTML', 'CSS', 'Bootstrap', 'Google Sheets API']
  }
];
