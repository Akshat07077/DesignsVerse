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
    <main className="w-full min-h-screen flex flex-col justify-center items-center pt-24 p-6 bg-[#121723]">
      <h1 className="text-4xl font-bold text-center">{post.title}</h1>

      {/* Centered Author and Date */}
      <div className="flex justify-center mt-2">
        <p className="text-gray-500 text-right">
          By {post.author} on {new Date(post.publishedDate).toLocaleDateString()}
        </p>
      </div>

      {/* Remote Work Section */}
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold text-white mb-4">
              How remote work drastically improved my skills as a designer
            </h1>
            <p className="text-lg text-white">
              Remote working might not only be feasible but beneficial. Stanford University found that
              remote employees were 13% more productive, with absolutely “no difference in the
              effectiveness, performance ratings, or promotions”.
            </p>
          </div>
          <div className="md:w-1/2 p-4">
          {post.video && (
              <video
                src={post.video}
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                className="rounded-lg"
                controls
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
