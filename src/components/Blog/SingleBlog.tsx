import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { id, title, image, author, tags, publishDate, category, readTime } = blog;

  // Enhanced animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500"
    >
      {/* Animated Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      {/* Shine Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      </div>

      {/* Blog Thumbnail with Enhanced Overlay */}
      <Link href={`/blog/${id}`} className="relative block aspect-[16/9] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
        />
        
        {/* Premium Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Category Badge - Top Left */}
        <span className="absolute top-4 left-4 z-10 inline-flex items-center justify-center rounded-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-4 py-2 text-xs font-bold text-primary uppercase tracking-wider shadow-lg">
          {category}
        </span>

        {/* Primary Tag - Top Right */}
        <span className="absolute top-4 right-4 z-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 px-4 py-2 text-xs font-semibold text-white shadow-lg">
          {tags[0]}
        </span>

        {/* Read More Button - Appears on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <span className="px-6 py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-full text-sm font-bold text-gray-900 dark:text-white shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
            Read Article
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>

        {/* Reading Time - Bottom Right on Image */}
        <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-white">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs font-semibold">{readTime} min</span>
        </div>
      </Link>

      {/* Blog Content with Premium Spacing */}
      <div className="p-7">
        {/* Blog Title with Better Typography */}
        <Link href={`/blog/${id}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
            {title}
          </h3>
        </Link>

        {/* Decorative Divider */}
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-5 group-hover:w-24 transition-all duration-500" />

        {/* Author & Publish Info - Enhanced Layout */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          {/* Author Info */}
          <Link href={`/blog/author/${author.name.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="flex items-center gap-3 group/author">
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-gray-200 dark:ring-gray-700 group-hover/author:ring-primary dark:group-hover/author:ring-primary-light transition-all duration-300">
                <Image 
                  src={author.image} 
                  alt={author.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover/author:text-primary dark:group-hover/author:text-primary-light transition-colors">
                  {author.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {author.designation}
                </p>
              </div>
            </div>
          </Link>

          {/* Publish Date with Icon */}
          <div className="text-right flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-medium">{publishDate}</span>
            </div>
          </div>
        </div>

        {/* Additional Tags - Bottom */}
        {tags.length > 1 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            {tags.slice(1, 4).map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/10 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Premium Border Glow on Hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 dark:group-hover:border-primary-light/30 rounded-2xl transition-all duration-500 pointer-events-none" />
      
      {/* Corner Accent */}
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default SingleBlog;
