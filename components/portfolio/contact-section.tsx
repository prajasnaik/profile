"use client";

import { motion } from "framer-motion";
import { socialLinksArray } from "@/lib/data";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Email: IconMail,
  GitHub: IconBrandGithub,
  LinkedIn: IconBrandLinkedin,
  Twitter: IconBrandX,
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground mb-8"
        >
          I&apos;m always open to discussing new opportunities, interesting
          projects, or just having a chat about technology.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="space-y-4"
        >
          {socialLinksArray.map((link) => {
            const Icon = iconMap[link.name];
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 transition-all group"
              >
                {Icon && (
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
                <div className="flex-1">
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {link.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{link.handle}</p>
                </div>
                <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                  →
                </span>
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
