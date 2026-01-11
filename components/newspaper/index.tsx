"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { articles, personalInfo, siteConfig } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  featured?: boolean;
  slug: string;
}

function ArticleCard({
  title,
  description,
  category,
  date,
  featured,
}: ArticleCardProps) {
  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`
        group cursor-pointer
        ${featured ? "col-span-full lg:col-span-2 row-span-2" : ""}
      `}
    >
      <div
        className={`
        h-full p-6 rounded-lg border border-border/50
        bg-card/50 hover:bg-card hover:border-primary/30
        transition-all duration-300
        ${featured ? "p-8 lg:p-10" : ""}
      `}
      >
        <div className="flex items-center gap-2 mb-3">
          <Badge
            variant="outline"
            className="text-xs uppercase tracking-wider"
          >
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h3
          className={`
          font-serif-display font-bold tracking-tight leading-tight
          group-hover:text-primary transition-colors
          ${
            featured
              ? "text-2xl sm:text-3xl lg:text-4xl mb-4"
              : "text-lg sm:text-xl mb-2"
          }
        `}
        >
          {title}
        </h3>
        <p
          className={`
          text-muted-foreground leading-relaxed
          ${featured ? "text-base sm:text-lg" : "text-sm line-clamp-2"}
        `}
        >
          {description}
        </p>
        <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Read more
          <svg
            className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </motion.article>
  );
}

export function NewspaperContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      {/* Masthead */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-12 lg:mb-16"
      >
        <div className="inline-flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {siteConfig.newspaper.tagline}
          </span>
          <div className="h-px w-12 bg-border" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-bold tracking-tight mb-4">
          {personalInfo.name}
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {personalInfo.tagline}
        </p>
      </motion.div>

      {/* Decorative Divider */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-4 mb-10"
      >
        <div className="flex-1 h-px bg-border" />
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
        </div>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.description}
            category={article.category}
            date={article.date}
            featured={article.featured}
            slug={article.slug}
          />
        ))}
      </div>

      {/* Bottom Navigation */}
      <motion.div
        variants={itemVariants}
        className="mt-12 lg:mt-16 pt-8 border-t border-border"
      >
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {["About", "Projects", "Experience", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item}
              </a>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
