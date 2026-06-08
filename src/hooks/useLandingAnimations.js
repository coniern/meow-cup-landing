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
      gsap.set(".hero-frame", { autoAlpha: 0, y: 44, scale: 0.97 });
      gsap.set(".hero-float-card", { autoAlpha: 0, y: 28, rotate: 2 });
      gsap.set(".flow-preview", { autoAlpha: 0, y: 24, scale: 0.98 });

      gsap
        .timeline()
        .to(".hero-frame", {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.08,
          ease: "power3.out",
        })
        .to(
          ".hero-copy",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.86,
            ease: "power2.out",
          },
          0.16
        )
        .to(
          ".hero-float-card",
          {
            autoAlpha: 1,
            y: 0,
            rotate: 0,
            duration: 0.92,
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
            duration: 0.88,
            ease: "power2.out",
          },
          0.34
        );

      revealItems.forEach((item) => {
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 32 },
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

      bentoCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50, rotateX: 8 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            duration: 0.95,
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
          { autoAlpha: 0, y: 34, x: index % 2 === 0 ? -18 : 18 },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 0.82,
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
            scale: 0.968,
            yPercent: -2,
            ease: "none",
          },
          0
        )
        .to(
          ".hero-copy",
          {
            yPercent: -12,
            ease: "none",
          },
          0
        )
        .to(
          ".hero-float-card",
          {
            yPercent: 10,
            autoAlpha: 0.65,
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
