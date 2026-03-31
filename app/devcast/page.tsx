import Link from 'next/link'
import { Github, ArrowRight, GitCommit, Cpu, MessageSquare, Eye, Zap, Shield, CheckCircle, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const GITHUB_URL = 'https://github.com/vialabs-net/social-engagement'

const HOW_IT_WORKS = [
  {
    icon: GitCommit,
    step: '01',
    title: 'You push code',
    description:
      'devcast watches every repository under your GitHub account. No configuration per repo — one setup, every push.',
  },
  {
    icon: Cpu,
    step: '02',
    title: '24 modules analyze it',
    description:
      'Performance, security, architecture, Python, Go, Java, Elixir, React — modules run in parallel and surface what is actually interesting.',
  },
  {
    icon: MessageSquare,
    step: '03',
    title: 'Claude writes in your voice',
    description:
      'One Claude API call per commit. The post lands in Buffer as a draft. You review, edit if needed, and publish.',
  },
]

const MODULES = [
  'Complexity',
  'Security',
  'Performance',
  'Design Patterns',
  'Clean Code',
  'Type System',
  'API Design',
  'Error Resilience',
  'Observability',
  'Concurrency',
  'Python',
  'Go',
  'Java / Quarkus',
  'Elixir / OTP',
  'React Patterns',
  'DevOps',
  'Architecture',
  'Testing',
  'Evolutionary',
  'DX',
  'AI-Assisted',
  'Integration',
  'Dependency Health',
  'JS Advanced',
]

const FEATURES = [
  {
    icon: Zap,
    title: 'Free tiers only',
    description:
      'GitHub Actions, Buffer, and Supabase are free. Only the Claude API costs money — roughly $0.006 per post.',
  },
  {
    icon: Eye,
    title: 'Human review always',
    description:
      'Posts go to Buffer as Ideas. You approve, edit, and publish from Buffer\'s native UI. No auto-publish path exists.',
  },
  {
    icon: Shield,
    title: 'Voice training loop',
    description:
      'Every post you publish feeds back into the system. devcast learns your edit patterns and writes closer to your voice over time.',
  },
  {
    icon: Code2,
    title: 'Extensible by design',
    description:
      'Write custom analysis modules in TypeScript using the devcast-sdk. Publish to npm as devcast-module-*, list in config.',
  },
]

export default function DevcastPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">

      {/* Nav */}
      <nav className="border-b border-zinc-800 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="font-semibold tracking-tight text-white">devcast</span>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open source · Free to fork
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Your commits.{' '}
            <span className="gradient-text">In the feed.</span>
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-zinc-400">
            devcast monitors every GitHub repository you own, analyzes each commit with 24
            specialized modules, and generates LinkedIn + Instagram posts in your voice —
            automatically.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
              <Link href={`${GITHUB_URL}/generate`} target="_blank" rel="noopener noreferrer">
                Use this template
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-zinc-700 bg-transparent text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View source
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-semibold text-white">How it works</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {HOW_IT_WORKS.map(({ icon: Icon, step, title, description }) => (
              <div key={step} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-500">{step}</span>
                  <Icon className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="mb-2 font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24 modules */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-semibold text-white">24 analysis modules</h2>
            <p className="text-sm text-zinc-500">
              Modules run in parallel. Zero findings = no Claude call = no cost.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {MODULES.map((mod) => (
              <span
                key={mod}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300"
              >
                {mod}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-semibold text-white">Built for the long run</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="mt-0.5 shrink-0">
                  <Icon className="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="mb-1.5 font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup steps */}
      <section className="border-t border-zinc-800 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-10 text-2xl font-semibold text-white">Up and running in 8 steps</h2>
          <ol className="space-y-3 text-left">
            {[
              'Fork the repo (Settings → Actions → Allow all actions)',
              'Create a Supabase project and run database/schema.sql',
              'Add 5 secrets: ANTHROPIC_API_KEY, BUFFER_ACCESS_TOKEN, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, CONFIG_YAML',
              'Copy config.example.yaml → set your GitHub username',
              'Run npm run setup-buffer to get Buffer profile IDs',
              'Edit voice-bootstrap.md with 3–5 posts in your voice',
              'Run npm run bootstrap to seed voice history',
              'Actions → "Poll and Generate" → Run workflow → check Buffer Ideas',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span className="text-sm text-zinc-400">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
              <Link href={`${GITHUB_URL}/generate`} target="_blank" rel="noopener noreferrer">
                Use this template
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between text-xs text-zinc-600">
          <span>
            Built by{' '}
            <Link href="https://lilicurl.com" className="text-zinc-400 hover:text-white transition-colors">
              Liliana Castellanos
            </Link>
          </span>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-zinc-400 transition-colors"
          >
            <Github className="h-3.5 w-3.5" />
            vialabs-net/social-engagement
          </Link>
        </div>
      </footer>

    </div>
  )
}
