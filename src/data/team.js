const U = 'https://images.unsplash.com';
const face = (id) =>
  `${U}/${id}?auto=format&fit=crop&w=600&h=600&q=80`;

export const team = [
  {
    slug: 'ahmed-malik',
    name: 'Ahmed Malik',
    role: 'Founder & Principal Civil Engineer',
    image: face('photo-1560250097-0b93528c311a'),
    bio: 'Ahmed founded AMD Engineer Solution and leads the firm\u2019s engineering practice. He has delivered residential and commercial projects across the region with a focus on structural efficiency and buildability.',
    expertise: ['Structural Design', 'Project Delivery', 'Site Engineering'],
    linkedin: 'https://linkedin.com',
  },
  {
    slug: 'sara-noor',
    name: 'Sara Noor',
    role: 'Lead Architect',
    image: face('photo-1573497019940-1c28c88b4f3e'),
    bio: 'Sara leads the design studio, translating client briefs into functional and striking architectural plans, elevations and 3D visualisations.',
    expertise: ['Architectural Design', '3D Visualisation', 'Space Planning'],
    linkedin: 'https://linkedin.com',
  },
  {
    slug: 'bilal-hassan',
    name: 'Bilal Hassan',
    role: 'Senior Structural Engineer',
    image: face('photo-1507003211169-0a1dd7228f2d'),
    bio: 'Bilal is responsible for structural analysis and detailing of RCC and steel systems, ensuring every design is safe, efficient and code-compliant.',
    expertise: ['RCC & Steel Design', 'Foundation Design', 'Retrofitting'],
    linkedin: 'https://linkedin.com',
  },
  {
    slug: 'fatima-raza',
    name: 'Fatima Raza',
    role: 'Quantity Surveyor & Estimator',
    image: face('photo-1494790108377-be9c29b29330'),
    bio: 'Fatima prepares detailed quantity take-offs, bills of quantities and cost plans, giving clients a reliable financial baseline for their projects.',
    expertise: ['Cost Estimation', 'BOQ Preparation', 'Tendering'],
    linkedin: 'https://linkedin.com',
  },
  {
    slug: 'usman-tariq',
    name: 'Usman Tariq',
    role: 'Project Manager',
    image: face('photo-1500648767791-00dcc994a43e'),
    bio: 'Usman manages programmes, procurement and site coordination, keeping projects on schedule and stakeholders informed with clear reporting.',
    expertise: ['Construction Planning', 'Site Management', 'Procurement'],
    linkedin: 'https://linkedin.com',
  },
  {
    slug: 'hina-shah',
    name: 'Hina Shah',
    role: 'Site Engineer & Safety Officer',
    image: face('photo-1580489944761-15a19d654956'),
    bio: 'Hina supervises day-to-day site activities, verifies work quality and enforces the firm\u2019s safety-first approach on every active site.',
    expertise: ['Quality Control', 'Site Safety', 'Supervision'],
    linkedin: 'https://linkedin.com',
  },
];

export default team;
