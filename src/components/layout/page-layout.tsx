import type { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PageLayout;
