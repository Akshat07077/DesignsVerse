import BlogSection from "@/components/Blog/1";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | DesignsVerse",
  description:
    "Explore our latest blogs and articles on website development, digital marketing, and personal branding. Stay updated with our insightful content and industry trends."
};

const BlogPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Page"
        description="Explore our latest blogs and articles."
      />
      <BlogSection />
    </>
  );
};

export default BlogPage;
