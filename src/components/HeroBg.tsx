import { useEffect, useRef } from 'react'

interface HeroBgProps {
  variant: 'video' | 'dark' | 'gradient'
  parallax?: boolean
}

export default function HeroBg({ variant, parallax = false }: HeroBgProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!parallax) return
    const el = ref.current
    if (!el) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetX = ((e.clientX - cx) / cx) * 20
      targetY = ((e.clientY - cy) / cy) * 20
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06
      el.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.08)`
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [parallax])

  if (variant === 'video') {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={ref} className={`w-full h-full origin-center ${parallax ? 'scale-[1.08]' : ''}`}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="/hero-bg.mp4"
          />
        </div>
      </div>
    )
  }

  if (variant === 'dark') {
    return (
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#131a35] to-[#0e1225]" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-brand-blue/[0.04] blur-[150px]" />
      </div>
    )
  }

  // gradient
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d3a] to-[#081020]" />
      {/* Glow orbs */}
      <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-brand-blue/[0.07] blur-[100px]" />
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-blue/[0.05] blur-[120px]" />
      <div className="absolute bottom-[10%] left-[30%] w-[250px] h-[250px] rounded-full bg-white/[0.02] blur-[80px]" />
      {/* Small floating dots */}
      <div className="absolute top-[12%] right-[20%] w-3 h-3 rounded-full bg-white/[0.06]" />
      <div className="absolute top-[30%] left-[8%] w-2 h-2 rounded-full bg-white/[0.04]" />
      <div className="absolute top-[55%] right-[35%] w-4 h-4 rounded-full bg-white/[0.03]" />
      <div className="absolute top-[70%] left-[20%] w-2.5 h-2.5 rounded-full bg-brand-blue/[0.08]" />
      <div className="absolute top-[25%] left-[45%] w-1.5 h-1.5 rounded-full bg-white/[0.05]" />
      <div className="absolute top-[80%] right-[15%] w-3 h-3 rounded-full bg-white/[0.04]" />
    </div>
  )
}
