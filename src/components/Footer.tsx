import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Solutions',
    links: [
      { label: 'Google Ad Manager 360', to: '/google-ad-manager-360' },
      { label: 'Google AdX', to: '/google-adx' },
      { label: 'Header Bidding', to: '/header-bidding' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'FAQ', to: '#' },
      { label: 'Affiliation', to: '#' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'Notre mission', to: '#' },
      { label: 'Contact', to: '/contact' },
      { label: 'Mentions légales', to: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-brand-navy">
      <div className="max-w-[1536px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div className="md:max-w-xs">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src="/icon-logo.png" alt="hitopic" className="w-7 h-7" />
              <span className="text-lg font-normal tracking-tight text-white">hitopic</span>
            </Link>
            <p className="text-[13px] font-normal text-white/35 leading-relaxed">
              Régie publicitaire programmatique pour éditeurs. Basé en France, depuis 2012.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {footerLinks.map((col) => (
              <div key={col.title}>
                <span className="text-[11px] font-medium text-brand-blue uppercase tracking-wider">{col.title}</span>
                <ul className="mt-3 flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-[13px] md:text-[14px] font-normal text-white/40 hover:text-brand-blue transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-white/20">&copy; 2012-{new Date().getFullYear()} SAS Hitopic</span>
          <div className="flex items-center gap-2">
            <span className="h-px w-5 bg-brand-blue/25" />
            <span className="text-[11px] uppercase tracking-wider text-brand-blue/35 font-medium">Google Certified Publishing Partner</span>
            <span className="h-px w-5 bg-brand-blue/25" />
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[11px] text-white/20 hover:text-brand-blue transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-[11px] text-white/20 hover:text-brand-blue transition-colors">CGVU</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
