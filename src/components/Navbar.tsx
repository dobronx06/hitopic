import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const menuItems = [
  { label: 'GAM 360', to: '/google-ad-manager-360' },
  { label: 'ADX', to: '/google-adx' },
  { label: 'Header Bidding', to: '/header-bidding' },
  { label: 'Blog', to: '/blog' },
]

interface NavbarProps {
  variant?: 'dark' | 'light'
}

export default function Navbar({ variant = 'light' }: NavbarProps) {
  const isDark = variant === 'dark'

  return (
    <nav className={`flex items-center justify-between py-5 px-5 md:px-10 w-full relative z-50 ${
      !isDark ? 'bg-[#f0f0f0]' : ''
    }`}>
      <Link to="/" className="flex items-center gap-2">
        <img
          src={isDark ? '/long-logo.png' : '/icon-logo.png'}
          alt="hitopic"
          className={isDark ? 'h-6 md:h-7' : 'w-7 h-7 md:w-8 md:h-8'}
        />
        {!isDark && (
          <span className="text-[16px] md:text-[18px] font-normal text-brand-navy tracking-tight hidden sm:inline">
            hitopic
          </span>
        )}
      </Link>

      <ul className={`hidden md:flex items-center font-normal text-[14px] ${
        isDark
          ? 'gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-2'
          : 'gap-7 text-brand-navy/60'
      }`}>
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.to}
              className={`transition-colors flex items-center gap-0.5 ${
                isDark
                  ? 'text-[11px] font-medium tracking-[0.1em] text-white/60 hover:text-white px-4 py-1.5 rounded-full uppercase'
                  : 'hover:text-brand-blue'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/contact">
        {isDark ? (
          <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-[11px] font-medium tracking-[0.1em] text-white/70 hover:text-white transition-colors duration-200 uppercase">
            Contact
          </span>
        ) : (
          <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center bg-brand-blue text-brand-navy rounded-full pl-2 pr-4 md:pr-5 py-1.5 gap-2 hover:bg-brand-blue/85 transition-colors"
          >
            <span className="bg-brand-navy/10 p-1 md:p-1.5 rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-navy" />
            </span>
            <span className="text-xs md:text-sm font-medium">Nous contacter</span>
          </motion.span>
        )}
      </Link>
    </nav>
  )
}
