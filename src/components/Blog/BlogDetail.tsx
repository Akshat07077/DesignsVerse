import { FC } from "react";

interface BlogDetailProps {
  blog: {
    id: any;
    title: string;
    image: string;
    paragraph: string;
    author: { name: string; image: string; designation: string };
    tags: string[];
    publishDate: string;
  };
}

const BlogDetail: FC<BlogDetailProps> = ({ blog }) => {
  return (
    <section className="pb-20 pt-10">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-primary">{blog.title}</h1>
        <p className="mt-2 text-sm text-gray-600">Published on {blog.publishDate}</p>
        <img
          src={blog.image}
          alt={blog.title}
          className="mt-8 w-full rounded-lg"
        />
        <p className="mt-6 text-lg text-body-color">{blog.paragraph}</p>
        <div className="mt-6 flex items-center">
          <img
            src={blog.author.image}
            alt={blog.author.name}
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-4">
            <h4 className="text-sm font-semibold">{blog.author.name}</h4>
            <p className="text-xs text-gray-500">{blog.author.designation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
