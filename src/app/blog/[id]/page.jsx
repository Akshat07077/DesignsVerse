import { notFound } from "next/navigation";
import data from "@/data/posts.json";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

// Metadata and generateStaticParams remain unchanged
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
      "DesignsVerse", "DesignVerse", "Design", "Verse", "DesignVerse", "designverse", "Designverse",
      `${post.title.toLowerCase()}`,
      "blog post", "website development blog", "digital marketing blog", "personal branding blog",
      "UI/UX design blog", "graphic design blog", "branding blog", "creative technology blog",
      "design inspiration", "industry trends", "success stories", "India",
    ],
    robots: "index, follow",
    viewport: "width=device-width, initial-scale=1.0",
    authors: [
      { name: post.author.name, url: "https://www.designsverse.in" },
      { name: "DesignsVerse Team", url: "https://www.designsverse.in" },
    ],
    alternates: {
      canonical: `https://www.designsverse.in/blog/${params.id}`,
    },
    openGraph: {
      title: `${post.title} | DesignsVerse`,
      description: post.sections[0]?.content || "Read more about this topic.",
      url: `https://www.designsverse.in/blog/${params.id}`,
      siteName: "DesignsVerse",
      images: [
        {
          url: post.image || "https://www.designsverse.in/og-image-blog.jpg",
          width: 1200,
          height: 630,
          alt: `${post.title} - DesignsVerse`,
        },
      ],
      locale: "en_IN",
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | DesignsVerse`,
      description: post.sections[0]?.content || "Read more about this topic.",
      images: [post.image || "https://www.designsverse.in/og-image-blog.jpg"],
      site: "@DesignsVerse",
    },
  };
}

export async function generateStaticParams() {
  return data.map((post) => ({
    id: post.id.toString(),
  }));
}

const BlogSidebar = ({ currentPostId }) => {
  const relatedPosts = data
    .filter((post) => post.id !== currentPostId)
    .slice(0, 4);

  return (
    <div className="w-full lg:w-80 space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 transition-all duration-300">
        <h3 className="font-bold text-xl mb-6 text-gray-900 dark:text-white">
          Related Articles
        </h3>
        <div className="space-y-6">
          {relatedPosts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.id}`}
              className="group flex gap-4 items-start hover:bg-gray-50 dark:hover:bg-gray-700 p-3 rounded-lg transition-all duration-300"
            >
              <div className="flex-shrink-0 relative w-16 h-16 rounded-md overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 16rem"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {post.readTime} min read
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function BlogPost({ params }) {
  const post = data.find((post) => post.id === params.id);

  if (!post) {
    return notFound();
  }

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.sections[0]?.content || "Read more about this topic.",
    image: post.image || "https://www.designsverse.in/og-image-blog.jpg",
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: "https://www.designsverse.in",
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
      "@id": `https://www.designsverse.in/blog/${params.id}`,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
        />
        <meta name="theme-color" content="#317EFB" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <main className="container mx-auto md:pl-20 px-4 pt-36 pb-12 lg:pt-36  lg:pb-16"> {/* Adjusted padding for header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Post Header */}
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
                <span>{new Date(post.publishDate).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span className="hidden sm:block">•</span>
                <span>{post.readTime} min read</span>
              </div>
            </header>

            {/* Featured Image */}
            {post.image && (
              <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={post.image}
                  width={1200}
                  height={675}
                  alt={post.title}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            )}

            {/* Post Content */}
            <div className="prose dark:prose-invert prose-lg max-w-none text-gray-800 dark:text-gray-200">
              {post.sections.map((section, index) => (
                <section key={index} className="mb-8">
                  {section.heading && (
                    <h2 className="text-3xl font-semibold mb-6 mt-12 text-gray-900 dark:text-white">
                      {section.heading}
                    </h2>
                  )}
                  <ReactMarkdown className="leading-relaxed">
                    {section.content}
                  </ReactMarkdown>
                </section>
              ))}
            </div>

            {/* Author Section */}
            <div className="mt-12 flex items-center gap-6 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{post.author.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{post.author.designation}</p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 lg:sticky lg:top-28 lg:self-start">
            <BlogSidebar currentPostId={post.id} />
          </aside>
        </div>
      </main>
    </>
  );
}