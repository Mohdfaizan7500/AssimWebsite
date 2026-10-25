const U = 'https://images.unsplash.com';
const q = 'auto=format&fit=crop&w=1600&q=80';

export const unsplash = (id, width = 1600) =>
  `${U}/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const IMAGES = {
  heroOne: `${U}/photo-1503387762-592deb58ef4e?${q}`,
  heroTwo: `${U}/photo-1541888946425-d81bb19240f5?${q}`,
  heroThree: `${U}/photo-1486406146926-c627a92ad1ab?${q}`,

  aboutMain: `${U}/photo-1581094794329-c8112a89af12?${q}`,
  aboutSecondary: `${U}/photo-1504307651254-35680f356dfd?${q}`,
  ctaBanner: `${U}/photo-1503389152951-9f343605f61e?${q}`,
  contactBanner: `${U}/photo-1497366216548-37526070297c?${q}`,
  teamHero: `${U}/photo-1552664730-d307ca884978?${q}`,
  servicesHero: `${U}/photo-1541888946425-d81bb19240f5?${q}`,
  projectsHero: `${U}/photo-1486406146926-c627a92ad1ab?${q}`,
  quoteHero: `${U}/photo-1503387762-592deb58ef4e?${q}`,
};

export default IMAGES;
