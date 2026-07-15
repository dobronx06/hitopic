import { useState } from 'react'
import HeroV1 from '../components/HeroV1'
import HeroV2 from '../components/HeroV2'
import HeroV4 from '../components/HeroV4'
import HeroC from '../components/HeroC'
import HeroSwitcher from '../components/HeroSwitcher'
import PartnersBar from '../components/PartnersBar'
import SolutionsSection from '../components/SolutionsSection'
import FaqSection from '../components/FaqSection'
import CtaBanner from '../components/CtaBanner'

type BgType = 'video' | 'dark' | 'gradient'

const heroes: Record<string, React.ComponentType<{ bg?: BgType }>> = {
  v1: HeroV1,
  v2: HeroV2,
  v4: HeroV4,
  v5: HeroC,
}

export default function Home() {
  const [activeHero, setActiveHero] = useState('v5')
  const [activeBg, setActiveBg] = useState<BgType>('video')
  const Hero = heroes[activeHero]

  return (
    <>
      <Hero bg={activeBg} />
      <PartnersBar />
      <SolutionsSection />
      <FaqSection />
      <CtaBanner />
      <HeroSwitcher
        activeHero={activeHero}
        activeBg={activeBg}
        onHeroChange={setActiveHero}
        onBgChange={(id) => setActiveBg(id as BgType)}
      />
    </>
  )
}
