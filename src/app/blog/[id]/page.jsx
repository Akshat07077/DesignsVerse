import { notFound } from "next/navigation";
import data from "@/data/posts.json";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Head from "next/head"; // For structured data and additional meta tags

// Fetch metadata for SEO (dynamic based on blog post ID)
export async function generateMetadata({ params }) {
  const post = data.find((post) => post.id === params.id);
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | DesignsVerse`,
    description: post.sections[0]?.content || "Read more about this topic.",
    keywords: [
      "DesignsVerse", "DesignVerse", "Design", "Verse","DesignVerse","designverse","Designverse",
      `${post.title.toLowerCase()}`, // Dynamic blog post title as keyword
      "blog post", "website development blog", "digital marketing blog", "personal branding blog",
      "UI/UX design blog", "graphic design blog", "branding blog", "creative technology blog",
      "design inspiration", "industry trends", "success stories", "India",
    ],
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    authors: [
      { name: post.author.name, url: "https://www.designsverse.in" }, // Dynamic author name
      { name: "DesignsVerse Team", url: "https://www.designsverse.in" },
    ],
    alternates: {
      canonical: `https://www.designsverse.in/blog/${params.id}`, // Dynamic canonical URL
    },
    openGraph: {
      title: `${post.title} | DesignsVerse`,
      description: post.sections[0]?.content || "Read more about this topic.",
      url: `https://www.designsverse.in/blog/${params.id}`, // Dynamic OG URL
      siteName: "DesignsVerse",
      images: [
        {
          url: post.image || "https://www.designsverse.in/og-image-blog.jpg", // Dynamic post image or fallback
          width: 1200,
          height: 630,
          alt: `${post.title} - DesignsVerse`,
        },
      ],
      locale: "en_IN",
      type: "article",
      publishedTime: post.publishDate, // Dynamic publish date
      authors: [post.author.name], // Dynamic author
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | DesignsVerse`,
      description: post.sections[0]?.content || "Read more about this topic.",
      images: [post.image || "https://www.designsverse.in/og-image-blog.jpg"], // Dynamic post image or fallback
      site: "@DesignsVerse", // Replace with your Twitter handle
    },
  };
}

// Generate static paths
export async function generateStaticParams() {
  return data.map((post) => ({
    id: post.id.toString(), // Ensuring id is always a string
  }));
}

export default function BlogPost({ params }) {
  const post = data.find((post) => post.id === params.id);

  if (!post) {
    return notFound();
  }

  // Structured Data (JSON-LD) for Blog Post
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title, // Dynamic title
    description: post.sections[0]?.content || "Read more about this topic.", // Dynamic description
    image: post.image || "https://www.designsverse.in/og-image-blog.jpg", // Dynamic post image or fallback
    datePublished: post.publishDate, // Dynamic publish date
    dateModified: post.publishDate, // Assuming no modified date, use publish date
    author: {
      "@type": "Person",
      name: post.author.name, // Dynamic author name
      url: "https://www.designsverse.in", // Author URL
    },
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.designsverse.in/blog/${params.id}`, // Dynamic blog post URL
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
        />
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#317EFB" /> {/* Replace with your brand color */}
        <link rel="icon" href="/favicon.ico" /> {/* Replace with actual favicon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> {/* Replace with actual icon */}
      </Head>

      <main className="mt-20 w-full min-h-screen flex flex-col items-center pt-24 px-6 md:px-10 lg:px-20 bg-white dark:bg-[#121723] text-black dark:text-white transition-colors duration-300">
        {/* Blog Header Section */}
        <div className="w-full mb-10 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Published on {post.publishDate} • {post.readTime} min read
          </p>
        </div>

        {/* Blog Thumbnail */}
        {post.image && (
          <div className="w-full flex justify-center">
            <Image
              src={post.image}
              width={800}
              height={450}
              alt={`${post.title} thumbnail`} // Updated alt text for SEO
              className="rounded-lg object-cover"
            />
          </div>
        )}

        {/* Blog Content Sections */}
        <div className="w-full max-w-3xl mt-10">
          {post.sections.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
              <ReactMarkdown className="text-lg text-justify leading-relaxed">
                {section.content}
              </ReactMarkdown>
            </div>
          ))}
        </div>

        {/* Author Section */}
        <div className="w-full max-w-3xl flex items-center mt-10 p-6 border-t border-gray-300 dark:border-gray-700">
          <div className="flex items-center">
            <Image
              src={post.author.image}
              width={50}
              height={50}
              alt={`${post.author.name} profile`} // Updated alt text for SEO
              className="rounded-full"
            />
            <div className="ml-4">
              <p className="text-lg font-semibold">{post.author.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.author.designation}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}