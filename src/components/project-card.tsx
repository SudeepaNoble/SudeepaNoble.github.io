"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Project } from "@/data/projects";
import { RevealOnScroll } from "@/components/animated-text";

const accentStyles: Record<Project["accent"], string> = {
  green: "text-emerald-700 dark:text-emerald-400",
  violet: "text-accent dark:text-accent-dark",
  mango: "text-amber-700 dark:text-amber-dark",
  blue: "text-sky-700 dark:text-sky-400",
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const detailsId = `project-details-${project.slug}`;

  return (
    <RevealOnScroll delay={Math.min(index * 0.08, 0.32)}>
      <article
        className={`group border-b border-line py-6 first:pt-0 transition-colors dark:border-line-dark ${
          project.featured
            ? "border-emerald-700/40 hover:border-emerald-700/70 dark:border-emerald-400/40 dark:hover:border-emerald-400/70"
            : "hover:border-accent/50 dark:hover:border-accent-dark/50"
        }`}
      >
        <div className="flex w-full flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
            <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1.5">
            <span
              className={`font-mono text-xs font-medium tracking-wide ${accentStyles[project.accent]}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-controls={detailsId}
                className={`text-left text-lg font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5 hover:text-accent dark:text-bone dark:hover:text-accent-dark sm:text-xl ${project.slug === "mulam" ? "font-sans" : "font-display"}`}
              >
                {project.title}
              </button>
            </h3>
            </div>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={`link-underline inline-flex min-h-9 shrink-0 cursor-pointer items-center font-mono text-sm font-medium transition-transform duration-300 hover:translate-x-1 ${accentStyles[project.accent]}`}
              >
                View Project ↗
              </a>
            ) : project.actionLabel ? (
              <span
                className={`inline-flex min-h-9 shrink-0 items-center font-mono text-sm font-medium ${accentStyles[project.accent]}`}
              >
                {project.actionLabel}
              </span>
            ) : null}
          </div>

          <p className="max-w-3xl text-sm text-ink-soft dark:text-bone-soft">
            {project.shortDescription}
          </p>

          <AnimatePresence initial={false}>
            {expanded ? (
              <motion.div
                key="details"
                id={detailsId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="flex max-w-3xl flex-col gap-4 text-sm leading-relaxed text-ink-soft dark:text-bone-soft">
                  {project.longDescription.split(/\n\n+/).map((paragraph) => (
                    <p
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                  {project.statusNote ? (
                    <p className="pt-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      {project.statusNote}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={detailsId}
            className={`link-underline inline-flex min-h-9 w-fit cursor-pointer items-center font-mono text-sm font-medium transition-transform duration-300 hover:translate-x-1 ${accentStyles[project.accent]}`}
          >
            {expanded ? "Show less" : "Behind the build →"}
          </button>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-xs text-ink-soft dark:border-line-dark dark:text-bone-soft"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-1 pt-1">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="link-underline inline-flex min-h-9 items-center font-mono text-sm font-medium text-ink dark:text-bone"
              >
                GitHub ↗
              </a>
            ) : null}
          </div>
        </div>
      </article>
    </RevealOnScroll>
  );
}
