interface HeroSwitcherProps {
  activeHero: string
  activeBg: string
  onHeroChange: (id: string) => void
  onBgChange: (id: string) => void
}

const versions = [
  { id: 'v1', label: 'V1' },
  { id: 'v2', label: 'V2' },
  { id: 'v4', label: 'V4' },
  { id: 'v5', label: 'V5' },
]

const backgrounds = [
  { id: 'video', label: 'Vidéo' },
  { id: 'dark', label: 'Sombre' },
  { id: 'gradient', label: 'Gradient' },
]

export default function HeroSwitcher({ activeHero, activeBg, onHeroChange, onBgChange }: HeroSwitcherProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <div className="relative bg-gradient-to-br from-brand-blue to-[#1ab4d4] rounded-2xl p-5 shadow-2xl shadow-brand-blue/20 overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-2 right-3 w-12 h-12 rounded-full bg-white/[0.07]" />
        <div className="absolute bottom-3 left-2 w-8 h-8 rounded-full bg-white/[0.05]" />
        <div className="absolute top-10 left-8 w-4 h-4 rounded-full bg-white/[0.06]" />
        <div className="absolute bottom-8 right-10 w-3 h-3 rounded-full bg-white/[0.08]" />
        <div className="absolute top-1 left-16 w-2 h-2 rounded-full bg-white/[0.1]" />

        <div className="relative flex gap-5">
          {/* Version column */}
          <div>
            <span className="text-[10px] font-medium text-white/60 uppercase tracking-wider block mb-3">
              Version
            </span>
            <div className="flex flex-col gap-1.5">
              {versions.map((v) => (
                <button
                  key={v.id}
                  onClick={() => onHeroChange(v.id)}
                  className={`text-left px-3 py-2 rounded-lg text-[13px] font-medium transition-all cursor-pointer border-none ${
                    activeHero === v.id
                      ? 'bg-white text-brand-navy shadow-sm'
                      : 'bg-white/[0.1] text-white/70 hover:bg-white/[0.18]'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Background column */}
          <div>
            <span className="text-[10px] font-medium text-white/60 uppercase tracking-wider block mb-3">
              Fond
            </span>
            <div className="flex flex-col gap-1.5">
              {backgrounds.map((b) => (
                <button
                  key={b.id}
                  onClick={() => onBgChange(b.id)}
                  className={`text-left px-3 py-2 rounded-lg text-[13px] font-medium transition-all cursor-pointer border-none ${
                    activeBg === b.id
                      ? 'bg-white text-brand-navy shadow-sm'
                      : 'bg-white/[0.1] text-white/70 hover:bg-white/[0.18]'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
