import { notFound } from "next/navigation";
import data from "@/data/posts.json";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

// Fetch metadata for SEO
export async function generateMetadata({ params }) {
  const post = data.find((post) => post.id === params.id);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.sections[0]?.content || "Read more about this topic.",
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

  return (
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
            alt={post.title}
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
            alt={post.author.name}
            className="rounded-full"
          />
          <div className="ml-4">
            <p className="text-lg font-semibold">{post.author.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{post.author.designation}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

