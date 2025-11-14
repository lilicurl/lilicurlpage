import { Navigation } from '@/components/nav'
import { ArrowLeft, Briefcase, Calendar, Target, TrendingDown, Users } from 'lucide-react'
import Link from 'next/link'

export default function HuggaCaseStudy() {
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
            Hugga - HR Tech Startup
          </h1>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-200 mb-8">
            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Internal Startup at Imagemaker</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Chief Technology Officer</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="mb-6">
                As CTO of Hugga, an internal HR tech startup focused on revolutionizing employee engagement
                and human resources management, I led the complete technology strategy, team building, and
                infrastructure design. The role required balancing rapid startup growth with cost efficiency
                while maintaining technical excellence and scalability.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <TrendingDown className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Cost Optimization</h3>
                      <p className="text-gray-700">
                        Achieved <strong>36% cost reduction</strong> through strategic role selection
                        and efficient technology stack choices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Agile Methodology</h3>
                      <p className="text-gray-700">
                        Introduced <strong>Shape Up methodology</strong> ensuring rapid adaptability
                        and delivery within established timelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Leadership & Strategy</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Technology Roadmap</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Defined and executed comprehensive technology roadmap aligned with business objectives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Strategically selected team composition and roles to optimize costs while maintaining delivery quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Optimized infrastructure and vendor management to support rapid growth in uncertain startup conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Implemented continuous system monitoring and risk mitigation strategies to ensure on-time, within-budget delivery</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Agile Transformation</h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Shape Up Methodology</h4>
                <p className="text-gray-700 mb-4">
                  Introduced Basecamp's Shape Up framework to replace traditional sprint-based development,
                  enabling the team to work in focused 6-week cycles with intentional cooldown periods.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span><strong>Betting Table:</strong> Strategic project selection aligned with business priorities</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span><strong>Small Batches:</strong> Shaped projects with clear boundaries and appetite</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span><strong>Circuit Breaker:</strong> Fixed time, variable scope to prevent runaway projects</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Technical Architecture</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Infrastructure Design</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Container Orchestration:</strong> Kubernetes deployment for high availability and scalability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Database Strategy:</strong> PostgreSQL for relational data, Azure Cosmos DB Gremlin API for graph-based relationship modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Frontend:</strong> Modern React application with responsive design and real-time updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Backend:</strong> Quarkus (supersonic subatomic Java) for high-performance microservices</span>
                </li>
              </ul>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Why Graph Database?</h4>
                <p className="text-gray-700">
                  Leveraged Azure Cosmos DB's Gremlin API to model complex organizational hierarchies,
                  employee relationships, and dynamic team structures efficiently—a natural fit for
                  HR tech applications where relationships are as important as entities themselves.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Key Achievements</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Cost-Effective Scaling</h4>
                      <p className="text-gray-700">
                        Reduced operational costs by 36% through strategic technology choices and efficient
                        team composition, enabling the startup to extend runway and achieve key milestones.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Rapid Delivery</h4>
                      <p className="text-gray-700">
                        Supervised projects with Shape Up methodology, ensuring consistent on-time and
                        within-budget delivery while maintaining team autonomy and creativity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-pink-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Scalable Foundation</h4>
                      <p className="text-gray-700">
                        Built infrastructure capable of supporting rapid user growth and feature expansion,
                        with automated deployments and comprehensive monitoring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {["Kubernetes", "React", "Quarkus", "PostgreSQL", "Azure Cosmos DB Gremlin", "Shape Up", "Docker", "CI/CD", "Azure DevOps", "Microservices"].map((tech, index) => (
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
      </div>
    </main>
  )
}
