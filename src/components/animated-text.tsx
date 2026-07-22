"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Splits `text` on {{highlighted}} markers into plain/emphasis segments. */
function splitSegments(text: string): { content: string; emphasis: boolean }[] {
  const parts = text.split(/(\{\{[^}]+\}\})/g).filter(Boolean);
  return parts.map((part) => {
    const match = part.match(/^\{\{(.+)\}\}$/);
    return match
      ? { content: match[1], emphasis: true }
      : { content: part, emphasis: false };
  });
}

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline font-medium text-ink dark:text-bone">
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0.5 -z-0 h-[0.4em] rounded-sm bg-amber/35 dark:bg-amber-dark/25"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        style={{ transformOrigin: "left center" }}
      />
    </span>
  );
}

/**
 * Renders a paragraph of copy that may contain {{emphasis}} markers,
 * with a gentle fade/rise reveal as it scrolls into view.
 */
export function AnimatedParagraph({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const segments = splitSegments(text);

  return (
    <motion.p
      className={className}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {segments.map((segment, i) =>
        segment.emphasis ? (
          <Highlight key={i}>{segment.content}</Highlight>
        ) : (
          <span key={i}>{segment.content}</span>
        )
      )}
    </motion.p>
  );
}

/** Simple fade/rise reveal wrapper for non-text blocks (cards, rows, etc). */
export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
