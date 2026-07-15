import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden min-h-[360px] md:min-h-[420px] flex flex-col justify-end p-8 md:p-12 lg:p-16"
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/25 to-transparent z-[1]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.1] mb-3">
              Prêt à augmenter
              <br />vos revenus ?
            </h2>
            <p className="text-sm md:text-base text-white/70 font-normal max-w-md leading-relaxed">
              On s'occupe de la pub, vous vous concentrez sur le contenu.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-brand-blue text-brand-navy rounded-full px-6 py-3 hover:bg-brand-blue/85 transition-colors text-sm font-medium"
              >
                Demander un audit
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="text-sm font-normal text-white/90 border border-white/30 rounded-full px-5 py-2.5 hover:bg-white/10 backdrop-blur-sm transition-colors"
              >
                Lire le blog
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
