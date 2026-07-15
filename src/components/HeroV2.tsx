import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Sparkles, ArrowUpRight, ChevronRight } from 'lucide-react'
import HeroBg from './HeroBg'

interface HeroV2Props {
  bg?: 'video' | 'dark' | 'gradient'
}

export default function HeroV2({ bg = 'video' }: HeroV2Props) {
  return (
    <div className="w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]">
      <section className="relative w-full max-w-[1536px] h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center">
        <HeroBg variant={bg} />

        <div className="relative z-10 w-full h-full flex flex-col items-center">
          {/* Navbar */}
          <nav className="flex items-center justify-between py-5 px-5 md:px-10 w-full relative z-50">
            <Link to="/" className="flex items-center gap-2">
              <img src="/long-logo.png" alt="hitopic" className="h-5 md:h-6" />
            </Link>
            <Link to="/contact">
              <span className="bg-brand-blue text-brand-navy text-sm font-medium rounded-full px-6 py-3 hover:bg-brand-blue/90 transition-colors">
                get started
              </span>
            </Link>
          </nav>

          <div className="w-full flex flex-col items-center pt-8 px-6 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 mx-auto mb-3 w-fit"
            >
              <Sparkles className="w-4 h-4 text-[rgba(30,50,90,0.8)]" />
              <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">
                Programmatic Advertising
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-normal text-[#5E6470] mb-2 tracking-tight leading-[1.05]"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Boost Your Revenue
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-[#5E6470] opacity-80 leading-relaxed max-w-xl font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Simplify your programmatic advertising with a single line of code and maximize your revenue.
            </motion.p>
          </div>

          {/* Bottom-left card */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-28 right-4 left-auto md:left-6 md:right-auto md:bottom-6 lg:bottom-10 lg:left-10 p-3 md:p-4 lg:p-5 rounded-[1.2rem] md:rounded-[1.5rem] lg:rounded-[2.2rem] bg-white/30 backdrop-blur-xl flex flex-col gap-2 lg:gap-3 min-w-[140px] md:min-w-[150px] lg:min-w-[180px] w-fit"
          >
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-normal text-[rgba(30,50,90,0.9)] tracking-tight">+500</span>
              <span className="text-[10px] md:text-[12px] font-normal text-[rgba(30,50,90,0.6)] uppercase tracking-wider">
                Publishers Trust Us
              </span>
            </div>
            <Link to="/contact">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center bg-white rounded-full pl-1.5 pr-5 py-1.5 gap-2 hover:bg-white/90 transition-colors self-start"
              >
                <div className="bg-[rgba(30,50,90,0.1)] p-1 rounded-full flex items-center justify-center">
                  <ArrowUpRight className="w-4 h-4 text-[rgba(30,50,90,0.9)]" />
                </div>
                <span className="text-[14px] font-normal text-[rgba(30,50,90,0.9)]">Contact Us</span>
              </motion.span>
            </Link>
          </motion.div>

          {/* Bottom-right corner */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 right-0 p-3 pt-5 pl-8 sm:p-4 sm:pt-6 sm:pl-10 md:p-6 md:pt-8 md:pl-14 bg-[#f0f0f0] rounded-tl-[1.5rem] sm:rounded-tl-[2rem] md:rounded-tl-[3.5rem] flex items-center gap-3 sm:gap-4 md:gap-6"
          >
            <div className="absolute -top-[1.5rem] sm:-top-[2rem] md:-top-[3.5rem] right-0 w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none">
                <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0" />
              </svg>
            </div>
            <div className="absolute bottom-0 -left-[1.5rem] sm:-left-[2rem] md:-left-[3.5rem] w-[1.5rem] sm:w-[2rem] md:w-[3.5rem] h-[1.5rem] sm:h-[2rem] md:h-[3.5rem] pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none">
                <path d="M56 56H0C30.9279 56 56 30.9279 56 0V56Z" fill="#f0f0f0" />
              </svg>
            </div>

            <div className="bg-[rgba(30,50,90,0.05)] w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-[rgba(30,50,90,0.1)]">
              <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[rgba(30,50,90,0.8)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[16px] md:text-[20px] font-normal text-[rgba(30,50,90,0.95)]">Documentation</span>
              <div className="flex items-center gap-1 text-[rgba(30,50,90,0.6)]">
                <span className="text-[12px] md:text-[15px] font-normal">Library</span>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
