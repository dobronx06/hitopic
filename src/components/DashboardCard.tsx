import { useId } from 'react'

export default function DashboardCard() {
  const uid = useId()
  const gradId = `dcGrad-${uid}`

  return (
    <div className="relative pt-8">
      {/* Floating avatar bubble */}
      <div className="absolute -top-1 right-4 md:right-6 z-20 flex flex-col items-end">
        <div className="bg-white rounded-2xl shadow-lg shadow-black/[0.08] px-4 py-2.5 flex items-center gap-3">
          <img
            src="/avatar-julien.jpg"
            alt="Julien"
            className="w-9 h-9 rounded-full object-cover shrink-0"
          />
          <div>
            <p className="text-[13px] font-medium text-brand-navy leading-tight">Julien, ad ops</p>
            <p className="text-[11px] text-brand-navy/40 leading-tight">
              c'est lui qui vous r&eacute;pond
            </p>
          </div>
        </div>
        <div className="flex gap-1.5 mt-1.5 mr-1">
          <span className="text-[11px] bg-brand-navy/[0.06] text-brand-navy/60 px-3 py-1 rounded-full font-medium">
            7 jours
          </span>
          <span className="text-[11px] text-brand-navy/25 px-3 py-1 rounded-full">30 jours</span>
        </div>
      </div>

      {/* Card */}
      <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-black/[0.06] border border-black/[0.04] overflow-hidden">

        <div className="relative">
          {/* Toolbar */}
          <div className="px-5 md:px-7 pt-5 md:pt-6 pb-3 border-b border-black/[0.05]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3 className="text-[13px] text-brand-navy/70 font-medium">Dashboard 360</h3>
                <div className="hidden md:flex items-center gap-0.5 text-[11px]">
                  <span className="text-brand-navy/60 bg-brand-navy/[0.05] px-2.5 py-1 rounded-md font-medium">
                    Revenus
                  </span>
                  <span className="text-brand-navy/25 px-2.5 py-1 rounded-md">Trafic</span>
                  <span className="text-brand-navy/25 px-2.5 py-1 rounded-md">Annonceurs</span>
                </div>
              </div>
              <span className="text-[10px] text-brand-navy/25 font-medium">
                Juil. 2026
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 md:px-7 py-5 md:py-6">
            {/* Metrics row */}
            <div className="grid grid-cols-3 gap-2.5 md:gap-3 mb-5">
              <div className="border border-black/[0.06] rounded-xl p-3 md:p-4">
                <span className="text-[11px] text-brand-navy/35 block">Revenus nets</span>
                <span className="text-lg md:text-xl font-medium text-brand-navy mt-1 block tracking-tight">
                  24&nbsp;812&nbsp;&euro;
                </span>
                <span className="text-[11px] text-brand-navy/20 mt-1 block">7 derniers jours</span>
              </div>
              <div className="border border-black/[0.06] rounded-xl p-3 md:p-4">
                <span className="text-[11px] text-brand-navy/35 block">eCPM moyen</span>
                <span className="text-lg md:text-xl font-medium text-brand-navy mt-1 block tracking-tight">
                  2,86&nbsp;&euro;
                </span>
                <span className="text-[11px] text-brand-navy/20 mt-1 block">toutes impressions</span>
              </div>
              <div className="border border-black/[0.06] rounded-xl p-3 md:p-4">
                <span className="text-[11px] text-brand-navy/35 block">Core Web Vitals</span>
                <span className="text-lg md:text-xl font-medium text-brand-navy mt-1 block tracking-tight">
                  LCP 1,9s
                </span>
                <span className="text-[11px] text-brand-navy/20 mt-1 block">
                  CLS 0,02 &middot; INP 48ms
                </span>
              </div>
            </div>

            {/* Chart section */}
            <div className="border border-black/[0.04] rounded-xl p-4 md:p-5 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[11px] text-brand-navy/30 block">Revenus cumul&eacute;s</span>
                  <span className="text-base md:text-lg font-medium text-brand-navy tracking-tight mt-0.5 block">
                    148&nbsp;720&nbsp;&euro;
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-brand-navy/30">2026</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-navy/10" />
                    <span className="text-brand-navy/20">2025</span>
                  </span>
                </div>
              </div>

              <svg viewBox="0 0 400 110" className="w-full h-auto">
                <defs>
                  <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[20, 40, 60, 80].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="400"
                    y2={y}
                    stroke="#000"
                    strokeOpacity="0.03"
                  />
                ))}
                {/* Previous year — dashed */}
                <path
                  d="M0,75 C40,72 60,68 100,65 C140,60 160,58 200,55 C240,50 260,48 300,45 C340,42 360,40 400,38"
                  fill="none"
                  stroke="#101528"
                  strokeOpacity="0.08"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                {/* Current year — area */}
                <path
                  d="M0,70 C30,67 50,62 80,55 C110,47 130,50 160,42 C190,34 210,38 240,30 C270,22 290,25 320,18 C350,12 370,14 400,8 L400,90 L0,90 Z"
                  fill={`url(#${gradId})`}
                />
                {/* Current year — line */}
                <path
                  d="M0,70 C30,67 50,62 80,55 C110,47 130,50 160,42 C190,34 210,38 240,30 C270,22 290,25 320,18 C350,12 370,14 400,8"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="400" cy="8" r="3.5" fill="#10b981" />
                <circle cx="400" cy="8" r="7" fill="#10b981" fillOpacity="0.12" />
                {/* Month labels */}
                {['Jan', 'F\u00e9v', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul'].map((m, i) => (
                  <text
                    key={m}
                    x={i * 66.6}
                    y="106"
                    textAnchor="start"
                    fill="#101528"
                    fillOpacity="0.2"
                    fontSize="9"
                    fontFamily="inherit"
                  >
                    {m}
                  </text>
                ))}
              </svg>
            </div>

            {/* Bottom — demand partners + ad units */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-brand-navy/20 uppercase tracking-wider">
                  Partners actifs
                </span>
              </div>
              <div className="flex items-center gap-3">
                {['Google', 'Xandr', 'Magnite', 'Criteo', 'Index'].map((name) => (
                  <span key={name} className="text-[10px] text-brand-navy/20 font-medium">
                    {name}
                  </span>
                ))}
                <span className="text-[10px] text-brand-navy/15 font-medium">&hellip;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
