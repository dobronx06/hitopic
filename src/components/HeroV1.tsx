import Navbar from './Navbar'
import HeroBg from './HeroBg'

interface HeroV1Props {
  bg?: 'video' | 'dark' | 'gradient'
}

export default function HeroV1({ bg = 'video' }: HeroV1Props) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <HeroBg variant={bg} />

      <div className="relative z-50">
        <Navbar variant="dark" />
      </div>

      <div className="relative h-full w-full">
        <h1 className="absolute text-white font-medium text-[14vw] md:text-[13vw] left-4 md:left-10 top-[18%] leading-none tracking-tight">
          boost
        </h1>
        <h1 className="absolute text-white font-medium text-[14vw] md:text-[13vw] right-4 md:right-10 top-[38%] leading-none tracking-tight">
          your
        </h1>
        <h1 className="absolute text-white font-medium text-[14vw] md:text-[13vw] left-[18%] md:left-[28%] top-[58%] leading-none tracking-tight">
          revenue
        </h1>

        <p className="absolute left-6 md:left-10 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90">
          simplify your programmatic advertising with a single line of code and maximize your revenue
        </p>

        <div className="absolute right-6 md:right-24 top-[14%]">
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">+500</span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right">publishers trust us</p>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#f0f0f0]" />

        <div className="absolute left-6 md:left-20 bottom-20 md:bottom-24">
          <div className="flex items-center gap-3">
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">+2b</span>
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1">daily impressions served</p>
        </div>

        <div className="absolute right-6 md:right-20 bottom-16 md:bottom-20">
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
            <span className="text-4xl md:text-5xl font-medium tracking-tight text-white">+14</span>
          </div>
          <p className="text-xs md:text-sm text-white/70 mt-1 text-right">years of expertise</p>
        </div>
      </div>
    </section>
  )
}
