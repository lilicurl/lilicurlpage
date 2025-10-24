'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Linkedin } from 'lucide-react'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
 
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const nodes: { x: number; y: number; vx: number; vy: number }[] = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        ctx.beginPath()
        ctx.arc(node.x, node.y, 1, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(100, 100, 100, 0.3)'
        ctx.fill()

        nodes.forEach((other, j) => {
          if (i === j) return
          const dx = other.x - node.x
          const dy = other.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(100, 100, 100, ${0.1 - distance / 1500})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      />
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-8 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          The art of scaling your tech systems without starting over
        </h1>
        <p className="text-lg md:text-xl mb-12 text-gray-700 max-w-3xl mx-auto">
          Integration Lead con más de 10 años de experiencia en tecnología, liderando proyectos de transformación digital y optimización de procesos.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">
            Ver Portafolio
          </Button>
          <Button size="lg" variant="outline" className="border-2">
            <Linkedin className="mr-2 h-5 w-5" />
            Conectar
          </Button>
        </div>
      </div>
    </div>
  )
}
