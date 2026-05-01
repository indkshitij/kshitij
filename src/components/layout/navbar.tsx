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
import NameLogo from "@/components/atoms/name-logo";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <div className="mt-2.5 hidden md:block border-y border-line">
        <PageWrapper>
          <div className="flex justify-between py-2 items-center">
            <div className="flex items-center">
              <Link href="/" className="ml-4">
                <NameLogo width={45} height={45} priority />
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
      <div className="mt-2.5 md:hidden border-y border-line">
        <PageWrapper>
          <div className="flex justify-between items-center py-2">
            {/* left spacer */}
            <Link href={"/"} className="flex items-center ml-2">
              <NameLogo width={35} height={35} />
            </Link>

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

                <DropdownMenuContent
                  align="end"
                  className="w-64 mt-2 rounded-lg bg-popover p-3 shadow-xl animate-in fade-in zoom-in-95"
                >
                  <div className="flex flex-col gap-1.5">
                    {NAV_LINK.map((link) => {
                      const isActive = pathname === link.href;

                      return (
                        <DropdownMenuItem key={link.name} asChild>
                          <Link
                            href={link.href}
                            className={clsx(
                              "flex items-center rounded-lg px-4 py-3 text-sm transition-all duration-150",
                              "hover:bg-accent hover:text-accent-foreground",
                              "focus:bg-accent focus:text-accent-foreground outline-none",
                              isActive
                                ? "bg-accent text-foreground font-medium"
                                : "text-muted-foreground",
                            )}
                          >
                            {link.name}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </div>
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
