import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import Service from "./services/page";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "DesignsVerse | Software Development | Digital Marketing",
  description: "DesignsVerse is an India's leading digital solutions agency offering custom website development, ERP software, digital marketing, UI/UX design, mobile app development, and branding services to enhance your online presence and drive business growth.",
  // other metadata
  
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <FAQ/> 
      <Contact />
      
      
    </>
  );
}
