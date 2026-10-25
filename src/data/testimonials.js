const U = 'https://images.unsplash.com';
const face = (id) => `${U}/${id}?auto=format&fit=crop&w=200&h=200&q=80`;

export const testimonials = [
  {
    name: 'Daniel Cooper',
    role: 'Homeowner',
    projectType: 'Modern Residential Villa',
    image: face('photo-1472099645785-5658abf4ff4e'),
    rating: 5,
    quote:
      'The team kept us informed at every stage and finished the villa two weeks early. The finish quality is excellent and the cost stayed within the original estimate.',
  },
  {
    name: 'Marina Ellis',
    role: 'Property Developer',
    projectType: 'Multi-Storey Residential Building',
    image: face('photo-1438761681033-6461ffad8d80'),
    rating: 5,
    quote:
      'Managing an urban site is never easy, but their planning was disciplined. All 18 units were handed over on the original completion date.',
  },
  {
    name: 'Robert Nguyen',
    role: 'Operations Director',
    projectType: 'Industrial Building Construction',
    image: face('photo-1506794778202-cad84cf45f1d'),
    rating: 5,
    quote:
      'They understood our production deadline and delivered ahead of the season. Professional communication throughout the build.',
  },
  {
    name: 'Ayesha Khan',
    role: 'Homeowner',
    projectType: 'Interior Renovation Project',
    image: face('photo-1544005313-94ddf0286df2'),
    rating: 5,
    quote:
      'We lived at home during the renovation and they managed the disruption really well. The new kitchen and layout completely changed how we use the space.',
  },
  {
    name: 'James Whitfield',
    role: 'Facilities Manager',
    projectType: 'Commercial Office Complex',
    image: face('photo-1519085360753-af0119f7cbe7'),
    rating: 5,
    quote:
      'Phased handover let us move teams in early. The building performs exactly as promised and the finishes have held up well.',
  },
];

export default testimonials;
