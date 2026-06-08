import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroImage = new URL(
  "../images/ChatGPT Image 2026\u5e746\u67088\u65e5 12_18_43.png",
  import.meta.url
).href;
const frontImage = new URL(
  "../images/ChatGPT Image 2026\u5e746\u67087\u65e5 16_20_57.png",
  import.meta.url
).href;
const glazeImage = new URL(
  "../images/ChatGPT Image 2026\u5e746\u67087\u65e5 16_22_20.png",
  import.meta.url
).href;
const markImage = new URL(
  "../images/ChatGPT Image 2026\u5e746\u67087\u65e5 16_27_49.png",
  import.meta.url
).href;
const contactSheetImage = new URL(
  "../images/ChatGPT Image 2026\u5e746\u67088\u65e5 12_17_03.png",
  import.meta.url
).href;
const highAngleImage = new URL(
  "../images/ChatGPT Image 2026\u5e746\u67088\u65e5 12_25_13.png",
  import.meta.url
).href;

const materialCards = [
  {
    id: "material-glaze",
    kicker: "Glaze Study",
    title: "Soft gloss. Slow highlight. A quieter kind of luxury.",
    body:
      "The ceramic finish is the luxury cue. It needs room, a larger crop, and a slower rhythm instead of being hidden inside a crowded product stack.",
    image: glazeImage,
    position: "54% 52%",
  },
  {
    id: "material-mark",
    kicker: "Signature Mark",
    title: "The cat mark works best when everything around it stays composed.",
    body:
      "One playful move is enough. The rest of the page stays restrained so the identity reads as deliberate, not decorative.",
    image: markImage,
    position: "50% 50%",
    contain: true,
  },
];

const storyFrames = [
  {
    id: "story-front",
    label: "01",
    title: "Open with recognition.",
    text:
      "A direct front view gives the illustration its cleanest first read. The page starts with recognition before it asks for attention.",
    image: frontImage,
    position: "50% 50%",
  },
  {
    id: "story-angle",
    label: "02",
    title: "Turn into presence.",
    text:
      "A diagonal floating view changes the mood immediately. The cup stops feeling catalogued and starts feeling staged.",
    image: highAngleImage,
    position: "50% 50%",
  },
  {
    id: "story-surface",
    label: "03",
    title: "Then slow down at the surface.",
    text:
      "The macro crop slows the page down and gives the glaze enough authority to hold an entire section on its own.",
    image: glazeImage,
    position: "54% 52%",
  },
];

const closingGallery = [
  {
    id: "closing-sheet",
    title: "Complete contact sheet",
    image: contactSheetImage,
    position: "50% 50%",
    kind: "wide",
  },
  {
    id: "closing-hero",
    title: "Hero float",
    image: heroImage,
    position: "50% 50%",
    kind: "tall",
  },
  {
    id: "closing-front",
    title: "Front view",
    image: frontImage,
    position: "50% 50%",
    kind: "tall",
  },
];

function PhotoCard({
  src,
  alt,
  className = "",
  imageStyle,
  contain = false,
  loading = "lazy",
  children,
}) {
  return (
    <div className={`photo-card ${className} ${contain ? "is-contain" : ""}`} data-card>
      <img
        className="photo-media"
        src={src}
        alt={alt}
        loading={loading}
        style={{
          objectFit: contain ? "contain" : "cover",
          ...imageStyle,
        }}
      />
      <div className="photo-shadow" />
      <div className="photo-glow" />
      <div className="photo-sheen" />
      {children}
    </div>
  );
}

