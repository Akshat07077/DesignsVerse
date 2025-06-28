import Head from 'next/head'; // For additional meta tags beyond Metadata object
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/RecentProjects";
import { Metadata } from "next";
import Service from "./services/page";
import FAQ from "@/components/FAQ";
import IndexServices from '@/components/Services';
import MobileServices from '@/components/Services';
import RecentProjects from '@/components/RecentProjects';
import RelatedPost from '@/components/Blog/RelatedPost';

// Define Metadata for basic SEO
export const metadata: Metadata = {
  title: "DesignsVerse | Software Development | Digital Marketing",
  description: "DesignsVerse is India's leading digital solutions agency offering custom website development, ERP software, digital marketing, UI/UX design, mobile app development, and branding services to enhance your online presence and drive business growth.",
  keywords: [
    "DesignsVerse", "DesignVerse", "Design", "Verse",
    "software development", "digital marketing", "website development", 
    "ERP software", "UI/UX design", "mobile app development", "branding", 
    "India", 
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "DesignsVerse Team", url: "https://www.designsverse.in" }],
  alternates: {
    canonical: "https://www.designsverse.in", // Updated canonical URL
  },
  openGraph: {
    title: "DesignsVerse | Software Development | Digital Marketing",
    description: "DesignsVerse offers custom website development, ERP software, digital marketing, UI/UX design, mobile app development, and branding services in India.",
    url: "https://www.designsverse.in", // Updated OG URL
    siteName: "DesignsVerse",
    images: [
      {
        url: "https://www.designsverse.in/og-image.jpg", // Updated OG image URL
        width: 1200,
        height: 630,
        alt: "DesignsVerse - Digital Solutions Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DesignsVerse | Software Development | Digital Marketing",
    description: "DesignsVerse offers custom website development, ERP software, digital marketing, UI/UX design, mobile app development, and branding services in India.",
    images: ["https://www.designsverse.in/og-image.jpg"], // Updated Twitter image URL
    site: "@DesignsVerse", // Replace with your Twitter handle
  },
};

export default function Home() {
  // Structured Data (JSON-LD) for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DesignsVerse",
    url: "https://www.designsverse.in", // Updated URL
    logo: "https://www.designsverse.in/image/logo/LOGO-1.png", // Updated logo URL
    description: "DesignsVerse is India's leading digital solutions agency offering custom website development, ERP software, digital marketing, UI/UX design, mobile app development, and branding services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Inore", // Replace with actual address
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "Zip Code",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=100086505502218", // Replace with actual social media URLs
      "https://x.com/designs_verse",
      "https://www.linkedin.com/company/designsverse/posts/?feedView=all",
      "https://www.instagram.com/designsverse.in/",
    ],
  };

  return (
    <>
      {/* Add Structured Data (JSON-LD) */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#317EFB" /> {/* Replace with your brand color */}
        <link rel="icon" href="/favicon.ico" /> {/* Replace with actual favicon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Replace with actual icon */}
      </Head>
      <ScrollUp />
      <Hero />
      <MobileServices/>
      <Brands />
      {/* <Features /> */}
      <RecentProjects/>
   
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      
      <Blog />
      <FAQ />
      <Contact />
    </>
  );
}