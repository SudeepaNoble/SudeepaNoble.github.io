import { Hero } from "@/components/hero";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell mainClassName="min-h-[calc(100vh-10.5rem)]">
      <Hero />
    </SiteShell>
  );
}
