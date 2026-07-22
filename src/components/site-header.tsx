"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/profile";

const navItems = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Thoughts", href: "/writing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-md dark:border-line-dark/70 dark:bg-dusk/80">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="font-display text-lg font-medium tracking-tight text-ink dark:text-bone"
        >
          {profile.shortName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`link-underline font-mono text-sm transition-colors hover:text-accent dark:hover:text-accent-dark ${
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

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line dark:border-line-dark md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-4" aria-hidden="true">
              <motion.span
                className="absolute left-0 top-0 h-[1.5px] w-full bg-ink dark:bg-bone"
                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-ink dark:bg-bone"
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-[1.5px] w-full bg-ink dark:bg-bone"
                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line/70 dark:border-line-dark/70 md:hidden"
          >
            <Container className="flex flex-col gap-1 py-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex min-h-11 items-center font-mono text-sm transition-colors hover:text-accent dark:hover:text-accent-dark ${
                      isActive
                        ? "text-accent dark:text-accent-dark"
                        : "text-ink-soft dark:text-bone-soft"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </Container>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
