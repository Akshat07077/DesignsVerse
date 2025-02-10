import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Get in Touch with DesignsVerse",
  description: "Have questions or need expert solutions for website development, digital marketing, or personal branding? Contact DesignsVerse today for tailored strategies and seamless digital experiences. Let's build something amazing together!",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page "
        description="Need Help? We’re Here for You!
At DesignsVerse, we value our community and are committed to providing top-notch support. Whether you have a question, need technical assistance, or just want to share feedback, our team is ready to assist you."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
