'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ViewMode } from '@/app/page';
import { resumeData } from '@/lib/resume-data';
import {
  User,
  Briefcase,
  Code,
  FileText,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

interface ProfessionalModeProps {
  onModeChange: (mode: ViewMode | null) => void;
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

type Section = 'background' | 'skills' | 'projects' | 'resume';

export function ProfessionalMode({
  onModeChange,
  activeSection: externalActiveSection,
  onSectionChange,
}: ProfessionalModeProps) {
  const [internalActiveSection, setInternalActiveSection] =
    useState<Section>('background');

  // Use external activeSection if provided, otherwise use internal state
  const activeSection =
    (externalActiveSection as Section) || internalActiveSection;

  const handleSectionChange = (section: Section) => {
    setInternalActiveSection(section);
    if (onSectionChange) {
      onSectionChange(section);
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'background':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Background & Introduction
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {resumeData.personalInfo.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  {resumeData.personalInfo.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  {resumeData.personalInfo.phone}
                </div>
              </div>
              <Separator className="my-6" />
              <p className="text-lg leading-relaxed">
                {resumeData.background.introduction}
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  {resumeData.background.summary}
                </p>
              </CardContent>
            </Card>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            {resumeData.skills.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Projects & Portfolio</h2>
            <div className="grid gap-6">
              {resumeData.projects.map((project) => (
                <Card key={project.title}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {project.title}
                          {project.link && (
                            <Button variant="ghost" size="sm" asChild>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.period}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'resume':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Resume</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Download Resume</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    You can download my complete resume as a PDF document.
                  </p>
                  <Button onClick={downloadResume}>
                    <FileText className="h-4 w-4 mr-2" />
                    Download PDF Resume
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resume Preview</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-[600px] w-full">
                    <iframe
                      src="/resume.pdf"
                      className="w-full h-full border-0 rounded-b-lg"
                      title="Resume Preview"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="container mx-auto px-4 py-6">{renderContent()}</div>;
}
