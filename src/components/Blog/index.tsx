"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  const sliderRef = useRef(null);

  const scrollAmount = 3 * 300; // Adjusted for 3 items per scroll

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="blog" className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Stay updated with expert tips, industry trends, and digital strategies to grow your business online. 🚀"
          center
        />

        {/* Scroll Buttons */}
        <section className="pb-[120px] pt-[10px]">
        <div className="container"> 
        <div className="relative">
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
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
      </div>
    </section>
  );
};

export default Blog;