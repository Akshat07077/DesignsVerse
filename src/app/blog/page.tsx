import blogData from "@/components/Blog/blogData";
import SingleBlog from "@/components/Blog/SingleBlog";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Insights on Web Development, Digital Marketing & Branding |",
  description: "Stay updated with the latest trends in website development, digital marketing, and personal branding. Read expert insights, industry tips, and strategies from DesignsVerse to enhance your online presence and business growth. "
  // other metadata
};
const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description="Explore our latest blogs and articles."
      />

      <section className="pb-[120px] pt-[10px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div key={blog.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <Link href={`/blog/${blog.id}`}>
                  <SingleBlog blog={blog} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
