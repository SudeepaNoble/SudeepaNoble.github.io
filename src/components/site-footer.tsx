import { Container } from "@/components/container";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-10 dark:border-line-dark">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-sm text-ink-soft dark:text-bone-soft">
          {profile.name} © 2026
        </p>
      </Container>
    </footer>
  );
}
