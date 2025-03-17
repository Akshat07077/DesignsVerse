type Author = {
  name: string;
  image: string;
  designation: string;
};

// components/Blog/blog.ts
export interface Blog {
  id: string;
  title: string;
  image: string;
  author: {
    name: string;
    image: string;
    designation: string;
  };
  publishDate: string;
  tags: string[];
  category: string;
  readTime: number;
  sections: {
    heading: string;
    content: string;
  }[];
}
