import type { WritingEntry } from "@/data/writing";
import { RevealOnScroll } from "@/components/animated-text";

export function WritingRow({
  entry,
  index,
}: {
  entry: WritingEntry;
  index: number;
}) {
  return (
    <RevealOnScroll delay={Math.min(index * 0.05, 0.25)} y={12}>
      <a
        href={entry.externalUrl}
        target={entry.externalUrl.startsWith("http") ? "_blank" : undefined}
        rel={entry.externalUrl.startsWith("http") ? "noreferrer noopener" : undefined}
        className="group flex flex-col gap-2 border-b border-line py-6 transition-colors first:pt-0 hover:border-accent/50 dark:border-line-dark dark:hover:border-accent-dark/50 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
      >
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-lg font-medium text-ink transition-colors group-hover:text-accent dark:text-bone dark:group-hover:text-accent-dark sm:text-xl">
            {entry.title}
          </h3>
          <p className="max-w-2xl text-sm text-ink-soft dark:text-bone-soft">
            {entry.shortDescription}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="hidden font-mono text-sm text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent dark:text-bone-soft dark:group-hover:text-accent-dark sm:inline"
        >
          Read →
        </span>
      </a>
    </RevealOnScroll>
  );
}
