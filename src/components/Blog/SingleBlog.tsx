import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { id, title, video, thumbnail, author, tags, publishDate, category, readTime, sections } = blog;

  return (
    <div className="group relative mb-12 overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:shadow-xl dark:bg-dark dark:hover:shadow-gray-dark">
      {/* Blog Thumbnail or Video */}
      <Link href={`/blog/${id}`} className="relative block aspect-[16/9] w-full overflow-hidden">
        {video ? (
          <video src={video} autoPlay loop muted className="w-full h-full object-cover" />
        ) : (
          <Image src={thumbnail} alt={title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        )}
        <span className="absolute top-4 right-4 z-10 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
          {tags[0]}
        </span>
      </Link>

      {/* Blog Content */}
      <div className="p-6 sm:p-8">
        {/* Category & Read Time */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-primary">{category}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{readTime} min read</span>
        </div>

        {/* Blog Title */}
        <h3 className="text-2xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary">
          <Link href={`/blog/${id}`}>{title}</Link>
        </h3>

        {/* Blog Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mt-6">
            <h4 className="text-lg font-semibold text-dark dark:text-white">{section.heading}</h4>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{section.content}</p>
          </div>
        ))}

        {/* Author & Date */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative mr-4 h-10 w-10 overflow-hidden rounded-full">
              <Image src={author.image} alt={author.name} fill />
            </div>
            <div>
              <h4 className="text-sm font-medium text-dark dark:text-white">By {author.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{author.designation}</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-dark dark:text-white">Published</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{publishDate}</p>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="mt-6 flex space-x-3">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com/blog/${id}`} target="_blank" className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">
            <FaFacebookF />
          </a>
          <a href={`https://twitter.com/intent/tweet?url=https://yourwebsite.com/blog/${id}&text=${title}`} target="_blank" className="p-2 text-white bg-blue-400 rounded-full hover:bg-blue-500">
            <FaTwitter />
          </a>
          <a href={`https://www.linkedin.com/shareArticle?mini=true&url=https://yourwebsite.com/blog/${id}`} target="_blank" className="p-2 text-white bg-blue-700 rounded-full hover:bg-blue-800">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
