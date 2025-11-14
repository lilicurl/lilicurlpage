import { Navigation } from '@/components/nav'
import { ArrowLeft, Briefcase, Calendar, Target, TrendingDown } from 'lucide-react'
import Link from 'next/link'

export default function SystemIntegrationCase() {
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
            System Integration at @Imagemaker
          </h1>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 shadow-lg border border-gray-200 mb-8">
            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>July 2019 - October 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Imagemaker • Integration Lead</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="mb-6">
                A fast-growing services company was facing a common scaling challenge: operational and financial information was scattered across several unconnected tools (CRM, ATS, onboarding, HRIS, ERP). Because there was no single source of truth, leadership struggled with delayed reporting, duplicated manual work, and inconsistent KPIs.

As Integration Lead, I designed and implemented a full data consolidation layer that unified all core business processes into a dimensional model. This empowered executives with reliable, real-time insights on revenue, delivery capacity, staffing, and financial forecasting
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-3">
                  <TrendingDown className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Business Impact & Key Achievements</h3>
                    <p className="text-gray-700">
                      <ul>
                        <li className="mb-2">Achieved a <strong>20% workload reduction in Change Management area</strong> by aligning system integrations with strategic goals and automating redundant processes</li>
                        <li className="mb-2">Enabled <strong>real-time tracking of billable headcount</strong> and service assignments, which was critical for financial forecasting and operational planning.</li>
                        <li className="mb-2">Created a <strong>single source of truth </strong>for core indicators: projected revenue, active assignments, margin by market, and staffing utilization.</li>
                        <li className="mb-2">Unified data pipelines served as the foundation for other strategic initiatives, including MOCA.</li>
                        </ul>

                     
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Technical Approach</h2>
              <p className="mb-6">
                The solution combined API integrations, scalable data modeling, orchestration automation, and executive dashboarding.

              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">API Integration Layer (Python)</h4>
                      <p className="text-gray-700">
                        I implemented a series of Python-based connectors to extract structured data from CRM, ATS, HRIS, ERP, and onboarding systems. Data was normalized and stored in a staging schema for transformation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Dimensional Modeling (Kimball Principles)</h4>
                      <p className="text-gray-700">
                        I designed a star schema around the company’s core business processes, including:
                        Dimensions

                          Client / Account

                          Employee / Talent

                          Opportunity / Engagement

                          Product / Service Offering

                          Country & Date Dimensions

                          Facts

                          Projected revenue

                          Billable headcount

                          Staffing assignments

                          Opportunity lifecycle

                          Monthly revenue projections

                          The model supports slicing by market, account, seniority, profile type, and date.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-pink-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Automated Orchestration</h4>
                      <p className="text-gray-700">
                        To replace manual data maintenance, I implemented:

                    Scheduled serverless jobs running extraction and transformation scripts

Workflow orchestration in Azure Logic Apps ensuring dependencies execute in the correct order

Automatic updates to downstream analytics models

This guaranteed fresh data for decision-making every day
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Executive Dashboards (Power BI / DAX)</h4>
                      <p className="text-gray-700">
                        Using the dimensional layer, I built dynamic dashboards that provide:

                      Capacity vs demand

                      Margin insights by account and service

                      Headcount utilization

                      Forecast vs actual revenue

                      Assignment lifecycle analytics
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Challenges & Learnings</h4>
                      <p className="text-gray-700">
                        Mapping internal vs. external IDs across systems required collaboration with business owners.

Handling incomplete records (e.g., missing maker_id_client_partner) led to building fallback logic.

Writing SQL views that were both performant and understandable by analysts was key for adoption
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Strategic Tradeoff: Why We Chose Logic Apps Before a Custom Integration Layer</h2>
              <p className="mb-6">
                I chose Azure Logic Apps over a custom integration engine because it allowed us to deliver value immediately. Logic Apps gave us a reliable orchestration layer with retries, scheduling, monitoring, and dependency management out of the box — letting us focus our engineering time on data modeling, Python extractors, and the KPI layer instead of building infrastructure. This decision reduced engineering effort, lowered risk, and accelerated time-to-value during a period when leadership urgently needed unified financial and operational visibility.

By deploying integrations in days instead of months, we enabled real-time headcount, margin, and revenue forecasting much earlier in the project lifecycle. The fast iteration cycle also let us validate transformations, understand system load, and refine business rules before considering a long-term custom solution. The tradeoff was clear: optimize for speed and impact now, and evolve to custom orchestration later with real usage data — a pragmatic technical decision that delivered measurable business outcomes.

              </p>
              

              

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8"></h2>
              

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {["Azure Logic Apps", "Kubernetes", "Python", "Airtable", "Pinpoint", "Odoo", "Pipefy", "RESTful APIs", "Microservices"].map((tech, index) => (
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
