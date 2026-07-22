import type { ComponentType } from "react";
import {
  BookOpen,
  FileText,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { socials, type SocialLink } from "@/data/socials";

const iconByKind = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  medium: BookOpen,
  resume: FileText,
  x: Twitter,
} satisfies Record<SocialLink["kind"], ComponentType<{ className?: string }>>;

export function SocialLinks({
  className = "",
}: {
  className?: string;
}) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map((social) => (
        <li key={social.label}>
          <a
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={social.ariaLabel}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent focus-visible:border-accent dark:border-line-dark dark:text-bone-soft dark:hover:border-accent-dark dark:hover:text-accent-dark dark:focus-visible:border-accent-dark"
          >
            {(() => {
              const Icon = iconByKind[social.kind];
              return <Icon className="h-5 w-5" />;
            })()}
          </a>
        </li>
      ))}
    </ul>
  );
}
