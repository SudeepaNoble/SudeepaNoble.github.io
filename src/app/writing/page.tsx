import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { WritingSection } from "@/components/writing-section";

export const metadata: Metadata = {
  title: "Sudeepa's Thoughts",
  description:
    "Notes on life, work, ideas, graduate school, and places where Sudeepa Kolli has been featured.",
  alternates: { canonical: "/writing/" },
};

export default function WritingPage() {
  return (
    <SiteShell mainClassName="min-h-[calc(100vh-10.5rem)]">
      <WritingSection />
    </SiteShell>
  );
}
