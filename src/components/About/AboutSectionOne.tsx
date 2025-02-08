"use client";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-3 flex items-center text-base font-medium text-body-color md:text-lg">
      <span className="mr-3 flex h-[24px] w-[24px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary md:h-[30px] md:w-[30px]">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-12 md:pt-16 lg:pt-20">
      <div className="container mx-auto px-4">
        <div className="border-b border-body-color/[.15] pb-12 dark:border-white/[.15] md:pb-16 lg:pb-20">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <SectionTitle
                title="Crafted for Personal Brand, and Small Business Sites."
                paragraph="At DesignsVerse, we focus on empowering startups, businesses, and personal brands with cutting-edge digital solutions, ensuring a strong online presence and sustainable growth."
                mb="32px"
              />

              <div className="mb-8 max-w-[570px] md:mb-0" data-wow-delay=".15s">
                <div className="flex flex-wrap">
                  <div className="w-1/2 px-2">
                    <List text="Premium Quality" />
                    <List text="Tailwind CSS" />
                    <List text="Lifetime Value" />
                  </div>
                  <div className="w-1/2 px-2">
                    <List text="SEO Optimized" />
                    <List text="Comprehensive Support" />
                    <List text="Developer Friendly" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="relative mx-auto aspect-[25/24] max-w-[450px] md:max-w-[500px] lg:max-w-[550px]"
              >
                <video  src="video/s1.mp4" width="100%" autoPlay loop muted className="rounded-lg shadow-lg w-full h-[500px]" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
