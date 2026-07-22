import type { Metadata } from "next";
import { ProjectsSection } from "@/components/projects-section";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Projects — Sudeepa Kolli",
  description:
    "Personal products, academic projects, and experiments built by Sudeepa Kolli.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <SiteShell mainClassName="min-h-[calc(100vh-10.5rem)]">
      <ProjectsSection />
    </SiteShell>
  );
}
