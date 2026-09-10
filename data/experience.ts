export type Experience = {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    id: 'su-isb-president',
    role: 'President',
    organization: 'Student Union ISB (Catalyst Cabinet)',
    period: '2026 - 2027',
    description: 'Led the "Catalyst Cabinet", directing strategic vision, collaborating with various committees, and managing the organization\'s assets and visual identity.'
  },
  {
    id: 'oweek-sid',
    role: 'SID Member',
    organization: 'Oweek 2026',
    period: '2026',
    description: 'Responsible for crowd management, discipline enforcement, and ensuring the order of all participants and committees during the largest orientation event at Universitas Ciputra.'
  },
  {
    id: 'kyouhiroo',
    role: 'Inventory Coordinator',
    organization: 'Kyouhiroo 2.0',
    period: '2025',
    description: 'Managed logistics and material procurement for a community service event. This event taught Japanese culture, such as making bento and lanterns, to children.'
  },
  {
    id: 'su-isb-digital',
    role: 'Digital Innovation Member (UI/UX Designer & Front-End Dev)',
    organization: 'Student Union ISB (Synapse Cabinet)',
    period: '2025 - 2026',
    description: 'Served in the "Synapse Cabinet" to design responsive interfaces and independently implemented Laravel, PHP, HTML, CSS, and Bootstrap to build the organization\'s website.'
  }
];
