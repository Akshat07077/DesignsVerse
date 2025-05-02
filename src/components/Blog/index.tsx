"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";
// Use type-only import for Blog type
import type { Blog } from "@/types/blog";

const Blog: React.FC = () => {
  // Sort blogs by publishDate in descending order (newest first) and take only the first 3
  const sortedBlogs: Blog[] = [...blogData]
    .sort((a: Blog, b: Blog) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    )
    .slice(0, 3); // Limit to 3 blogs

  return (
    <section id="blog" className="bg-white dark:bg-[#121723] py-16 md:py-20 lg:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Stay updated with expert tips, industry trends, and digital strategies to grow your business online. 🚀"
          center
          mb="50px"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedBlogs.map((blog: Blog) => (
            <SingleBlog key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/blog">
            <button className="bg-[#4563E2] text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300">
              View More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;