export default function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return undefined;
    }

    const target = { x: 50, y: 50, driftX: 0, driftY: 0 };
    const current = { ...target };
    let rafId = 0;

    const render = () => {
      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;
      current.driftX += (target.driftX - current.driftX) * 0.08;
      current.driftY += (target.driftY - current.driftY) * 0.08;

      root.style.setProperty("--pointer-x", `${current.x.toFixed(2)}%`);
      root.style.setProperty("--pointer-y", `${current.y.toFixed(2)}%`);
      root.style.setProperty("--pointer-drift-x", current.driftX.toFixed(4));
      root.style.setProperty("--pointer-drift-y", current.driftY.toFixed(4));

      rafId = window.requestAnimationFrame(render);
    };

    const setPointer = (clientX, clientY) => {
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      target.x = x * 100;
      target.y = y * 100;
      target.driftX = (x - 0.5) * 2;
      target.driftY = (y - 0.5) * 2;
    };

    const handleMove = (event) => setPointer(event.clientX, event.clientY);
    const handleLeave = () => setPointer(window.innerWidth / 2, window.innerHeight / 2);

    handleLeave();
    rafId = window.requestAnimationFrame(render);
    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return undefined;
    }

      const context = gsap.context(() => {
        const revealItems = gsap.utils.toArray(".reveal-item");
        const storySteps = gsap.utils.toArray(".story-step");
        const storyImages = gsap.utils.toArray(".story-image");

        gsap.set(".hero-copy", { autoAlpha: 0, y: 34 });
        gsap.set(".hero-frame", { autoAlpha: 0, y: 38, scale: 0.975 });
        gsap.set(".hero-float-card", { autoAlpha: 0, y: 26 });

        gsap
          .timeline()
        .to(".hero-frame", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.05,
          ease: "power3.out",
        })
        .to(
          ".hero-copy",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.82,
            ease: "power2.out",
          },
          0.16
        )
        .to(
          ".hero-float-card",
          {
            autoAlpha: 1,
            x: 0,
            rotate: 0,
            duration: 0.92,
            ease: "power3.out",
          },
          0.22
        );

      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
            },
          }
        );
      });

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-shell",
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: ".hero-pin",
          anticipatePin: 1,
        },
      });

      heroTimeline
        .to(
          ".hero-stage",
          {
            scale: 0.965,
            yPercent: -2,
            ease: "none",
          },
          0
        )
        .to(
          ".hero-copy",
          {
            yPercent: -10,
            ease: "none",
          },
          0
        )
        .to(
          ".hero-float-card",
          {
            yPercent: 10,
            autoAlpha: 0.62,
            ease: "none",
          },
          0
        );

        const matchMedia = gsap.matchMedia();

        matchMedia.add("(min-width: 900px)", () => {
          gsap.set(storySteps.slice(1), { autoAlpha: 0, y: 22 });
          gsap.set(storyImages.slice(1), { autoAlpha: 0, scale: 1.03 });

          const storyTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".story-lock",
            start: "top top",
            end: "+=240%",
            scrub: 1,
            pin: ".story-stick",
            anticipatePin: 1,
          },
        });

        storySteps.forEach((step, index) => {
          if (index === 0) {
            return;
          }

          const position = index;
          storyTimeline
            .to(
              storySteps[index - 1],
              {
                autoAlpha: 0,
                y: -18,
                duration: 0.28,
              },
              position - 0.3
            )
            .to(
              storyImages[index - 1],
              {
                autoAlpha: 0,
                scale: 0.985,
                duration: 0.28,
              },
              position - 0.3
            )
            .fromTo(
              step,
              { autoAlpha: 0, y: 22 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.34,
              },
              position
            )
            .fromTo(
              storyImages[index],
              { autoAlpha: 0, scale: 1.03 },
              {
                autoAlpha: 1,
                scale: 1,
                duration: 0.38,
              },
              position
            );
        });

        return () => {
          storyTimeline.scrollTrigger?.kill();
          storyTimeline.kill();
        };
      });

        return () => {
          heroTimeline.scrollTrigger?.kill();
          heroTimeline.kill();
          matchMedia.revert();
      };
    }, root);

    return () => context.revert();
  }, []);

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
              <p className="hero-kicker">Ceramic Object / Campaign Cut</p>
              <h1 className="hero-title">
                Quiet form.
                <br />
                Expensive framing.
              </h1>
              <p className="hero-subtitle">
                A softer product page built like a luxury campaign: one dominant image,
                disciplined typography, slower reveals, and enough whitespace for the
                object to feel considered.
              </p>
              <div className="hero-meta">
                <span>Quiet luxury</span>
                <span>Editorial framing</span>
                <span>Slow motion system</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-stamp">Object Story / 2026</div>
              <div className="hero-visual-grid">
                <PhotoCard
                  src={heroImage}
                  alt="Floating ceramic cup"
                  className="hero-frame"
                  imageStyle={{ objectPosition: "50% 50%" }}
                  loading="eager"
                />

                <div className="hero-float-card">
                  <PhotoCard
                    src={frontImage}
                    alt="Front view"
                    className="hero-float-inner"
                    imageStyle={{ objectPosition: "50% 50%" }}
                    loading="eager"
                  />
                  <div className="hero-float-copy">
                    <span>Front Study</span>
                    <strong>The icon should read in a single glance.</strong>
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
