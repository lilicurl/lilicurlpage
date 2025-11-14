'use client'

import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

export function Portfolio() {
  const projects = [
    {
      title: "System Integration @Imagemaker",
      description: "Architected and implemented scalable integration solutions connecting Sass solutions using Azure Logic Apps and APIs, achieving 20% reduction in workloads.",
      tags: ["Azure", "Microservices", "API Integration", "Process Automation, Solution Architecture"],
      link: "/projects/system-integration",
    },
    {
      title: "Hugga - HR Tech Startup",
      description: "Led technology roadmap as CTO, implementing Shape Up methodology and achieving 36% cost reduction. Built scalable infrastructure using Kubernetes, React, and Quarkus.",
      tags: ["CTO Role", "Shape Up", "Kubernetes", "React", "Azure Cosmos DB"],
      link: "/projects/hugga-hr-tech",
    },
    {
      title: "Banking Insurance Portals",
      description: "Technical leadership for Banco de Chile and Banco Santander insurance portals, achieving record deployment rates and ensuring regulatory compliance with microservices architecture.",
      tags: ["Spring Boot", "Angular", "Microservices", "Financial Services"],
      link: "/projects/banking-insurance",
    },
    {
      title: "Pre- sales & Technical Lead @Seiza SPA",
      description: "Designed and implemented end-to-end digital transformation solutions for clients using BPMN2 workflows, Alfresco, and full-stack development.",
      tags: ["Digital Transformation", "BPMN2", "Alfresco", "Full-Stack Development"],
      link: "/projects/seiza-pre-sales",
    },
     {
      title: "CEO & CTO @Centric Consulting",
      description: "Founded and led a consulting firm specializing in digital transformation and software development, delivering tailored solutions to diverse clients.",
      tags: ["Digital Transformation", "BPMN2", "Alfresco", "Leadership"],
      link: "/projects/centric-consulting",
    },
  ]

  return (
    <section
      id="portfolio"
      className="mx-auto max-w-4xl px-6 py-24 text-gray-800 scroll-mt-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 mb-8">
        Portfolio
      </h2>

      <div className="space-y-6 text-lg leading-relaxed mb-12">
        <p>
          (How I bridge tech and business to deliver scalable results)
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-pink-100 text-gray-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a href={project.link}>
              <Button variant="outline" className="border-2">
                View Case Study
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
