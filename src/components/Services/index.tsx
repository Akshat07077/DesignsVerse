import SectionTitle from "../Common/SectionTitle";
import SingleServices from "./SingleServices";
import servicesData from "./ServicesData";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Services"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {servicesData.map((service) => (
            <div key={service.id} className="w-full">
              <SingleServices services={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
