import PlaneGridWrapper from "./PlaneGridWrapper";
import Link from "next/link";
import { navLinks } from "@/data/webEssential";
import ThemeToggler from "@/components/ui/ThemeToggler";

const Navbar = () => {
  return (
    <div className="pt-2">
      <PlaneGridWrapper padding="px-2">
        <>
          <div className="flex justify-between py-2">
            <div className="flex">
              <PlaneGridWrapper extraBorder={true} extraBorderStyle="dotted">
                <div></div>
              </PlaneGridWrapper>
            </div>
            <div className="flex gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-[color] hover:text-foreground data-active:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
              <ThemeToggler/>
            </div>
          </div>
        </>
      </PlaneGridWrapper>
    </div>
  );
};

export default Navbar;
