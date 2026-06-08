import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLandingAnimations(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return undefined;
    }

    const context = gsap.context(() => {
      const revealItems = gsap.utils.toArray(".reveal-item");
      const bentoCards = gsap.utils.toArray(".bento-card");
      const flowItems = gsap.utils.toArray(".flow-item");

      gsap.set(".hero-copy", { autoAlpha: 0, y: 36 });
      gsap.set(".hero-frame", { autoAlpha: 0, y: 42, scale: 0.97 });
      gsap.set(".hero-side-card", { autoAlpha: 0, y: 28 });
      gsap.set(".flow-preview", { autoAlpha: 0, y: 24, scale: 0.98 });

      gsap
        .timeline()
        .to(".hero-frame", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.06,
          ease: "power3.out",
        })
        .to(
          ".hero-copy",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.84,
            ease: "power2.out",
          },
          0.16
        )
        .to(
          ".hero-side-card",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          0.26
        )
        .to(
          ".flow-preview",
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.82,
            ease: "power2.out",
          },
          0.34
        );

      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.86,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 86%",
            },
          }
        );
      });

      bentoCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 42, rotateX: 8 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.04,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });

      flowItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 32, x: index % 2 === 0 ? -16 : 16 },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 0.78,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
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
            scale: 0.97,
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
          ".hero-side-card",
          {
            yPercent: 10,
            autoAlpha: 0.66,
            ease: "none",
          },
          0
        );

      return () => {
        heroTimeline.scrollTrigger?.kill();
        heroTimeline.kill();
      };
    }, root);

    return () => context.revert();
  }, [rootRef]);
}
