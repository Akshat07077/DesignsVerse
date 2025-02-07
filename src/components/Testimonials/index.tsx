"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Outstanding service! They built a sleek, user-friendly website for us and boosted our online presence exponentially.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Priya Mehta",
    designation: "Founder @UIdeck",
    content:
      "Their ERP solutions streamlined our operations. We're now more efficient and productive than ever. Highly recommended!",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Rahul Desai",
    designation: "Founder @Lineicons",
    content:
      "A game-changer for our brand! Their digital marketing strategies skyrocketed our engagement and sales within weeks.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  useEffect(() => {
    gsap.to(".wave", {
      x: "-100%", // Move left
      duration: 6,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(".animated-bg", {
      opacity: 1,
      duration: 1.5,
    });

    gsap.from(".testimonial-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden bg-[#F0F2F9] dark:bg-[black]">
      

      <div className="container col-span-1 relative z-10">
        
        <SectionTitle 
          
          title="What Our Users Say"
          paragraph="Our clients trust DesignVerse for delivering exceptional websites, strategic marketing, and impactful branding. Hear what they have to say about their experience with us!"
          center
          
          
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;
