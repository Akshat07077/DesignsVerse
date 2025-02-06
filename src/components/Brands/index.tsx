import { Brand } from "@/types/brand";
import Marquee from "react-fast-marquee";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              <Marquee gradient={false} speed={50} className="space-x-12">
                {brandsData.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { /*href,*/ name, number } = brand;

  return (
    <div className="flex flex-col items-center justify-center text-center mx-20">
      <a
        // href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-20 w-full"
      >
        <div className="text-5xl font-bold">{number}</div>
        <div className="text-lg mt-1">{name}</div>
      </a>
    </div>
  );
};
