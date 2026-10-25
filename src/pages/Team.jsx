import { Mail } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import SmartImage from '../components/SmartImage';
import SocialIcon from '../components/SocialIcon';
import CTABanner from '../components/CTABanner';
import { team } from '../data/team';
import { site } from '../data/site';
import { useSEO } from '../hooks/useSEO';
import IMAGES from '../data/images';

export default function Team() {
  useSEO(site.seo.team);

  return (
    <>
      <PageHero
        title="Our Team"
        description="Civil engineers, architects, structural engineers and project managers working together on every project."
        image={IMAGES.teamHero}
        alt="Engineering team collaborating in a project meeting"
        breadcrumbs={[{ label: 'Our Team' }]}
      />

      <section className="section bg-white">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              eyebrow="Meet the People"
              title="Experienced professionals behind every structure"
              description="Our multidisciplinary team brings design, engineering and site management together under one roof."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.slug} delay={(index % 3) * 80}>
                <article className="card group h-full overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative">
                    <SmartImage
                      src={member.image}
                      alt={`Portrait of ${member.name}, ${member.role}`}
                      className="aspect-[4/5] w-full"
                      imgClassName="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 flex justify-end gap-2 bg-gradient-to-t from-navy-950/80 to-transparent p-4"
                      aria-hidden="true"
                    >
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          tabIndex={-1}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-800 transition-colors hover:bg-orange-500 hover:text-white"
                        >
                          <SocialIcon name="LinkedIn" className="h-4 w-4" />
                        </a>
                      )}
                      <a
                        href={site.contact.emailHref}
                        aria-label={`Email about ${member.name}`}
                        tabIndex={-1}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy-800 transition-colors hover:bg-orange-500 hover:text-white"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-lg font-bold text-navy-800">{member.name}</h2>
                    <p className="mt-1 text-sm font-semibold text-orange-600">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy-800 transition-colors hover:text-orange-600"
                      >
                        <SocialIcon name="LinkedIn" className="h-4 w-4" aria-hidden="true" />
                        Connect on LinkedIn
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-muted">
            Team members shown are demonstration profiles with sample photographs and should be
            replaced with real company information.
          </p>
        </div>
      </section>

      <CTABanner
        title="Work With Our Engineering Team."
        description="Whether you need design, estimation or full construction management, our team is ready to help."
        buttonLabel="Get in Touch"
        buttonTo="/contact"
      />
    </>
  );
}