import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import Navbar from './Navbar'

export default function HeroC() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative bg-[#f0f0f0] overflow-hidden pb-0">
      <div className="relative z-50">
        <Navbar variant="light" />
      </div>

      {/* ── Centered text ── */}
      <div
        className={`text-center max-w-4xl mx-auto px-6 pt-10 md:pt-20 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <h1
          className="text-brand-navy tracking-tight leading-[1.06]"
          style={{ fontSize: 'clamp(34px, 5vw, 72px)', fontWeight: 400 }}
        >
          Créateurs de contenus,
          <br />
          concentrez vous sur
          <br />
          <span className="text-brand-navy/35">votre audience</span>
        </h1>

        <p className="text-[15px] md:text-base text-brand-navy/40 mt-5 max-w-md mx-auto leading-relaxed">
          Une seule ligne de code à insérer et vous êtes ready-to-go&nbsp;!
        </p>

        <div className="flex justify-center items-center gap-3 mt-8">
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-brand-blue text-brand-navy rounded-full px-7 py-3.5 text-[14px] font-medium transition-colors hover:bg-brand-blue/90"
            >
              Demander un audit
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link to="/header-bidding">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-[14px] font-medium text-brand-navy/50 border border-brand-navy/15 rounded-full px-6 py-3 hover:border-brand-navy/30 transition-colors"
            >
              Nos solutions
            </motion.button>
          </Link>
        </div>
      </div>

      {/* ── Dashboard panel ── */}
      <div
        className={`max-w-[1200px] mx-auto mt-14 md:mt-20 px-3 md:px-5 transition-all duration-1000 delay-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div
          className="relative rounded-t-[1.5rem] md:rounded-t-[2.5rem] overflow-hidden"
          style={{ maxHeight: 'clamp(380px, 48vw, 560px)' }}
        >
          {/* Dark gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#131a35] to-[#0e1225]" />
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-brand-blue/[0.06] blur-[120px]" />

          {/* Decorative glass shapes */}
          <div className="absolute left-[-50px] top-[50px] w-[120px] h-[320px] rounded-3xl bg-brand-blue/[0.06] rotate-[14deg]" />
          <div className="absolute right-[-40px] top-[30px] w-[100px] h-[280px] rounded-3xl bg-brand-blue/[0.04] -rotate-[12deg]" />

          {/* GCPP badge */}
          <div className="absolute top-5 left-6 md:left-12 z-30 hidden md:block">
            <div className="bg-white rounded-2xl shadow-lg shadow-black/10 px-4 py-3">
              <img
                src="/gcpp-badge.png"
                alt="Google Certified Publishing Partner"
                className="h-8 md:h-10"
              />
            </div>
          </div>

          {/* Julien bubble */}
          <div className="absolute top-5 right-6 md:right-12 z-30 hidden md:flex flex-col items-end">
            <div className="bg-white rounded-2xl shadow-lg shadow-black/10 px-4 py-2.5 flex items-center gap-3">
              <img
                src="/avatar-julien.jpg"
                alt="Julien"
                className="w-9 h-9 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="text-[13px] font-medium text-brand-navy leading-tight">
                  Julien, ad ops
                </p>
                <p className="text-[11px] text-brand-navy/40 leading-tight">
                  c'est lui qui vous r&eacute;pond
                </p>
              </div>
            </div>
            <div className="flex gap-1.5 mt-1.5 mr-1">
              <span className="text-[11px] bg-white/90 text-brand-navy/60 px-3 py-1 rounded-full font-medium shadow-sm">
                7 jours
              </span>
              <span className="text-[11px] text-white/30 px-3 py-1 rounded-full">30 jours</span>
            </div>
          </div>

          {/* Floating pill bar */}
          <div className="relative z-10 flex justify-center pt-6 md:pt-8">
            <div className="flex items-center gap-2 md:gap-3 bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] rounded-full px-4 md:px-6 py-2.5">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-blue/60" />
                <span className="text-[11px] md:text-[12px] text-white/60 font-medium">
                  GCPP Certifi&eacute;
                </span>
              </span>
              <span className="text-white/20">&middot;</span>
              <span className="text-[11px] md:text-[12px] text-white/60 font-medium">
                Temps r&eacute;el
              </span>
              <span className="text-white/20">&middot;</span>
              <span className="text-[11px] md:text-[12px] text-white/60 font-medium">
                Zero impact CWV
              </span>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="relative z-10 mt-6 md:mt-8 mx-4 md:mx-8 lg:mx-12">
            <div className="bg-white rounded-t-2xl md:rounded-t-3xl shadow-2xl shadow-black/20 overflow-hidden">
              {/* Toolbar */}
              <div className="px-4 md:px-6 pt-4 md:pt-5 pb-3 border-b border-black/[0.05] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-[13px] text-brand-navy/70 font-medium">Dashboard 360</span>
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

              <div className="flex">
                {/* Sidebar */}
                <div className="hidden lg:flex flex-col w-[170px] border-r border-black/[0.04] py-4 px-3 shrink-0">
                  {[
                    { label: 'Tableau de bord', active: true },
                    { label: 'Revenus', active: false },
                    { label: 'Trafic', active: false },
                    { label: 'Ad Units', active: false },
                    { label: 'Partenaires', active: false },
                    { label: 'Param\u00e8tres', active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`text-[12px] px-3 py-2 rounded-lg mb-0.5 ${
                        item.active
                          ? 'bg-brand-blue/10 text-brand-navy font-medium'
                          : 'text-brand-navy/25'
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Main area */}
                <div className="flex-1 p-4 md:p-6">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 md:mb-5">
                    <div className="border border-black/[0.06] rounded-xl p-2.5 md:p-4">
                      <span className="text-[10px] md:text-[11px] text-brand-navy/35 block">
                        Revenus nets
                      </span>
                      <span className="text-base md:text-xl font-medium text-brand-navy mt-1 block tracking-tight">
                        24&nbsp;812&nbsp;&euro;
                      </span>
                      <span className="text-[10px] md:text-[11px] text-brand-navy/20 mt-1 block">
                        7 derniers jours
                      </span>
                    </div>
                    <div className="border border-black/[0.06] rounded-xl p-2.5 md:p-4">
                      <span className="text-[10px] md:text-[11px] text-brand-navy/35 block">
                        eCPM moyen
                      </span>
                      <span className="text-base md:text-xl font-medium text-brand-navy mt-1 block tracking-tight">
                        2,86&nbsp;&euro;
                      </span>
                      <span className="text-[10px] md:text-[11px] text-brand-navy/20 mt-1 block">
                        toutes impressions
                      </span>
                    </div>
                    <div className="border border-black/[0.06] rounded-xl p-2.5 md:p-4">
                      <span className="text-[10px] md:text-[11px] text-brand-navy/35 block">
                        Core Web Vitals
                      </span>
                      <span className="text-base md:text-xl font-medium text-brand-navy mt-1 block tracking-tight">
                        LCP 1,9s
                      </span>
                      <span className="text-[10px] md:text-[11px] text-brand-navy/20 mt-1 block">
                        CLS 0,02 &middot; INP 48ms
                      </span>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="border border-black/[0.04] rounded-xl p-3 md:p-5">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div>
                        <span className="text-[10px] md:text-[11px] text-brand-navy/30 block">
                          Revenus cumul&eacute;s
                        </span>
                        <span className="text-sm md:text-lg font-medium text-brand-navy tracking-tight mt-0.5 block">
                          148&nbsp;720&nbsp;&euro;
                        </span>
                      </div>
                      <div className="hidden sm:flex items-center gap-3 text-[10px]">
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

                    <svg viewBox="0 0 400 100" className="w-full h-auto">
                      <defs>
                        <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.12" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {[20, 40, 60].map((y) => (
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
                      <path
                        d="M0,75 C40,72 60,68 100,65 C140,60 160,58 200,55 C240,50 260,48 300,45 C340,42 360,40 400,38"
                        fill="none"
                        stroke="#101528"
                        strokeOpacity="0.08"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M0,70 C30,67 50,62 80,55 C110,47 130,50 160,42 C190,34 210,38 240,30 C270,22 290,25 320,18 C350,12 370,14 400,8 L400,85 L0,85 Z"
                        fill="url(#heroChartGrad)"
                      />
                      <path
                        d="M0,70 C30,67 50,62 80,55 C110,47 130,50 160,42 C190,34 210,38 240,30 C270,22 290,25 320,18 C350,12 370,14 400,8"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <circle cx="400" cy="8" r="3.5" fill="#10b981" />
                      <circle cx="400" cy="8" r="7" fill="#10b981" fillOpacity="0.12" />
                      {['Jan', 'F\u00e9v', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul'].map((m, i) => (
                        <text
                          key={m}
                          x={i * 66.6}
                          y="98"
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

                  {/* Partners */}
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-[10px] text-brand-navy/20 uppercase tracking-wider">
                      Partners actifs
                    </span>
                    <div className="hidden sm:flex items-center gap-3">
                      {['Google', 'Xandr', 'Magnite', 'Criteo', 'Index', 'PubMatic'].map((name) => (
                        <span
                          key={name}
                          className="text-[10px] text-brand-navy/20 font-medium"
                        >
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

          {/* Bottom fade into page bg */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f0f0f0] to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
