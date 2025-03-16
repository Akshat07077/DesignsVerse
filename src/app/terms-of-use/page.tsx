import { Metadata } from "next";
import Head from "next/head";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title: "Terms of use | DesignsVerse",
  description: "Terms of use of my company ",
  // other metadata
  
};

const PolicyPoint = ({ text }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {/* Check Icon */}
      <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
      </svg>
    </span>
    {text}
  </p>
);

const TermsOfUse = () => {
  return (
    <>
      <section id="terms" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap">
              
              {/* Left Side - Terms Content */}
              <div className="w-full px-4 lg:w-2/3 mt-[50px] mb-[100px]">
                
                {/* H1 Heading for SEO */}
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Terms of Use
                </h1>

                <SectionTitle
                  title="Understanding Our Terms"
                  paragraph="By using our services, you agree to abide by the following terms and conditions."
                  mb="44px"
                />
                
                <div>
                  <PolicyPoint text="Users must comply with all applicable laws and regulations." />
                  <PolicyPoint text="Unauthorized use of our services is strictly prohibited." />
                  <PolicyPoint text="We reserve the right to modify or terminate services at any time." />
                  <PolicyPoint text="Users are responsible for maintaining account security." />
                  <PolicyPoint text="All content and trademarks are the property of our company." />
                </div>
              </div>

              {/* Right Side - Animated Video */}
              <div className="w-full pr-25 px-4 lg:w-1/3 flex justify-center items-center">
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-lg shadow-lg"
                >
                  <source src="/video/termofuse.mp4" type="video/mp4" />
                </video>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;
