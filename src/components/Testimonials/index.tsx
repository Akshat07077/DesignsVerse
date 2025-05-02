"use client";

import Marquee from "react-fast-marquee";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Anvi",
    designation: "",
    content:
      "Efficient, reliable, and professional web development service! DesignsVerse delivers top-notch websites with a seamless experience. Their dedication to quality and attention to detail is commendable.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Suryabhan Singh",
    designation: "",
    content:
      "The team is creative, responsive, and truly attentive to details! Their stunning visuals and effective designs highly recommend DesignsVerse for top-quality graphic design services!",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Kapil Dave",
    designation: "",
    content:
      "Outstanding service! They created a beautiful graphics project for us, tailored to our needs—professional, timely, and attentive to detail. Highly impressed with their creative and technical expertise!",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Manav Tandon",
    designation: "",
    content:
      "Exceptional graphic design services! The team is incredibly talented and responsive, producing visually striking and impactful designs. Their creativity and attention to detail exceeded our expectations!",
    image: "/images/testimonials/girl-2.png",
    star: 5,
  },
  {
    id: 5,
    name: "Priyanshu Nagar",
    designation: "",
    content:
      "DesignsVerse transformed my startup’s online presence with their exceptional web development skills. The team was responsive, creative, and professional. Highly recommend their services to any growing business!",
    image: "/images/testimonials/boy-2.png",
    star: 5,
  },
  {
    id: 6,
    name: "Yash Rajwanya",
    designation: "",
    content:
      "Fantastic experience working with this team! Their natural-themed designs are breathtaking, and they excel in client communication. They are responsive, attentive, and committed to delivering exceptional results!",
    image: "/images/testimonials/girl-1.png",
    star: 5,
  },
  {
    id: 7,
    name: "Varun Singh",
    designation: "",
    content:
      "DesignsVerse’s creativity and execution are unparalleled! They brought our vision to life with flawless websites and innovative approaches. Their dedication to detail and client satisfaction are superb!",
    image: "/images/testimonials/boy-3.png",
    star: 5,
  },
  {
    id: 8,
    name: "Sanjay Kumar",
    designation: "",
    content:
      "Efficient, reliable, and professional web development service! DesignsVerse delivers top-notch websites with a seamless experience. Their dedication to quality and attention to detail is commendable.",
    image: "/images/testimonials/auth-08.png",
    star: 5,
  },
  {
    id: 9,
    name: "Priyanshu Nagar",
    designation: "",
    content:
      "DesignsVerse transformed my startup’s online presence with their exceptional web development skills. The team was responsive, creative, and professional. Highly recommend their services to any growing business!",
    image: "/images/testimonials/auth-09.png",
    star: 5,
  },
  {
    id: 10,
    name: "Yash Rajwanya",
    designation: "",
    content:
      "Fantastic experience working with this team! Their natural-themed designs are breathtaking, and they excel in client communication. They are responsive, attentive, and committed to delivering exceptional results!",
    image: "/images/testimonials/auth-10.png",
    star: 5,
  },
  {
    id: 11,
    name: "Anvi",
    designation: "",
    content:
      "Excellent client service and impressive natural-themed designs! The team is attentive, responsive, and truly captures the beauty of nature in their work. Their dedication to client satisfaction is commendable!",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 12,
    name: "Varun Singh",
    designation: "",
    content:
      "Outstanding work! They created a beautiful website tailored to our vision. The team’s creativity, technical expertise, and dedication to detail are impressive. Definitely recommend!",
    image: "/images/testimonials/boy-3.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 py-10 bg-white dark:bg-[#121723]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Hear From Our Clients"
          paragraph="Discover what our satisfied clients have to say about their experiences with us."
          center
          mb="50px"
        />

        <div className="space-y-4">
          {/* First Row: Left to Right */}
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover
            direction="left"
            className="space-x-4"
          >
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className="w-[300px] h-[250px] mx-2">
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </Marquee>

          {/* Second Row: Right to Left */}
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover
            direction="right"
            className="space-x-4"
          >
            {testimonialData.map((testimonial) => (
              <div key={testimonial.id} className="w-[300px] h-[250px] mx-2">
                <SingleTestimonial testimonial={testimonial} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;