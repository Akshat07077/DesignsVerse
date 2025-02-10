import { Services } from "@/types/services";
import Image from "next/image";
import Link from "next/link";

const SingleServices = ({ services }: { services: Services }) => {
  const { id, title, image, paragraph } = services;
  return (
    <div className="group relative overflow-hidden rounded-md bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark mb-8">
      
      {/* Image Link */}
      <Link href={`/services/${id}`} className="relative block w-full">
        <div className="relative w-full h-[200px] md:h-[250px] lg:h-[280px] overflow-hidden">
          <Image
            src={image}
            alt="image"
            width={500}
            height={300}
            priority
            className="rounded-md object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        {/* Title Link */}
        <h3 className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
          <Link href={`/services/${id}`} >
            {title}
          </Link>
        </h3>

        {/* Paragraph - No Link (Now Clicking Does Nothing) */}
        <p className="no-underline mb-6 border-b  text-justify border-body-color border-opacity-10 pb-6  font-medium text-body-color dark:border-white dark:border-opacity-10"> <Link  href={`/services/${id}`} className="">
          {paragraph}
          </Link>
        </p>

        {/* View More Link */}
        <div className="flex justify-end">
          <Link href={`/services/${id}`} className="text-primary font-semibold hover:underline">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleServices;
