import { notFound } from "next/navigation";
import data from "@/data/servicedata.json";
import Link from "next/link";

// Fetch metadata for SEO
export async function generateMetadata({ params }) {
  const post = data.find((post) => post.id === params.id);
  if (!post) return { title: "Service Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function ServicePost({ params }) {
  const post = data.find((post) => post.id === params.id);
  if (!post) {
    return notFound();
  }

  return (
    <main className="mt-[140px] max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main Content */}
        <section className="w-full lg:w-2/3 border p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-left">{post.title}</h1>
          <p className="text-gray-500 text-left">
            By {post.author} on {new Date(post.publishedDate).toLocaleDateString()}
          </p>

          {/* Video Section */}
          {post.video && (
            <div className="relative mt-6 w-full rounded-lg overflow-hidden">
              <video 
                src={post.video} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          )}

          {/* Service Description */}
          <article className="prose lg:prose-xl text-left mt-6">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          
          {/* Small Image with Content Below Main Content */}
          <div className="flex flex-col md:flex-row items-center gap-6 mt-8 border p-4 rounded-lg">
            <img src={post.smallImage} alt="Small Image" className="w-60 h-80 object-cover rounded-lg" />
            <div>
              <h3 className="text-2xl font-semibold">Points</h3>
              <ul className="text-gray-600 space-y-2 mt-2">
                {post.points?.map((point, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-blue-500 mr-2">✔</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </section>

        {/* Sidebar with Services */}
        <aside className="w-full lg:w-1/3 p-5 pt-24 rounded-lg shadow-md order-2 lg:order-none">
          <h2 className="text-xl font-semibold mb-4">All Services</h2>
          <ul className="space-y-2">
            {data.map((service) => (
              <li key={service.id} className="border p-2 rounded hover:bg-gray-200 cursor-pointer transition-colors">
                <Link href={`/services/${service.id}`} className="flex justify-between items-center">
                  {service.title}
                  <span className="text-blue-500">→</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-4">
            {/* Brochure Section */}
            <div className="p-4 bg-blue-500 text-white rounded-lg">
              <h3 className="text-lg font-semibold">Download Brochure</h3>
              <button className="mt-3 w-full bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100">
                📄 DOWNLOAD PDF
              </button>
              <button className="mt-2 w-full bg-white text-blue-500 px-4 py-2 rounded hover:bg-blue-100">
                📄 DOWNLOAD DOC
              </button>
            </div>
          </div>
          
          {/* Sidebar Image */}
          <div className="mt-8 flex justify-center">
            <img src={post.sidebarImage} alt="Sidebar Image" className="w-full h-150 object-cover rounded-lg shadow-md" />
          </div>
        </aside>
      </div>
    </main>
  );
}
