import { notFound } from "next/navigation";
import data from "@/data/servicedata.json";
import Link from "next/link";
import Head from "next/head"; // For structured data and additional meta tags
import Image from "next/image";
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
      `${post.title.toLowerCase()}`, // Dynamic service title as keyword
      "website development services", "digital marketing services", "personal branding",
      "ERP solutions", "UI/UX design services", "SEO-friendly websites", 
      "marketing strategies", "brand identity design", "India",
    ],
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    authors: [{ name: "DesignsVerse Team", url: "https://www.designsverse.in" }],
    alternates: {
      canonical: `https://www.designsverse.in/services/${params.id}`, // Dynamic canonical URL
    },
    openGraph: {
      title: `${post.title} | DesignsVerse`,
      description: post.excerpt,
      url: `https://www.designsverse.in/services/${params.id}`, // Dynamic OG URL
      siteName: "DesignsVerse",
      images: [
        {
          url: "https://www.designsverse.in/og-image-services.jpg", // Updated OG image URL (specific to services)
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
      images: ["https://www.designsverse.in/og-image-services.jpg"], // Updated Twitter image URL
      site: "@DesignsVerse", // Replace with your Twitter handle
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
    serviceType: post.title, // Dynamic service title
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
    description: post.excerpt, // Dynamic description
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

      <main className="mt-[140px] max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <section className="w-full lg:w-2/3 border p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-left">{post.title}</h1>
            <p className="text-gray-500 pl-1 text-left">By {post.author}</p>

            {/* Video Section */}
            {post.video && (
              <div className="relative mt-6 w-full rounded-lg overflow-hidden">
                <video 
                  src={post.video} 
                  alt={`${post.title} video`} // Updated alt text for SEO
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            )}

            {/* Service Description */}
            <article className="prose lg:prose-xl justify-text text-left mt-6">
              <div className="text-justify" dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mt-8 border p-4 rounded-lg shadow-lg">
              {/* Small Video Section */}
              <div className="mt-5 relative w-[250px] h-[300px] rounded-lg overflow-hidden">
                <video 
                  src={post.smallVideo} 
                  alt={`${post.title} small video`} // Updated alt text for SEO
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">{post.heading}</h3>
                <ul className="text-black dark:text-gray-200 space-y-2 mt-2">
                  {post.points?.map((point, index) => (
                    <li key={index} className="flex text-s items-start">
                      <span className="text-blue-500 mr-2">✔</span> 
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 p-5 pt- rounded-lg shadow-md order-2 lg:order-none">
            {/* Contact Us Now Section */}
            <div className="p-6 bg-[#4A6CF7] text-white rounded-xl shadow-lg order-1 md:order-none transform hover:scale-105 transition-transform duration-300">
  <h3 className="text-2xl font-bold mb-4 text-center tracking-tight">Get in Touch</h3>
  <div className="space-y-4">
    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/30 transition-colors duration-200">
      <a
        href="tel:+919876543210"
        className="inline-flex items-center gap-2 text-xl font-semibold py-2 px-4 bg-black rounded-full hover:bg-blue-500 transition-all duration-300 transform hover:-translate-y-1"
      >
       <Image
                      src="/images/call.png"
                      alt="Call Icon"
                      width={20}
                      height={20}
                      className="mr-2"
                    />Call Now
      </a>
      <p className="text-sm mt-2 opacity-90">Available 24/7 for your queries</p>
    </div>
    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg text-center hover:bg-white/30 transition-colors duration-200">
      <h4 className="font-semibold text-lg">Instant Support</h4>
      <p className="text-sm mt-1 opacity-90">Connect with our experts instantly</p>
    </div>
  </div>
</div>

            {/* Services List */}
            <h2 className="text-xl font-semibold mb-4 mt-6">All Services</h2>
            <ul className="space-y-2">
              {data.map((services) => (
                <li key={services.id} className="border p-2 rounded hover:bg-gray-200 cursor-pointer transition-colors">
                  <Link href={`/services/${services.id}`} className="flex justify-between items-center">
                    {services.title}
                    <span className="text-blue-500">→</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sidebar Video */}
            <div className="relative mt-20 w-full rounded-lg overflow-hidden">
              <video 
                src="/video/sbimg.mp4" 
                alt="DesignsVerse sidebar video" // Updated alt text for SEO
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}