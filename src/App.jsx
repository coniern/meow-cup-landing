import React, { useRef, useState } from "react";
import PhotoCard from "./components/PhotoCard";
import {
  detailPanels,
  finalGallery,
  heroContent,
  introCards,
  productFlow,
} from "./content";
import useLandingAnimations from "./hooks/useLandingAnimations";
import usePointerGlow from "./hooks/usePointerGlow";

export default function App() {
  const rootRef = useRef(null);
  const [activeFlowId, setActiveFlowId] = useState(productFlow[0].id);
  const activeFlow =
    productFlow.find((item) => item.id === activeFlowId) ?? productFlow[0];

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
          <span>Campaign website</span>
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
              <div className="hero-visual-grid">
                <PhotoCard
                  src={heroContent.mainImage}
                  alt="Floating ceramic cup"
                  className="hero-frame"
                  imageStyle={{ objectPosition: "50% 50%" }}
                  loading="eager"
                />

                <div className="hero-side-card">
                  <PhotoCard
                    src={heroContent.sideImage}
                    alt={heroContent.sideLabel}
                    className="hero-side-media"
                    imageStyle={{ objectPosition: "50% 50%" }}
                    loading="eager"
                  />
                  <div className="hero-side-copy">
                    <span>{heroContent.sideLabel}</span>
                    <strong>{heroContent.sideBody}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-footer reveal-item">
            <p>Premium framing for a softer daily object.</p>
          </div>
        </div>
      </section>

      <section className="bento-section">
        <div className="section-head reveal-item">
          <p className="section-kicker">Product Story</p>
          <h2 className="section-title">
            The site should make the cup feel calm, tactile, and worth keeping.
          </h2>
        </div>

        <div className="bento-grid">
          {introCards.map((card) => (
            <article key={card.id} className={`bento-card style-${card.style} reveal-item`}>
              <span>{card.eyebrow}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flow-section">
        <div className="section-head reveal-item">
          <p className="section-kicker">View Sequence</p>
          <h2 className="section-title">
            Move through the product one angle at a time instead of dumping every image at once.
          </h2>
        </div>

        <div className="flow-shell reveal-item">
          <div className="flow-menu">
            {productFlow.map((item) => {
              const isActive = item.id === activeFlowId;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`flow-item ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveFlowId(item.id)}
                  onFocus={() => setActiveFlowId(item.id)}
                >
                  <span className="flow-item-label">{item.label}</span>
                  <span className="flow-item-title-wrap">
                    <span className="flow-item-title">{item.title}</span>
                    <span className="flow-item-title flow-item-title-ghost">{item.title}</span>
                  </span>
                  <span className="flow-item-meta">{item.meta}</span>
                </button>
              );
            })}
          </div>

          <div className="flow-preview">
            <PhotoCard
              src={activeFlow.image}
              alt={activeFlow.title}
              className="flow-preview-media"
              imageStyle={{ objectPosition: activeFlow.position }}
            />
            <div className="flow-preview-copy">
              <span className="flow-preview-label">{activeFlow.label}</span>
              <p>{activeFlow.meta}</p>
              <h3>{activeFlow.title}</h3>
              <p>{activeFlow.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-section">
        <div className="detail-grid">
          {detailPanels.map((panel) => (
            <article key={panel.id} className="detail-card reveal-item">
              <div className="detail-copy">
                <p className="section-kicker">Detail Focus</p>
                <h3>{panel.title}</h3>
                <p>{panel.body}</p>
              </div>
              <PhotoCard
                src={panel.image}
                alt={panel.title}
                className="detail-visual"
                contain={panel.contain}
                imageStyle={{ objectPosition: panel.position }}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="section-head reveal-item">
          <p className="section-kicker">Final Gallery</p>
          <h2 className="section-title">
            Every supplied image remains visible, but the layout stays intentional.
          </h2>
        </div>

        <div className="gallery-grid">
          {finalGallery.map((card) => (
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
