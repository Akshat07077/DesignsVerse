import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Head from "next/head"; // For structured data and additional meta tags

// Define Metadata for About page SEO
export const metadata: Metadata = {
  title: "About Page | DesignsVerse",
  description:
    "Learn more about DesignsVerse, a leading agency specializing in website development, digital marketing, and personal branding. We create SEO-friendly, high-performance websites and result-driven strategies to help businesses and professionals succeed in the digital world.",
  keywords: [
    "DesignsVerse", "DesignVerse", "Design", "Verse",
    "about DesignsVerse", "website development agency", "digital marketing agency", "personal branding agency",
    "SEO-friendly websites", "high-performance websites", "result-driven strategies",
    "business success", "digital success", "India",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "DesignsVerse Team", url: "https://www.designsverse.in" }],
  alternates: {
    canonical: "https://www.designsverse.in/about", // Canonical URL for about page
  },
  openGraph: {
    title: "About Page | DesignsVerse",
    description:
      "Learn more about DesignsVerse, a leading agency specializing in website development, digital marketing, and personal branding. We create SEO-friendly, high-performance websites and result-driven strategies to help businesses and professionals succeed in the digital world.",
    url: "https://www.designsverse.in/about", // Updated OG URL
    siteName: "DesignsVerse",
    images: [
      {
        url: "https://www.designsverse.in/og-image-about.jpg", // Updated OG image URL (specific to about page)
        width: 1200,
        height: 630,
        alt: "DesignsVerse - About Us",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Page | DesignsVerse",
    description:
      "Learn more about DesignsVerse, a leading agency specializing in website development, digital marketing, and personal branding. We create SEO-friendly, high-performance websites and result-driven strategies to help businesses and professionals succeed in the digital world.",
    images: ["https://www.designsverse.in/og-image-about.jpg"], // Updated Twitter image URL
    site: "@DesignsVerse", // Replace with your Twitter handle
  },
};

const AboutPage = () => {
  // Structured Data (JSON-LD) for About page
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DesignsVerse",
    url: "https://www.designsverse.in",
    logo: "https://www.designsverse.in/image/logo/LOGO-1.png",
    description:
      "DesignsVerse is a leading agency specializing in website development, digital marketing, and personal branding. We create SEO-friendly, high-performance websites and result-driven strategies to help businesses and professionals succeed in the digital world.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Inore",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-1234567890", // Replace with actual phone number
      email: "support@designsverse.in",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#317EFB" /> {/* Replace with your brand color */}
        <link rel="icon" href="/favicon.ico" /> {/* Replace with actual favicon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Replace with actual icon */}
      </Head>

      <Breadcrumb
        pageName="About Page"
        description="Welcome to DesignsVerse – Where Creativity Meets Innovation! At DesignsVerse, we believe that design is more than just aesthetics—it's an experience, a story, and a powerful tool for transformation. Our mission is to inspire, educate, and empower designers, businesses, and creative enthusiasts with cutting-edge insights and trends."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;