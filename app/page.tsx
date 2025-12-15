import { Navigation } from '@/components/nav'
import { Home } from '@/components/home'
import { About } from '@/components/about'
import { Portfolio } from '@/components/portfolio'
import { Experience } from '@/components/experience'

export default function Page() {
  return (
    <main>
      <Navigation />
      <Home />
      <About />
      <Portfolio />
      <Experience />
    </main>
  )
}
