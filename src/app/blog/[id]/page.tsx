import { notFound } from "next/navigation";
import { Metadata } from "next";
import data from "@/data/posts.json";
import Image from 'next/image';

interface BlogPostProps {
  params: { id: string };
}

// Fetch metadata for SEO purposes
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = data.find((post) => post.id === params.id);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = data.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="mt-[100px] max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">{post.title}</h1>

      {/* Centered Author and Date */}
      <div className="flex justify-center  mt-2">
        <p className="text-gray-500 text-right">By {post.author} on {new Date(post.publishedDate).toLocaleDateString()}</p>
      </div>

      {/* Dynamically Loaded Image Container */}
      {post.image && (
        <div className="relative mt-6">
          <div className="w-full h-64 bg-gray-200 rounded-lg">
          <Image
            src={post.image} // Dynamically loaded image path
            alt="Blog Post Image"
            width={500} // Provide default width
            height={300} // Provide default height
            className="w-full h-full object-cover rounded-lg"
          />
          </div>
        </div>
      )}

      {/* Blog Post Content */}
      <article className="prose lg:prose-xl text-justify p-1 mt-6">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  );
}
