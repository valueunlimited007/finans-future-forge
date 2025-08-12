import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Outlet } from "react-router-dom";

export default function SiteLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground flex flex-col">
      <Header />
      <main id="content" role="main" className="flex-1 mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
