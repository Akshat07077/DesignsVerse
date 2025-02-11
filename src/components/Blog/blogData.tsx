import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: "1",
    title: "How to Improve Website SEO in 2024",
    video: "",
    thumbnail: "/images/seo-blog.jpg",
    author: {
      name: "John Doe",
      image: "/images/blog/author-01.png",
      designation: "SEO Expert",
    },
    publishDate: "2024-02-12",
    tags: ["SEO", "Marketing"],
    category: "Digital Marketing",
    readTime: 6,
    sections: [
      {
        heading: "Introduction",
        content: "SEO is essential for driving organic traffic to your website. In this guide, we will explore key strategies to enhance your SEO performance in 2024.",
      },
      {
        heading: "Key SEO Strategies",
        content: "1. Optimize for Core Web Vitals. 2. Focus on high-quality backlinks. 3. Use long-tail keywords. 4. Improve page load speed.",
      },
      {
        heading: "Conclusion",
        content: "SEO is constantly evolving, but by implementing the right strategies, you can stay ahead in the game and improve your search engine rankings effectively.",
      },
    ],
  },
  {
    id: "2",
    title: "Why Responsive Design Matters for SEO",
    video: "",
    thumbnail: "/images/responsive-design.jpg",
    author: {
      name: "Jane Smith",
      image: "/images/blog/author-02.png",
      designation: "Web Designer",
    },
    publishDate: "2024-02-15",
    tags: ["Web Design", "SEO"],
    category: "Web Development",
    readTime: 5,
    sections: [
      {
        heading: "Introduction",
        content: "With more users accessing websites on mobile devices, having a responsive design is no longer optional—it's a necessity for SEO and user experience.",
      },
      {
        heading: "Best Practices",
        content: "1. Use flexible grid layouts. 2. Optimize images for faster loading. 3. Implement mobile-first design. 4. Improve touch-friendly navigation.",
      },
      {
        heading: "Conclusion",
        content: "A responsive website enhances SEO rankings and improves user engagement. Ensure your site adapts to all screen sizes effectively.",
      },
    ],
  },
  {
    id: "3",
    title: "Top Web Design Trends for 2024",
    video: "",
    thumbnail: "/images/web-design-trends.jpg",
    author: {
      name: "Robert Brown",
      image: "/images/blog/author-03.png",
      designation: "UI/UX Designer",
    },
    publishDate: "2024-02-18",
    tags: ["Web Design", "UI/UX"],
    category: "Design Trends",
    readTime: 7,
    sections: [
      {
        heading: "Introduction",
        content: "Web design trends evolve constantly. Staying updated ensures your website remains visually appealing and user-friendly.",
      },
      {
        heading: "Latest Trends",
        content: "1. Dark mode UI. 2. Glassmorphism effects. 3. Minimalist typography. 4. AI-powered design tools.",
      },
      {
        heading: "Conclusion",
        content: "By embracing new design trends, you can create modern and engaging websites that enhance user experience.",
      },
    ],
  },
  {
    id: "4",
    title: "The Importance of Fast-Loading Websites",
    video: "",
    thumbnail: "/images/page-speed.jpg",
    author: {
      name: "Emily Davis",
      image: "/images/blog/author-04.png",
      designation: "Performance Analyst",
    },
    publishDate: "2024-02-20",
    tags: ["Performance", "SEO"],
    category: "Web Performance",
    readTime: 6,
    sections: [
      {
        heading: "Introduction",
        content: "Page speed affects both SEO rankings and user retention. A slow website can lead to higher bounce rates and lower conversions.",
      },
      {
        heading: "How to Improve Speed",
        content: "1. Optimize images. 2. Use a content delivery network (CDN). 3. Minimize JavaScript and CSS files. 4. Enable browser caching.",
      },
      {
        heading: "Conclusion",
        content: "Improving your site's speed will enhance user experience and boost your SEO rankings significantly.",
      },
    ],
  },
  {
    id: "5",
    title: "How Digital Marketing Can Grow Your Business",
    video: "",
    thumbnail: "/images/digital-marketing.jpg",
    author: {
      name: "Michael Johnson",
      image: "/images/blog/author-05.png",
      designation: "Digital Marketer",
    },
    publishDate: "2024-02-22",
    tags: ["Marketing", "Strategy"],
    category: "Business Growth",
    readTime: 8,
    sections: [
      {
        heading: "Introduction",
        content: "In today's digital world, businesses need a strong online presence. Digital marketing strategies help attract and retain customers effectively.",
      },
      {
        heading: "Key Strategies",
        content: "1. SEO optimization. 2. Social media marketing. 3. Email campaigns. 4. Paid advertising (PPC).",
      },
      {
        heading: "Conclusion",
        content: "A well-planned digital marketing strategy will increase brand awareness, generate leads, and drive sales growth.",
      },
    ],
  },
];

export default blogData;

