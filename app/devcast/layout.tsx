import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'devcast — your commits, in the feed',
  description:
    'devcast monitors every GitHub repo you own, analyzes the code with 24 specialized modules, and generates LinkedIn + Instagram posts in your voice — automatically.',
  openGraph: {
    title: 'devcast — your commits, in the feed',
    description:
      'Open-source tool that turns GitHub commits into social media posts. Free to fork. Runs on GitHub Actions.',
    url: 'https://devcast.lilicurl.com',
    siteName: 'devcast',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'devcast — your commits, in the feed',
    description: 'Turns GitHub commits into LinkedIn + Instagram posts. Free. Open source.',
  },
}

export default function DevcastLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
