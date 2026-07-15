import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Navbar from './Navbar'
import HeroBg from './HeroBg'

interface HeroV4Props {
  bg?: 'video' | 'dark' | 'gradient'
}

export default function HeroV4({ bg = 'video' }: HeroV4Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <HeroBg variant={bg} parallax={bg === 'video'} />

      <div className="relative z-50">
        <Navbar variant="dark" />
      </div>

      <div
        className={`absolute left-0 right-0 z-20 flex flex-col items-center transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ top: '22%' }}
      >
        <h1
          className="text-center px-6"
          style={{
            fontWeight: 400,
            fontSize: 'clamp(36px, 5.4vw, 72px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          <span className="block text-white">Simplify your programmatic.</span>
          <span className="block text-white/50">Simple. Performant. Transparent.</span>
        </h1>
      </div>

      <div
        className={`absolute bottom-14 left-0 right-0 z-20 flex flex-col items-center gap-6 transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <p className="max-w-[620px] text-[15px] leading-relaxed text-center px-6">
          <span className="text-white">
            Simplify your programmatic advertising solutions and test an expert software suite for sellers and buyers.
          </span>
          <span className="text-white/50">
            {' '}Single line of code to insert and you're ready to go.
          </span>
        </p>

        <Link to="/contact">
          <button className="bg-white text-black text-[15px] font-medium rounded-full px-8 py-3.5 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(255,255,255,0.2)] active:scale-[0.97] cursor-pointer flex items-center gap-2">
            Contact us for a free audit
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium tracking-[0.14em] text-white/70 uppercase">
            GDPR Compliant &middot; Zero impact on Core Web Vitals
          </span>
        </div>
      </div>
    </div>
  )
}
