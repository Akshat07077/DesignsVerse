// index.tsx
"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import { motion } from "framer-motion";

const Pricing = () => {
  const [withDigitalMarketing, setWithDigitalMarketing] = useState(false);

  const toggleHandler = () => {
    setWithDigitalMarketing(!withDigitalMarketing);
  };

  return (
    <section id="pricing" className="relative z-10 py-7 md:py-10 lg:py-10  bg-white dark:bg-[#121723]">
      <div className="container">
        <SectionTitle
          title="Custom Plans for Your Business"
          paragraph="Choose the perfect package for your digital journey with all-inclusive features and dedicated support."
          center
          width="665px"
        />

        {/* Toggle Switch */}
        <div className="mb-16 flex justify-center">
          <motion.div
            className="bg-gray-200 dark:bg-gray-700 p-1 rounded-full flex"
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={toggleHandler}
              className={`px-6 py-2 rounded-full transition-colors ${
                !withDigitalMarketing
                  ? "bg-primary text-white"
                  : "bg-transparent text-gray-600 dark:text-gray-400"
              }`}
            >
              Standard Packages
            </button>
            <button
              onClick={toggleHandler}
              className={`px-6 py-2 rounded-full transition-colors ${
                withDigitalMarketing
                  ? "bg-primary text-white"
                  : "bg-transparent text-gray-600 dark:text-gray-400"
              }`}
            >
              With Marketing
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {/* Standard Plan */}
          <div className="h-full">
            <PricingBox
              packageName="Standard"
              price={withDigitalMarketing ? "" : ""}
              duration=""
            >
              <OfferList text="Custom Website Development" status="active" />
              <OfferList text="Basic SEO Optimization" status="active" />
              <OfferList
                text={withDigitalMarketing ? "3 Months Social Media Management" : "Free Domain & Hosting (1 Year)"}
                status="active"
              />
              <OfferList text="Mobile Responsive Design" status="active" />
              <OfferList text="60 Days Technical Support" status="active" />
              <OfferList
                text={withDigitalMarketing ? "Content Marketing Strategy" : "Free Logo & Graphics Package"}
                status="active"
              />
              <OfferList text="Social Media Integration" status="active" />
            </PricingBox>
          </div>

          {/* Premium Plan - Highlighted */}
          <div className="h-full relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold z-20 shadow-md">
              Most Popular
            </div>
            <PricingBox 
              packageName="Premium" 
              price={withDigitalMarketing ? "" : ""}
              duration=""
              className="border-2 border-primary relative"
            >
              <OfferList text="All Standard Features" status="active" />
              <OfferList text="Advanced SEO + Ranking" status="active" />
              <OfferList
                text={withDigitalMarketing ? "6 Months Marketing Campaign" : "1.5 Year Hosting/Domain"}
                status="active"
              />
              <OfferList text="Tablet Responsive Design" status="active" />
              <OfferList text="180 Days Support" status="active" />
              <OfferList
                text={withDigitalMarketing ? "PPC Advertising" : "Multi-Language Support"}
                status="active"
              />
              <OfferList text="Payment Gateway Integration" status="active" />
            </PricingBox>
          </div>

          {/* Elite Plan */}
          <div className="h-full">
            <PricingBox
              packageName="Elite"
              price={withDigitalMarketing ? "" : ""}
              duration=""
            >
              <OfferList text="All Premium Features" status="active" />
              <OfferList text="Full SEO + Content Strategy" status="active" />
              <OfferList
                text={withDigitalMarketing ? "1 Year Marketing Strategy" : "2 Years Hosting/Domain"}
                status="active"
              />
              <OfferList text="All Device Responsiveness" status="active" />
              <OfferList text="365 Days Priority Support" status="active" />
              <OfferList
                text={withDigitalMarketing ? "Influencer Marketing" : "AI Chatbot Integration"}
                status="active"
              />
              <OfferList text="Dedicated Account Manager" status="active" />
            </PricingBox>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
