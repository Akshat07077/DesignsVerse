import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Head from "next/head"; // For structured data and additional meta tags

// Define Metadata for Contact page SEO
export const metadata: Metadata = {
  title: "Contact Page | Get in Touch with DesignsVerse",
  description:
    "Have questions or need expert solutions for website development, digital marketing, or personal branding? Contact DesignsVerse today for tailored strategies and seamless digital experiences. Let's build something amazing together!",
  keywords: [
    "DesignsVerse", "DesignVerse", "Design", "Verse","Designverse","designverse","Designverse",
    "contact DesignsVerse", "website development contact", "digital marketing contact", "personal branding contact",
    "SEO-friendly websites", "digital solutions", "design agency India", "get in touch",
    "Indore design agency", "support DesignsVerse",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "DesignsVerse Team", url: "https://www.designsverse.in" }],
  alternates: {
    canonical: "https://www.designsverse.in/contact", // Canonical URL for contact page
  },
  openGraph: {
    title: "Contact Page | Get in Touch with DesignsVerse",
    description:
      "Have questions or need expert solutions for website development, digital marketing, or personal branding? Contact DesignsVerse today for tailored strategies and seamless digital experiences. Let's build something amazing together!",
    url: "https://www.designsverse.in/contact", // Updated OG URL
    siteName: "DesignsVerse",
    images: [
      {
        url: "https://www.designsverse.in/og-image-contact.jpg", // Updated OG image URL (specific to contact page)
        width: 1200,
        height: 630,
        alt: "Contact DesignsVerse - Get in Touch",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Page | Get in Touch with DesignsVerse",
    description:
      "Have questions or need expert solutions for website development, digital marketing, or personal branding? Contact DesignsVerse today!",
    images: ["https://www.designsverse.in/og-image-contact.jpg"], // Updated Twitter image URL
    site: "@DesignsVerse", // Replace with your Twitter handle
  },
};

const ContactPage = () => {
  // Structured Data (JSON-LD) for Contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DesignsVerse",
    url: "https://www.designsverse.in",
    logo: "https://www.designsverse.in/image/logo/LOGO-1.png",
    description:
      "DesignsVerse is a leading agency specializing in website development, digital marketing, and personal branding. Contact us for tailored strategies and seamless digital experiences.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Inore",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452001",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        telephone: "+91-1234567890", // Replace with actual phone number
        email: "support@designsverse.in", // Replace with actual email
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "Sales",
        telephone: "+91-1234567890", // Replace with actual phone number
        email: "sales@designsverse.in", // Replace with actual email
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
        />
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#317EFB" /> {/* Replace with your brand color */}
        <link rel="icon" href="/favicon.ico" /> {/* Replace with actual favicon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Replace with actual icon */}
      </Head>

      <Breadcrumb
        pageName="Contact Page"
        description="Need Help? We’re Here for You! At DesignsVerse, we value our community and are committed to providing top-notch support. Whether you have a question, need technical assistance, or just want to share feedback, our team is ready to assist you."
      />
      <Contact />
    </>
  );
};

export default ContactPage;