// Edit this file to add, remove, or update projects.
// `image` should point to a file in /public/projects/ — see README.

export type ProjectStatus = "Live" | "Building" | "Archived" | "Concept";
export type ProjectCategory = "Personal" | "Academic";
export type ProjectAccent = "green" | "violet" | "mango" | "blue";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  date?: string;
  image: string;
  tags: string[];
  accent: ProjectAccent;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "sewna",
    title: "SEWNA",
    shortDescription:
      "A custom fashion product I built from the ground up, combining customer insight, product thinking, and execution across development, go-to-market, and operations.",
    longDescription:
      "SEWNA started as a problem I wanted to solve for myself: making custom Indian clothing easier to discover, order, and experience.\n\nI researched the market, validated the idea with customers and designers, and designed the product around what people value most throughout the custom clothing journey.\n\nAs a solo founder, I lead product strategy, user research, design, development, go-to-market, customer acquisition, designer partnerships, operations, fulfillment, marketing, and growth.\n\nI'm currently building the SEWNA customer mobile app in Flutter.",
    category: "Personal",
    status: "Live",
    date: "10/16/2023",
    image: "/projects/placeholder-sewna.svg",
    tags: ["Solo Founder", "End-to-End Product", "Go-to-Market", "Flutter"],
    accent: "green",
    featured: true,
    liveUrl: "https://www.joinsewna.com/",
    githubUrl: undefined,
  },
  {
    slug: "before-you-buy",
    title: "Before You Buy",
    shortDescription:
      "An AI-powered decision assistant that helps users reduce impulse purchases.",
    longDescription:
      "Built an AI-powered decision assistant that analyzes product screenshots, understands shopping context, and helps users reduce impulse purchases through practical, personalized recommendations.",
    category: "Personal",
    status: "Live",
    date: "07/17/2026",
    image: "/projects/placeholder-before-you-buy.svg",
    tags: ["Decision Assistant", "OpenAI"],
    accent: "violet",
    liveUrl: "https://before-you-buy-ten.vercel.app/",
    githubUrl: undefined,
  },
  {
    slug: "mangoverse",
    title: "Mangoverse",
    shortDescription:
      "An interactive Flutter web application that turns mangoes into characters, stories, and personalities.",
    longDescription:
      "Built for my little cousin, who absolutely loves mangoes, and as my first opportunity to learn Flutter. Mangoverse is an interactive web application that turns mangoes into fictional characters, stories, and personalities through a museum-inspired digital experience. I led the product vision, UX design, Flutter development, SEO optimization, and production deployment.",
    category: "Personal",
    status: "Live",
    date: "03/06/2026",
    image: "/projects/placeholder-mangoverse.svg",
    tags: ["Flutter Web", "Playful Internet Project"],
    accent: "mango",
    liveUrl: "https://mangoverse-two.vercel.app/",
    githubUrl: undefined,
  },
  {
    slug: "colink",
    title: "COLINK",
    shortDescription:
      "A non-invasive AI monitoring concept designed to detect early signs of colic in horses using real-time camera footage.",
    longDescription:
      "COLINK was developed for the 2023 Cornell Animal Health Hackathon to address one of the most serious health risks in horses: colic.\n\nOur multidisciplinary team designed a real-time monitoring concept that analyzes camera footage for abnormal movement and behavioral signs associated with colic. The proposed product would provide owners with a live feed and send an early warning notification to support faster veterinary decision-making.\n\nUnlike wearable monitoring devices, COLINK was designed to be non-invasive and accessible through standard camera infrastructure. Our team also developed the market positioning, subscription model, competitive analysis, and go-to-market strategy for horse owners, boarding facilities, breeding farms, and the equine sports industry.\n\nI contributed from a product and business perspective, helping shape the customer problem, product concept, value proposition, competitive positioning, market opportunity, pricing, and go-to-market strategy.",
    category: "Academic",
    status: "Concept",
    image: "/projects/placeholder-immigrantos.svg",
    tags: ["Animal Health", "Product Strategy", "Go-to-Market"],
    accent: "blue",
  },
  {
    slug: "instacart-customer-segmentation",
    title: "Instacart Customer Segmentation",
    shortDescription:
      "A data analytics project using customer segmentation and product associations to inform personalized grocery recommendations.",
    longDescription:
      "This project analyzed more than 3 million grocery orders from over 200,000 Instacart users to identify purchasing patterns, customer segments, and opportunities for personalized recommendations.\n\nOur team conducted exploratory data analysis to understand order size, purchase timing, and frequently reordered products. We also used association-rule analysis to identify items commonly purchased together and surface potential cross-selling opportunities.\n\nTo simplify the dataset, we applied Principal Component Analysis and identified six components that explained 52% of its variability. We then used K-means clustering to group customers into four segments based on purchasing behavior.\n\nThe resulting segments revealed distinct patterns, including customers who purchased high volumes of vegetables, customers who frequently bought yogurt and fruit, and a group with unusually high purchases of baby formula. These insights were translated into recommendations for customer targeting, reminders, cross-selling, and personalized product suggestions.",
    category: "Academic",
    status: "Archived",
    image: "/projects/placeholder-immigrantos.svg",
    tags: ["Customer Segmentation", "K-Means Clustering", "PCA", "Recommendation Strategy"],
    accent: "blue",
  },
  {
    slug: "cornell-store-consumer-decision-research",
    title: "Cornell Store Consumer Decision Research",
    shortDescription:
      "A consumer research study examining how price, discounts, and product attributes influence purchasing decisions for Cornell Store apparel.",
    longDescription:
      "This research project explored how consumers evaluate Cornell Store apparel, with a focus on pricing, discounts, brand perception, and product attributes.\n\nWe surveyed 73 respondents using a unisex non-hooded sweatshirt as the reference product and analyzed how financial background, demographics, and product characteristics affected purchase intent.\n\nThe findings indicated that price was one of the strongest influences on perceived value, while brand and material had relatively limited impact. The study also identified differences in how respondents reacted to color, design, descriptions, and discounts.\n\nBecause of the limited sample size, the results were treated as directional rather than conclusive. The project helped translate consumer survey data into product, pricing, and promotional insights while highlighting the importance of further validation before making broader business decisions.",
    category: "Academic",
    status: "Archived",
    image: "/projects/placeholder-immigrantos.svg",
    tags: ["Consumer Research", "Pricing Strategy", "Survey Analysis", "Product Analytics"],
    accent: "blue",
  },
  {
    slug: "academic-performance-intelligence",
    title: "Academic Performance Intelligence",
    shortDescription:
      "A predictive analytics project for identifying students who may need academic support.",
    longDescription:
      "Built during the COVID-19 pandemic to help university faculty identify students who may require additional academic support by predicting end-semester performance from historical assessment data. Applied data analysis and a Random Forest model to generate actionable insights for early intervention.",
    category: "Academic",
    status: "Live",
    date: "06/29/2021",
    image: "/projects/placeholder-immigrantos.svg",
    tags: ["Predictive Analytics", "Random Forest"],
    accent: "blue",
    liveUrl: undefined,
    githubUrl: undefined,
  },
];
