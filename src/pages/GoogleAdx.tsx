import PageHero from '../components/PageHero'
import ContentSection from '../components/ContentSection'
import CtaBlock from '../components/CtaBlock'

export default function GoogleAdx() {
  return (
    <>
      <PageHero
        title="Google AdX"
        description="Smoothly migrate from AdSense to programmatic with AdX and immediately benefit from a premium advertiser network with Google Ad Exchange."
        cta="Start now"
      />

      <div className="w-full max-w-[1536px] mx-auto px-6 md:px-10">
        <ContentSection number="01" title="What is Google Ad Exchange?">
          <p>
            Google AdX (formerly DoubleClick Ad Exchange) is an ad exchange integrated into Google Ad Manager 360. It's a programmatic advertising platform that connects sellers (website and mobile app publishers) and buyers (media agencies, advertisers, trading desks) to buy and sell ad inventory.
          </p>
          <p>
            Access is by invitation only. Publishers who don't qualify directly can gain access through accredited partners like Hitopic. AdX has the widest network of active buyers and sellers, providing direct access to premium demand from major global advertisers.
          </p>
        </ContentSection>

        <ContentSection number="02" title="Google AdX vs Google AdSense">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-[15px] font-medium text-brand-navy mb-3">AdSense</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/15 mt-1.5 shrink-0" />
                  <span className="text-[13px] text-brand-navy/50">CPC pricing model</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/15 mt-1.5 shrink-0" />
                  <span className="text-[13px] text-brand-navy/50">Proprietary closed network (Google Ads partners only)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/15 mt-1.5 shrink-0" />
                  <span className="text-[13px] text-brand-navy/50">Limited demand pool</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border-2 border-brand-blue/20">
              <h3 className="text-[15px] font-medium text-brand-navy mb-3">
                AdX <span className="text-brand-blue text-[11px] font-medium uppercase tracking-wider ml-2">Recommended</span>
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                  <span className="text-[13px] text-brand-navy/65">CPM pricing model</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                  <span className="text-[13px] text-brand-navy/65">Open to the entire global advertising market</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                  <span className="text-[13px] text-brand-navy/65">~30% higher daily earnings on average</span>
                </li>
              </ul>
            </div>
          </div>
        </ContentSection>

        <ContentSection number="03" title="How to access Google Ad Exchange?">
          <p>
            Eligibility theoretically requires tens of millions of monthly impressions, quality inventory, and meeting Google's criteria. Even some high-volume publishers face rejection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-2xl p-6">
              <span className="text-[11px] uppercase tracking-wider text-brand-navy/30 block mb-2">Option 1</span>
              <h3 className="text-[15px] font-medium text-brand-navy mb-2">Direct approach</h3>
              <p className="text-[13px] text-brand-navy/50 leading-relaxed">
                Request access from your existing Google representative managing your GAM or AdSense account.
              </p>
            </div>
            <div className="bg-brand-ice rounded-2xl p-6 border-2 border-brand-blue/20">
              <span className="text-[11px] uppercase tracking-wider text-brand-blue font-medium block mb-2">Recommended</span>
              <h3 className="text-[15px] font-medium text-brand-navy mb-2">Via Hitopic (GCPP)</h3>
              <p className="text-[13px] text-brand-navy/50 leading-relaxed">
                Work with Hitopic through the Google MCM program. Get a GAM360 account, included premium demand, and pre-active partnerships &mdash; all managed for you.
              </p>
            </div>
          </div>
        </ContentSection>
      </div>

      <CtaBlock />
    </>
  )
}
