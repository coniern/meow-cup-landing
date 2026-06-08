import contactSheetImage from "../images/ChatGPT Image 2026年6月8日 12_17_03.png";
import heroImage from "../images/ChatGPT Image 2026年6月8日 12_18_43.png";
import highAngleImage from "../images/ChatGPT Image 2026年6月8日 12_25_13.png";
import frontImage from "../images/ChatGPT Image 2026年6月7日 16_20_57.png";
import glazeImage from "../images/ChatGPT Image 2026年6月7日 16_22_20.png";
import markImage from "../images/ChatGPT Image 2026年6月7日 16_27_49.png";

export const heroContent = {
  stamp: "Object Story / 2026",
  kicker: "Ceramic Object / Campaign Cut",
  title: ["Quiet form.", "Expensive framing."],
  subtitle:
    "A softer product page built like a luxury campaign: one dominant image, disciplined typography, slower reveals, and enough whitespace for the object to feel considered.",
  tags: ["Quiet luxury", "Editorial framing", "Slow motion system"],
  mainImage: heroImage,
  sideImage: frontImage,
  sideLabel: "Front Study",
  sideBody: "The icon should read in a single glance.",
};

export const materialCards = [
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

export const storyFrames = [
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

export const closingGallery = [
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
