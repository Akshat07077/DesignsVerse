import { notFound } from "next/navigation";
import data from "@/data/posts.json";
import Image from "next/image";

// Fetch metadata for SEO
export async function generateMetadata({ params }) {
  const post = data.find((post) => post.id === params.id);
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: post.title,
    description: post.excerpt,
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
    <main className="mt-[100px] max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center">{post.title}</h1>

      {/* Centered Author and Date */}
      <div className="flex justify-center mt-2">
        <p className="text-gray-500 text-right">
          By {post.author} on {new Date(post.publishedDate).toLocaleDateString()}
        </p>
      </div>

      {/* Blog Post Image */}
      {post.image && (
        <div className="relative mt-6">
          <div className="w-full h-64 bg-gray-200 rounded-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="object-cover rounded-lg w-full h-full"
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
