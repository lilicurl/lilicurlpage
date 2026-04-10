import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support — devcast',
  description: 'Get in touch with the devcast team.',
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
