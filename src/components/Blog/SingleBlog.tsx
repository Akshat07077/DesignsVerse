import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { id, title, image, author, tags, publishDate, category, readTime } = blog;

  // Animation variants for blog cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      {/* Blog Thumbnail */}
      <Link href={`/blog/${id}`} className="relative block aspect-[16/9] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 z-10 inline-flex items-center justify-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {tags[0]}
        </span>
      </Link>

      {/* Blog Content */}
      <div className="p-6">
        {/* Category & Read Time */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-primary uppercase">{category}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{readTime} min read</span>
        </div>

        {/* Blog Title */}
        <h3 className="text-lg font-bold text-black dark:text-white mb-4">
          <Link href={`/blog/${id}`} className="hover:text-primary dark:hover:text-primary transition-colors duration-300">
            {title}
          </Link>
        </h3>

        {/* Author & Date */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative mr-3 h-8 w-8 overflow-hidden rounded-full">
              <Image src={author.image} alt={author.name} fill className="object-cover" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-dark dark:text-white">By {author.name}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{author.designation}</p>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-sm font-medium text-dark dark:text-white">Published</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{publishDate}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleBlog;
