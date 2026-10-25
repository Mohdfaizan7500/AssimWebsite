import LegalPage from '../components/LegalPage';
import { useContent } from '../context/ContentContext.jsx';
import { useSEO } from '../hooks/useSEO';

export default function Terms() {
  const { site } = useContent();
  useSEO({
    title: 'Terms & Conditions | AMD Engineer Solution',
    description:
      'Terms and conditions for using the AMD Engineer Solution demonstration website.',
  });

  return (
    <LegalPage
      title="Terms & Conditions"
      updated="Demo document"
      breadcrumb="Terms & Conditions"
      sections={[
        {
          heading: 'Acceptance of Terms',
          paragraphs: [
            'By using this demonstration website you acknowledge that it is a sample project. Content such as projects, statistics, testimonials, team profiles and contact details are placeholders.',
          ],
        },
        {
          heading: 'Website Content',
          paragraphs: [
            'Text, images and figures on this site are provided for illustration only. Images are sourced from public image libraries and do not represent real AMD Engineer Solution projects.',
          ],
          list: [
            'Project names, locations and years are fictional samples',
            'Statistics and testimonials are demonstration data',
            'Team members are demonstration profiles',
          ],
        },
        {
          heading: 'Quotations and Enquiries',
          paragraphs: [
            'Quotation and contact forms on this demo do not transmit data. No quotation, contract or professional engineering advice is created by submitting a form on this site.',
          ],
        },
        {
          heading: 'Intellectual Property',
          paragraphs: [
            'The website design, layout and code are provided as part of the demonstration project. Replace any third-party assets with appropriately licensed material before commercial use.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            `For questions about these terms, contact ${site.contact.email}.`,
          ],
        },
      ]}
    />
  );
}