import { socials } from "@/data/socials";

export function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-5 gap-y-3 ${className}`}>
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={social.ariaLabel}
            className="link-underline font-mono text-sm text-ink-soft transition-colors hover:text-accent focus-visible:text-accent dark:text-bone-soft dark:hover:text-accent-dark dark:focus-visible:text-accent-dark"
          >
            {social.label === "X / Twitter" ? "X" : social.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
