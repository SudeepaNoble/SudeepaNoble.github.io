"use client";

import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/container";
import { AnimatedParagraph } from "@/components/animated-text";
import { SocialLinks } from "@/components/social-links";
import { profile } from "@/data/profile";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pb-20 pt-14 sm:pb-28 sm:pt-20">
      <Container className="flex flex-col gap-8">
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-mono text-sm uppercase tracking-[0.2em] text-accent dark:text-accent-dark"
        >
          {profile.role}
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="max-w-4xl text-fluid-hero font-display font-medium leading-[1.05] text-ink dark:text-bone"
        >
          {profile.greeting}
        </motion.h1>

        <div className="flex max-w-3xl flex-col gap-5">
          {profile.heroParagraph.map((paragraph, index) => (
            <AnimatedParagraph
              key={index}
              text={paragraph}
              delay={0.1 + index * 0.05}
              className="text-sm leading-relaxed text-ink-soft dark:text-bone-soft"
            />
          ))}
          <AnimatedParagraph
            text={profile.proofLine}
            delay={0.2}
            className="text-sm leading-relaxed text-ink-soft dark:text-bone-soft"
          />
          <AnimatedParagraph
            text={profile.asideLine}
            delay={0.25}
            className="text-sm leading-relaxed text-ink-soft dark:text-bone-soft"
          />
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          className="flex flex-col gap-6"
        >
          {profile.ctaLine ? (
            <p className="max-w-2xl text-sm font-medium text-ink dark:text-bone">
              {profile.ctaLine}
            </p>
          ) : null}
          <SocialLinks />
        </motion.div>
      </Container>
    </section>
  );
}
