import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    image: "/images/blog/blog-01.jpg",
    paragraph: "loud computing has revolutionized data storage...",
    tags: ["AI"],
    publishDate: "2024-12-01",
    author: {
      name: "John Doe",
      designation: "Tech Writer",
      image: "/images/blog/author-01.png",
    },
  },
  {
    id: 2,
    title: "The Rise of Cloud Computing",
    image: "/images/blog/blog-02.jpg",
    paragraph: "Cloud computing has revolutionized data storage...",
    tags: ["Cloud"],
    publishDate: "2024-11-15",
    author: {
      name: "Jane Smith",
      designation: "Cloud Expert",
      image: "/images/blog/author-02.png",
    },
  },
  {
    id: 3,
    title: "The Rise of Cloud Computing",
    image: "/images/blog/blog-03.jpg",
    paragraph: "Cloud computing has revolutionized data storage...",
    tags: ["Cloud"],
    publishDate: "2024-11-15",
    author: {
      name: "Jane Smith",
      designation: "Cloud Expert",
      image: "/images/blog/author-03.png",
    },
  },
];

export default blogData;
