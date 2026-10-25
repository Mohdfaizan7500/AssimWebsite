import PageHero from './PageHero';
import { useContent } from '../context/ContentContext.jsx';

export default function LegalPage({ title, updated, breadcrumb, sections }) {
  const { site, images } = useContent();

  return (
    <>
      <PageHero
        title={title}
        description={`This document is demonstration content for the ${site.name} sample website.`}
        image={images.contactBanner}
        alt="Office interior background"
        breadcrumbs={[{ label: breadcrumb }]}
      />

      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <p className="text-sm text-muted">Last updated: {updated}</p>
          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-navy-800">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3 text-sm leading-relaxed text-muted">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}