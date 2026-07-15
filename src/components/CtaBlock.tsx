import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function CtaBlock() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-10"
    >
      <div className="bg-brand-navy rounded-[1.5rem] md:rounded-[2.5rem] px-8 md:px-14 py-12 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-white tracking-tight leading-tight">
            Ready to boost your revenue?
          </h2>
          <p className="text-sm md:text-base text-white/50 mt-2 max-w-md">
            Contact us for a personalized audit of your monetization strategy.
          </p>
        </div>
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-brand-blue text-brand-navy rounded-full px-6 py-3 hover:bg-brand-blue/85 transition-colors text-sm font-medium shrink-0"
          >
            Contact
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.section>
  )
}
