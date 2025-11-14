'use client'

import { Briefcase, Calendar, MapPin } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      period: "July 2019 - October 2025",
      company: "Imagemaker",
      location: "Chile",
      roles: [
        {
          title: "Integration Lead",
          achievements: [
            "Defined and implemented system integration initiatives, aligning technological processes with strategic business objectives resulting in a 20-30% reduction in operational workloads",
            "Architected scalable solutions utilizing microservices, kubernetes, logic apps and API integration on Azure eliminating redundant data entries across multiple systems",
            "Collaborated with cross-functional teams to gather requirements, design integration workflows, and ensure seamless data flow between platforms",
            "Spearheaded MOCA, the operational backbone for service delivery and staffing management, used daily by Delivery Managers to assign talent, track client services, and calculate billable headcount, driving data-informed decisions and operational efficiency across the company."
          ],
          technologies: ["Airtable", "Pinpoint", "Odoo", "Pipefy", "Logic Apps", "Node.js", "Python", "React", "Node.js"],
        },
        {
          title: "CTO at Hugga (Internal Startup)",
          achievements: [
            "Introduced and executed Shape Up agile methodology, ensuring rapid adaptability and delivery within established timelines",
            "Supervised projects ensuring on-time and within-budget delivery, proactively mitigating risks through continuous system monitoring and planning",
            "Defined and executed the technology roadmap, achieving a 36% cost reduction by strategically selecting necessary roles",
            "Optimized infrastructure and vendor management to sustain rapid growth in uncertain startup conditions",
          ],
          technologies: ["Postgres", "Azure Cosmos DB Gremlin", "React", "Quarkus", "Kubernetes"],
        },
        {
          title: "Technical Lead & Senior Software Engineer",
          achievements: [
            "Directed development team for Banco de Chile's insurance portal (Spring Boot, Angular, microservices), ensuring timely regulatory compliance",
            "Technical team leader for Banco Santander's insurance portal, achieving departmental records for the highest production deployments rate and system stability",
            "Promoted agile SCRUM practices, reducing development cycles and improving product quality",
            "Defined key Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) as part of the Business Impact Analysis (BIA) to ensure operational continuity (ISO 22301)",
          ],
          technologies: ["Postgres", "Angular", "React", "Spring Boot", "Node.js", "Web Apps"],
        },
      ],
    },
    {
      period: "March 2016 - July 2019",
      company: "Seiza SPA",
      location: "Chile",
      roles: [
        {
          title: "Senior Software Engineer - Pre-Sales - Technical Lead",
          achievements: [
            "Developed comprehensive technical proposals and solution architectures for key clients, managing clear expectations and timely delivery",
            "Streamlined business processes through automation using Activiti BPM and Alfresco, transforming complex requirements into digital workflows",
            "Integrated legacy systems with building platforms ensuring seamless digital transformation transitions and minimal downtime",
            "Developed full-stack solutions across multiple projects",
          ],
          technologies: ["Alfresco", "BPMN2", "Activiti", "Java", "JavaScript", "C#", "Node.js", "Angular/AngularJS", "React"],
        },
      ],
    },
    {
      period: "December 2014 - March 2016",
      company: "Centric Consultancy",
      location: "Cuba",
      roles: [
        {
          title: "CEO - Technical Lead",
          achievements: [
            "Founded and led a boutique consultancy specializing in digital transformation solutions",
            "Digitized and automated processes in the Center for Molecular Immunology (CIM), significantly improving efficiency, accuracy, and collaboration, reducing the workload by 30%",
            "Deployed Enterprise Content Management (ECM) systems using Activiti and Alfresco, automating critical document management workflows",
            "Managed end-to-end project lifecycles, consistently meeting client expectations within budgetary and time constraints",
          ],
          technologies: ["Alfresco", "BPMN2", "Activiti", "Java", "JavaScript", "Material UI"],
        },
      ],
    },
  ]

  const skills = {
    "Programming & Frameworks": ["Java", "C#", "Python", "JavaScript/TypeScript", "Angular", "React", "Node.js", "SQL", "Spring Boot", ".NET"],
    "Cloud & DevOps": ["Microsoft Azure", "CI/CD", "Azure DevOps", "Jenkins", "Docker", "Kubernetes"],
    "Integration & BPM": ["Microservices", "RESTful APIs", "Activiti BPM", "Alfresco", "BPMN 2.0", "SharePoint"],
    "Data & AI": ["SQL/Relational Databases", "Elasticsearch", "Supabase", "OpenAI API"],
    "Agile & Project Management": ["Scrum", "Shape Up", "Jira", "Trello", "Azure DevOps"],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 gradient-text text-center">
          Professional Experience
        </h1>
        <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          10+ years of experience aligning technology and business strategy across financial services, HR, and operations.
          Proven track record leading full product lifecycles and delivering scalable cloud solutions.
        </p>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, expIndex) => (
            <div key={expIndex} className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{exp.company}</h2>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="mt-6 border-l-4 border-gradient-to-b from-blue-600 to-pink-600 pl-4">
                  <div className="flex items-start gap-2 mb-3">
                    <Briefcase className="h-5 w-5 text-blue-600 mt-1" />
                    <h3 className="text-xl font-semibold text-gray-800">{role.title}</h3>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {role.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {role.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-pink-100 text-gray-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-200 mt-8">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600">
            Education
          </h2>
          <div className="text-gray-700">
            <h3 className="font-semibold text-lg">B.Sc. Computer Science Engineering</h3>
            <p className="text-gray-600">Universidad de las Ciencias Informáticas (University of Informatics Sciences)</p>
            <p className="text-gray-600">Havana, Cuba • Graduated 2011</p>
          </div>
        </div>
      </div>
    </div>
  )
}
