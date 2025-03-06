"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const blogsToShow = 3;
  const cardWidth = 427; // Width of each blog card
  const gap = 8; // Gap between cards
  const maxIndex = Math.max(0, blogData.length - blogsToShow);
  const containerWidth = cardWidth * blogsToShow + gap * (blogsToShow - 1); // Width for 3 cards + gaps

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - blogsToShow, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + blogsToShow, maxIndex));
  };

  return (
    <section id="blog" className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Stay updated with expert tips, industry trends, and digital strategies to grow your business online. 🚀"
          center
        />

        <section className="pb-[20px] pt-[10px]">
          <div className="relative px-2 md:px-4">
            {/* Scroll Buttons */}
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute left-0 md:-left-2 top-1/2 -translate-y-1/2 bg-[#4563E2] text-white p-3 rounded-full shadow-lg hover:bg-red-600 hidden md:flex items-center justify-center disabled:opacity-50 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="absolute right-0 md:-right-2 top-1/2 -translate-y-1/2 bg-[#4563E2] text-white p-3 rounded-full shadow-lg hover:bg-red-600 hidden md:flex items-center justify-center disabled:opacity-50 z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Blog Cards Container */}
            <div className="overflow-hidden">
              <div 
                className="relative"
                style={{ 
                  width: `${containerWidth}px`, // Fixed width for 3 cards
                  margin: '0 auto' // Center the container
                }}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
                    width: `${blogData.length * (cardWidth + gap)}px`
                  }}
                >
                  {blogData.map((blog) => (
                    <div
                      key={blog.id}
                      className="w-full max-w-[427px] mx-[4px] p-4 rounded-2xl text-center transform transition-transform hover:scale-105 bg-gray-light dark:bg-gray-dark flex-shrink-0" // mx-[4px] for half of gap
                    >
                      <SingleBlog blog={blog} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* View More Button */}
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