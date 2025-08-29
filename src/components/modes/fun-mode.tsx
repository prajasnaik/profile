"use client";

import { useRef } from "react";
import { ViewMode } from "@/app/page";
import resumeData from "@/data/resume.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Globe,
  Github,
  Linkedin,
} from "lucide-react";

import Image from "next/image";

interface FunModeProps {
  onModeChange: (mode: ViewMode | null) => void;
}

export function FunMode({ onModeChange }: FunModeProps) {
  const { personalInfo, background, skills, projects } = resumeData as {
    personalInfo: typeof resumeData.personalInfo;
    background: typeof resumeData.background;
    skills: typeof resumeData.skills;
    projects: import("@/lib/types").Project[];
  };
  const imgRef = useRef<HTMLImageElement | null>(null);
  // 1x1 pixel black JPEG fallback
  const fallbackDataUri =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhISEhIVFhUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EADwQAAEDAwMCAwUHBQAAAAAAAAECAxEABAUSITETQVEiMmFxgZGhFCNCUrHBFSMzYoLC0eH/xAAZAQEAAwEBAAAAAAAAAAAAAAABAgMEBQb/xAAmEQEAAgEDAwQDAAAAAAAAAAABAhEDBBIhMQRBIlEFMkJxYYHR/9oADAMBAAIRAxEAPwD7iIiAiIgIiICIiAiIgIiICIiAiY7Zt0nqz8W0h8l3fZ0s1tYx8jzXn0u4P8Ao2m6+0oZlJm2JYwY6mu8b2mT1a9k2J0z6l9Qxq3sS36yF6N5xvV3m3V6Zq2rjUq7TZq7H6C9o3o0rFjJfpe7+uF0f3fUdie9Hk6m2p9h0VK1xjQXyHqYz7j7vG0yZ9P2zTtQ0v2rV0pKqg1k0pU6lU/IVl1o2J8z1v2Qq2K1Ybqf2Yv6e2tV2n5T5+HnjXjQXh3sQ5n3Te6x7eI6qv8AG+3i8rU1b9J9k3t0b7a0WQkYpKkqZk8wX3nA8Zf8A6bWc9Y7eT8n5iIiAiIgIiICIiAiIgIiICIiAiIgf/2Q==";

  return (
    <div className="min-h-screen bg-background">
      {/* Newspaper Wrapper */}
      <div className="container mx-auto px-4 py-8">
        {/* Masthead */}
        <div className="text-center">
          <div className="uppercase tracking-widest text-xs text-muted-foreground">
            Special Portfolio Edition
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
            The {personalInfo.name?.split(" ")[0] || "Dev"} Daily
          </h1>
          <div className="mt-2 text-sm text-muted-foreground">
            {new Date().toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            <span className="mx-2">•</span>
            {personalInfo.location}
          </div>
        </div>

        <Separator className="my-6" />

        {/* Top Banner: Nameplate and Contacts */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">Front Page Feature</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3 items-start">
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold leading-snug">
                    {personalInfo.name}
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {background.introduction}
                  </p>
                  <Separator className="my-4" />
                  <p className="leading-relaxed">{background.summary}</p>
                </div>
                <div className="md:col-span-1">
                  <Image
                    ref={imgRef}
                    src="profile-photo.jpg"
                    width={200}
                    height={300}
                    unoptimized={true}
                    alt={`${personalInfo.name} portrait`}
                    onError={() => {
                      if (imgRef.current) imgRef.current.src = fallbackDataUri;
                    }}
                    className="w-full aspect-[3/4] object-cover rounded-md border"
                  />
                  <div className="mt-2 text-[11px] text-muted-foreground text-center">
                    Portrait
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {personalInfo.location}
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" /> {personalInfo.email}
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" /> {personalInfo.phone}
                </li>
              </ul>
              <Separator className="my-4" />
              <div className="flex flex-wrap gap-2 text-sm">
                {personalInfo.website && (
                  <a
                    className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
                    href={personalInfo.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Globe className="h-4 w-4" /> Website
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {personalInfo.github && (
                  <a
                    className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" /> GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                {personalInfo.linkedin && (
                  <a
                    className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle: Columns like a newspaper */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {/* Column 1: Skills */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Classifieds: Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skills.map((group) => (
                  <div key={group.category}>
                    <div className="text-sm font-semibold mb-2">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Column 2-3: Projects */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Headlines: Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {projects.map((p, idx) => (
                  <div key={p.title}>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold leading-snug">
                          {p.title}
                        </h3>
                        {p.period && (
                          <div className="text-xs text-muted-foreground mt-1">
                            {p.period}
                          </div>
                        )}
                      </div>
                      {p.link && (
                        <a
                          className="inline-flex items-center gap-1 text-sm underline-offset-4 hover:underline"
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${p.title}`}
                        >
                          Read More <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    {p.technologies?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.technologies.map((t) => (
                          <Badge key={t} variant="secondary">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                    {idx < projects.length - 1 && (
                      <Separator className="my-6" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer ribbon */}
        <Separator className="my-8" />
        <div className="text-center text-xs text-muted-foreground">
          Printed with shadcn/ui • No colors were harmed in the making of this
          newspaper
        </div>
      </div>
    </div>
  );
}
