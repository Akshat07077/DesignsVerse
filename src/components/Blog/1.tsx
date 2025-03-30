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
              className="flex items-center justify-center px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span className="ml-1">Previous</span>
            </button>
            
            {Array.from({ length: totalPages }, (_, index: number) => (
              <button 
                key={index + 1} 
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentPage === index + 1 
                    ? "bg-blue-500 text-white" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages} 
              className="flex items-center justify-center px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="mr-1">Next</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;