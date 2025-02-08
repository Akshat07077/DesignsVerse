"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { usePathname } from "next/navigation";
import Head from "next/head";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const baseUrl = "https://designsverse.vercel.app";
  const fullUrl = `${baseUrl}${pathname}`;

  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="DesignsVerse - The Best Designs & Inspiration" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        <meta property="og:description" content="Get the latest design inspiration, UI/UX ideas, and creative projects on DesignsVerse." />
        <meta property="og:site_name" content="DesignsVerse" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DesignsVerse - The Best Designs & Inspiration" />
        <meta name="twitter:description" content="Get the latest design inspiration, UI/UX ideas, and creative projects on DesignsVerse." />
        <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
      </Head>
      
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
