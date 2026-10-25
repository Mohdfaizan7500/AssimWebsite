import { MessageCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext.jsx';

export default function WhatsAppButton() {
  const { site } = useContent();
  return (
    <a
      href={site.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card-hover transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
