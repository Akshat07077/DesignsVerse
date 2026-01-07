"use client";

import Marquee from "react-fast-marquee";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Anvi",
    designation: "AI Research Lead",
    content:
      "We switched from traditional ML tools to DesignsVerse's AI platform and the difference is remarkable! Their alternative approach to model training and deployment has significantly improved our development speed and accuracy.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Suryabhan Singh",
    designation: "Tech Director",
    content:
      "After trying multiple AI platforms, DesignsVerse's solution stands out! Their unique approach to natural language processing and model optimization has helped us achieve better results than other popular AI tools in the market.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Kapil Dave",
    designation: "AI Solutions Architect",
    content:
      "We were using standard AI analytics tools until we discovered DesignsVerse. Their alternative approach to data processing and visualization has given us insights we never thought possible. A game-changer in the AI space!",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Manav Tandon",
    designation: "Data Science Lead",
    content:
      "DesignsVerse's AI platform offers a refreshing alternative to mainstream ML frameworks. Their innovative approach to model development and deployment has streamlined our entire AI workflow. Highly recommended!",
    image: "/images/testimonials/girl-2.png",
    star: 5,
  },
  {
    id: 5,
    name: "Priyanshu Nagar",
    designation: "AI Product Manager",
    content:
      "We evaluated several AI platforms before choosing DesignsVerse to implement machine learning algorithms!",
    image: "/images/testimonials/boy-2.png",
    star: 5,
  },
  {
    id: 6,
    name: "Yash Rajwanya",
    designation: "Tech Innovation Lead",
    content:
      "DesignsVerse's computer vision solution is a breath of fresh air compared to traditional AI tools. Their alternative approach to image processing and neural networks has revolutionized our automation projects.",
    image: "/images/testimonials/girl-1.png",
    star: 5,
  },
  {
    id: 7,
    name: "Varun Singh",
    designation: "AI Solutions Expert",
    content:
      "After using various AI platforms, DesignsVerse's recommendation system stands out! Their innovative approach to user behavior analysis and prediction has outperformed other popular AI tools we've tried.",
    image: "/images/testimonials/boy-3.png",
    star: 5,
  },
  {
    id: 8,
    name: "Sanjay Kumar",
    designation: "AI Project Lead",
    content:
      "DesignsVerse offers a compelling alternative to mainstream AI platforms. Their unique approach to algorithm implementation and model optimization has significantly improved our operational efficiency.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 9,
    name: "Priyanshu Nagar",
    designation: "AI Development Manager",
    content:
      "We switched from traditional AI frameworks to DesignsVerse's platform and couldn't be happier! Their alternative approach to neural network implementation has transformed our development process.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 10,
    name: "Yash Rajwanya",
    designation: "AI Research Director",
    content:
      "DesignsVerse's NLP solution offers a fresh perspective compared to standard AI tools. Their innovative approach to language processing has helped us achieve breakthrough results in our research projects.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
  {
    id: 11,
    name: "Anvi",
    designation: "AI Solutions Architect",
    content:
      "DesignsVerse's AI development team delivered exceptional results! Their implementation of advanced machine learning algorithms and neural networks has transformed our business operations. Their technical expertise is remarkable!",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 12,
    name: "Varun Singh",
    designation: "AI Project Manager",
    content:
      "The AI solutions provided by DesignsVerse are cutting-edge! Their expertise in implementing complex machine learning models and deep learning algorithms has significantly improved our product's performance. Highly recommended!",
    image: "/images/testimonials/boy-3.png",
    star: 5,
  },
  {
    id: 13,
    name: "Rahul Sharma",
    designation: "AI Development Lead",
    content:
      "DesignsVerse's AI implementation services are outstanding! They helped us develop sophisticated machine learning models that revolutionized our data analysis capabilities. Their technical expertise is truly impressive!",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 14,
    name: "Neha Patel",
    designation: "AI Research Scientist",
    content:
      "Working with DesignsVerse on our AI research project was exceptional! Their expertise in deep learning and neural networks helped us achieve breakthrough results. Their technical knowledge and execution are remarkable!",
    image: "/images/testimonials/girl-2.png",
    star: 5,
  },
  {
    id: 15,
    name: "Amit Kumar",
    designation: "AI Solutions Expert",
    content:
      "DesignsVerse's AI development capabilities are impressive! They implemented advanced machine learning algorithms that transformed our business processes. Their technical expertise and innovative approach are outstanding!",
    image: "/images/testimonials/boy-2.png",
    star: 5,
  },
  {
    id: 16,
    name: "Priya Singh",
    designation: "AI Project Lead",
    content:
      "The AI solutions provided by DesignsVerse are revolutionary! Their implementation of sophisticated neural networks and deep learning models has significantly improved our operational efficiency. Highly recommended!",
    image: "/images/testimonials/girl-1.png",
    star: 5,
  },
  {
    id: 17,
    name: "Rajesh Verma",
    designation: "AI Development Manager",
    content:
      "DesignsVerse's AI integration services are top-notch! They helped us implement complex machine learning models that transformed our product's performance. Their technical expertise is truly remarkable!",
    image: "/images/testimonials/boy-3.png",
    star: 5,
  },
  {
    id: 18,
    name: "Sneha Gupta",
    designation: "AI Research Lead",
    content:
      "Working with DesignsVerse on our AI automation project was fantastic! Their computer vision solutions and neural network implementations are cutting-edge. Their team's technical expertise is outstanding!",
    image: "/images/testimonials/girl-2.png",
    star: 5,
  },
  {
    id: 19,
    name: "Vikram Singh",
    designation: "AI Solutions Architect",
    content:
      "DesignsVerse's AI development team is exceptional! They created sophisticated machine learning models that transformed our business operations. Their expertise in AI technologies is truly impressive!",
    image: "/images/testimonials/boy-2.png",
    star: 5,
  },
  {
    id: 20,
    name: "Meera Patel",
    designation: "AI Project Director",
    content:
      "The AI solutions provided by DesignsVerse are revolutionary! Their implementation of advanced algorithms and deep learning models has significantly improved our product's performance. Their technical capabilities are outstanding!",
    image: "/images/testimonials/girl-1.png",
    star: 5,
  },
  {
    id: 21,
    name: "Arjun Kumar",
    designation: "AI Development Lead",
    content:
      "DesignsVerse's AI integration capabilities are impressive! They helped us implement complex neural networks that transformed our data analysis processes. Their technical expertise and execution are exceptional!",
    image: "/images/testimonials/boy-3.png",
    star: 5,
  },
  {
    id: 22,
    name: "Ananya Sharma",
    designation: "AI Research Scientist",
    content:
      "Working with DesignsVerse on our AI research project was outstanding! Their expertise in machine learning and natural language processing helped us achieve breakthrough results. Their technical knowledge is remarkable!",
    image: "/images/testimonials/girl-2.png",
    star: 5,
  }
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
  {/* First Row */}
  <Marquee direction="left" speed={40} pauseOnHover className="space-x-4">
    {testimonialData.map((testimonial) => (
      <div 
        key={testimonial.id}
        className="w-[300px] mx-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0"
      >
        <SingleTestimonial testimonial={testimonial} />
      </div>
    ))}
  </Marquee>
  
  {/* Second Row */}
  <Marquee direction="right" speed={40} pauseOnHover className="space-x-4">
    {testimonialData.map((testimonial) => (
      <div 
        key={testimonial.id}
        className="w-[300px] mx-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0"
      >
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