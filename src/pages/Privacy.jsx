import LegalPage from '../components/LegalPage';
import { useContent } from '../context/ContentContext.jsx';
import { useSEO } from '../hooks/useSEO';

export default function Privacy() {
  const { site } = useContent();
  useSEO({
    title: 'Privacy Policy | AMD Engineer Solution',
    description:
      'How AMD Engineer Solution handles information submitted through this demonstration website.',
  });

  return (
    <LegalPage
      title="Privacy Policy"
      updated="Demo document"
      breadcrumb="Privacy Policy"
      sections={[
        {
          heading: 'Overview',
          paragraphs: [
            'This privacy policy is sample content provided with the AMD Engineer Solution demonstration website. It explains how information submitted through the site would be handled once a real backend and email service are connected.',
          ],
        },
        {
          heading: 'Information We Collect',
          paragraphs: [
            'This website includes contact and quotation forms. In this demo build, submitted information is not transmitted to a server or stored anywhere.',
          ],
          list: [
            'Name and contact details you enter in forms',
            'Project location, type, area and budget information',
            'Any additional requirements you choose to describe',
          ],
        },
        {
          heading: 'How Information Would Be Used',
          paragraphs: [
            'In a production deployment, submitted information would be used only to respond to your enquiry, prepare a quotation and communicate about your project. It would not be sold or shared for unrelated marketing purposes.',
          ],
        },
        {
          heading: 'Your Choices',
          paragraphs: [
            'You would be able to request access to, correction of, or deletion of the information you have submitted by contacting the company using the details on the Contact page.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            `Questions about this policy can be directed to ${site.contact.email}.`,
          ],
        },
      ]}
    />
  );
}