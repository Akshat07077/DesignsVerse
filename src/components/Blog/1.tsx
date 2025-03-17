"use client";

import { useState, useEffect } from "react";
import blogData from "@/components/Blog/blogData";
import SingleBlog from "@/components/Blog/SingleBlog";
import Link from "next/link";
// Use type-only import with the correct path
import type { Blog } from "@/types/blog";

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const blogsPerPage: number = 12;

  // Sort blogs by publishDate in descending order (newest first)
  const sortedBlogs: Blog[] = [...blogData].sort((a: Blog, b: Blog) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const totalPages: number = sortedBlogs.length > 0 ? Math.ceil(sortedBlogs.length / blogsPerPage) : 1;

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const indexOfLastBlog: number = currentPage * blogsPerPage;
  const indexOfFirstBlog: number = indexOfLastBlog - blogsPerPage;
  const currentBlogs: Blog[] = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const nextPage = (): void => {
    setCurrentPage((prev: number) => (prev < totalPages ? prev + 1 : prev));
  };

  const prevPage = (): void => {
    setCurrentPage((prev: number) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <>
      <section className="pb-[120px] pt-[10px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {currentBlogs.map((blog: Blog) => (
              <div
                key={blog.id}
                className="w-full p-4 rounded-2xl text-center transform transition-transform hover:scale-105 bg-gray-light dark:bg-gray-dark"
              >
                <Link href={`/blog/${blog.id}`}>
                  <SingleBlog blog={blog} />
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-10 space-x-2">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1} 
              className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
            >
              
            </button>
            {Array.from({ length: totalPages }, (_, index: number) => (
              <button 
                key={index + 1} 
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300"}`}
              >
                {index + 1}
              </button>
            ))}
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages} 
              className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
            >
              
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;