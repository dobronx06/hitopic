import { motion } from 'motion/react'

interface ContentSectionProps {
  number?: string
  label?: string
  title: string
  children: React.ReactNode
}

export default function ContentSection({ number, label, title, children }: ContentSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 md:py-12 border-t border-brand-navy/8"
    >
      <div className="flex items-center gap-3 mb-4">
        {number && (
          <span className="text-[11px] font-medium text-brand-blue uppercase tracking-wider">
            {number}
          </span>
        )}
        {label && (
          <span className="text-[11px] font-normal text-brand-navy/30 uppercase tracking-wider">
            {label}
          </span>
        )}
      </div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-brand-navy tracking-tight mb-4">
        {title}
      </h2>
      <div className="text-[14px] md:text-[15px] font-normal text-brand-navy/55 leading-relaxed max-w-3xl space-y-4">
        {children}
      </div>
    </motion.div>
  )
}
