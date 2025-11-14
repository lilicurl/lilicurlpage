import { Navigation } from '@/components/nav'
import { ArrowLeft, Briefcase, Calendar, Target, TrendingUp, Shield, Award } from 'lucide-react'
import Link from 'next/link'

export default function BankingInsuranceCase() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <Link
            href="/#portfolio"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 gradient-text">
            Banking Insurance Portals
          </h1>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-200 mb-8">
            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 2019 </span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Imagemaker • Technical Lead & Senior Software Engineer</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="mb-6">
                Led technical teams in developing and maintaining critical insurance portals for two of
                Chile's largest financial institutions: Banco de Chile and Banco Santander. These projects
                required navigating strict regulatory requirements, ensuring high system availability, and
                delivering robust microservices architecture at scale.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Record Performance</h3>
                      <p className="text-gray-700">
                        Achieved <strong>departmental record for highest production deployment rate</strong>
                        and system stability at Banco Santander.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Regulatory Excellence</h3>
                      <p className="text-gray-700">
                        Ensured timely <strong>regulatory compliance</strong> for insurance products
                        across both banking institutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Project Highlights</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Banco de Chile Insurance Portal</h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Directed development team for complete insurance portal using Spring Boot and Angular</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Implemented microservices architecture for scalability and maintainability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Ensured timely regulatory compliance with Chilean insurance regulations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Coordinated with business stakeholders to translate complex insurance requirements into technical solutions</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Banco Santander Insurance Portal</h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Technical team leader responsible for architecture decisions and technical roadmap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Achieved departmental record for highest production deployments rate while maintaining system stability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Promoted and implemented agile SCRUM practices, reducing development cycles and improving product quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Mentored junior developers and established coding standards and best practices</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Technical Architecture</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Microservices Design</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Built a robust microservices architecture that separated concerns across domains:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Product Service:</strong> Insurance product catalog and management</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Quote Service:</strong> Real-time insurance quote calculations</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Policy Service:</strong> Policy lifecycle management</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Customer Service:</strong> Customer data and profile management</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Integration Service:</strong> Third-party insurance provider integration</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>Document Service:</strong> Policy document generation and storage</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technology Stack</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Backend:</strong> Spring Boot microservices with RESTful APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Frontend:</strong> Angular SPA with responsive design and real-time updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Database:</strong> PostgreSQL for transactional data with proper backup and recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Deployment:</strong> Atlasian Bamboo for CI/CD pipelines</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Business Continuity & Compliance</h2>

              <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">ISO 22301 Compliance</h3>
                    <p className="text-gray-700 mb-4">
                      Defined key Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) as
                      part of Business Impact Analysis (BIA) to ensure operational continuity.
                    </p>
                  </div>
                </div>

              
              </div>

              

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Agile Transformation</h4>
                      <p className="text-gray-700">
                        Successfully promoted and implemented SCRUM methodology, reducing development
                        cycles from months to weeks and improving cross-functional collaboration.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-pink-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Regulatory Success</h4>
                      <p className="text-gray-700">
                        Ensured 100% on-time delivery of regulatory compliance requirements, avoiding
                        potential fines and maintaining strong relationships with financial regulators.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Team Development</h4>
                      <p className="text-gray-700">
                        Mentored development team members, establishing coding standards, conducting
                        code reviews, and fostering a culture of continuous improvement and technical excellence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {["Spring Boot", "Angular", "React", "PostgreSQL", "Node.js", "Atlassian", "Microservices", "RESTful APIs", "CI/CD", "SCRUM"].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-pink-100 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
    </main>
  );
}
