import contactSheetImage from "../images/ChatGPT Image 2026?6?8? 12_17_03.png";
import heroImage from "../images/ChatGPT Image 2026?6?8? 12_18_43.png";
import highAngleImage from "../images/ChatGPT Image 2026?6?8? 12_25_13.png";
import frontImage from "../images/ChatGPT Image 2026?6?7? 16_20_57.png";
import glazeImage from "../images/ChatGPT Image 2026?6?7? 16_22_20.png";
import markImage from "../images/ChatGPT Image 2026?6?7? 16_27_49.png";

export const heroContent = {
  stamp: "Studio Drop / 2026",
  kicker: "Ceramic Companion",
  title: ["MEOW", "CUP"],
  subtitle:
    "A softer ceramic object, framed like a premium campaign. The site focuses on silhouette, glaze, and identity, with motion that supports the product instead of competing with it.",
  tags: ["Multi-angle product story", "Slow editorial motion", "Warm ceramic finish"],
  mainImage: heroImage,
  sideImage: frontImage,
  sideLabel: "Front Mark",
  sideBody: "The cat illustration is the signature and should read instantly.",
};

export const introCards = [
  {
    id: "intro-form",
    eyebrow: "Form",
    title: "Quiet volume with a more deliberate point of view.",
    body:
      "The cup is restrained in shape, which is exactly why the framing matters. The product becomes premium through proportion, angle, and pace.",
    style: "large",
  },
  {
    id: "intro-glaze",
    eyebrow: "Glaze",
    title: "Soft highlights carry the luxury signal.",
    body:
      "The ceramic surface does most of the emotional work. Specular movement, warm tone, and visible texture give the object weight.",
    style: "medium",
  },
  {
    id: "intro-identity",
    eyebrow: "Identity",
    title: "A single mark is enough when the layout stays composed.",
    body:
      "The cat face is playful, but it lands best inside a disciplined composition. The site gives it room instead of over-explaining it.",
    style: "medium",
  },
  {
    id: "intro-ritual",
    eyebrow: "Ritual",
    title: "The product should feel like something you keep, not just something you buy.",
    body:
      "The goal is not spectacle for its own sake. The page should leave the mug feeling calm, tactile, and worth returning to.",
    style: "wide",
  },
];

export const productFlow = [
  {
    id: "flow-front",
    label: "01",
    title: "Front view",
    meta: "Identity / First read",
    description:
      "The front shot introduces the mark clearly and keeps the product centered, legible, and familiar in a single glance.",
    image: frontImage,
    position: "50% 50%",
  },
  {
    id: "flow-angle",
    label: "02",
    title: "Floating angle",
    meta: "Shape / Presence",
    description:
      "The diagonal floating frame shifts the product out of catalog mode and into something more staged and editorial.",
    image: highAngleImage,
    position: "50% 50%",
  },
  {
    id: "flow-glaze",
    label: "03",
    title: "Glaze close-up",
    meta: "Surface / Material",
    description:
      "A close crop slows the page down and turns finish quality into a chapter of the story instead of a background detail.",
    image: glazeImage,
    position: "54% 52%",
  },
  {
    id: "flow-sheet",
    label: "04",
    title: "Complete set",
    meta: "Proof / Range",
    description:
      "The full contact sheet proves the object holds up from every direction: top, bottom, saucer, tilt, and close detail.",
    image: contactSheetImage,
    position: "50% 50%",
  },
];

export const detailPanels = [
  {
    id: "detail-mark",
    title: "The mark should feel like a keepsake, not decoration.",
    body:
      "Giving the illustration a full frame makes it feel like an emblem. That shift strengthens the product identity without adding noise.",
    image: markImage,
    position: "50% 50%",
    contain: true,
  },
  {
    id: "detail-sheet",
    title: "A contact sheet gives confidence through coverage.",
    body:
      "Instead of hiding alternate views in a standard slider, the page treats them as a deliberate editorial layout and lets the object prove itself.",
    image: contactSheetImage,
    position: "50% 50%",
  },
];

export const finalGallery = [
  {
    id: "gallery-hero",
    title: "Hero float",
    image: heroImage,
    position: "50% 50%",
    kind: "tall",
  },
  {
    id: "gallery-front",
    title: "Front identity",
    image: frontImage,
    position: "50% 50%",
    kind: "tall",
  },
  {
    id: "gallery-glaze",
    title: "Surface detail",
    image: glazeImage,
    position: "54% 52%",
    kind: "tall",
  },
  {
    id: "gallery-contact",
    title: "Full product sheet",
    image: contactSheetImage,
    position: "50% 50%",
    kind: "wide",
  },
];
