import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | DesignsVerse",
  description: "Learn more about DesignsVerse, a leading agency specializing in website development, digital marketing, and personal branding. We create SEO-friendly, high-performance websites and result-driven strategies to help businesses and professionals succeed in the digital world."
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Welcome to DesignsVerse – Where Creativity Meets Innovation!
At DesignsVerse, we believe that design is more than just aesthetics—it's an experience, a story, and a powerful tool for transformation. Our mission is to inspire, educate, and empower designers, businesses, and creative enthusiasts with cutting-edge insights and trends."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
