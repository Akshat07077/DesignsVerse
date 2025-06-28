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
            
            {/* AI Services Grid - Only for first service */}
            {post.id === "1" && (
              <div className="mt-8">
                <h2 className="text-3xl font-bold text-center mb-8">Our AI Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Chatbot Development */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Chatbot Development</h3>
                      <p className="text-gray-600 text-sm">Create intelligent chatbots for customer support and engagement.</p>
                    </div>
                  </div>

                  {/* Model Fine-Tuning */}
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Model Fine-Tuning</h3>
                      <p className="text-gray-600 text-sm">Fine-tune AI models for specific tasks and improve performance.</p>
                    </div>
                  </div>

                  {/* NLP Project Development */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">NLP Project Development</h3>
                      <p className="text-gray-600 text-sm">Develop NLP projects to analyze and understand human language.</p>
                    </div>
                  </div>

                  {/* Data Analysis */}
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Analysis</h3>
                      <p className="text-gray-600 text-sm">Analyze data to extract insights and drive decision-making.</p>
                    </div>
                  </div>

                  {/* Custom AI Solutions */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Custom AI Solutions</h3>
                      <p className="text-gray-600 text-sm">Build custom AI solutions tailored to your business needs.</p>
                    </div>
                  </div>

                  {/* AI Consultation */}
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-200">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Consultation</h3>
                      <p className="text-gray-600 text-sm">Consult with our experts to explore AI opportunities for your business.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
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