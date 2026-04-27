"use client";

import { ReactNode, useEffect, useState } from "react";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`sticky top-0 z-50 backdrop-blur bg-background/70 transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </header>

      <main className="flex-1">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PageLayout;
