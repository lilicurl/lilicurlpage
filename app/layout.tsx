import { Montserrat, Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Integration Lead & Strategic Technology Leader',
  description: 'El arte de mejorar tu negocio TI sin empezar de nuevo',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={cn(montserrat.variable, poppins.variable)}>
      <body className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 font-poppins">
        {children}
      </body>
    </html>
  )
}
