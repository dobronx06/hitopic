import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

interface PageHeroProps {
  title: string
  description: string
  cta?: string
  ctaLink?: string
}

export default function PageHero({ title, description, cta, ctaLink = '/contact' }: PageHeroProps) {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-6 md:px-10 pt-10 pb-14 md:pt-16 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal text-brand-navy tracking-tight leading-[1.1]">
          {title}
        </h1>
        <p className="text-base md:text-lg text-brand-navy/50 mt-4 leading-relaxed max-w-2xl">
          {description}
        </p>
        {cta && (
          <Link to={ctaLink}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex items-center gap-2 bg-brand-blue text-brand-navy rounded-full px-6 py-3 hover:bg-brand-blue/85 transition-colors text-sm font-medium"
            >
              {cta}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        )}
      </motion.div>
    </section>
  )
}
