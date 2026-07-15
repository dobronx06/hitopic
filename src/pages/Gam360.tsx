import { motion } from 'motion/react'
import PageHero from '../components/PageHero'
import ContentSection from '../components/ContentSection'
import CtaBlock from '../components/CtaBlock'

const features = [
  'Advanced reporting tools with fewer limitations',
  'Robust Google AdExchange demand',
  'External DMP integrations & Data Studio connections',
  'Open Bidding (server-side header bidding)',
  'Dynamic creative generation',
  'CPA and vCPM campaign management',
  'First-party audience creation',
  'Private Marketplace deal management',
]

export default function Gam360() {
  return (
    <>
      <PageHero
        title="Google Ad Manager 360"
        description="Unlock every feature of the most complete advertising platform on the market. Access GAM360 through Hitopic, your Google Certified Publishing Partner."
        cta="Start now"
      />

      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10">
        <ContentSection number="01" title="What is Google Ad Manager?">
          <p>
            Google Ad Manager (GAM) is Google's centralized advertising platform. It enables publishers to structure, distribute, and optimize ad placements across websites, mobile apps, videos, and games.
          </p>
          <p>
            Two versions exist: the free GAM and the premium GAM360. The tool functions as an ad server connecting to global advertising networks including AdSense and Ad Exchange to maximize revenue through automated bidding.
          </p>
          <p>
            Key capabilities include managing blocklists, defining inventory structure, collecting business data, setting tiered pricing, and automating direct inventory sales.
          </p>
        </ContentSection>

        <ContentSection number="02" title="Why use Google Ad Manager 360?">
          <p>GAM360 unlocks premium features beyond the standard free version:</p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4"
          >
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-transparent hover:border-brand-blue/15 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                <span className="text-[13px] text-brand-navy/60">{f}</span>
              </div>
            ))}
          </motion.div>
        </ContentSection>

        <ContentSection number="03" title="Private Marketplace (PMP)">
          <p>
            A Private Marketplace is an invitation-only marketplace, also called "programmatic direct," that automates negotiation and direct inventory sales between publishers and selected advertisers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-2xl p-6 border border-transparent hover:border-brand-blue/15 transition-colors">
              <h3 className="text-[15px] font-medium text-brand-navy mb-2">
                Programmatic Guaranteed (PG)
              </h3>
              <p className="text-[13px] text-brand-navy/50 leading-relaxed">
                Inventory reserved exclusively with guaranteed impressions for the advertiser. Full exclusivity and impression assurance.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-transparent hover:border-brand-blue/15 transition-colors">
              <h3 className="text-[15px] font-medium text-brand-navy mb-2">
                Preferred Deals (PD)
              </h3>
              <p className="text-[13px] text-brand-navy/50 leading-relaxed">
                Preferential pricing without impression guarantees. Only the pricing is guaranteed for the buyer, not the purchase volume.
              </p>
            </div>
          </div>
        </ContentSection>

        <ContentSection number="04" title="Open Bidding">
          <p>
            Formerly Exchange Bidding Dynamic Allocation (EBDA), Open Bidding is GAM360's internal header bidding solution. It enables third-party exchanges and SSPs to compete directly within GAM360.
          </p>
          <p>
            Benefits include server-side header bidding, improved web performance, simplified implementation, and unified 30-day Google billing &mdash; avoiding multiple invoices at 45-90 day payment terms.
          </p>
        </ContentSection>

        <ContentSection number="05" title="How to connect to Google Ad Manager?">
          <p>
            Visit admanager.google.com, log in with your Google account, configure network settings (timezone and currency), create your inventory structure, add Google Publisher Tags, link AdSense if needed, and complete your ads.txt file.
          </p>
          <p>
            Or simply work with Hitopic &mdash; as a Google Certified Publishing Partner and MCM-accredited partner, we provide immediate GAM360 access, technical onboarding, and ongoing support.
          </p>
        </ContentSection>
      </div>

      <CtaBlock />
    </>
  )
}
