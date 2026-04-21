"use client";

import PageWrapper from "./page-wrapper";
import Link from "next/link";
import NAV_LINK from "@/data/web-essential";
import ThemeToggler from "@/components/atoms/theme-toggler";
import Icon from "@/lib/icons";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <div className="mt-2.5 hidden md:block border-y border-line">
        <PageWrapper>
          <div className="flex justify-between py-0.5 items-center">
            <div className="flex">
              <div className="ml-5 min-h-10 max-h-[50%] w-20 border border-line " />
            </div>

            <div className="flex items-center gap-6">
              {NAV_LINK.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium -tracking-normal text-muted-foreground transition-[color] hover:text-foreground data-active:text-foreground"
                >
                  {link.name}
                </Link>
              ))}

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
            {/* left (empty or logo placeholder) */}
            <div className="h-6 w-6" />

            {/* right controls */}
            <div className="flex items-center gap-3">
              <ThemeToggler />

              <button
                ref={buttonRef}
                onClick={() => setOpen((prev) => !prev)}
                className={clsx(
                  "h-9 w-9  flex items-center justify-center",
                  "transition-all duration-300",
                  "active:scale-90 px-5 border-l",
                )}
              >
                <span
                  className={clsx(
                    "transition-all duration-300",
                    open ? "rotate-90 scale-90" : "rotate-0 scale-100",
                  )}
                >
                  <Icon name={open ? "close" : "menu"} />
                </span>
              </button>
            </div>
          </div>
        </PageWrapper>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        ref={menuRef}
        className={clsx(
          "fixed top-[64px] left-1/2 -translate-x-1/2 z-40 md:hidden",
          "w-[92%] max-w-sm",

          // ✨ animation (smooth)
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none",
        )}
      >
        <div className="rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {NAV_LINK.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300",

                  // ✨ stagger animation
                  open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2",
                )}
                style={{
                  transitionDelay: open ? `${i * 40}ms` : "0ms",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
