"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";
// Use type-only import for Blog type
import type { Blog } from "@/types/blog";

const Blog: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Sort blogs by publishDate in descending order (newest first)
  const sortedBlogs: Blog[] = [...blogData].sort((a: Blog, b: Blog) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardsToShow: number = isMobile ? 3 : 3;
  const cardWidth: number = isMobile ? 300 : 427;
  const gap: number = isMobile ? 15 : 20;
  const maxIndex: number = Math.max(0, sortedBlogs.length - cardsToShow);
  const containerWidth: number = cardWidth * cardsToShow + gap * (cardsToShow - 1);

  const handlePrev = (): void => {
    setCurrentIndex((prev: number) => Math.max(prev - 1, 0));
  };

  const handleNext = (): void => {
    setCurrentIndex((prev: number) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section id="blog" className="bg-gray-light dark:bg-[#121723] py-16 md:py-20 lg:py-20">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Stay updated with expert tips, industry trends, and digital strategies to grow your business online. 🚀"
          center
        />

        <section className="pb-[20px] pt-[10px]">
          <div className="relative md:px-4">
            {!isMobile && sortedBlogs.length > 3 && (
              <>
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-[#4563E2] text-white p-3 rounded-full shadow-lg hover:bg-red-600 hidden md:flex items-center justify-center disabled:opacity-50 z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-[#4563E2] text-white p-3 rounded-full shadow-lg hover:bg-red-600 hidden md:flex items-center justify-center disabled:opacity-50 z-10"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <div className="overflow-hidden">
              <div 
                className="relative"
                style={isMobile ? { width: '100%' } : { maxWidth: `${containerWidth}px`, margin: "0 auto" }}
              >
                <div
                  className={`flex transition-transform duration-500 ease-in-out ${
                    isMobile ? "flex-col items-center" : "flex-row"
                  }`}
                  style={
                    isMobile
                      ? { gap: `${gap}px` }
                      : {
                          transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                          gap: `${gap}px`
                        }
                  }
                >
                  {sortedBlogs.slice(0, isMobile ? 3 : sortedBlogs.length).map((blog: Blog) => (
                    <div
                      key={blog.id}
                      className="w-full rounded-2xl text-center transform transition-transform hover:scale-105 bg-gray-light dark:bg-gray-dark flex-shrink-0 mb-4 md:mb-0"
                      style={{ 
                        width: isMobile ? '90%' : `${cardWidth}px`,
                        maxWidth: isMobile ? '300px' : `${cardWidth}px`
                      }}
                    >
                      <SingleBlog blog={blog} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <Link href="/blog">
                <button className="bg-[#4563E2] text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Blog;