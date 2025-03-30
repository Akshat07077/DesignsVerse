"use client";
import { useEffect, useRef } from "react";
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
      "Outstanding service! DesignsVerse built a sleek, user-friendly website for us and boosted our online presence exponentially.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Priya Mehta",
    designation: "Founder @UIdeck",
    content:
      "DesignsVerse streamlined our operations with ERP solutions. We're now more efficient and productive than ever. Highly recommended!",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Rahul Desai",
    designation: "Founder @Lineicons",
    content:
      "A game-changer for our brand! DesignsVerse's digital marketing strategies skyrocketed our engagement and sales within weeks.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Ananya Roy",
    designation: "CEO @CreativeHub",
    content:
      "They crafted an incredible website! DesignsVerse delivered an elegant, user-friendly design that perfectly matches our brand identity.",
    image: "/images/testimonials/auth-04.png",
    star: 5,
  },
  {
    id: 5,
    name: "Kunal Sharma",
    designation: "Manager @TechFlow",
    content:
      "DesignsVerse optimized our website for speed and SEO, and our organic traffic has significantly increased in just a few months!",
    image: "/images/testimonials/auth-05.png",
    star: 5,
  },
  {
    id: 6,
    name: "Neha Kapoor",
    designation: "Founder @BrandBoost",
    content:
      "The branding strategy by DesignsVerse was outstanding! Our brand visibility improved, and engagement levels soared instantly.",
    image: "/images/testimonials/auth-06.png",
    star: 5,
  },
  {
    id: 7,
    name: "Vikram Singh",
    designation: "CTO @InnoTech",
    content:
      "We trusted DesignsVerse for our web app, and they exceeded expectations! Robust, secure, and beautifully designed!",
    image: "/images/testimonials/auth-07.png",
    star: 5,
  },
  {
    id: 8,
    name: "Sanya Verma",
    designation: "Co-Founder @PixelCraft",
    content:
      "Their UX/UI design expertise is unmatched. DesignsVerse transformed our website into an engaging experience for users.",
    image: "/images/testimonials/auth-08.png",
    star: 5,
  },
  {
    id: 9,
    name: "Amit Patel",
    designation: "Marketing Head @BizGrow",
    content:
      "Our leads and conversions doubled after partnering with DesignsVerse. Their marketing strategies are next level!",
    image: "/images/testimonials/auth-09.png",
    star: 5,
  },
  {
    id: 10,
    name: "Riya Malhotra",
    designation: "CEO @WebNest",
    content:
      "DesignsVerse helped us scale our business with a top-notch eCommerce site. Performance and user experience are outstanding!",
    image: "/images/testimonials/auth-10.png",
    star: 5,
  },
];

const Testimonials = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.to(sliderRef.current, {
        x: "-40%", // Move left slowly
        duration: 15, // Default duration for desktop
        repeat: -1,
        ease: "linear",
      });

      timelineRef.current = tl; // Store timeline reference

      // Mobile-specific adjustments
      gsap.matchMedia().add("(max-width: 768px)", () => {
        tl.duration(); // Faster scrolling on mobile
      });

      // Pause animation on hover
      const slider = sliderRef.current;
      if (slider) {
        slider.addEventListener("mouseenter", () => tl.pause());
        slider.addEventListener("mouseleave", () => tl.play());
      }

      return () => {
        if (slider) {
          slider.removeEventListener("mouseenter", () => tl.pause());
          slider.removeEventListener("mouseleave", () => tl.play());
        }
      };
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);


  return (
    <section className="relative z-10 overflow-hidden bg-[#F0F2F9] py-16 dark:bg-[black] md:py-20 lg:py-28">
      <div className="container relative z-10">
        <SectionTitle
          title="What Our Users Say"
          paragraph="Our clients trust DesignVerse for delivering exceptional websites, strategic marketing, and impactful branding. Hear what they have to say about their experience with us!"
          center
        />

        <div className="relative overflow-hidden">
          <div className="flex w-[200%] space-x-8" ref={sliderRef}>
            {[...testimonialData, ...testimonialData].map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-item w-[calc(100%/3)] min-w-[300px] h-[350px]" // Added fixed height
              >
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;