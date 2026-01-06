'use client';
import { useEffect } from 'react';
import MarqueeCTA from '@/components/Case-study/MarqueeCTA';
import HeroSection from '@/components/Case-study/HeroSection';
import AboutPage from '@/components/Case-study/AboutPage';
import CTAFooter from '@/components/Case-study/CTAFooter';
import BusinessTransformationPage from '@/components/Case-study/BusinessTransformationPage';
import SocialMediaPage from '@/components/Case-study/SocialMediaPage';

interface MainProps {
  domainSlug: string;
  domainConfig: any;
  domainIcons: any;
}

const Main = ({ domainSlug, domainConfig, domainIcons }: MainProps) => {
  useEffect(() => {
    if (domainConfig?.colors) {
      const { colors } = domainConfig;
      document.documentElement.style.setProperty('--primary-color', colors.primary);
      document.documentElement.style.setProperty('--secondary-color', colors.secondary);
      document.documentElement.style.setProperty('--accent-color', colors.accent);
    }
  }, [domainConfig]);

  if (!domainConfig) {
    return null;
  }

  const { name, colors, hero, about, socialMedia, businessTransformation, footer } = domainConfig;

  return (
    <>
      <style jsx global>{`
        :root {
          --primary-color: ${colors.primary};
          --secondary-color: ${colors.secondary};
          --accent-color: ${colors.accent};
          --bg-gradient: ${colors.gradient1};
          --text-primary: ${colors.textPrimary};
        }
        
        * {
          --primary-gradient: ${colors.gradient1};
          --secondary-gradient: ${colors.gradient2};
          --accent-gradient: ${colors.gradient3};
          --bg-light: ${colors.background};
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-white via-[var(--bg-light)] to-[#e8f5e8]">
        {/* Marquee CTA */}
        <MarqueeCTA pageData={{
          colors: colors,
          cta: {
            marquee: `Book Your ${name} Call Now`
          }
        }} />
        
        {/* Hero Section */}
        <HeroSection 
          pageData={{
            colors: colors,
            hero: hero,
            growthOptions: hero?.growthOptions || [],
            growthStats: hero?.growthStats || {},
            name: name
          }}
        />
        
        {/* About Section */}
        <AboutPage 
          data={about} 
          colors={colors}
          domainSlug={domainSlug}
          domainIcons={domainIcons || {}}
        />
        
        {/* Social Media Section */}
        {socialMedia && (
          <SocialMediaPage 
            data={socialMedia} 
            colors={colors}
            domainSlug={domainSlug}
          />
        )}
        
        {/* Business Transformation Section */}
        {businessTransformation && (
          <BusinessTransformationPage 
            data={businessTransformation} 
            colors={colors}
            domainSlug={domainSlug}
          />
        )}
        
        {/* CTA Footer */}
        <CTAFooter 
          data={footer} 
          colors={colors}
          domainName={name}
          domainSlug={domainSlug}
        />
      </div>
    </>
  );
};

export default Main;
