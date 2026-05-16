import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  aboutParagraphs,
  newsItems,
  publications,
  researchInterests,
  site,
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
      {segments.map((seg, idx) =>
        seg.href ? (
          <ExternalLink key={idx} className="inlineLink" href={seg.href}>
            {seg.text}
          </ExternalLink>
        ) : (
          <span key={idx}>{seg.text}</span>
        ),
      )}
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

function PublicationItem({ publication }: { publication: Publication }) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomed]);

  return (
    <>
      <article className="publication">
        <div className="publicationThumbWrap">
          {publication.imageSrc ? (
            <button
              className="publicationThumbButton"
              type="button"
              onClick={() => setZoomed(true)}
              aria-label={`Open figure for ${publication.title}`}
            >
              <img className="publicationThumb" src={publication.imageSrc} alt={publication.imageAlt ?? ""} />
            </button>
          ) : null}
        </div>
        <div className="publicationText">
          <h3 className="itemTitle">{publication.title}</h3>
          <p className="publicationAuthors">{publication.authors}</p>
          <p className="publicationVenue">{publication.venue}</p>
          <p className="itemDescription">{publication.description}</p>
          <div className="itemLinks">
            {publication.paperHref ? <ExternalLink href={publication.paperHref}>Paper</ExternalLink> : null}
            {publication.projectHref ? <ExternalLink href={publication.projectHref}>Project</ExternalLink> : null}
            {publication.codeHref ? <ExternalLink href={publication.codeHref}>Code</ExternalLink> : null}
          </div>
        </div>
      </article>

      {zoomed && publication.imageSrc ? (
        <div className="modalOverlay" role="dialog" aria-modal="true" onClick={() => setZoomed(false)}>
          <div className="modalBody" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" type="button" onClick={() => setZoomed(false)} aria-label="Close">
              x
            </button>
            <img className="modalImage" src={publication.imageSrc} alt={publication.imageAlt ?? ""} />
          </div>
        </div>
      ) : null}
    </>
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
            Publications
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
            <ul className="interestList">
              {researchInterests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </Section>

          <Section id="news" title="News">
            <ol className="newsList">
              {newsItems.map((item) => (
                <li key={`${item.date}-${item.text}`}>
                  <time>{item.date}</time>
                  <span>{item.text}</span>
                </li>
              ))}
            </ol>
          </Section>

          <Section id="publications" title="Publications">
            <div className="publicationList">
              {publications.map((publication) => (
                <PublicationItem key={publication.title} publication={publication} />
              ))}
            </div>
          </Section>
        </div>
      </main>

      <footer className="footer">{site.footer}</footer>
    </div>
  );
}
