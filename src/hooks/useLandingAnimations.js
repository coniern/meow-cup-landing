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
            y: 0,
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
  }, [rootRef]);
}
