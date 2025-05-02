"use client";

import serviceData from "@/components/Services/ServicesData";
import SingleService from "@/components/Services/SingleServices";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Service = () => {
  return (
    <>
      <section className="pt-[0px]">
        <div className="container">
          <div className="relative">
            {/* Service Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 py-3 px-4">
            {serviceData.map((service) => (
                <div
                  key={service.id}
                  className=""
                >
                  <Link href={`/services/${service.id}`}>
                    <SingleService services={service} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;