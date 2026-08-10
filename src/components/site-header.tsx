"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Thoughts", href: "/writing" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md dark:border-line-dark/70 dark:bg-dusk/80">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <nav className="flex min-w-0 items-center gap-3 sm:gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`link-underline whitespace-nowrap font-mono text-xs transition-colors hover:text-accent dark:hover:text-accent-dark sm:text-sm ${
                  isActive
                    ? "text-accent dark:text-accent-dark"
                    : "text-ink-soft dark:text-bone-soft"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 pl-4 sm:gap-3 sm:pl-8">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
