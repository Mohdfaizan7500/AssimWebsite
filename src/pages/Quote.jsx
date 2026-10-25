import { CheckCircle2, Clock, Phone, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import QuoteForm from '../components/QuoteForm';
import { site } from '../data/site';
import { useSEO } from '../hooks/useSEO';
import IMAGES from '../data/images';

const assurances = [
  {
    icon: Clock,
    title: 'Response Within 1–2 Business Days',
    description: 'Our team reviews your request and responds with next steps or follow-up questions.',
  },
  {
    icon: ShieldCheck,
    title: 'No Obligation',
    description: 'A quotation is a starting point for discussion, not a commitment to proceed.',
  },
  {
    icon: CheckCircle2,
    title: 'Clear, Itemised Pricing',
    description: 'Where possible we break costs down so you can see where your budget goes.',
  },
];

export default function Quote() {
  useSEO(site.seo.quote);

  return (
    <>
      <PageHero
        title="Request a Free Project Quotation"
        description="Share a few details about your project and we will prepare a no-obligation quotation for you."
        image={IMAGES.quoteHero}
        alt="Construction site with crane and building structure"
        breadcrumbs={[{ label: 'Request a Quote' }]}
      />

      <section className="section bg-surface">
        <div className="container-x grid gap-10 lg:grid-cols-3 lg:gap-14">
          <Reveal className="lg:col-span-2">
            <QuoteForm />
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-6">
              <div className="card p-6">
                <h2 className="text-lg font-bold text-navy-800">What Happens Next</h2>
                <ul className="mt-5 space-y-5">
                  {assurances.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-navy-800">{item.title}</p>
                        <p className="mt-1 text-sm text-muted">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card bg-navy-800 p-6 text-white">
                <h2 className="text-lg font-bold text-white">Prefer to Talk?</h2>
                <p className="mt-2 text-sm text-white/75">
                  Call our office during business hours and speak directly with an engineer.
                </p>
                <a
                  href={site.contact.phoneHref}
                  className="mt-5 inline-flex items-center gap-2 text-base font-bold text-orange-400 transition-colors hover:text-orange-300"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {site.contact.phoneDisplay}
                </a>
                <p className="mt-4 text-xs text-white/55">
                  {site.contact.hours[0].day}: {site.contact.hours[0].time}
                </p>
              </div>

              <p className="rounded-lg border border-navy-200 bg-white px-4 py-3 text-xs leading-relaxed text-muted">
                This is a demonstration form. Submissions are not sent to a real inbox until a
                backend or email service is connected.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}