const U = 'https://images.unsplash.com';
const img = (id, w = 1200) =>
  `${U}/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const services = [
  {
    slug: 'residential-building-construction',
    icon: 'Home',
    title: 'Residential Building Construction',
    short:
      'Complete construction of houses, villas and multi-storey residential blocks, delivered to specification and budget.',
    description:
      'From single-family homes to multi-storey apartment buildings, we manage residential construction end to end. Our team handles foundations, structural framing, masonry, services coordination and finishes with documented quality checks at each stage.',
    image: img('photo-1580587771525-78b9dba3b914'),
    benefits: [
      'Fixed, itemised cost plan agreed before work starts',
      'Qualified site supervision on every active day',
      'Material testing and documented quality control',
      'Practical layouts designed around how you live',
    ],
    applications: [
      'Single and double-storey family homes',
      'Residential villas and farmhouses',
      'Multi-storey apartment buildings',
      'Guest houses and staff accommodation',
    ],
  },
  {
    slug: 'commercial-building-construction',
    icon: 'Building2',
    title: 'Commercial Building Construction',
    short:
      'Offices, retail spaces, hospitality and mixed-use buildings engineered for performance and footfall.',
    description:
      'We build commercial spaces that balance structural efficiency with the operational needs of a business. Coordination with MEP systems, façade design and phased handover keeps tenants and budgets protected.',
    image: img('photo-1554435493-93422e8220c8'),
    benefits: [
      'Phased construction to reduce business downtime',
      'Coordination with mechanical, electrical and plumbing works',
      'Façade and finishes executed to brand standards',
      'Structural systems optimised for column-free spans',
    ],
    applications: [
      'Corporate office buildings',
      'Retail outlets and shopping complexes',
      'Hotels, restaurants and hospitality venues',
      'Mixed-use commercial developments',
    ],
  },
  {
    slug: 'civil-engineering-consultancy',
    icon: 'PencilRuler',
    title: 'Civil Engineering Consultancy',
    short:
      'Professional advice on feasibility, site development, structural stability and regulatory compliance.',
    description:
      'Our consultancy service supports clients who need expert civil engineering input before, during or after construction. We review site conditions, assess feasibility and recommend practical, code-compliant engineering solutions.',
    image: img('photo-1581092160562-40aa08e78837'),
    benefits: [
      'Independent, technically grounded recommendations',
      'Feasibility and risk assessment before you commit',
      'Support with permits and code compliance',
      'Clear written reports you can act on',
    ],
    applications: [
      'Pre-purchase site and structural assessments',
      'Feasibility studies for new developments',
      'Structural adequacy reports for existing buildings',
      'Regulatory and code compliance reviews',
    ],
  },
  {
    slug: 'structural-design-engineering',
    icon: 'Ruler',
    title: 'Structural Design & Engineering',
    short:
      'Analysis and design of reinforced concrete and steel structures that are safe, efficient and buildable.',
    description:
      'We carry out structural analysis and detailed design for RCC and steel systems, including foundation, beam, column and slab design. Designs are optimised for material efficiency while meeting the governing design codes.',
    image: img('photo-1503387762-592deb58ef4e'),
    benefits: [
      'Material-efficient designs that reduce cost',
      'Code-compliant calculations and drawings',
      'Buildable detailing reviewed with site teams',
      'Retrofit and strengthening solutions for existing structures',
    ],
    applications: [
      'Reinforced concrete frame buildings',
      'Structural steel frames and industrial sheds',
      'Foundation and retaining wall design',
      'Seismic retrofitting and strengthening',
    ],
  },
  {
    slug: 'architectural-planning-design',
    icon: 'Compass',
    title: 'Architectural Planning & Design',
    short:
      'Functional, buildable architectural layouts, elevations and 3D visualisations from concept to working drawings.',
    description:
      'Our design studio develops concept plans, elevations, sections and 3D visualisations, then converts them into coordinated working drawings ready for construction. We plan for light, ventilation, circulation and future flexibility.',
    image: img('photo-1503389152951-9f343605f61e'),
    benefits: [
      'Concept to working drawings under one roof',
      '3D visualisation before construction begins',
      'Layouts optimised for light and ventilation',
      'Coordinated architectural and structural drawings',
    ],
    applications: [
      'New residential and commercial design',
      'Interior layout planning',
      'Planning approval and permit drawings',
      'Landscape and site planning',
    ],
  },
  {
    slug: 'building-estimation-costing',
    icon: 'Calculator',
    title: 'Building Estimation & Costing',
    short:
      'Detailed quantity take-off, BOQ preparation and realistic construction cost planning you can budget against.',
    description:
      'We prepare detailed quantity take-offs, bill of quantities and cost breakdowns based on current material and labour rates. Our estimates give clients and contractors a reliable financial baseline for decision making.',
    image: img('photo-1454165804606-c3d57bc86b40'),
    benefits: [
      'Itemised BOQ with clear quantities and rates',
      'Realistic costs based on current market rates',
      'Support for tender preparation and comparison',
      'Cash-flow and staged payment forecasting',
    ],
    applications: [
      'Pre-construction project budgeting',
      'Tender and contract documentation',
      'Construction cost monitoring and variation review',
      'Material quantity verification on site',
    ],
  },
  {
    slug: 'renovation-remodeling',
    icon: 'Hammer',
    title: 'Renovation & Remodeling',
    short:
      'Transform existing homes and commercial spaces with structural upgrades, modern layouts and quality finishes.',
    description:
      'We renovate and remodel occupied and vacant properties, including structural alterations, layout changes, services upgrades and new finishes. Work is planned carefully to protect existing structure and minimise disruption.',
    image: img('photo-1600607687939-ce8a6c25118c'),
    benefits: [
      'Structural alterations assessed before work starts',
      'Phased schedules to minimise disruption',
      'Modern, durable finishes and materials',
      'Dust, waste and noise controls on occupied sites',
    ],
    applications: [
      'Kitchen and bathroom remodelling',
      'Full interior renovation and re-planning',
      'Office fit-out and refurbishment',
      'Facade and roofing upgrades',
    ],
  },
  {
    slug: 'site-supervision-project-management',
    icon: 'ClipboardCheck',
    title: 'Site Supervision & Project Management',
    short:
      'Day-to-day site supervision, contractor coordination, quality checks and progress reporting on your behalf.',
    description:
      'Acting as the client\u2019s representative, we supervise site works, verify quality, track progress against schedule and manage contractor communication. Regular written reports keep you informed without needing to be on site.',
    image: img('photo-1504307651254-35680f356dfd'),
    benefits: [
      'Independent quality verification on site',
      'Progress tracked against agreed programme',
      'Regular photographic and written reporting',
      'Professional management of contractor claims',
    ],
    applications: [
      'Client-side project management',
      'Contractor and vendor coordination',
      'Quality assurance and snag management',
      'Construction progress monitoring',
    ],
  },
  {
    slug: 'construction-planning',
    icon: 'CalendarRange',
    title: 'Construction Planning',
    short:
      'Programme development, resource planning and procurement scheduling that keep projects on time.',
    description:
      'We build realistic construction programmes, sequence activities logically, plan resources and schedule procurement so materials and labour arrive when required. This reduces delays, rework and cost overruns.',
    image: img('photo-1541888946425-d81bb19240f5'),
    benefits: [
      'Realistic programmes with clear milestones',
      'Logical activity sequencing and dependencies',
      'Procurement and material delivery planning',
      'Contingency built into the schedule',
    ],
    applications: [
      'Master construction programme development',
      'Resource and labour planning',
      'Procurement and delivery scheduling',
      'Delay analysis and recovery planning',
    ],
  },
  {
    slug: 'infrastructure-development',
    icon: 'TrafficCone',
    title: 'Infrastructure Development',
    short:
      'Roads, drainage, foundations and site development works that prepare land for construction.',
    description:
      'We deliver local infrastructure works including access roads, drainage systems, retaining structures, boundary works and external site development, coordinated with the main building programme.',
    image: img('photo-1541976590-713941681591'),
    benefits: [
      'Proper drainage and water management',
      'Durable road and pavement construction',
      'Efficient earthworks and site levelling',
      'Coordinated with building programme',
    ],
    applications: [
      'Internal roads and access ways',
      'Stormwater and drainage networks',
      'Retaining walls and boundary structures',
      'Site levelling and earthworks',
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);

export default services;
