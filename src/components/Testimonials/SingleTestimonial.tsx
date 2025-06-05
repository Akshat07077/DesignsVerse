import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const starIcon = (
  <svg width="14" height="12" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  return (
    <div className="p-5 h-[300px] flex flex-col bg-white dark:bg-gray-800 rounded-lg">
      {/* Stars */}
      <div className="flex mb-3">
        {[...Array(star)].map((_, i) => (
          <span key={i} className="text-yellow">{starIcon}</span>
        ))}
      </div>

      {/* Content - Scrollable if too long */}
      <div className="flex-grow overflow-y-auto mb-4 text-sm text-gray-600 dark:text-gray-300">
        <p>{content}</p>
      </div>

      {/* Author - Sticks to bottom */}
      <div className="flex items-center pt-3 border-t border-gray-100 dark:border-gray-700">
        <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
          <Image 
            src={image} 
            alt={name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <h4 className="text-sm font-medium text-black dark:text-white">{name}</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;