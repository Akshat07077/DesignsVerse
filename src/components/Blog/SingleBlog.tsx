import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";


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
        
      </div>
    </div>
  );
};

export default SingleBlog;
