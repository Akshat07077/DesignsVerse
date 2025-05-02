import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full relative group overflow-hidden rounded-md">
      <div className="relative z-10 p-5 wow fadeInUp transition-colors duration-500" data-wow-delay=".15s">
        {/* Icon with Animation */}
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary transition-transform transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        {/* Paragraph */}
        <p className="pr-[10px] text-justify font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>

      {/* Circular Hover Effect Expanding from Bottom-Left */}
      {/* Full Block Hover Effect from Bottom-Left */}
{/* Full Block Hover Effect from Bottom-Left with Square */}
{/* Full Block Hover Effect from Bottom-Right with Square */}
{/* Full Block Hover Effect from Bottom-Right with Square and Dark Mode Support */}
      <div className="absolute bottom-0 right-0 w-0 h-0 bg-[#e2e8ff] dark:bg-[#203a97] transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full group-hover:opacity-100"></div>

    </div>
  );
};

export default SingleFeature;
