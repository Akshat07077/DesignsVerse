import ServiceSection from "@/components/Services/1";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | DesignsVerse",
  description:
    "Explore our premium website development, digital marketing, and personal branding services at DesignsVerse. We craft SEO-friendly websites, powerful marketing strategies, and brand identities to elevate your online presence."
};

const ServicePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Services Page"
        description="At DesignsVerse, we offer a wide range of design services to bring your ideas to life. Whether you're looking for Website Development,ERP SOlution, UI/UX design, or marketing materials, our expert team is here to craft visually stunning and strategically effective designs."
      />
      <ServiceSection />
    </>
  );
};

export default ServicePage;
