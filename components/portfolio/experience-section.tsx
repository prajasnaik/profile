"use client";

import { motion } from "framer-motion";
import { workExperience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-12 sm:py-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-8"
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {workExperience.map((job) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                className="relative pl-8 sm:pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-4 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="p-6 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold">{job.role}</h3>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>

                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
                      {job.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
