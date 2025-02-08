
import { useRef } from "react";
import serviceData from "@/components/Services/ServicesData";
import SingleService from "@/components/Services/SingleServices";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Expert Website Development & Digital Marketing | DesignsVerse",
  description: "Explore our premium website development, digital marketing, and personal branding services at DesignsVerse. We craft SEO-friendly websites, powerful marketing strategies, and brand identities to elevate your online presence."
  // other metadata
};
const Service = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -460, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 460, behavior: "smooth" });
    }
  };

  return (
    <>
      <Breadcrumb
        pageName="Service Grid"
        description="Explore our latest services and offerings."
      />

      <section className="pb-[120px] pt-[0px]">
        <div className="container">
          <div className="relative">
            {/* Scroll Buttons (hidden on mobile) */}
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
              className="flex flex-wrap md:flex-nowrap overflow-x-auto gap-6 mt-10 scroll-smooth py-3 px-4 no-scrollbar"
              style={{
                scrollbarWidth: "none", // For Firefox
                msOverflowStyle: "none", // or IE and Edge
              }}
            >
              {serviceData.map((service) => (
                <div
                  key={service.id}
      
                  className="w-full md:w-[427px] flex-shrink-0 p-4 rounded-2xl text-center transform transition-transform hover:scale-105 bg-gray-light dark:bg-gray-dark"
                >
                  <Link href={`/service/${service.id}`}>
                    <SingleService services={service} />
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

export default Service;
