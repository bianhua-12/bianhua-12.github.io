import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { aboutParagraphs, researchProjects, site, type Project, type TextSegment } from "./content";

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

function HeroImage() {
  return (
    <div className="heroImageFrame" aria-hidden="true">
      <svg className="heroBlob" viewBox="0 0 777 877" aria-hidden="true">
        <path
          d="M426.75476 0.6609c99.25482 4.71596 203.6615 41.60176 264.26398 118.39717 29.12689 36.90955 32.94024 81.87606 32.1344 128.94193-0.74439 43.4787-5.43073 88.74893 2.25506 131.11417 12.86786 70.92968 60.89337 133.84701 49.99622 205.08993-12.07257 78.92774-50.56226 154.24841-112.87268 205.98175-65.26032 54.18256-151.69641 99.70905-235.77698 83.48548-81.49359-15.72437-106.87958-118.84833-176.50551-163.03632-76.18066-48.34796-208.99642-21.85046-243.81833-103.72174-34.1125-80.20331 77.52586-150.65625 99.87735-234.70398 10.47913-39.40439 7.30492-82.27936 4.97089-124.20929-3.1806-57.13811-4.80101-112.52132 31.81444-154.97586 65.77185-76.26054 181.59573-97.21274 283.66116-92.36324z"
          fill="var(--accent)"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
}

function ProjectCard({ project, reversed }: { project: Project; reversed?: boolean }) {
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
      <article className={`projectCard${reversed ? " projectCardReversed" : ""}`}>
      <div className="projectInfo">
        <h3 className="projectTitle">{project.title}</h3>
        <p className="projectDesc">{project.description}</p>
        <div className="projectCtas">
          {project.href ? (
            <ExternalLink className="projectCta" href={project.href}>
              View Project
            </ExternalLink>
          ) : (
            <span className="projectCta projectCtaDisabled" aria-disabled="true">
              View Project
            </span>
          )}
          {project.paperHref ? (
            <ExternalLink className="projectCta" href={project.paperHref}>
              View Paper
            </ExternalLink>
          ) : (
            <span className="projectCta projectCtaDisabled" aria-disabled="true">
              View Paper
            </span>
          )}
        </div>
      </div>
      <div className="projectMedia" aria-hidden="true">
        {project.imageSrc ? (
          <button
            className="projectMediaButton"
            type="button"
            onClick={() => setZoomed(true)}
            aria-label="Open image"
          >
            <img className="projectImage" src={project.imageSrc} alt={project.imageAlt ?? ""} />
          </button>
        ) : (
          <div className="projectMediaPlaceholder" />
        )}
      </div>
      </article>

      {zoomed && project.imageSrc ? (
        <div className="modalOverlay" role="dialog" aria-modal="true" onClick={() => setZoomed(false)}>
          <div className="modalBody" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" type="button" onClick={() => setZoomed(false)} aria-label="Close">
              ×
            </button>
            <img className="modalImage" src={project.imageSrc} alt={project.imageAlt ?? ""} />
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
        <div className="navArea">
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
            <a className="navItem" href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a className="navItem" href="#research" onClick={() => setMenuOpen(false)}>
              Research
            </a>
            <a className="navItem" href="#blog" onClick={() => setMenuOpen(false)}>
              Blog
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="main">
        <section className="hero" aria-label="Intro">
          <div className="heroContent">
            <h1 className="heroTitle">Hello, my name is {site.title}</h1>
            <p className="heroSub">{site.bio}</p>
            <div className="heroButtons">
              <a className="btn btnPrimary" href="#research">
                Research
              </a>
              <ExternalLink className="btn btnSecondary" href={site.links.github}>
                GitHub
              </ExternalLink>
            </div>
            <div className="heroMeta">
              <ExternalLink className="metaLink" href={site.links.scholar}>
                Google Scholar
              </ExternalLink>
              <ExternalLink className="metaLink" href={site.links.email}>
                Email
              </ExternalLink>
            </div>
          </div>
          <HeroImage />
        </section>

        <section id="about" className="section sectionAbout">
          <div className="aboutGrid">
            <div className="aboutCopy">
              <h2 className="aboutTitle">About</h2>
              <div className="aboutText">
                {aboutParagraphs.map((p, idx) => (
                  <p key={idx} className="aboutPara">
                    <RichText segments={p} />
                  </p>
                ))}
              </div>
              <a className="btn btnPrimary" href="/attaches/CV.pdf">
                CV
              </a>
            </div>

            <div className="aboutArt" aria-hidden="true">
              <div className="aboutCircle" />
              <div className="aboutPhotoFrame">
                <img className="aboutPhoto" src="/img/profile.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="section sectionProjects">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Research</h2>
            <div className="sectionRule" />
          </div>

          <div className="projectsStack">
            {researchProjects.map((p, idx) => (
              <ProjectCard key={`${p.title}-${idx}`} project={p} reversed={idx % 2 === 1} />
            ))}
          </div>
        </section>

        <section id="blog" className="section">
          <div className="sectionHeader">
            <h2 className="sectionTitle">Blog</h2>
            <div className="sectionRule" />
          </div>
          <p className="sectionText">
            Coming soon. For now, see my updates on{" "}
            <ExternalLink href={site.links.github}>GitHub</ExternalLink>.
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="footerIcons" aria-label="Social links">
          <ExternalLink href={site.links.x}>X</ExternalLink>
          <ExternalLink href={site.links.github}>GitHub</ExternalLink>
          <ExternalLink href={site.links.email}>Email</ExternalLink>
        </div>
        <div className="footerCopy">{site.footer}</div>
      </footer>
    </div>
  );
}
