import { motion } from 'motion/react'
import { RefreshCw, Eye, PlusCircle, TrendingUp, Cloud, Shield, Search, LayoutDashboard } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContentSection from '../components/ContentSection'
import CtaBlock from '../components/CtaBlock'

const hitFeatures = [
  {
    icon: RefreshCw,
    name: 'HIT Refresh',
    description: 'Intelligent refresh technology that maintains RPM by only refreshing viewable impressions, generating incremental revenue.',
  },
  {
    icon: Eye,
    name: 'HIT Viewability',
    description: 'Lazy-load advertising technology that displays ads only when users actually view them, improving RPM.',
  },
  {
    icon: PlusCircle,
    name: 'HIT Dynamic',
    description: 'Dynamic ad placement insertion within pages for immediate additional revenue streams.',
  },
  {
    icon: TrendingUp,
    name: 'HIT Yield',
    description: "Dynamic price floor technology optimized via Google's machine learning, guaranteeing optimal RPMs.",
  },
  {
    icon: Cloud,
    name: 'HIT Cloud',
    description: 'Infrastructure deployed across Google Cloud Platform and Amazon Web Services, ensuring maximum availability.',
  },
  {
    icon: Shield,
    name: 'HIT Shield',
    description: 'Protection layer blocking malicious ads and suspicious ad behaviors, keeping your users safe.',
  },
  {
    icon: Search,
    name: 'HIT SEO-Friendly',
    description: 'Ad tag injection without impacting CLS score. Core Web Vitals stay green, Google rankings preserved.',
  },
  {
    icon: LayoutDashboard,
    name: 'HIT Dashboard',
    description: 'Unified revenue centralization across all advertising partners and traffic sources via Google Looker Studio.',
  },
]

export default function HeaderBidding() {
  return (
    <>
      <PageHero
        title="Header Bidding Wrapper"
        description="Connect even more global demand sources directly with Prebid.js and HIT 360 — a robust, simple-to-install technology solution."
        cta="Start now"
      />

      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10">
        <ContentSection number="01" title="HIT 360: simple to install">
          <p>
            HIT 360 is the header bidding technology layer developed by Hitopic for publishers. It's easy to use, easy to implement, and requires virtually no support from your technical team.
          </p>
          <p>
            The solution requires only inserting a single line of JavaScript code in your header &mdash; either hard-coded or via Google Tag Manager. And it has zero impact on your Core Web Vitals.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Xandr', 'PubMatic', 'Magnite', 'Criteo', 'Adagio', 'Teads'].map((p) => (
              <span key={p} className="text-[11px] uppercase tracking-wider text-brand-blue/70 bg-brand-ice rounded-full px-4 py-1.5 font-medium">
                {p}
              </span>
            ))}
          </div>
        </ContentSection>

        <ContentSection number="02" title="What is a header bidding wrapper?">
          <p>
            A header bidding wrapper is a piece of JavaScript code that connects multiple advertising tools together to function as one. Its primary purpose is to centralize demand from all your advertising partners, enabling them to compete in a unified auction across every ad placement &mdash; directly increasing your revenue.
          </p>
          <p>
            A typical setup integrates Google Ad Manager 360 with Prebid.js and Amazon (UAM/TAM), creating a competitive auction environment that maximizes the value of every impression.
          </p>
        </ContentSection>

        {/* Features grid */}
        <div className="py-10 md:py-14 border-t border-brand-navy/8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-medium text-brand-blue uppercase tracking-wider">03</span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-brand-navy tracking-tight mb-6">
            HIT 360: all features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {hitFeatures.map((feature, i) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-5 md:p-6 border border-transparent hover:border-brand-blue/15 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                    <feature.icon className="w-3.5 h-3.5 text-brand-blue" />
                  </div>
                  <h3 className="text-[14px] font-medium text-brand-navy">{feature.name}</h3>
                </div>
                <p className="text-[12px] text-brand-navy/40 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <CtaBlock />
    </>
  )
}
