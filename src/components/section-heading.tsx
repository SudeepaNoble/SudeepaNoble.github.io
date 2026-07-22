import { RevealOnScroll } from "@/components/animated-text";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <RevealOnScroll
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent dark:text-accent-dark">
        {eyebrow}
      </span>
      <h2 className="text-fluid-h2 font-display font-medium leading-[1.1] text-ink dark:text-bone">
        {title}
      </h2>
      {description ? (
        <p className="max-w-prose text-fluid-body text-ink-soft dark:text-bone-soft">
          {description}
        </p>
      ) : null}
    </RevealOnScroll>
  );
}
