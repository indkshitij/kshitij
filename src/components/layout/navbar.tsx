import PageWrapper from "./page-wrapper";
import Link from "next/link";
import NAV_LINK from "@/data/web-essential";
import ThemeToggler from "@/components/atoms/theme-toggler";
import Icon from "@/lib/icons";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAppContext } from "@/context/app-context";

const Navbar = () => {
  const pathname = usePathname();

  const { theme } = useAppContext();

  const logoSrc =
    theme === "dark"
      ? "/webEssential/name-logo-white.svg"
      : "/webEssential/name-logo-black.svg";

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <div className="mt-2.5 hidden md:block border-y border-line">
        <PageWrapper>
          <div className="flex justify-between py-1.5 items-center">
            <div className="flex items-center">
              <Link href="/" className="ml-3 sm:ml-5 w-auto h-auto border border-line flex items-center justify-center ">
                <Image
                  src={logoSrc}
                  alt="Logo"
                  width={100}
                  height={100}
                  priority
                // className="w-auto h-auto object-contain"
                />
              </Link>
            </div>

            <div className="flex items-center gap-6">
              {NAV_LINK.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx(
                      "relative text-sm font-medium transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.name}

                    {/* underline */}
                    <span
                      className={clsx(
                        "absolute left-0 -bottom-1 h-[2px] w-full bg-foreground transition-all duration-300",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </Link>
                );
              })}

              <div className="border-l px-2">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </PageWrapper>
      </div>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="mt-2.5 md:hidden border-t border-line">
        <PageWrapper>
          <div className="flex justify-between items-center py-2">
            {/* left spacer */}
            <div className="flex items-center">
              <div className="ml-3 sm:ml-5 w-auto h-auto border border-line flex items-center justify-center ">
                <Image
                  src={logoSrc}
                  alt="Logo"
                  width={50}
                  height={50}
                  priority
                // className="w-auto h-auto object-contain"
                />
              </div>
            </div>

            {/* right controls */}
            <div className="flex items-center gap-3">
              <ThemeToggler />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={clsx(
                      "h-9 w-9 flex items-center justify-center",
                      "transition active:scale-90 border-l",
                    )}
                  >
                    <Icon name="menu" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48 mt-2 p-2.5">
                  {NAV_LINK.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <DropdownMenuItem key={link.name} asChild>
                        <Link
                          href={link.href}
                          className={clsx(
                            "text-sm cursor-pointer",
                            isActive && "text-foreground font-semibold",
                          )}
                        >
                          {link.name}
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </PageWrapper>
      </div>
    </>
  );
};

export default Navbar;
