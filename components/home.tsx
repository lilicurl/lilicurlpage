'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'

export function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Network nodes
    const nodes: { x: number; y: number; vx: number; vy: number }[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(100, 100, 100, 0.5)'
        ctx.fill()

        // Draw connections
        nodes.forEach((other, j) => {
          if (i === j) return
          const dx = other.x - node.x
          const dy = other.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(100, 100, 100, ${1 - distance / 100})`
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
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      />
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 gradient-text">
          The Art of Improving Without Starting Over
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Hi, I’m Liliana Castellanos, a software engineer and solution architect.
          I like to say I’m a catalyzer— someone who connects business goals with technical execution, turning ideas into results without rebuilding everything from scratch.
        </p>
        
        <div className="flex gap-4 justify-center">
          <a href="#portfolio">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8">
              Portfolio
            </Button>
          </a>  
          <a href="https://www.linkedin.com/in/lilicurl" target="_blank" rel="noopener noreferrer" >
            <Button size="lg" variant="outline" className="border-2">
              <Linkedin className="mr-2 h-4 w-4" />
              Conectar
              
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
