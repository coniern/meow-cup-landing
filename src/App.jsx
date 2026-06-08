import React, { useRef } from "react";
import PhotoCard from "./components/PhotoCard";
import { closingGallery, heroContent, materialCards, storyFrames } from "./content";
import useLandingAnimations from "./hooks/useLandingAnimations";
import usePointerGlow from "./hooks/usePointerGlow";

export default function App() {
  const rootRef = useRef(null);

  usePointerGlow(rootRef);
  useLandingAnimations(rootRef);

  return (
    <main ref={rootRef} className="experience">
      <header className="topbar">
        <div className="topbar-brand">
          <span className="brand-dot" />
          <span>Meow Cup</span>
        </div>
        <div className="topbar-meta">
          <span>Campaign layout</span>
          <span>Edition 06</span>
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

                <div className="hero-float-card">
                  <PhotoCard
                    src={heroContent.sideImage}
                    alt="Front view"
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
        </div>
      </section>

      <section className="material-section">
        <div className="section-head reveal-item">
          <p className="section-kicker">01 / Material & Mark</p>
          <h2 className="section-title">
            Two supporting panels are enough when each one proves a different kind of value.
          </h2>
        </div>

        <div className="material-grid">
          {materialCards.map((card) => (
            <article key={card.id} className="material-card reveal-item">
              <div className="material-copy">
                <p>{card.kicker}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
              <PhotoCard
                src={card.image}
                alt={card.title}
                className="material-visual"
                contain={card.contain}
                imageStyle={{ objectPosition: card.position }}
              />
            </article>
          ))}
        </div>
      </section>

      <section className="story-lock">
        <div className="story-stick">
          <div className="story-grid">
            <div className="story-copy">
              <p className="section-kicker">02 / Scroll Story</p>
              <h2 className="section-title">The page now changes one frame at a time.</h2>
              <div className="story-steps">
                {storyFrames.map((frame) => (
                  <article key={frame.id} className="story-step">
                    <span>{frame.label}</span>
                    <h3>{frame.title}</h3>
                    <p>{frame.text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="story-visual">
              {storyFrames.map((frame) => (
                <PhotoCard
                  key={frame.id}
                  src={frame.image}
                  alt={frame.title}
                  className="story-image"
                  imageStyle={{ objectPosition: frame.position }}
                />
              ))}
            </div>
          </div>

          <div className="story-mobile-list">
            {storyFrames.map((frame) => (
              <article key={`${frame.id}-mobile`} className="story-mobile-card reveal-item">
                <div className="story-mobile-copy">
                  <span>{frame.label}</span>
                  <h3>{frame.title}</h3>
                  <p>{frame.text}</p>
                </div>
                <PhotoCard
                  src={frame.image}
                  alt={frame.title}
                  className="story-mobile-visual"
                  imageStyle={{ objectPosition: frame.position }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="section-head reveal-item">
          <p className="section-kicker">03 / Final Proof</p>
          <h2 className="section-title">
            End with the full image set, but present it like a finished editorial spread.
          </h2>
        </div>

        <div className="closing-grid">
          {closingGallery.map((card) => (
            <figure key={card.id} className={`closing-card kind-${card.kind} reveal-item`}>
              <PhotoCard
                src={card.image}
                alt={card.title}
                className="closing-visual"
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
