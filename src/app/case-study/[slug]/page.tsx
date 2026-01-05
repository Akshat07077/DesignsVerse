import { notFound } from 'next/navigation';
import Main from '@/components/Case-study/main';
import { domainsData, getDomainIcons } from '@/utils/lib/domainsData';
import { Metadata } from 'next';

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const domainConfig = domainsData.find(domain => domain.slug === params.slug);
  
  if (!domainConfig) {
    return {
      title: 'Domain Not Found | DomainHub',
      description: 'The requested domain platform is not available.'
    };
  }

  return {
    title: `${domainConfig.name} | Transform Your ${domainConfig.name}`,
    description: domainConfig.hero.description,
    keywords: `${domainConfig.slug}, digital transformation, ${domainConfig.slug} solutions, AI platform, business growth`,
    openGraph: {
      title: domainConfig.name,
      description: domainConfig.hero.description,
      images: [`https://source.unsplash.com/1200x630/?${domainConfig.slug}`],
      type: 'website',
      locale: 'en_US',
      siteName: 'DomainHub'
    },
    twitter: {
      card: 'summary_large_image',
      title: domainConfig.name,
      description: domainConfig.hero.description,
      images: [`https://source.unsplash.com/1200x630/?${domainConfig.slug}`]
    }
  };
}

// Generate static params for better SEO and performance
export async function generateStaticParams() {
  return domainsData.map((domain) => ({
    slug: domain.slug,
  }));
}

export default function DomainPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const domainConfig = domainsData.find(domain => domain.slug === slug);
  
  if (!domainConfig) {
    notFound();
  }

  const domainIcons = getDomainIcons(slug);

  return (
    <Main 
      domainSlug={slug} 
      domainConfig={domainConfig} 
      domainIcons={domainIcons} 
    />
  );
}
