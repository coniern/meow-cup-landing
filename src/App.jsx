import React, { useRef, useState } from "react";
import PhotoCard from "./components/PhotoCard";
import {
  editorialPanels,
  finalFrames,
  heroContent,
  productNarrative,
} from "./content";
import useLandingAnimations from "./hooks/useLandingAnimations";
import usePointerGlow from "./hooks/usePointerGlow";

export default function App() {
  const rootRef = useRef(null);
  const [activeNarrativeId, setActiveNarrativeId] = useState(productNarrative[0].id);
  const activeNarrative =
    productNarrative.find((item) => item.id === activeNarrativeId) ?? productNarrative[0];

  usePointerGlow(rootRef);
  useLandingAnimations(rootRef);

  return (
    <main ref={rootRef} className="cup-site">
      <header className="topbar">
        <div className="topbar-brand">
          <span className="brand-dot" />
          <span>Meow Cup</span>
        </div>
        <div className="topbar-meta">
          <span>Ceramic mug & saucer</span>
          <span>Image-led campaign</span>
        </div>
      </header>

      <section className="hero-shell">
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
              <div className="hero-visual-stack">
                <PhotoCard
                  src={heroContent.mainImage}
                  alt="Floating ceramic cup"
                  className="hero-main-card"
                  imageStyle={{ objectPosition: "50% 50%" }}
                  loading="eager"
                />

                <div className="hero-inset-card">
                  <PhotoCard
                    src={heroContent.insetImage}
                    alt={heroContent.insetLabel}
                    className="hero-inset-media"
                    imageStyle={{ objectPosition: "50% 50%" }}
                    loading="eager"
                  />
                  <div className="hero-inset-copy">
                    <span>{heroContent.insetLabel}</span>
                    <strong>{heroContent.insetBody}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-footer reveal-item">
            <p>Warm glaze, quiet form, and a signature that feels like a keepsake.</p>
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="section-head reveal-item">
          <p className="section-kicker">Narrative Sequence</p>
          <h2 className="section-title">
            The product should reveal itself through angle, not through clutter.
          </h2>
        </div>

        <div className="story-shell reveal-item">
          <div className="story-menu">
            {productNarrative.map((item) => {
              const isActive = item.id === activeNarrativeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`story-item ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveNarrativeId(item.id)}
                  onFocus={() => setActiveNarrativeId(item.id)}
                >
                  <span className="story-item-label">{item.label}</span>
                  <span className="story-item-title-wrap">
                    <span className="story-item-title">{item.title}</span>
                    <span className="story-item-title story-item-title-ghost">{item.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="story-preview">
            <PhotoCard
              src={activeNarrative.image}
              alt={activeNarrative.title}
              className="story-preview-media"
              imageStyle={{ objectPosition: activeNarrative.position }}
            />
            <div className="story-preview-copy">
              <span className="story-preview-label">{activeNarrative.label}</span>
              <h3>{activeNarrative.title}</h3>
              <p>{activeNarrative.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-grid">
          {editorialPanels.map((panel) => (
            <article
              key={panel.id}
              className={`editorial-card layout-${panel.layout} reveal-item`}
            >
              <div className="editorial-copy">
                <p>{panel.eyebrow}</p>
                <h3>{panel.title}</h3>
                <p>{panel.body}</p>
              </div>
              <PhotoCard
                src={panel.image}
                alt={panel.title}
                className="editorial-media"
                contain={panel.contain}
                imageStyle={{ objectPosition: panel.position }}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="section-head reveal-item">
          <p className="section-kicker">Final Spread</p>
          <h2 className="section-title">
            Use the full image set, but let the compositions lead the layout.
          </h2>
        </div>

        <div className="gallery-grid">
          {finalFrames.map((card) => (
            <figure key={card.id} className={`gallery-card kind-${card.kind} reveal-item`}>
              <PhotoCard
                src={card.image}
                alt={card.title}
                className="gallery-visual"
                imageStyle={{ objectPosition: card.position }}
              />
              <figcaption>{card.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
