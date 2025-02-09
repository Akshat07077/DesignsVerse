"use client";

import { useRef } from "react";
import blogData from "@/components/Blog/blogData";
import SingleBlog from "@/components/Blog/SingleBlog";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Blog = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const boxWidth = 427; // Single Blog Card Width
  const itemsToScroll = 3; // Kitne box ek sath move karenge

  const scrollLeft = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth; // Jitna area visible hai
      sliderRef.current.scrollBy({ left: -containerWidth, behavior: "smooth" });
    }
  };
  
  const scrollRight = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: containerWidth, behavior: "smooth" });
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Explore our latest blogs and articles."
      />

      <section className="pb-[120px] pt-[10px]">
        <div className="container">
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={scrollLeft}
              className="absolute left-[-50px] z-10 top-1/2 transform -translate-y-1/2 bg-[#4563E2] text-white p-3 rounded-full shadow-lg hover:bg-red-600 hidden md:block"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollRight}
              className="absolute right-[-50px] z-10 top-1/2 transform -translate-y-1/2 bg-[#4563E2] text-white p-3 rounded-full shadow-lg hover:bg-red-600 hidden md:block"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slider Container */}
            <div
              ref={sliderRef}
              className="flex flex-wrap md:flex-nowrap overflow-x-auto gap-6 mt-10 scroll-smooth py- px-4 no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {blogData.map((blog) => (
                <div key={blog.id} className="w-full md:w-[427px] flex-shrink-0 p-4 rounded-2xl text-center transform transition-transform hover:scale-105 bg-gray-light dark:bg-gray-dark">
                  <Link href={`/blog/${blog.id}`}>
                    <SingleBlog blog={blog} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
