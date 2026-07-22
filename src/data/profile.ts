// Edit this file to update the hero copy and positioning.
// Everything here is plain data — no JSX, no layout logic.

export const profile = {
  name: "Sudeepa Kolli",
  shortName: "Sudeepa",
  role: "BUILDING PRODUCTS FROM 0 → 1",
  greeting: "Hi, I'm Sudeepa Kolli.",

  // The main hero paragraph. {{highlight}} markers are rendered with
  // emphasis by the AnimatedText component — see src/components/animated-text.tsx
  heroParagraph: [
    "I currently build and customize enterprise software for government clients across the United States.",
    "When I'm not working, I'm usually diving into technology, products, startups, and AI. I love discovering new tools, learning how great companies operate, and occasionally sharing what I've learned through writing.",
  ],

  proofLine:
    "Outside of work, you'll often find me at the gym, exploring grocery store aisles, watching movies, or pursuing my next idea.",

  asideLine:
    "If you'd like to connect, collaborate, or just say hello, I read my emails at sudeepanoble@gmail.com.",

  ctaLine: "",

  seo: {
    title: "Sudeepa Kolli",
    description:
      "Sudeepa Kolli builds and customizes enterprise software for government clients across the United States.",
  },
} as const;
