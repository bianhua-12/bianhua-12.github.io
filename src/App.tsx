import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  aboutParagraphs,
  engineeringContributions,
  newsItems,
  publications,
  researchInterests,
  site,
  type EngineeringContribution,
  type Publication,
  type TextSegment,
} from "./content";

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a className={className ?? "link"} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function RichText({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((seg, idx) => {
        const content = seg.strong ? <strong>{seg.text}</strong> : seg.text;
        return seg.href ? (
          <ExternalLink key={idx} className="inlineLink" href={seg.href}>
            {content}
          </ExternalLink>
        ) : (
          <span key={idx}>{content}</span>
        );
      })}
    </>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="sectionTitle">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ProfileSidebar() {
  return (
    <aside className="profile" aria-label="Profile">
      <img className="profilePhoto" src="/img/profile.png" alt="Shuaihang Chen" />
      <h1 className="profileName">{site.title}</h1>
      <p className="profileRole">{site.role}</p>
      <p className="profileAffiliation">{site.affiliation}</p>
      <p className="profileEmail">{site.emailText}</p>
      <div className="profileLinks" aria-label="Profile links">
        <ExternalLink href={site.links.scholar}>Google Scholar</ExternalLink>
        <ExternalLink href={site.links.github}>GitHub</ExternalLink>
        <ExternalLink href={site.links.x}>X</ExternalLink>
        <a className="link" href="/attaches/CV.pdf">
          CV
        </a>
      </div>
    </aside>
  );
}

function renderPublicationAuthors(authors: string) {
  return authors.split(", ").map((author, index) => {
    const name = author.replace(/[*†]+$/, "");
    const marks = author.slice(name.length);
    return (
      <span key={`${name}-${index}`}>
        {index > 0 ? ", " : null}
        {name === site.title ? <strong>{name}</strong> : name}
        {marks ? <sup>{marks}</sup> : null}
      </span>
    );
  });
}

function PublicationItem({ publication }: { publication: Publication }) {
  return (
    <article className="publication">
      <div className="publicationVisual">
        <span className="publicationBadge">{publication.badge}</span>
        <img src={publication.imageSrc} alt={publication.imageAlt} loading="lazy" />
      </div>
      <div className="publicationDetails">
        <h3 className="itemTitle">{publication.title}</h3>
        <p className="publicationAuthors">{renderPublicationAuthors(publication.authors)}</p>
        {publication.authorNote ? <p className="publicationAuthorNote">{publication.authorNote}</p> : null}
        <p className="publicationVenue">{publication.venue}</p>
        <p className="publicationSummary">{publication.description}</p>
        <div className="itemLinks">
          {publication.paperHref ? <ExternalLink href={publication.paperHref}>Paper</ExternalLink> : null}
          {publication.projectHref ? <ExternalLink href={publication.projectHref}>Project</ExternalLink> : null}
        </div>
      </div>
    </article>
  );
}

function EngineeringItem({ contribution }: { contribution: EngineeringContribution }) {
  return (
    <article className="engineeringItem">
      <p className="engineeringEyebrow">{contribution.eyebrow}</p>
      <h3 className="itemTitle">{contribution.title}</h3>
      <p className="itemDescription">{contribution.description}</p>
      <div className="itemLinks">
        {contribution.links.map((link) => (
          <ExternalLink key={link.href} href={link.href}>
            {link.label}
          </ExternalLink>
        ))}
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <div className="page">
      <header className="header" data-menu-open={menuOpen ? "true" : "false"}>
        <a className="brand" href="#top" aria-label="Home">
          {site.title}
        </a>
        <button
          className="navToggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="navToggleIcon" aria-hidden="true" />
        </button>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#news" onClick={() => setMenuOpen(false)}>
            News
          </a>
          <a href="#publications" onClick={() => setMenuOpen(false)}>
            Selected Publications
          </a>
          <a href="#engineering" onClick={() => setMenuOpen(false)}>
            Engineering
          </a>
        </nav>
      </header>

      <main id="top" className="layout">
        <ProfileSidebar />
        <div className="content">
          <Section id="about" title="About">
            <div className="aboutText">
              {aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>
                  <RichText segments={paragraph} />
                </p>
              ))}
            </div>
            <h3 className="aboutSubheading">Research interests</h3>
            <ul className="interestList">
              {researchInterests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </Section>

          <Section id="news" title="News">
            <ol className="newsList">
              {newsItems.map((item) => (
                <li key={`${item.date}-${item.text.map((segment) => segment.text).join("")}`}>
                  <time>{item.date}</time>
                  <span>
                    {item.text.map((segment) =>
                      segment.href ? (
                        <a key={`${segment.text}-${segment.href}`} href={segment.href}>
                          {segment.text}
                        </a>
                      ) : (
                        <span key={segment.text}>{segment.text}</span>
                      ),
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="publications" title="Selected Publications">
            <div className="publicationList">
              {publications.map((publication) => (
                <PublicationItem key={publication.title} publication={publication} />
              ))}
            </div>
          </Section>

          <Section id="engineering" title="Engineering">
            <p className="sectionIntro">
              I build reliable infrastructure for embodied reinforcement learning, from reward serving to
              training correctness.
            </p>
            <div className="engineeringList">
              {engineeringContributions.map((contribution) => (
                <EngineeringItem key={contribution.title} contribution={contribution} />
              ))}
            </div>
          </Section>
        </div>
      </main>

      <footer className="footer">{site.footer}</footer>
    </div>
  );
}
