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
        className="group flex flex-col gap-4 border-b border-line py-7 transition-colors hover:border-accent/50 dark:border-line-dark dark:hover:border-accent-dark/50 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
      >
        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-lg font-medium text-ink transition-colors group-hover:text-accent dark:text-bone dark:group-hover:text-accent-dark sm:text-xl">
              {entry.title}
            </h3>
            {entry.impressionsSummary ? (
              <span className="font-mono text-xs text-ink-soft/75 dark:text-bone-soft/70">
                {entry.impressionsSummary}
              </span>
            ) : null}
          </div>
          <p className="max-w-2xl text-sm text-ink-soft dark:text-bone-soft">
            {entry.shortDescription}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="self-start whitespace-nowrap font-mono text-sm text-ink-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent dark:text-bone-soft dark:group-hover:text-accent-dark sm:w-24 sm:self-center sm:text-right"
        >
          Read →
        </span>
      </a>
    </RevealOnScroll>
  );
}
