// Edit this file to add new writing — articles, essays, threads, etc.
// `externalUrl` should be a real link; use a "#" placeholder if unpublished yet.

export type WritingCategory =
  | "Application Guide"
  | "Featured"
  | "Grad School"
  | "Life"
  | "Networking"
  | "Reflection"
  | "Thread";

export type WritingSection =
  | "Grad School Applications"
  | "Life, Work & Ideas"
  | "Featured Mentions";

export type WritingEntry = {
  slug: string;
  title: string;
  shortDescription: string;
  section: WritingSection;
  category: WritingCategory;
  date: string; // ISO date, e.g. "2026-03-14"
  externalUrl: string;
  readingTime?: string; // e.g. "6 min read"
};

export const writing: WritingEntry[] = [
  {
    slug: "study-abroad-loans-101",
    title: "Study Abroad Loans 101",
    shortDescription:
      "A practical primer on choosing student loans and avoiding unnecessary debt while studying abroad.",
    section: "Grad School Applications",
    category: "Application Guide",
    date: "2024-01-01",
    externalUrl:
      "https://medium.com/@sudeepa-kolli/study-abroad-loans-101-f4d03ed50614?sharedUserId=sudeepa-kolli",
    readingTime: "3 min read",
  },
  {
    slug: "choosing-the-right-masters-program",
    title: "Choosing the Right Program and University for Your Master's Degree",
    shortDescription:
      "How to think through fit, priorities, and tradeoffs before building a graduate school shortlist.",
    section: "Grad School Applications",
    category: "Application Guide",
    date: "2023-09-22",
    externalUrl:
      "https://medium.com/@sudeepa-kolli/a-guide-to-choosing-the-right-program-and-university-for-your-masters-degree-c00143dc1ced?sharedUserId=sudeepa-kolli",
    readingTime: "5 min read",
  },
  {
    slug: "statement-of-purpose-for-grad-school",
    title: "Statement of Purpose for Grad School",
    shortDescription:
      "A guide to writing a focused, personal, and credible SOP for graduate school applications.",
    section: "Grad School Applications",
    category: "Application Guide",
    date: "2023-10-01",
    externalUrl:
      "https://medium.com/@sudeepa-kolli/statement-of-purpose-for-grad-school-438e5e147e0b?sharedUserId=sudeepa-kolli",
    readingTime: "4 min read",
  },
  {
    slug: "crafting-the-ideal-grad-school-resume",
    title: "Crafting the Ideal Grad School Resume",
    shortDescription:
      "What to include, emphasize, and tighten when preparing a resume for graduate admissions.",
    section: "Grad School Applications",
    category: "Application Guide",
    date: "2023-10-01",
    externalUrl:
      "https://medium.com/@sudeepa-kolli/crafting-the-ideal-grad-school-resume-e603bcdccf81?sharedUserId=sudeepa-kolli",
    readingTime: "4 min read",
  },
  {
    slug: "navigating-the-journey-to-grad-school",
    title: "Navigating the Journey to Grad School",
    shortDescription:
      "A comprehensive starting point for planning, preparing, and moving through the grad school application process.",
    section: "Grad School Applications",
    category: "Grad School",
    date: "2023-10-28",
    externalUrl:
      "https://medium.com/@sudeepa-kolli/navigating-the-journey-to-grad-school-a-comprehensive-guide-4209b9e68a23?sharedUserId=sudeepa-kolli",
    readingTime: "8 min read",
  },
  {
    slug: "x-thread-2014568664910201092",
    title: "The Art of Reaching Out",
    shortDescription:
      "An X article about reaching out with intention, building meaningful connections, and creating opportunities through conversation.",
    section: "Life, Work & Ideas",
    category: "Networking",
    date: "2026-01-23",
    externalUrl: "https://x.com/i_sudeepa/status/2014568664910201092?s=20",
    readingTime: "2 min read",
  },
  {
    slug: "x-thread-2015265792422736209",
    title: "Discipline for People Who Hate Routines",
    shortDescription:
      "An X article on navigating life choices, personal growth, and the things worth paying attention to.",
    section: "Life, Work & Ideas",
    category: "Reflection",
    date: "2026-01-25",
    externalUrl: "https://x.com/i_sudeepa/status/2015265792422736209?s=20",
    readingTime: "2 min read",
  },
  {
    slug: "clear-switches-prevent-burnout",
    title: "How to Build a Side Project With a Full-Time Job and Not Burn Out",
    shortDescription:
      "An X article on why your brain needs boundaries between work, projects, and rest before everything starts to blur.",
    section: "Life, Work & Ideas",
    category: "Life",
    date: "2026-01-26",
    externalUrl: "https://x.com/i_sudeepa/status/2015668517522300974?s=20",
    readingTime: "3 min read",
  },
  {
    slug: "creativity-is-not-a-luxury",
    title: "Do You Have the Courage to Bring Forth the Treasures That Are Hidden Within You?",
    shortDescription:
      "An X article on art, beauty, and why making things matters even when it serves no practical purpose.",
    section: "Life, Work & Ideas",
    category: "Reflection",
    date: "2026-03-08",
    externalUrl: "https://x.com/i_sudeepa/status/2030480867139998085?s=20",
    readingTime: "3 min read",
  },
  {
    slug: "the-ken-study-abroad-gurus",
    title: "Move Over Finfluencers, the Study Abroad Gurus Are Here",
    shortDescription:
      "Featured in The Ken's Ed Set Go coverage on creators helping students navigate studying abroad.",
    section: "Featured Mentions",
    category: "Featured",
    date: "2024-01-01",
    externalUrl:
      "https://the-ken.com/edsetgo/move-over-finfluencers-the-study-aboard-gurus-are-here/",
    readingTime: "3 min read",
  },
  {
    slug: "the-hindu-google-wtm-scholarship",
    title: "Vignan Student Secures Google's WTM Scholarship",
    shortDescription:
      "Featured in The Hindu for receiving Google's Women Techmakers scholarship.",
    section: "Featured Mentions",
    category: "Featured",
    date: "2020-07-28",
    externalUrl:
      "https://www.thehindu.com/news/national/andhra-pradesh/vignan-student-secures-googles-wtm-scholarship/article32215785.ece/amp/",
    readingTime: "3 min read",
  },
  {
    slug: "ndtv-american-dream-quote",
    title: "Was It The Right Choice? The American Dream, Now a Nightmare for Many",
    shortDescription:
      "Quoted by NDTV Opinion on the risks and tradeoffs of moving to the US for a master's degree.",
    section: "Featured Mentions",
    category: "Featured",
    date: "2024-05-01",
    externalUrl:
      "https://www.ndtv.com/opinion/was-it-the-right-choice-the-american-dream-now-a-nightmare-for-many-5616883/amp/1",
    readingTime: "5 min read",
  },
];
