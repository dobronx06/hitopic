const partners = [
  { name: 'Google', logo: '/logos/google.png' },
  { name: 'Xandr', logo: '/logos/xandr.png' },
  { name: 'Magnite', logo: '/logos/magnite.png' },
  { name: 'Criteo', logo: '/logos/criteo.png' },
  { name: 'PubMatic', logo: '/logos/pubmatic.png' },
  { name: 'Adagio', logo: '/logos/adagio.png' },
  { name: 'Teads', logo: '/logos/teads.png' },
  { name: 'Amazon', logo: '/logos/amazon.png' },
  { name: 'Prebid', logo: '/logos/prebid.png' },
  { name: 'Index Exchange', logo: '/logos/indexexchange.png' },
]

export default function PartnersBar() {
  const track = [...partners, ...partners]

  return (
    <section className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-10 md:py-14">
      <div className="bg-brand-navy rounded-[1.5rem] md:rounded-[2.5rem] py-10 md:py-14 overflow-hidden">
        <h3 className="text-center text-xl md:text-2xl font-normal text-brand-blue tracking-tight mb-10 px-6">
          Intégrés avec les SSP et ad exchanges qui comptent
        </h3>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none" />

          <div className="inline-flex items-center animate-marquee w-max">
            {track.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="shrink-0 mx-4 md:mx-6 bg-white rounded-xl p-3 md:p-4 flex items-center justify-center"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
