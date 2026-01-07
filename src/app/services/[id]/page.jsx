import { notFound } from "next/navigation";
import data from "@/data/servicedata.json";
import ServiceDetailContent from "@/components/Services/ServiceDetailContent";

// Fetch metadata for SEO (dynamic based on service ID)
export async function generateMetadata({ params }) {
  const post = data.find((post) => post.id === params.id);
  if (!post) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${post.title} | DesignsVerse`,
    description: post.excerpt,
    keywords: [
      "DesignsVerse", "DesignVerse", "Design", "Verse",
      `${post.title.toLowerCase()}`,
      "website development services", "digital marketing services", "personal branding",
      "ERP solutions", "UI/UX design services", "SEO-friendly websites", 
      "marketing strategies", "brand identity design", "India",
    ],
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    authors: [{ name: "DesignsVerse Team", url: "https://www.designsverse.in" }],
    alternates: {
      canonical: `https://www.designsverse.in/services/${params.id}`,
    },
    openGraph: {
      title: `${post.title} | DesignsVerse`,
      description: post.excerpt,
      url: `https://www.designsverse.in/services/${params.id}`,
      siteName: "DesignsVerse",
      images: [
        {
          url: "https://www.designsverse.in/og-image-services.jpg",
          width: 1200,
          height: 630,
          alt: `${post.title} - DesignsVerse`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | DesignsVerse`,
      description: post.excerpt,
      images: ["https://www.designsverse.in/og-image-services.jpg"],
      site: "@DesignsVerse",
    },
  };
}

export default async function ServicePost({ params }) {
  const post = data.find((post) => post.id === params.id);
  if (!post) {
    return notFound();
  }

  // Structured Data (JSON-LD) for Service page
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: post.title,
    provider: {
      "@type": "Organization",
      name: "DesignsVerse",
      url: "https://www.designsverse.in",
      logo: "https://www.designsverse.in/image/logo/LOGO-1.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Indore",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452001",
        addressCountry: "IN",
      },
    },
    description: post.excerpt,
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

  return <ServiceDetailContent post={post} serviceSchema={serviceSchema} data={data} />;
}