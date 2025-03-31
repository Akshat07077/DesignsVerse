// PricingBox.tsx
"use client";

const PricingBox = ({ packageName, price, duration, className = "", children }) => {
  return (
    <div className={`w-full h-full relative z-10 rounded-xl bg-[#F0F2F9] dark:bg-gray-dark px-8 py-10 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[500px] flex flex-col ${className}`}>
      {/* Package Header with Gradient */}
      <div className="text-center mb-8">
        <div className="bg-primary/10 rounded-full inline-block px-6 py-2">
          <h4 className="text-2xl font-bold text-dark dark:text-white mb-0">
            {packageName}
          </h4>
        </div>
        <div className="flex justify-center items-baseline mt-5">
          <span className="text-4xl font-bold text-primary relative">
            {price}
            <span className="absolute -top-3 right-0 text-sm text-gray-500"></span>
          </span>
          <span className="ml-2 text-lg text-gray-600 dark:text-gray-400 font-medium">
            {duration}
          </span>
        </div>
      </div>

      {/* Decorative Divider */}
      <div className="mb-6 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300/50"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#F0F2F9] dark:bg-gray-dark px-4 text-gray-500 text-sm">
            Features
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 flex-grow">
        {children}
      </div>

      <div className="mt-8">
        <button className="w-full py-3.5 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg">
          Start with {packageName}
        </button>
      </div>
    </div>
  );
};

export default PricingBox;
