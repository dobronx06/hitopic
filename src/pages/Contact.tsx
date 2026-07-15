import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react'
import PageHero from '../components/PageHero'

const pageViewOptions = [
  '< 1M monthly page views',
  '1-5M monthly page views',
  '5-10M monthly page views',
  '10-50M monthly page views',
  '50M+ monthly page views',
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero
        title="Contact us"
        description="Get a personalized audit of your monetization strategy. Our team will analyze your inventory and propose a tailored solution."
      />

      <section className="w-full max-w-[1536px] mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="w-12 h-12 rounded-full bg-brand-ice flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-2xl font-normal text-brand-navy mb-2">Message sent!</h3>
                <p className="text-[14px] text-brand-navy/50">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[12px] text-brand-navy/40 uppercase tracking-wider block mb-1.5">Last name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 text-[14px] text-brand-navy outline-none focus:ring-2 focus:ring-brand-blue/30 transition"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] text-brand-navy/40 uppercase tracking-wider block mb-1.5">First name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 text-[14px] text-brand-navy outline-none focus:ring-2 focus:ring-brand-blue/30 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[12px] text-brand-navy/40 uppercase tracking-wider block mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 text-[14px] text-brand-navy outline-none focus:ring-2 focus:ring-brand-blue/30 transition"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] text-brand-navy/40 uppercase tracking-wider block mb-1.5">Website URL</label>
                    <input
                      type="url"
                      className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 text-[14px] text-brand-navy outline-none focus:ring-2 focus:ring-brand-blue/30 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[12px] text-brand-navy/40 uppercase tracking-wider block mb-1.5">Phone</label>
                    <input
                      type="tel"
                      className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 text-[14px] text-brand-navy outline-none focus:ring-2 focus:ring-brand-blue/30 transition"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] text-brand-navy/40 uppercase tracking-wider block mb-1.5">Monthly page views</label>
                    <select
                      className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 text-[14px] text-brand-navy outline-none focus:ring-2 focus:ring-brand-blue/30 transition appearance-none"
                    >
                      <option value="">Select...</option>
                      {pageViewOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[12px] text-brand-navy/40 uppercase tracking-wider block mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#f5f5f7] rounded-xl px-4 py-3 text-[14px] text-brand-navy outline-none focus:ring-2 focus:ring-brand-blue/30 transition resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-brand-blue text-brand-navy rounded-full px-6 py-3 hover:bg-brand-blue/85 transition-colors text-sm font-medium"
                >
                  Send message
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-brand-ice flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-brand-blue" />
                </div>
                <span className="text-[11px] font-medium text-brand-blue uppercase tracking-wider">Office</span>
              </div>
              <p className="text-[14px] text-brand-navy/70 leading-relaxed">
                SAS Hitopic<br />
                5 rue du Moulinas<br />
                66 330 Cabestany, France
              </p>
              <div className="mt-4 pt-4 border-t border-brand-navy/6">
                <p className="text-[12px] text-brand-navy/35">
                  TVA: FR51753803212<br />
                  RCS Perpignan: 753 803 212
                </p>
              </div>
            </div>

            <div className="bg-brand-navy rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8">
              <span className="text-[11px] font-medium text-brand-blue uppercase tracking-wider block mb-2">Certification</span>
              <h3 className="text-lg font-normal text-white tracking-tight mb-2">
                Google Certified Publishing Partner
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed">
                One of the few GCPP-certified agencies in France since 2023. Direct access to Google's premium ad ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
