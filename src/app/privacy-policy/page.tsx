import Head from "next/head";
import SectionTitle from "@/components/Common/SectionTitle";
import { Metadata } from "next";

// Define Metadata for Privacy Policy page SEO
export const metadata: Metadata = {
  title: "Privacy Policy | DesignsVerse",
  description:
    "Learn how DesignsVerse protects your privacy. Our Privacy Policy outlines how we collect, use, and safeguard your personal data for website development, digital marketing, and personal branding services.",
  keywords: [
    "DesignsVerse", "Designverse", "designverse", "DesignVerse", "Design", "Verse",
    "privacy policy", "data protection", "personal data", "DesignsVerse privacy",
    "website development privacy", "digital marketing privacy", "personal branding privacy",
    "secure data", "India design agency", "Indore privacy policy",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "DesignsVerse Team", url: "https://www.designsverse.in" }],
  alternates: {
    canonical: "https://www.designsverse.in/privacy-policy", // Canonical URL for privacy policy page
  },
  openGraph: {
    title: "Privacy Policy | DesignsVerse",
    description:
      "Learn how DesignsVerse protects your privacy. Our Privacy Policy outlines how we collect, use, and safeguard your personal data for website development, digital marketing, and personal branding services.",
    url: "https://www.designsverse.in/privacy-policy", // Updated OG URL
    siteName: "DesignsVerse",
    images: [
      {
        url: "https://www.designsverse.in/og-image-privacy.jpg", // Updated OG image URL (specific to privacy policy)
        width: 1200,
        height: 630,
        alt: "Privacy Policy - DesignsVerse",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | DesignsVerse",
    description:
      "Learn how DesignsVerse protects your privacy. Our Privacy Policy outlines how we collect, use, and safeguard your personal data.",
    images: ["https://www.designsverse.in/og-image-privacy.jpg"], // Updated Twitter image URL
    site: "@DesignsVerse", // Replace with your Twitter handle
  },
};

const PrivacyPolicy = () => {
  const PolicyPoint = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {/* Check Icon */}
        <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
        </svg>
      </span>
      {text}
    </p>
  );

  // Structured Data (JSON-LD) for Privacy Policy page
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://www.designsverse.in/privacy-policy",
    description:
      "Learn how DesignsVerse protects your privacy. Our Privacy Policy outlines how we collect, use, and safeguard your personal data for website development, digital marketing, and personal branding services.",
    publisher: {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
        />
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#317EFB" /> {/* Replace with your brand color */}
        <link rel="icon" href="/favicon.ico" /> {/* Replace with actual favicon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Replace with actual icon */}
      </Head>

      <section id="privacy" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap">
              {/* Left Side - Text Content */}
              <div className="w-full px-4 lg:w-2/3 mt-[50px] mb-[80px]">
                {/* H1 Heading for SEO and Accessibility */}
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Privacy Policy
                </h1>

                <SectionTitle
                  title="Our Commitment to Your Privacy"
                  paragraph="We are committed to protecting your personal information. This privacy policy outlines how we collect, use, and safeguard your data."
                  mb="44px"
                />

                <div>
                  <PolicyPoint text="We collect only necessary user data for service improvement." />
                  <PolicyPoint text="Your information is never shared with third parties without consent." />
                  <PolicyPoint text="We use secure protocols to protect your personal data." />
                  <PolicyPoint text="Cookies are used to enhance user experience and analyze traffic." />
                  <PolicyPoint text="You can opt-out of communications and request data deletion anytime." />
                </div>
              </div>

              {/* Right Side - Animated Video */}
              <div className="w-full pr-25 px-4 lg:w-1/3 flex justify-center items-center">
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-lg shadow-lg"
                >
                  <source src="/video/privatpolicy.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;