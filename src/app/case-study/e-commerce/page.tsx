import React from 'react'
import EcommerceHero from '@/components/e-commerce/Hero'
import EcommerceAbout from '@/components/e-commerce/About'
import EcommerceApproach from '@/components/e-commerce/Approach'
import SocialMediaPage from '@/components/e-commerce/social'
import EcommerceFinalCTA from '@/components/e-commerce/FinalCTA'
import CTAFooter from '@/components/e-commerce/bottomcta'

const Ecommerce = () => {
  return (
    <div>
      <EcommerceHero />
      <EcommerceAbout />
      <EcommerceApproach />
      <SocialMediaPage />
      <EcommerceFinalCTA />
      <CTAFooter/>
    </div>
  )
}

export default Ecommerce
