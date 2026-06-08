import React, { useRef, useState } from "react";
import PhotoCard from "./components/PhotoCard";
import {
  additionalProjects,
  bentoCards,
  contactLinks,
  flowingProjects,
  galleryCards,
  heroContent,
  navigationLinks,
  resumeSections,
  siteMeta,
  skillGroups,
} from "./content";
import useLandingAnimations from "./hooks/useLandingAnimations";
import usePointerGlow from "./hooks/usePointerGlow";

export default function App() {
  const rootRef = useRef(null);
  const [activeProjectId, setActiveProjectId] = useState(flowingProjects[0].id);
  const activeProject =
    flowingProjects.find((project) => project.id === activeProjectId) ?? flowingProjects[0];

  usePointerGlow(rootRef);
  useLandingAnimations(rootRef);

  return (
    <main ref={rootRef} className="portfolio-site">
      <header className="site-bar">
        <div className="site-bar-brand">
          <span className="brand-dot" />
          <span>{siteMeta.name}</span>
        </div>

        <nav className="site-nav" aria-label="Primary">
          {navigationLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-bar-meta">
          <span>{siteMeta.role}</span>
          <span>{siteMeta.email}</span>
        </div>
      </header>

      <section className="hero-shell" id="about">
        <div className="hero-pin">
          <div className="hero-stage">
            <div className="hero-copy">
              <p className="hero-kicker">{heroContent.kicker}</p>
              <h1 className="hero-title">
                {heroContent.title.map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h1>
              <p className="hero-subtitle">{heroContent.subtitle}</p>
              <div className="hero-meta">
                {heroContent.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-stamp">{heroContent.stamp}</div>
              <div className="hero-visual-grid">
                <PhotoCard
                  src={heroContent.mainImage}
                  alt={siteMeta.name}
                  className="hero-frame"
                  imageStyle={{ objectPosition: "50% 50%" }}
                  loading="eager"
                />

                <div className="hero-float-card">
                  <PhotoCard
                    src={heroContent.sideImage}
                    alt={heroContent.sideLabel}
                    className="hero-float-inner"
                    imageStyle={{ objectPosition: "50% 50%" }}
                    loading="eager"
                  />
                  <div className="hero-float-copy">
                    <span>{heroContent.sideLabel}</span>
                    <strong>{heroContent.sideBody}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-footer reveal-item">
            <p>{siteMeta.tagline}</p>
            <div className="hero-actions">
              <a href={siteMeta.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="/RESUME_FULLSTACK_AI_CN.md" target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bento-section">
        <div className="section-head reveal-item">
          <p className="section-kicker">What I Do</p>
          <h2 className="section-title">
            A profile built from product thinking, engineering execution, and AI-facing work.
          </h2>
        </div>

        <div className="bento-grid">
          {bentoCards.map((card) => (
            <article key={card.id} className={`bento-card style-${card.style} reveal-item`}>
              <span>{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="skill-section">
        <div className="section-head reveal-item">
          <p className="section-kicker">Toolkit</p>
          <h2 className="section-title">
            The stack is broad enough to ship systems, not just interfaces.
          </h2>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.id} className="skill-card reveal-item">
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="flow-section" id="projects">
        <div className="section-head reveal-item">
          <p className="section-kicker">Portfolio Flow</p>
          <h2 className="section-title">
            Hover through the work instead of scanning a static project list.
          </h2>
        </div>

        <div className="flow-shell reveal-item">
          <div className="flow-menu">
            {flowingProjects.map((project) => {
              const isActive = project.id === activeProjectId;
              return (
                <button
                  key={project.id}
                  type="button"
                  className={`flow-item ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveProjectId(project.id)}
                  onFocus={() => setActiveProjectId(project.id)}
                >
                  <span className="flow-item-label">{project.label}</span>
                  <span className="flow-item-title-wrap">
                    <span className="flow-item-title">{project.title}</span>
                    <span className="flow-item-title flow-item-title-ghost">{project.title}</span>
                  </span>
                  <span className="flow-item-meta">{project.meta}</span>
                </button>
              );
            })}
          </div>

          <div className="flow-preview">
            <PhotoCard
              src={activeProject.image}
              alt={activeProject.title}
              className="flow-preview-media"
              imageStyle={{ objectPosition: activeProject.position }}
            />
            <div className="flow-preview-copy">
              <span className="flow-preview-label">{activeProject.label}</span>
              <p>{activeProject.meta}</p>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.description}</p>
              <a href={activeProject.repo} target="_blank" rel="noreferrer">
                View Repository
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section" id="resume">
        <div className="resume-shell">
          <div className="resume-copy reveal-item">
            <p className="section-kicker">Resume Snapshot</p>
            <h2 className="section-title">
              A full-stack profile with stronger AI application positioning.
            </h2>
            <p className="resume-intro">{siteMeta.intro}</p>
          </div>

          <div className="resume-grid">
            {resumeSections.map((section) => (
              <article key={section.id} className="resume-card reveal-item">
                <h3>{section.title}</h3>
                {section.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="more-section">
        <div className="section-head reveal-item">
          <p className="section-kicker">More Repositories</p>
          <h2 className="section-title">
            Supporting projects that strengthen the overall body of work.
          </h2>
        </div>

        <div className="more-grid">
          {additionalProjects.map((project) => (
            <article key={project.id} className="more-card reveal-item">
              <div className="more-card-media">
                <PhotoCard
                  src={project.image}
                  alt={project.title}
                  className="more-card-visual"
                  imageStyle={{ objectPosition: "50% 50%" }}
                />
              </div>
              <div className="more-card-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Open Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-grid">
          {galleryCards.map((card) => (
            <figure key={card.id} className={`gallery-card kind-${card.kind} reveal-item`}>
              <PhotoCard
                src={card.image}
                alt={card.title}
                className="gallery-visual"
                contain={card.contain}
                imageStyle={{ objectPosition: card.position }}
              />
              <figcaption>{card.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-head reveal-item">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Open to full-stack, frontend, and AI application roles.</h2>
        </div>

        <div className="contact-grid">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              className="contact-card reveal-item"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
