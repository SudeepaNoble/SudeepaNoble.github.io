import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects, type ProjectCategory } from "@/data/projects";
import { profile } from "@/data/profile";

const projectCategories: ProjectCategory[] = ["Personal", "Academic"];

export function ProjectsSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Projects"
          title="Building what I wish existed"
          description="Products inspired by real problems, shaped through research, and built from idea to launch"
        />

        <p className="-mt-6 text-sm leading-relaxed text-ink-soft dark:text-bone-soft sm:-mt-8">
          {profile.codexUsage.prefix}
          <span className="font-medium text-accent dark:text-accent-dark">
            {profile.codexUsage.tokens}
          </span>
          {profile.codexUsage.suffix}
        </p>

        <div className="flex flex-col gap-14">
          {projectCategories.map((category) => {
            const categoryProjects = projects.filter(
              (project) => project.category === category,
            );

            return (
              <div key={category} className="flex flex-col gap-6">
                <h3 className="font-display text-fluid-h3 font-medium text-ink dark:text-bone">
                  {category} Projects
                </h3>

                <div className="flex flex-col gap-6">
                  {categoryProjects.map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      index={projects.indexOf(project)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
