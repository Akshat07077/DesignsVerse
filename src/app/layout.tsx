import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Metadata } from "next";
import Head from "next/head"; // For additional meta tags and structured data

const inter = Inter({ subsets: ["latin"] });

// Define Metadata for basic SEO (common for all pages)
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for Organization (common for all pages)
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
      postalCode: "452001", // Updated ZIP code for Indore
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=100086505502218",
      "https://x.com/designs_verse",
      "https://www.linkedin.com/company/designsverse/posts/?feedView=all",
      "https://www.instagram.com/designsverse.in/",
    ],
  };

  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        {/* Add Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#317EFB" /> {/* Replace with your brand color */}
        <link rel="icon" href="/favicon.ico" /> {/* Replace with actual favicon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Replace with actual icon */}
      </Head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <Popup/>
          <WhatsAppButton/>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import Popup from "@/components/Popup/Popup";import WhatsAppButton from "@/components/whatsapp/page";

