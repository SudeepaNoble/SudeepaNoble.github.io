// Edit this file to update the hero copy and positioning.
// Everything here is plain data — no JSX, no layout logic.

export const profile = {
  name: "Sudeepa Kolli",
  shortName: "Sudeepa",
  role: "How much of who we become is shaped by what we choose to explore",
  greeting: "Hi, I'm Sudeepa Kolli.",

  // The main hero paragraph. {{highlight}} markers are rendered with
  // emphasis by the AnimatedText component — see src/components/animated-text.tsx
  heroParagraph: [
    "I previously built enterprise software for government agencies across the United States, working across engineering, product, and client problems.",
    "[[I'm open to collaborations, freelance projects, and interesting problems I can help solve.]]",
  ],

  codexUsage: {
    prefix: "As per Codex, I've used ",
    tokens: "1.4B tokens",
    suffix: " lately · Aug 9, 2026.",
  },

  philosophyQuote:
    "How much of who we become is shaped by what we choose to explore",

  proofLine: "",

  ctaLine: "",

  seo: {
    title: "Sudeepa Kolli",
    description:
      "Sudeepa Kolli builds and customizes enterprise software for government clients across the United States.",
  },
} as const;
