import contactSheetImage from "../images/ChatGPT Image 2026年6月8日 12_17_03.png";
import lowAngleImage from "../images/ChatGPT Image 2026年6月8日 12_18_43.png";
import highAngleImage from "../images/ChatGPT Image 2026年6月8日 12_25_13.png";
import frontImage from "../images/ChatGPT Image 2026年6月7日 16_20_57.png";
import glazeImage from "../images/ChatGPT Image 2026年6月7日 16_22_20.png";
import markImage from "../images/ChatGPT Image 2026年6月7日 16_27_49.png";

export const heroContent = {
  stamp: "Studio Ceramic / 2026",
  kicker: "Ceramic Cat Mug",
  title: ["A cup", "worth slowing", "down for."],
  subtitle:
    "A premium image-led product page built around warmth, glaze, proportion, and the cat mark that gives the object its memory.",
  tags: ["Image-led composition", "Soft ceramic highlight", "Multi-angle story"],
  mainImage: lowAngleImage,
  insetImage: frontImage,
  insetLabel: "Front Signature",
  insetBody: "The illustration is the part that should stay in your head after the page ends.",
};

export const productNarrative = [
  {
    id: "narrative-front",
    label: "01",
    title: "Frontality gives the mark its authority.",
    body:
      "The straight-on image is the most important one because it fixes the identity in memory first, before the site starts shifting angle or scale.",
    image: frontImage,
    position: "50% 50%",
  },
  {
    id: "narrative-angle",
    label: "02",
    title: "Angle is what turns the mug into an image.",
    body:
      "A floating diagonal frame reveals the wall, rim, base and handle in one shot. The cup stops feeling catalogued and starts feeling staged.",
    image: highAngleImage,
    position: "50% 50%",
  },
  {
    id: "narrative-glaze",
    label: "03",
    title: "Finally, surface turns the object into material.",
    body:
      "The close crop is where the ceramic texture takes over. This is where the site should become quieter and more intimate.",
    image: glazeImage,
    position: "54% 52%",
  },
];

export const editorialPanels = [
  {
    id: "panel-sheet",
    eyebrow: "Complete Sheet",
    title: "The best proof is to let every view speak at full size.",
    body:
      "The full contact sheet works because it removes doubt. Top view, bottom view, saucer, tilt, close-up and hero perspective all belong in the same system.",
    image: contactSheetImage,
    position: "50% 50%",
    layout: "wide",
  },
  {
    id: "panel-mark",
    eyebrow: "Identity Mark",
    title: "One small face is enough if the page knows how to frame it.",
    body:
      "The cat emblem becomes more valuable when it is treated like a visual signature instead of filler decoration.",
    image: markImage,
    position: "50% 50%",
    contain: true,
    layout: "compact",
  },
  {
    id: "panel-glaze",
    eyebrow: "Glaze Detail",
    title: "The finish should move slower than the layout around it.",
    body:
      "Highlights, speckle, gloss line and warmth should feel almost tactile. This section is about trust in the object itself.",
    image: glazeImage,
    position: "54% 52%",
    layout: "tall",
  },
];

export const finalFrames = [
  {
    id: "final-low",
    title: "Low angle",
    image: lowAngleImage,
    position: "50% 50%",
    kind: "hero",
  },
  {
    id: "final-high",
    title: "High angle",
    image: highAngleImage,
    position: "50% 50%",
    kind: "portrait",
  },
  {
    id: "final-front",
    title: "Front face",
    image: frontImage,
    position: "50% 50%",
    kind: "portrait",
  },
  {
    id: "final-sheet",
    title: "Full contact sheet",
    image: contactSheetImage,
    position: "50% 50%",
    kind: "landscape",
  },
];
