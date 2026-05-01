  "use client";

  import { ReactNode, useState } from "react";
  import Footer from "@/components/layout/footer";
  import Navbar from "@/components/layout/navbar";
  import { motion, useScroll, useMotionValueEvent } from "framer-motion";
  import BackToTop from "@/components/atoms/back-to-top";

  type PageLayoutProps = {
    children: ReactNode;
  };

  const PageLayout = ({ children }: PageLayoutProps) => {
    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);
    const [showTop, setShowTop] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
      const previous = scrollY.getPrevious() ?? 0;

      // Navbar hide/show
      if (latest > previous && latest > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      // BackToTop visibility
      if (latest > 150) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    });

    return (
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <motion.header
          initial={{ y: 0 }}
          animate={{ y: hidden ? "-100%" : "0%" }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 60,
          }}
          className="sticky top-0 z-50 backdrop-blur bg-background/70"
        >
          <Navbar />
        </motion.header>

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>

        {/* Floating BackToTop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showTop ? 1 : 0,
            y: showTop ? 0 : 20,
            pointerEvents: showTop ? "auto" : "none",
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="fixed  bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-6 sm:right-10 z-9999"
        >
          <BackToTop />
        </motion.div>
      </div>
    );
  };

  export default PageLayout;
