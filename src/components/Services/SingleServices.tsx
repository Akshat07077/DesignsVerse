import { Services } from "@/types/services";
import Image from "next/image";
import Link from "next/link";

const SingleServices = ({ services }: { services: Services }) => {
  const { id, title, image, paragraph } = services;

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl dark:bg-gray-800  transition-all duration-300 flex flex-col max-w-sm w-full transform hover:-translate-y-1"
    >
      {/* Image Section */}
      <Link href={`/services/${id}`} className="block w-full relative">
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={500}
            height={224}
            priority
            className="rounded-t-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-3">
          <Link href={`/services/${id}`}>{title}</Link>
        </h3>

        {/* Paragraph */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 flex-grow">
          <Link href={`/services/${id}`} className="no-underline">
            {paragraph}
          </Link>
        </p>

        {/* View More Button */}
        <div className="flex justify-end mt-auto">
          <Link
            href={`/services/${id}`}
            className="inline-flex items-center text-primary font-medium text-sm hover:text-primary-dark transition-colors duration-200 group"
          >
            View More
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServices;