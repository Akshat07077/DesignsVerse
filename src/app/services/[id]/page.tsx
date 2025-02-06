import { notFound } from "next/navigation";
import { Metadata } from "next";
import data from "@/data/servicedata.json";
import Image from 'next/image';

interface ServicePostProps {
  params: { id: string };
}

// Fetch metadata for SEO purposes
export async function generateMetadata({ params }: ServicePostProps): Promise<Metadata> {
  const post = data.find((post) => post.id === params.id);
  if (!post) return { title: "Service Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ServicePost({ params }: ServicePostProps) {
  const post = data.find((post) => post.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="mt-[100px] max-w-4xl mx-auto p-2">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Sidebar with transparent background */}
        <aside className="w-full  lg:w-1/4 p-5 pt-24 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer">Website Development</li>
            <li className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer">Graphic Design</li>
            <li className="border border-gray-300 p-2 rounded hover:bg-gray-100 cursor-pointer">App Development</li>
          </ul>
          <div className="mt-6 w-48 p-4 bg-blue-500 text-white rounded-lg">
            <h3 className="text-lg font-semibold">Let's talk</h3>
            <p className=" text-sm mt-2">(+550) 647 876 093</p>
            <p className="text-sm ">support@company.com</p>
            <button className="mt-4  bg-white text-blue-500 px-4 py-2 rounded border border-white hover:bg-blue-100">Get a call back</button>
          </div>
        </aside>

        {/* Main Content Section */}
        <section className="w-full  lg:w-3/4">
          <h1 className="text-4xl font-bold text-left">{post.title}</h1>

          {/* Centered Author and Date */}
          <div className="flex justify-center mt-2">
            <p className="text-gray-500 text-right">By {post.author} on {new Date(post.publishedDate).toLocaleDateString()}</p>
          </div>

          {/* Dynamically Loaded Image Container */}
          {post.image && (
            <div className="relative mt-6">
              <div className="w-full h-64 bg-gray-200 rounded-lg">
              <Image
                src={post.image}
                alt="Service Post Image"
                fill
                className="object-cover rounded-lg"
              />
              </div>
            </div>
          )}

          {/* Service Post Content with Boxed Section */}
          <article className="prose lg:prose-xl text-center mt-6 border p-4 rounded-lg shadow-md">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </section>
      </div>
    </main>
  );
}
