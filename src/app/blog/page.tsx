import BlogSection from "@/components/Blog/1";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Head from "next/head"; // For structured data and additional meta tags

// Define Metadata for Blog page SEO
export const metadata: Metadata = {
  title: "Blog Page | DesignsVerse",
  description:
    "Explore our latest blogs and articles on website development, digital marketing, and personal branding. Stay updated with our insightful content and industry trends.",
  keywords: [
    "DesignsVerse", "DesignVerse", "Design", "Verse", "DesignVerse","DesignVerse",
    "blog", "website development blog", "digital marketing blog", "personal branding blog",
    "UI/UX design blog", "graphic design blog", "branding blog", "creative technology blog",
    "design inspiration", "industry trends", "success stories", "India",
  ],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  authors: [{ name: "DesignsVerse Team", url: "https://www.designsverse.in" }],
  alternates: {
    canonical: "https://www.designsverse.in/blog", // Canonical URL for blog page
  },
  openGraph: {
    title: "Blog Page | DesignsVerse",
    description:
      "Explore our latest blogs and articles on website development, digital marketing, and personal branding. Stay updated with our insightful content and industry trends.",
    url: "https://www.designsverse.in/blog", // Updated OG URL
    siteName: "DesignsVerse",
    images: [
      {
        url: "https://www.designsverse.in/og-image-blog.jpg", // Updated OG image URL (specific to blog)
        width: 1200,
        height: 630,
        alt: "DesignsVerse - Blog Insights",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Page | DesignsVerse",
    description:
      "Explore our latest blogs and articles on website development, digital marketing, and personal branding. Stay updated with our insightful content and industry trends.",
    images: ["https://www.designsverse.in/og-image-blog.jpg"], // Updated Twitter image URL
    site: "@DesignsVerse", // Replace with your Twitter handle
  },
};

const BlogPage = () => {
  // Structured Data (JSON-LD) for Blog page
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "DesignsVerse Blog",
    url: "https://www.designsverse.in/blog",
    description:
      "Explore our latest blogs and articles on website development, digital marketing, personal branding, UI/UX design, and more. Stay updated with industry trends and insights.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#317EFB" /> {/* Replace with your brand color */}
        <link rel="icon" href="/favicon.ico" /> {/* Replace with actual favicon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Replace with actual icon */}
      </Head>

      <Breadcrumb
        pageName="Blog Page"
        description="Stay updated with the latest trends, expert tips, and industry insights in the world of design. Our blog covers everything from UI/UX, graphic design, branding, and creative technology to design inspiration and success stories."
      />
      <BlogSection />
    </>
  );
};

export default BlogPage;