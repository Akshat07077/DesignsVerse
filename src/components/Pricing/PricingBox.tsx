const PricingBox = ({ packageName, children }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative z-10 rounded-md bg-white px-8 py-10 shadow-md dark:bg-gray-dark">
        <h4 className="text-center mb-4 text-xl font-bold text-dark dark:text-white">
          {packageName}
        </h4>
        <div className="mb-4 border-b border-gray-300"></div>

        <div>{children}</div>

        <div className="mt-6 text-center">
          <button className="w-full rounded-md bg-black py-3 text-base font-semibold text-white hover:bg-gray-800">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
