'use client'

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-6 py-24 text-gray-800 scroll-mt-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-600 mb-8">
        About Me
      </h2>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          I’m Liliana Castellanos, a solution architect and product engineer
           with over a decade of experience driving business innovation 
           through technology.
        </p>
        <p>
          From Cuba to Chile, from developer to the sky, I’ve built systems that scale, 
          integrate, and adapt. Not by throwing everything away, 
          but by understanding what works and making it better.
        </p>
        <p>  
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Connecting fragmented tools and teams into coherent ecosystems</li>

            <li>Automating processes to reduce cost and improve decision-making</li>
            <li>Bridging the gap between technical execution and strategic business needs</li>
          </ul>
      I lead with empathy, code with purpose, and build with a deep 
      understanding of both business and people. Whether working in large
       organizations or early-stage startups, I bring clarity to complexity
        </p>
      </div>
    </section>
  )
}
