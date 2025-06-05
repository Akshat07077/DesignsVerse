import SectionTitle from "../Common/SectionTitle";
import SingleServices from "./SingleServices";
import servicesData from "./ServicesData";

const MobileServices = () => {
    return (
        <section
          id="services"
          className="bg-[#FCFCFC] dark:bg-[#121723] py-16  "
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Our Services"
              paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
              center
            />
    
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-full justify-items-center">
    {servicesData.slice(0, 6).map((service) => (
                <div key={service.id} className="mb-10">
                  <SingleServices services={service} />
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
export default MobileServices;