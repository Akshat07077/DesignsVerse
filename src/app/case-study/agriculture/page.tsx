import AboutPage from '@/components/agriculure/about'
import HeroSection from '@/components/agriculure/hero'
import SocialMediaPage from '@/components/agriculure/socialmedial'
import TechStackPage from '@/components/agriculure/tech'
import BusinessTransformationPage from '@/components/agriculure/transforam'
import React from 'react'
import FloatingBookCTA from '@/components/agriculure/footercta'
import MarqueeCTA from '@/components/agriculure/MarqueeCTA'
const Agriculture = () => {
  return (
    <div>
      <MarqueeCTA/>
      <HeroSection/>
      <AboutPage/>
      <SocialMediaPage/>
      <BusinessTransformationPage/>
      {/* <TechStackPage/> */}
      <FloatingBookCTA/>
    </div>
  )
}

export default Agriculture
