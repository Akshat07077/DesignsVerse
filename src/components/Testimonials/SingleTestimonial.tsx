import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const starIcon = (
  <svg width="14" height="12" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full h-full pb-4 ">
      <div className="h-full rounded-lg bg-white p-4 shadow-md dark:bg-gray-800 flex flex-col">
        <div className="mb-3 flex items-center space-x-1">
          {ratingIcons}
        </div>
        <p className="flex-grow mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {content}
        </p>
        <div className="flex items-center mt-auto">
          <div className="relative mr-3 h-[40px] w-[40px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="w-full">
            <h3 className="text-base font-semibold text-black dark:text-white">
              {name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;