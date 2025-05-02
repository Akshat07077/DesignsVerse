import Link from "next/link";

const Breadcrumb = ({
  pageName,
  description,
}: {
  pageName: string;
  description: string;
}) => {
  return (
    <section className="relative z-10 overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white dark:bg-[#121723]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 md:w-7/12 lg:w-8/12">
            <div className="max-w-[600px] mb-10 md:mb-0">
              <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-4 tracking-tight">
                {pageName}
              </h1>
              <p className="text-lg font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-5/12 lg:w-4/12">
            <nav className="flex justify-end items-center space-x-3">
              <Link
                href="/"
                className="text-base font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </Link>
              <span className="text-gray-400 dark:text-gray-500">/</span>
              <span className="text-base font-semibold text-blue-600 dark:text-blue-400">
                {pageName}
              </span>
            </nav>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <span className="absolute left-0 top-0 opacity-10">
          <svg
            width="400"
            height="300"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M400 0C400 150 200 300 0 300V0H400Z"
              fill="url(#gradient1)"
            />
            <defs>
              <linearGradient
                id="gradient1"
                x1="0"
                y1="0"
                x2="400"
                y2="300"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute right-0 bottom-0 opacity-10">
          <svg
            width="500"
            height="400"
            viewBox="0 0 500 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 400C200 400 400 200 500 0V400H0Z"
              fill="url(#gradient2)"
            />
            <defs>
              <linearGradient
                id="gradient2"
                x1="500"
                y1="0"
                x2="0"
                y2="400"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Breadcrumb;