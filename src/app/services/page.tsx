import serviceData from "@/components/Services/ServicesData"; // Changed blogData to serviceData
import SingleService from "@/components/Services/SingleServices"; // Changed SingleBlog to SingleService
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Service = () => { // Changed Blog to Service
  return (
    <>
      <Breadcrumb
        pageName="Service Grid" // Changed Blog Grid to Service Grid
        description="Explore our latest services and offerings." // Updated description
      />

      <section className="pb-[120px] pt-[10px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {serviceData.map((service) => ( // Changed blog to service
              <div key={service.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <Link href={`/service/${service.id}`}> 
                  <SingleService services={service} /> 
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service; // Changed Blog to Service
