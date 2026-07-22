// Edit this file to update contact and social links.

export type SocialLink = {
  kind: "email" | "github" | "linkedin" | "medium" | "resume" | "x";
  label: string;
  ariaLabel: string;
  href: string;
};

export const socials: SocialLink[] = [
  {
    kind: "email",
    label: "Email",
    ariaLabel: "Email Sudeepa Kolli",
    href: "mailto:sudeepanoble@gmail.com",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    ariaLabel: "Visit Sudeepa Kolli on LinkedIn",
    href: "https://www.linkedin.com/in/sudeepanoble/",
  },
  {
    kind: "x",
    label: "X / Twitter",
    ariaLabel: "Visit Sudeepa Kolli on X",
    href: "https://x.com/i_sudeepa",
  },
  {
    kind: "github",
    label: "GitHub",
    ariaLabel: "Visit Sudeepa Kolli on GitHub",
    href: "https://github.com/SudeepaNoble",
  },
  {
    kind: "medium",
    label: "Medium",
    ariaLabel: "Visit Sudeepa Kolli on Medium",
    href: "https://sudeepa-kolli.medium.com",
  },
];
