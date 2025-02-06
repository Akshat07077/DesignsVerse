import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path opacity="0.5" d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"/>
      </svg>
    ),
    title: "Custom Website Development",
    paragraph:
      "We build high-performance, mobile-friendly, and SEO-optimized websites tailored to your business needs. Our responsive designs ensure a seamless user experience, fast loading speeds, and top-tier search engine rankings to drive organic traffic.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"/>
      </svg>
    ),
    title: "ERP Software Solutions",
    paragraph:
      "Boost operational efficiency with our scalable ERP solutions. Automate inventory management, financial tracking, HR, and customer relationships with our AI-driven enterprise resource planning (ERP) software, customized for your business needs.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path opacity="0.5" d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"/>
      </svg>
    ),
    title: "Digital Marketing & SEO",
    paragraph:
      "Increase brand visibility and generate high-quality leads with our data-driven digital marketing services. We specialize in SEO, content marketing, PPC ads, social media management, and conversion rate optimization (CRO) to grow your online presence.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 5C25.52 5 30 9.48 30 15C30 20.52 25.52 25 20 25C14.48 25 10 20.52 10 15C10 9.48 14.48 5 20 5ZM20 0C9 0 0 9 0 20C0 31 9 40 20 40C31 40 40 31 40 20C40 9 31 0 20 0Z"/>
      </svg>
    ),
    title: "UI/UX Design & Prototyping",
    paragraph:
      "Deliver exceptional user experiences with our custom UI/UX design services. We create intuitive, user-centric interfaces that improve engagement, enhance brand perception, and maximize conversions across web and mobile platforms.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M10 15H30V25H10V15ZM35 10H5C3.34 10 2 11.34 2 13V27C2 28.66 3.34 30 5 30H35C36.66 30 38 28.66 38 27V13C38 11.34 36.66 10 35 10Z"/>
      </svg>
    ),
    title: "Mobile App Development",
    paragraph:
      "Develop feature-rich, user-friendly mobile apps for iOS and Android. Our high-performance apps are designed for seamless navigation, superior UX, and optimized performance to boost customer engagement and retention.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 3C10.06 3 2 11.06 2 21C2 30.94 10.06 39 20 39C29.94 39 38 30.94 38 21C38 11.06 29.94 3 20 3ZM20 35C12.28 35 6 28.72 6 21C6 13.28 12.28 7 20 7C27.72 7 34 13.28 34 21C34 28.72 27.72 35 20 35Z"/>
      </svg>
    ),
    title: "Branding & Graphic Design",
    paragraph:
      "Strengthen your brand identity with our professional branding and graphic design services. We create eye-catching logos, marketing materials, and visual content that resonate with your audience and set your brand apart from the competition.",
  },
];
export default featuresData;
