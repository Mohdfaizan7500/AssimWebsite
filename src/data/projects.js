const U = 'https://images.unsplash.com';
const img = (id, w = 1400) =>
  `${U}/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const categories = [
  'All',
  'Residential',
  'Commercial',
  'Industrial',
  'Infrastructure',
  'Renovation',
];

export const projects = [
  {
    slug: 'modern-residential-villa',
    name: 'Modern Residential Villa',
    category: 'Residential',
    type: 'Private Residence',
    location: 'Hillview Estate, Springfield',
    year: 2024,
    client: 'Private Client',
    area: '5,400 sq ft',
    duration: '14 months',
    cover: img('photo-1600585154340-be6161a56a0c'),
    gallery: [
      img('photo-1600585154340-be6161a56a0c'),
      img('photo-1600566753086-00f18fb6b3ea'),
      img('photo-1600607687939-ce8a6c25118c'),
      img('photo-1600585154526-990dced4db0d'),
    ],
    short:
      'A two-storey contemporary family villa with a double-height living space, cantilevered balcony and landscaped garden.',
    overview:
      'This contemporary villa was designed and built for a private family on a sloping plot. The design uses a reinforced concrete frame with large glazed openings, a double-height living area and a cantilevered front balcony. Site work included retaining structures and coordinated landscaping.',
    scopeOfWork: [
      'Architectural planning and 3D visualisation',
      'Structural design of the RCC frame and retaining walls',
      'Foundation, framing, masonry and waterproofing',
      'Full interior and exterior finishes',
      'Landscaping and boundary wall construction',
    ],
    constructionDetails: [
      'Reinforced concrete framed structure across two storeys',
      'Treated foundation raft suited to the sloping site',
      'Double-glazed aluminium window systems',
      'External textured paint with weather-resistant sealer',
    ],
    challenges: [
      {
        challenge: 'The plot has a significant slope of about 2.5 metres across its width.',
        solution:
          'We used a stepped foundation design with a reinforced retaining wall, levelling the building platform without importing large volumes of fill.',
      },
      {
        challenge: 'The client requested a wide cantilevered balcony with an uninterrupted view.',
        solution:
          'Structural depth was increased locally and reinforcement detailed to control deflection, achieving the clean cantilever without visible supports.',
      },
    ],
    highlights: [
      'Completed two weeks ahead of the agreed handover date',
      'Zero reportable safety incidents across the build',
      'Achieved the target thermal insulation rating',
    ],
  },
  {
    slug: 'multi-storey-residential-building',
    name: 'Multi-Storey Residential Building',
    category: 'Residential',
    type: 'Apartment Building',
    location: 'Central District, Springfield',
    year: 2023,
    client: 'Riverside Developers',
    area: '28,000 sq ft',
    duration: '22 months',
    cover: img('photo-1479839672679-a46483c0e7c8'),
    gallery: [
      img('photo-1479839672679-a46483c0e7c8'),
      img('photo-1512917774080-9991f1c4c750'),
      img('photo-1493397212122-2b85dda8106b'),
      img('photo-1486406146926-c627a92ad1ab'),
    ],
    short:
      'A six-storey residential building with 18 apartments, covered parking and a shared rooftop amenity area.',
    overview:
      'Delivered for a residential developer, this six-storey building provides 18 apartments over covered parking. The project used a repetitive concrete frame to speed up construction, with a lift core and shared rooftop amenity space.',
    scopeOfWork: [
      'Structural design and detailing of the concrete frame',
      'Construction of foundation, frame and lift core',
      'Apartment fit-out and common area finishes',
      'Electrical, plumbing and fire services coordination',
      'Rooftop waterproofing and amenity construction',
    ],
    constructionDetails: [
      'Repetitive beam-and-slab concrete frame over six levels',
      'Cast-in-place lift shaft with structural shear walls',
      'Cement-based and membrane waterproofing to roof and wet areas',
      'Painted masonry façade with aluminium glazing',
    ],
    challenges: [
      {
        challenge: 'The urban site had very limited space for material storage and crane access.',
        solution:
          'We sequenced deliveries just-in-time and used a tower crane with a coordinated lifting plan shared with suppliers.',
      },
      {
        challenge: 'Noise restrictions limited working hours near neighbouring homes.',
        solution:
          'Noisy operations were scheduled into permitted windows and quieter methods were used outside them.',
      },
    ],
    highlights: [
      'All 18 units handed over on the original completion date',
      'Structural work completed within the material budget',
      'Resident amenity block delivered as an added value item',
    ],
  },
  {
    slug: 'commercial-office-complex',
    name: 'Commercial Office Complex',
    category: 'Commercial',
    type: 'Office Development',
    location: 'Business Bay, Springfield',
    year: 2024,
    client: 'Meridian Business Group',
    area: '42,000 sq ft',
    duration: '20 months',
    cover: img('photo-1554435493-93422e8220c8'),
    gallery: [
      img('photo-1554435493-93422e8220c8'),
      img('photo-1524758631624-e2822e304c36'),
      img('photo-1497366754035-f200968a6e72'),
      img('photo-1497366811353-6870744d04b2'),
    ],
    short:
      'A five-storey office complex with column-free floor plates, a glazed curtain wall and structured parking.',
    overview:
      'This commercial office complex was built for a business group seeking flexible, open floor plates. Long-span concrete beams created column-free office spaces, while a glazed curtain wall provides daylight and a professional street presence.',
    scopeOfWork: [
      'Structural design optimised for long spans',
      'Curtain wall and glazing installation',
      'Interior fit-out of office floors and lobby',
      'HVAC, electrical and data infrastructure coordination',
      'External works, paving and landscaping',
    ],
    constructionDetails: [
      'Post-tensioned and long-span reinforced concrete slabs',
      'Unitised glazed curtain wall system',
      'Raised access floors for services distribution',
      'Sprinkler and alarm systems throughout',
    ],
    challenges: [
      {
        challenge: 'The client required column-free office floors for flexible layouts.',
        solution:
          'We used a long-span beam system and post-tensioned slabs to remove internal columns from the floor plates.',
      },
      {
        challenge: 'The project needed phased handover so the client could occupy lower floors early.',
        solution:
          'We planned the programme in phases and separated site access routes, allowing safe early occupation.',
      },
    ],
    highlights: [
      'Phased handover allowed early tenant occupation',
      'Daylight performance targets met through façade design',
      'Delivered with no major contractor claims',
    ],
  },
  {
    slug: 'interior-renovation-project',
    name: 'Interior Renovation Project',
    category: 'Renovation',
    type: 'Residential Renovation',
    location: 'Old Town, Springfield',
    year: 2023,
    client: 'Private Client',
    area: '2,600 sq ft',
    duration: '4 months',
    cover: img('photo-1600607687920-4e2a09cf159d'),
    gallery: [
      img('photo-1600607687920-4e2a09cf159d'),
      img('photo-1600566752355-35792bedcfea'),
      img('photo-1600210492486-724fe5c67fb0'),
      img('photo-1600573472592-401b489a3cdc'),
    ],
    short:
      'A full interior remodelling of a family home, including structural alterations, a new kitchen and services upgrades.',
    overview:
      'This project remodelled a dated family home into a bright, open-plan living space. Two internal walls were removed with a new steel beam, and the kitchen, bathrooms and services were fully upgraded.',
    scopeOfWork: [
      'Structural assessment and steel beam installation',
      'Removal of non-structural walls and re-planning',
      'New kitchen, bathrooms and joinery',
      'Electrical, plumbing and lighting upgrades',
      'Painting, flooring and final finishes',
    ],
    constructionDetails: [
      'Structural steel beam introduced to support the removed wall',
      'New concealed plumbing and electrical services',
      'Porcelain tile and engineered timber flooring',
      'Premium low-VOC paint finish throughout',
    ],
    challenges: [
      {
        challenge: 'The family remained in the property during part of the renovation.',
        solution:
          'We worked in sealed zones with dust barriers and phased the work to keep essential rooms usable.',
      },
      {
        challenge: 'An internal wall turned out to be load bearing after opening it up.',
        solution:
          'We paused work, designed a steel beam and installed it with temporary props before continuing.',
      },
    ],
    highlights: [
      'Delivered within the four-month programme',
      'Occupants remained safely in the home throughout',
      'Full services upgrade improved energy efficiency',
    ],
  },
  {
    slug: 'industrial-building-construction',
    name: 'Industrial Building Construction',
    category: 'Industrial',
    type: 'Warehouse & Factory',
    location: 'North Industrial Zone, Springfield',
    year: 2022,
    client: 'Apex Manufacturing',
    area: '60,000 sq ft',
    duration: '16 months',
    cover: img('photo-1558618666-fcd25c85cd64'),
    gallery: [
      img('photo-1558618666-fcd25c85cd64'),
      img('photo-1565793298595-6a879b1d9492'),
      img('photo-1513828583688-c52646db42da'),
      img('photo-1518156677180-95a2893f3e9f'),
    ],
    short:
      'A steel-framed warehouse and light manufacturing facility with loading docks and office accommodation.',
    overview:
      'We constructed a large steel-framed industrial facility for a manufacturer, including a high-clearance warehouse, loading bays and a two-storey office block integrated into the main structure.',
    scopeOfWork: [
      'Structural steel design, fabrication and erection',
      'Concrete floor slab and loading dock construction',
      'Roof and wall cladding systems',
      'Office block fit-out within the facility',
      'External yard, drainage and access works',
    ],
    constructionDetails: [
      'Portalised structural steel frame with long clear spans',
      'Heavy-duty power-floated concrete warehouse floor',
      'Insulated metal roof and wall cladding',
      'Recessed loading docks with levellers',
    ],
    challenges: [
      {
        challenge: 'The client needed the facility operational before the peak production season.',
        solution:
          'We procured steel early and erected the frame in parallel with foundation works to protect the schedule.',
      },
      {
        challenge: 'The warehouse floor had to withstand heavy forklift and racking loads.',
        solution:
          'We specified a thicker, reinforced floor slab with a hard-wearing power-floated finish.',
      },
    ],
    highlights: [
      'Facility operational before the production season',
      'Steel frame erected with zero lifting incidents',
      'Warehouse floor exceeded flatness tolerance',
    ],
  },
  {
    slug: 'infrastructure-development-project',
    name: 'Infrastructure Development Project',
    category: 'Infrastructure',
    type: 'Site Development',
    location: 'South Corridor, Springfield',
    year: 2023,
    client: 'Municipal Authority',
    area: '12 hectares',
    duration: '18 months',
    cover: img('photo-1541976590-713941681591'),
    gallery: [
      img('photo-1541976590-713941681591'),
      img('photo-1474487548417-781cb71495f3'),
      img('photo-1494522855154-9297ac14b55f'),
      img('photo-1449034446853-66c86144b0ad'),
    ],
    short:
      'Roads, stormwater drainage and site works preparing a 12-hectare area for future development.',
    overview:
      'This infrastructure package prepared a large tract of land for development. Works included site clearance, earthworks, a stormwater drainage network, internal access roads and retaining structures.',
    scopeOfWork: [
      'Site clearance, earthworks and levelling',
      'Stormwater drainage network installation',
      'Internal access road and pavement construction',
      'Retaining walls and boundary structures',
      'Service corridors for utilities',
    ],
    constructionDetails: [
      'Bulk earthworks with engineered fill and compaction testing',
      'Precast and cast-in-situ drainage networks',
      'Flexible asphalt pavement over compacted sub-base',
      'Reinforced concrete retaining walls',
    ],
    challenges: [
      {
        challenge: 'Seasonal rainfall threatened the earthworks schedule.',
        solution:
          'We front-loaded earthworks into the dry season and installed temporary drainage to protect the works.',
      },
      {
        challenge: 'Existing utilities crossed the site in several locations.',
        solution:
          'We surveyed and mapped services early and coordinated carefully with utility providers.',
      },
    ],
    highlights: [
      'Site fully prepared and handed to developers on schedule',
      'Drainage designed for a 1-in-50-year storm event',
      'Earthworks completed within budget despite weather risk',
    ],
  },
  {
    slug: 'luxury-apartment-complex',
    name: 'Luxury Apartment Complex',
    category: 'Residential',
    type: 'Apartment Complex',
    location: 'Lakeview Heights, Springfield',
    year: 2024,
    client: 'Lakeview Holdings',
    area: '36,000 sq ft',
    duration: '24 months',
    cover: img('photo-1512917774080-9991f1c4c750'),
    gallery: [
      img('photo-1512917774080-9991f1c4c750'),
      img('photo-1502005229762-cf1b2da7c5d6'),
      img('photo-1505873242700-f289a29e1e0f'),
      img('photo-1479839672679-a46483c0e7c8'),
    ],
    short:
      'A premium residential complex with 24 apartments, a landscaped podium and a shared rooftop terrace.',
    overview:
      'This premium residential complex provides 24 apartments arranged around a landscaped podium. The design prioritises daylight, privacy and shared amenity, with a rooftop terrace and secure parking below.',
    scopeOfWork: [
      'Structural design and construction of the frame',
      'Premium apartment fit-out and joinery',
      'Landscaped podium and rooftop terrace',
      'Basement parking construction',
      'MEP services and building management systems',
    ],
    constructionDetails: [
      'Reinforced concrete frame with masonry infill walls',
      'Waterproofed basement parking with sump drainage',
      'High-performance glazing and external shading',
      'Landscaped podium with irrigation and lighting',
    ],
    challenges: [
      {
        challenge: 'A high water table complicated excavation for basement parking.',
        solution:
          'We used a dewatering system and a waterproof concrete design with a protective membrane.',
      },
      {
        challenge: 'Premium buyers expected high specification finishes.',
        solution:
          'We set up mock-up units early and agreed finish standards before bulk ordering materials.',
      },
    ],
    highlights: [
      'Two-thirds of units pre-sold before completion',
      'Landscaped podium delivered as a signature feature',
      'Basement waterproofing completed leak-free',
    ],
  },
  {
    slug: 'retail-mixed-use-center',
    name: 'Retail & Mixed-Use Center',
    category: 'Commercial',
    type: 'Retail & Mixed Use',
    location: 'Market Junction, Springfield',
    year: 2022,
    client: 'Junction Retail Partners',
    area: '48,000 sq ft',
    duration: '19 months',
    cover: img('photo-1449844908441-8829872d2607'),
    gallery: [
      img('photo-1449844908441-8829872d2607'),
      img('photo-1554435493-93422e8220c8'),
      img('photo-1449157291145-7efd050a4d0e'),
      img('photo-1416331108676-a22ccb276e35'),
    ],
    short:
      'A mixed-use retail and office building combining ground-floor shops with upper-level office suites.',
    overview:
      'This mixed-use building combines retail units at ground level with office suites above. The project was designed for adaptability, allowing internal spaces to be combined or subdivided as tenants change.',
    scopeOfWork: [
      'Design of adaptable commercial floor plates',
      'Structural frame and large-span retail area',
      'Glazed shopfronts and facade construction',
      'Tenant services and separate metering',
      'External paving and customer parking',
    ],
    constructionDetails: [
      'Reinforced concrete frame with large retail spans',
      'Aluminium and glass shopfront systems',
      'Flexible partitioning between tenancy units',
      'Separate utility metering to each unit',
    ],
    challenges: [
      {
        challenge: 'Tenant requirements changed during construction.',
        solution:
          'We designed adaptable floor plates and services routes that could accommodate late changes.',
      },
      {
        challenge: 'The site fronted a busy public road.',
        solution:
          'We used hoarding, phased deliveries and a traffic management plan approved by the local authority.',
      },
    ],
    highlights: [
      'Fully let before practical completion',
      'Adaptable design allowed late tenant changes',
      'Safe construction beside a busy public road',
    ],
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const getRelatedProjects = (slug, limit = 3) => {
  const current = getProjectBySlug(slug);
  if (!current) return projects.slice(0, limit);
  const sameCategory = projects.filter(
    (project) => project.slug !== slug && project.category === current.category
  );
  const others = projects.filter(
    (project) => project.slug !== slug && project.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
};

export const featuredProjects = projects.slice(0, 6);

export default projects;
