// Edit this file to update the hero copy and positioning.
// Everything here is plain data — no JSX, no layout logic.

export const profile = {
  name: "Sudeepa Kolli",
  shortName: "Sudeepa",
  role: "LIFE FEELS SMALLER WITHOUT CURIOSITY.",
  greeting: "Hi, I'm Sudeepa Kolli.",

  // The main hero paragraph. {{highlight}} markers are rendered with
  // emphasis by the AnimatedText component — see src/components/animated-text.tsx
  heroParagraph: [
    "I currently build and customize enterprise software for government clients across the United States.",
    "Most of my free time disappears into products, startups, AI, and understanding how great companies make decisions.",
  ],

  proofLine: "",

  question:
    "How much of who we become is shaped by what we choose to explore?",

  asideLine:
    "If you'd like to connect, collaborate, or just say hello, I read my emails at sudeepanoble@gmail.com.",

  ctaLine: "",

  seo: {
    title: "Sudeepa Kolli",
    description:
      "Sudeepa Kolli builds and customizes enterprise software for government clients across the United States.",
  },
} as const;
