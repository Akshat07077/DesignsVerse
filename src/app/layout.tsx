"use client";
import { siteMetadata } from "@/types/metadata";
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
      <Head>
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:image" content={`${baseUrl}${siteMetadata.image}`} />
      </Head>

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
