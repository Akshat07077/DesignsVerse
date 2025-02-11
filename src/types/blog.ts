type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: string;
  title: string;
  video?: string;
  thumbnail: string;
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
};
