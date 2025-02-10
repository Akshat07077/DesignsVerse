"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [withDigitalMarketing, setWithDigitalMarketing] = useState(false);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="We offer affordable, value-packed solutions tailored to your business needs—no hidden fees, just great results!"
          center
          width="665px"
        />

        {/* Toggle Button */}
        <div className="flex justify-center mb-8">
          <div className="relative flex items-center bg-gray-300 rounded-full p-1 cursor-pointer" onClick={() => setWithDigitalMarketing(!withDigitalMarketing)}>
            <div className={`absolute top-0 left-0 w-1/2 h-full bg-blue-500 rounded-full transition-all ${withDigitalMarketing ? "translate-x-full" : "translate-x-0"}`} />
            <span className={`w-1/2 text-center font-semibold z-10 ${!withDigitalMarketing ? "text-white" : "text-black"}`}>Without Digital Marketing</span>
            <span className={`w-1/2 text-center font-semibold z-10 ${withDigitalMarketing ? "text-white" : "text-black"}`}>With Digital Marketing</span>
          </div>
        </div>

        {/* Pricing Boxes */}
        <div className=" rounded-xl grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {!withDigitalMarketing ? (
            // Without Digital Marketing
            <>
              <PricingBox packageName="Standard">
                <OfferList text="Website Development" status="active" />
                <OfferList text="SEO Optimization" status="active" />
                <OfferList text="Multi-Language Support" status="active" />
                <OfferList text="90 Days Technical Support" status="active" />
                <OfferList text="Social Media Management" status="inactive" />
                <OfferList text="Product Selling Management" status="inactive" />
              </PricingBox>

              <PricingBox packageName="Professional">
                <OfferList text="All Standard Features" status="active" />
                <OfferList text="Advanced SEO Strategies" status="active" />
                <OfferList text="24/7 Support" status="active" />
                <OfferList text="Custom Branding" status="active" />
              </PricingBox>

              <PricingBox packageName="Premium">
                <OfferList text="All Professional Features" status="active" />
                <OfferList text="Dedicated Manager" status="active" />
                <OfferList text="Social Media Growth" status="active" />
                <OfferList text="Ad Campaign Management" status="active" />
              </PricingBox>
            </>
          ) : (
            // With Digital Marketing
            <>
              <PricingBox packageName="Standard Digital">
                <OfferList text="Website Development" status="active" />
                <OfferList text="SEO Optimization" status="active" />
                <OfferList text="Multi-Language Support" status="active" />
                <OfferList text="90 Days Technical Support" status="active" />
                <OfferList text="Social Media Management" status="active" />
                <OfferList text="Product Selling Management" status="active" />
                <OfferList text="Digital Marketing" status="active" />
              </PricingBox>

              <PricingBox packageName="Professional Digital">
                <OfferList text="All Standard Features" status="active" />
                <OfferList text="Advanced SEO Strategies" status="active" />
                <OfferList text="24/7 Support" status="active" />
                <OfferList text="Custom Branding" status="active" />
                <OfferList text="Content Marketing" status="active" />
              </PricingBox>

              <PricingBox packageName="Premium Digital">
                <OfferList text="All Professional Features" status="active" />
                <OfferList text="Dedicated Manager" status="active" />
                <OfferList text="Social Media Growth" status="active" />
                <OfferList text="Ad Campaign Management" status="active" />
                <OfferList text="Conversion Rate Optimization" status="active" />
              </PricingBox>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
