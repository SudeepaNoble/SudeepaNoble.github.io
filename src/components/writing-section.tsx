import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { WritingRow } from "@/components/writing-row";
import { writing, type WritingSection as WritingSectionName } from "@/data/writing";

const sectionOrder: WritingSectionName[] = [
  "Life, Work & Ideas",
  "Grad School Applications",
  "Featured Mentions",
];

const sectionDescriptions: Record<WritingSectionName, string> = {
  "Grad School Applications":
    "Guides for choosing programs, preparing materials, financing study abroad, and making the application process feel less opaque.",
  "Life, Work & Ideas":
    "Short reflections from X on work, creativity, burnout, and the little systems that shape a life.",
  "Featured Mentions":
    "Press, interviews, and articles where my work, posts, or story have been referenced.",
};

export function WritingSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Writing"
          title="Thoughts worth writing down."
          description="Grad school guides, short reflections, and a few places where my work or story has been featured."
        />

        <div className="flex flex-col gap-14">
          {sectionOrder.map((section) => {
            const entries = writing.filter((entry) => entry.section === section);

            if (!entries.length) {
              return null;
            }

            return (
              <section key={section} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-2xl font-medium text-ink dark:text-bone sm:text-3xl">
                    {section}
                  </h3>
                  <p className="max-w-3xl text-sm leading-relaxed text-ink-soft dark:text-bone-soft">
                    {sectionDescriptions[section]}
                  </p>
                </div>
                <div className="flex flex-col">
                  {entries.map((entry, index) => (
                    <WritingRow key={entry.slug} entry={entry} index={index} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
