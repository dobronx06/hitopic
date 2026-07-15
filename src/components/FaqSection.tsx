import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: "C'est quoi un GCPP exactement ?",
    answer:
      "Google Certified Publishing Partner. C'est la certification Google pour les régies qui gèrent Ad Manager 360. Il y en a une poignée en France — on en fait partie depuis 2012.",
  },
  {
    question: 'Comment marche le Header Bidding HIT360 ?',
    answer:
      "On branche +30 SSP (Xandr, Criteo, Magnite, etc.) qui enchérissent en même temps sur chaque impression via Prebid.js. On ajoute Amazon UAM et l'Open Bidding Google par-dessus. Vous, vous collez une ligne de code. C'est tout.",
  },
  {
    question: "Ça va ralentir mon site ?",
    answer:
      "Non. Le script charge en asynchrone, les pubs sont lazy-loadées. On surveille LCP, CLS et INP en continu — si un partenaire dégrade les scores, on le coupe.",
  },
  {
    question: 'Quels formats vous gérez ?',
    answer:
      "Display classique, sticky, interstitiel, vidéo outstream, offerwall, paywall, rewarded ads. On adapte le setup au site — pas de format forcé si ça ne correspond pas à votre audience.",
  },
  {
    question: "Le Dashboard, ça remplace Looker Studio ?",
    answer:
      "C'est complémentaire. Le Dashboard 360 agrège les données de tous vos SSP en temps réel. Si vous voulez aller plus loin, on exporte vers BigQuery, AWS ou Looker Studio.",
  },
  {
    question: "Combien de temps pour intégrer ?",
    answer:
      "Une ligne de code à poser, on fait le reste : ad units, floor pricing, connexion des SSP, tests. En général c'est live en quelques jours.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[11px] font-medium text-brand-blue uppercase tracking-wider block mb-3">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-brand-navy tracking-tight leading-tight">
            Questions fréquentes
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? 'bg-brand-navy border-brand-navy'
                    : 'bg-white border-black/[0.06] hover:border-brand-navy/15'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer border-none bg-transparent"
                >
                  <span
                    className={`text-[15px] font-medium transition-colors ${
                      isOpen ? 'text-white' : 'text-brand-navy'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-white/10' : 'bg-brand-navy/[0.05]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-white/70" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-brand-navy/40" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[14px] text-white/50 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
