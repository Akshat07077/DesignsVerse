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
        description="Stay updated with the latest trends, expert tips, and industry insights in the world of design. Our blog covers everything from UI/UX, graphic design, branding, and creative technology to design inspiration and success stories."
      />
      <BlogSection />
    </>
  );
};

export default BlogPage;
