"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Popup from "@/components/Popup/Popup";
import WhatsAppButton from "@/components/whatsapp/page";
import { usePathname } from "next/navigation";
import React from "react";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isCaseStudy = pathname?.startsWith("/case-study");

  if (isCaseStudy) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
      <Popup/>
      <WhatsAppButton/>
    </>
  );
}


