import { Services } from "@/types/services";
import Image from "next/image";
import Link from "next/link";

const SingleServices = ({ services }: { services: Services }) => {
  const { id, title, image, paragraph } = services;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.15)] transition-all duration-500 flex flex-col max-w-sm w-full transform hover:-translate-y-2 mb-14 border border-gray-100 dark:border-gray-800">
      
      {/* Image Section with Enhanced Overlay */}
      <Link href={`/services/${id}`} className="block w-full relative">
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={500}
            height={256}
            priority
            className="rounded-t-2xl object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
          />
          
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Premium Badge - Optional */}
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Explore
          </div>
        </div>
      </Link>

      {/* Content Section with Premium Spacing */}
      <div className="p-7 flex flex-col flex-grow">
        {/* Title with Premium Typography */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight tracking-tight">
          <Link 
            href={`/services/${id}`}
            className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text group-hover:text-transparent transition-all duration-300"
          >
            {title}
          </Link>
        </h3>

        {/* Decorative Divider */}
        <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-4 group-hover:w-20 transition-all duration-500" />

        {/* Paragraph with Better Spacing */}
        <p className="text-base text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 flex-grow leading-relaxed">
          <Link href={`/services/${id}`} className="no-underline">
            {paragraph}
          </Link>
        </p>

        {/* Enhanced CTA Button */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
          <Link
            href={`/services/${id}`}
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn"
          >
            <span className="relative">
              View Details
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/btn:w-full transition-all duration-300" />
            </span>
            <svg
              className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Premium Corner Accent - Optional */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default SingleServices;
