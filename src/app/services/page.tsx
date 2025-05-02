import ServiceSection from "@/components/Services/1";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Head from "next/head"; // For structured data and additional meta tags

// Define Metadata for Services page SEO
export const metadata: Metadata = {
  title: "Services | DesignsVerse",
  description:
    "Explore our premium website development, digital marketing, and personal branding services at DesignsVerse. We craft SEO-friendly websites, powerful marketing strategies, and brand identities to elevate your online presence.",
  keywords: [
    "DesignsVerse", "DesignVerse", "Design", "Verse",
    "website development services", "digital marketing services", "personal branding",
    "ERP solutions", "UI/UX design services", "SEO-friendly websites", 
    "marketing strategies", "brand identity design", "India",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "DesignsVerse Team", url: "https://www.designsverse.in" }],
  alternates: {
    canonical: "https://www.designsverse.in/services", // Canonical URL for services page
  },
  openGraph: {
    title: "Services | DesignsVerse",
    description:
      "Explore our premium website development, digital marketing, and personal branding services at DesignsVerse. We craft SEO-friendly websites, powerful marketing strategies, and brand identities to elevate your online presence.",
    url: "https://www.designsverse.in/services", // Updated OG URL
    siteName: "DesignsVerse",
    images: [
      {
        url: "https://www.designsverse.in/og-image-services.jpg", // Updated OG image URL (specific to services)
        width: 1200,
        height: 630,
        alt: "DesignsVerse - Premium Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | DesignsVerse",
    description:
      "Explore our premium website development, digital marketing, and personal branding services at DesignsVerse. We craft SEO-friendly websites, powerful marketing strategies, and brand identities to elevate your online presence.",
    images: ["https://www.designsverse.in/og-image-services.jpg"], // Updated Twitter image URL
    site: "@designs_verse", // Replace with your Twitter handle
  },
};

const ServicePage = () => {
  // Structured Data (JSON-LD) for Services page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Website Development, Digital Marketing, Personal Branding",
    provider: {
      "@type": "Organization",
      name: "DesignsVerse",
      url: "https://www.designsverse.in",
      logo: "https://www.designsverse.in/image/logo/LOGO-1.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Inore",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452001",
        addressCountry: "IN",
      },
    },
    description:
      "DesignsVerse offers premium services including website development, digital marketing, ERP solutions, UI/UX design, and personal branding to elevate your online presence.",
    areaServed: {
      "@type": "Place",
      name: "India",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=100086505502218",
      "https://x.com/designs_verse",
      "https://www.linkedin.com/company/designsverse/posts/?feedView=all",
      "https://www.instagram.com/designsverse.in/",
    ],
  };

  return (
    <>
      <Head>
        {/* Add Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#317EFB" /> {/* Replace with your brand color */}
        <link rel="icon" href="/favicon.ico" /> {/* Replace with actual favicon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Replace with actual icon */}
      </Head>

      <Breadcrumb
        pageName="Services Page"
        description="At DesignsVerse, we offer a wide range of design services to bring your ideas to life. Whether you're looking for Website Development, ERP Solutions, UI/UX design, or marketing materials, our expert team is here to craft visually stunning and strategically effective designs."
      />
      <ServiceSection />
    </>
  );
};

export default ServicePage;