import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <div style={{ position: 'relative', width: '40px', height: '41px' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0, // This keeps the video behind the SVG icon
          }}
        >
          <source src="/video/features-icon/1.mp4" type="video/mp4" />
        </video>
        <svg
          width="40"
          height="41"
          viewBox="0 0 40 41"
          className="fill-current"
          style={{ position: 'relative', zIndex: 1 }}
        >
        </svg>
      </div>
    ),
    title: "Custom Website Development",
    paragraph:
      "We build high-performance, mobile-friendly, and SEO-optimized websites tailored to your business needs. Our responsive designs ensure a seamless user experience, fast loading speeds, and top-tier search engine rankings to drive organic traffic.",
  }
  ,
  {
    id: 2,
    icon: (
      <div style={{ position: 'relative', width: '40px', height: '40px' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0, // Keep the video behind the SVG icon
          }}
        >
          <source src="/video/features-icon/2.mp4" type="video/mp4" />
        </video>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="fill-current"
          style={{ position: 'relative', zIndex: 1 }}
        >

        </svg>
      </div>
    ),
    title: "ERP Software Solutions",
    paragraph:
      "Boost operational efficiency with our scalable ERP solutions. Automate inventory management, financial tracking, HR, and customer relationships with our AI-driven enterprise resource planning (ERP) software, customized for your business needs.",
  }
  ,
  {
    id: 3,
    icon: (
      <div style={{ position: 'relative', width: '40px', height: '40px' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0, // Keep the video behind the SVG icon
          }}
        >
          <source src="/video/features-icon/3.mp4" type="video/mp4" />
        </video>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="fill-current"
          style={{ position: 'relative', zIndex: 1 }}
        >
        </svg>
      </div>
    ),
    title: "Digital Marketing & SEO",
    paragraph:
      "Increase brand visibility and generate high-quality leads with our data-driven digital marketing services. We specialize in SEO, content marketing, PPC ads, social media management, and conversion rate optimization (CRO) to grow your online presence.",
  },
  
  {
    id: 4,
    icon: (
      <div style={{ position: 'relative', width: '40px', height: '40px' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0, // Keep the video behind the SVG icon
          }}
        >
          <source src="/video/features-icon/4.mp4" type="video/mp4" />
        </video>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="fill-current"
          style={{ position: 'relative', zIndex: 1 }}
        >
          
        </svg>
      </div>
    ),
    title: "UI/UX Design & Prototyping",
    paragraph:
      "Deliver exceptional user experiences with our custom UI/UX design services. We create intuitive, user-centric interfaces that improve engagement, enhance brand perception, and maximize conversions across web and mobile platforms.",
  },
  
  {
    id: 5,
    icon: (
      <div style={{ position: 'relative', width: '40px', height: '40px' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0, // Keep the video behind the SVG icon
          }}
        >
          <source src="/video/features-icon/5.mp4" type="video/mp4" />
        </video>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="fill-current"
          style={{ position: 'relative', zIndex: 1 }}
        >
          
        </svg>
      </div>
    ),
    title: "Mobile App Development",
    paragraph:
      "Develop feature-rich, user-friendly mobile apps for iOS and Android. Our high-performance apps are designed for seamless navigation, superior UX, and optimized performance to boost customer engagement and retention.",
  },
  {
    id: 6,
    icon: (
      <div style={{ position: 'relative', width: '40px', height: '40px' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0, // Keep the video behind the SVG icon
          }}
        >
          <source src="/video/features-icon/6.mp4" type="video/mp4" />
        </video>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="fill-current"
          style={{ position: 'relative', zIndex: 1 }}
        >
          
        </svg>
      </div>
    ),
    title: "Branding & Graphic Design",
    paragraph:
      "Strengthen your brand identity with our professional branding and graphic design services. We create eye-catching logos, marketing materials, and visual content that resonate with your audience and set your brand apart from the competition.",
  }
]
export default featuresData;