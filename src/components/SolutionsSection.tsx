import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const solutions = [
  {
    title: 'Google Ad Manager 360',
    description:
      "On gère votre compte GAM 360 de A à Z : création des ad units, floor pricing, Open Bidding, deals PMP. Vous gardez le contrôle, on s'occupe de la technique.",
    link: '/google-ad-manager-360',
  },
  {
    title: 'Header Bidding — HIT360',
    description:
      "Notre wrapper Prebid.js met +30 partenaires en concurrence sur chaque impression. S2S hybride, Amazon UAM, Open Bidding — une seule ligne de code à intégrer, zéro impact sur vos Core Web Vitals.",
    link: '/header-bidding',
  },
  {
    title: 'Dashboard 360',
    description:
      "Vos revenus, votre trafic, vos partenaires — tout au même endroit, en temps réel. Export vers BigQuery, AWS ou Looker Studio en un clic.",
    link: '#',
  },
]

/* ---------- GAM 360 visual — page layout with ad placements ---------- */

function GamVisual() {
  return (
    <div className="w-full rounded-xl bg-white border border-black/[0.06] overflow-hidden shadow-sm">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/[0.06] bg-[#fafafa]">
        <div className="w-2 h-2 rounded-full bg-black/10" />
        <div className="w-2 h-2 rounded-full bg-black/10" />
        <div className="w-2 h-2 rounded-full bg-black/10" />
        <div className="flex-1 mx-4 h-4 rounded bg-black/[0.04] flex items-center px-2">
          <span className="text-[7px] text-black/20 truncate">mon-site.fr/article/les-meilleurs-conseils-2026</span>
        </div>
      </div>

      <div className="p-3 md:p-4">
        {/* Leaderboard */}
        <div className="w-full h-10 md:h-12 rounded-lg border-2 border-dashed border-brand-blue/30 bg-brand-blue/[0.04] flex items-center justify-center mb-3">
          <span className="text-[8px] md:text-[9px] text-brand-blue/50 font-medium tracking-wider uppercase">Leaderboard 728 &times; 90</span>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-3">
          {/* Content area */}
          <div className="flex-[3] space-y-3">
            {/* Fake article header */}
            <div className="space-y-1.5">
              <div className="h-2.5 w-3/4 rounded bg-black/[0.08]" />
              <div className="h-2 w-1/2 rounded bg-black/[0.04]" />
            </div>
            {/* Fake text lines */}
            <div className="space-y-1">
              {[100, 95, 100, 88, 100, 72, 100, 90, 60].map((w, i) => (
                <div key={i} className="h-1 rounded-full bg-black/[0.04]" style={{ width: `${w}%` }} />
              ))}
            </div>
            {/* In-article ad */}
            <div className="w-full h-14 rounded-lg border-2 border-dashed border-brand-blue/25 bg-brand-blue/[0.03] flex items-center justify-center">
              <span className="text-[7px] md:text-[8px] text-brand-blue/40 font-medium tracking-wider uppercase">In-article 468 &times; 60</span>
            </div>
            {/* More text */}
            <div className="space-y-1">
              {[100, 85, 100, 92, 70].map((w, i) => (
                <div key={i} className="h-1 rounded-full bg-black/[0.04]" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex-1 min-h-[72px] rounded-lg border-2 border-dashed border-brand-blue/30 bg-brand-blue/[0.04] flex items-center justify-center">
              <span className="text-[7px] md:text-[8px] text-brand-blue/50 font-medium tracking-wider uppercase text-center leading-tight">
                MPU<br />300&times;250
              </span>
            </div>
            <div className="flex-1 min-h-[100px] rounded-lg border-2 border-dashed border-brand-blue/25 bg-brand-blue/[0.03] flex items-center justify-center">
              <span className="text-[7px] md:text-[8px] text-brand-blue/35 font-medium tracking-wider uppercase text-center leading-tight">
                Half Page<br />300&times;600
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- HB visual — Prebid auction table ---------- */

function HbVisual() {
  const bids = [
    { bidder: 'Magnite', cpm: '3,42 €', time: '187 ms', status: 'winner' },
    { bidder: 'Index Ex.', cpm: '3,18 €', time: '203 ms', status: 'bid' },
    { bidder: 'Xandr', cpm: '2,67 €', time: '312 ms', status: 'bid' },
    { bidder: 'PubMatic', cpm: '1,84 €', time: '245 ms', status: 'bid' },
    { bidder: 'Amazon', cpm: '1,52 €', time: '89 ms', status: 'bid' },
    { bidder: 'Criteo', cpm: '—', time: '134 ms', status: 'no-bid' },
  ]

  return (
    <div className="w-full rounded-xl bg-white border border-black/[0.06] overflow-hidden shadow-sm">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/[0.06] bg-[#fafafa]">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium text-brand-navy/60">Prebid Auction</span>
          <span className="text-[9px] text-brand-navy/25">/homepage/leaderboard</span>
        </div>
        <span className="text-[9px] text-brand-navy/25 font-mono">728&times;90</span>
      </div>

      <div className="p-3 md:p-4">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_70px_70px_64px] gap-1 px-2 mb-1.5">
          <span className="text-[8px] text-brand-navy/25 uppercase tracking-wider font-medium">Bidder</span>
          <span className="text-[8px] text-brand-navy/25 uppercase tracking-wider font-medium text-right">CPM</span>
          <span className="text-[8px] text-brand-navy/25 uppercase tracking-wider font-medium text-right">Latence</span>
          <span className="text-[8px] text-brand-navy/25 uppercase tracking-wider font-medium text-right">Statut</span>
        </div>

        {/* Rows */}
        <div className="space-y-0.5">
          {bids.map((b) => (
            <div
              key={b.bidder}
              className={`grid grid-cols-[1fr_70px_70px_64px] gap-1 px-2 py-1.5 rounded-lg ${
                b.status === 'winner'
                  ? 'bg-brand-blue/[0.06]'
                  : ''
              }`}
            >
              <span className={`text-[10px] font-medium ${
                b.status === 'winner' ? 'text-brand-navy' : 'text-brand-navy/50'
              }`}>
                {b.bidder}
              </span>
              <span className={`text-[10px] text-right font-mono ${
                b.status === 'winner' ? 'text-brand-navy font-medium' : b.status === 'no-bid' ? 'text-brand-navy/20' : 'text-brand-navy/50'
              }`}>
                {b.cpm}
              </span>
              <span className={`text-[10px] text-right font-mono ${
                b.status === 'winner' ? 'text-brand-navy/60' : 'text-brand-navy/30'
              }`}>
                {b.time}
              </span>
              <span className="text-right">
                {b.status === 'winner' && (
                  <span className="text-[8px] bg-brand-blue/15 text-brand-blue font-medium px-1.5 py-0.5 rounded">Won</span>
                )}
                {b.status === 'bid' && (
                  <span className="text-[8px] text-brand-navy/25 px-1.5 py-0.5">Bid</span>
                )}
                {b.status === 'no-bid' && (
                  <span className="text-[8px] text-brand-navy/20 px-1.5 py-0.5">No bid</span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-3 pt-2.5 border-t border-black/[0.04] flex items-center justify-between px-2">
          <span className="text-[8px] text-brand-navy/20 font-mono">Timeout: 1 500 ms</span>
          <span className="text-[9px] text-brand-navy/40">
            <span className="text-brand-navy/20">hb_pb=</span>
            <span className="font-medium font-mono">3.40</span>
          </span>
        </div>
      </div>
    </div>
  )
}

/* ---------- Dashboard visual — analytics dashboard ---------- */

function DashboardVisual() {
  return (
    <div className="w-full rounded-xl bg-white border border-black/[0.06] overflow-hidden shadow-sm">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-black/[0.06] bg-[#fafafa]">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-medium text-brand-navy/60">Dashboard 360</span>
          <div className="hidden md:flex items-center gap-0.5 text-[9px]">
            <span className="text-brand-navy/50 bg-brand-navy/[0.05] px-2 py-0.5 rounded font-medium">Revenus</span>
            <span className="text-brand-navy/20 px-2 py-0.5 rounded">Trafic</span>
            <span className="text-brand-navy/20 px-2 py-0.5 rounded">SSP</span>
          </div>
        </div>
        <span className="text-[9px] text-brand-navy/25">Juil. 2026</span>
      </div>

      <div className="p-3 md:p-4">
        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { label: 'Revenus nets', value: '24 812 €' },
            { label: 'eCPM moyen', value: '2,86 €' },
            { label: 'Fill rate', value: '98,7%' },
          ].map((m) => (
            <div key={m.label} className="border border-black/[0.05] rounded-lg p-2.5">
              <span className="text-[8px] text-brand-navy/30 uppercase tracking-wider block">{m.label}</span>
              <span className="text-sm md:text-base font-medium text-brand-navy mt-1 block tracking-tight">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="border border-black/[0.04] rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] text-brand-navy/25 uppercase tracking-wider">Revenus cumulés</span>
            <span className="text-[9px] text-brand-navy/40 font-medium">148 720 €</span>
          </div>
          <svg viewBox="0 0 200 50" className="w-full h-auto" preserveAspectRatio="none">
            <defs>
              <linearGradient id="solDashGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#29D5F8" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#29D5F8" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[15, 30].map((y) => (
              <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#000" strokeOpacity="0.03" />
            ))}
            <path d="M0,40 C20,38 35,30 55,25 C75,20 95,22 115,15 C135,8 155,12 175,6 L200,3 L200,50 L0,50 Z" fill="url(#solDashGrad)" />
            <path d="M0,40 C20,38 35,30 55,25 C75,20 95,22 115,15 C135,8 155,12 175,6 L200,3" fill="none" stroke="#29D5F8" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
            <circle cx="200" cy="3" r="2" fill="#29D5F8" />
          </svg>
        </div>

        {/* Partners row */}
        <div className="flex items-center justify-between mt-2.5 px-1">
          <span className="text-[8px] text-brand-navy/20 uppercase tracking-wider">Top SSP</span>
          <div className="flex items-center gap-3">
            {[
              { name: 'Google', pct: '34%' },
              { name: 'Magnite', pct: '22%' },
              { name: 'Index', pct: '18%' },
            ].map((p) => (
              <span key={p.name} className="text-[9px] text-brand-navy/30">
                {p.name} <span className="text-brand-navy/15 font-mono">{p.pct}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CardVisual({ index }: { index: number }) {
  if (index === 0) return <GamVisual />
  if (index === 1) return <HbVisual />
  return <DashboardVisual />
}

/* ---------- main section ---------- */

export default function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((card, index) => {
      if (!card) return

      const activeObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(index)
        },
        { threshold: 0.5 },
      )
      activeObserver.observe(card)
      observers.push(activeObserver)

      const revealObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setRevealed((prev) => new Set(prev).add(index))
        },
        { threshold: 0.1 },
      )
      revealObserver.observe(card)
      observers.push(revealObserver)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <section className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-16 md:py-28">
      <div className="lg:grid lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] lg:gap-16 xl:gap-24">
        {/* Left Column — Sticky */}
        <div className="mb-12 lg:mb-0 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-28">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-normal text-brand-navy tracking-tight leading-[1.15] mb-3">
              Tout ce qu'il faut
              <br />
              pour monétiser
            </h2>
            <p className="text-sm text-brand-navy/45 leading-relaxed mb-10 lg:mb-14 max-w-sm">
              GAM 360, header bidding, reporting — trois briques qui fonctionnent ensemble.
            </p>

            {/* Nav buttons — desktop only */}
            <div className="hidden lg:flex flex-col gap-1.5">
              {solutions.map((sol, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer border-none ${
                    activeIndex === i
                      ? 'bg-brand-navy text-white'
                      : 'bg-transparent text-brand-navy/35 hover:text-brand-navy/55'
                  }`}
                >
                  {sol.title}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom CTA — desktop only */}
          <div className="hidden lg:block">
            <p className="text-sm text-brand-navy/40 mb-4">
              Pas sûr de ce qu'il vous faut ?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue text-brand-navy text-sm font-medium px-6 py-3 rounded-full hover:bg-brand-blue/85 transition-colors"
            >
              Discutons-en
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column — Scrolling cards */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {solutions.map((sol, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className={`bg-brand-navy rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 lg:p-10 transition-all duration-700 ease-out ${
                revealed.has(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
            >
              <CardVisual index={i} />

              <div className="mt-6 md:mt-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-normal text-white tracking-tight mb-3">
                  {sol.title}
                </h3>
                <p className="text-sm md:text-base text-white/45 leading-relaxed max-w-xl mb-5">
                  {sol.description}
                </p>

                {sol.link !== '#' && (
                  <Link
                    to={sol.link}
                    className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-medium hover:text-brand-blue/70 transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="lg:hidden text-center pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue text-brand-navy text-sm font-medium px-6 py-3 rounded-full hover:bg-brand-blue/85 transition-colors"
            >
              Discutons-en
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
