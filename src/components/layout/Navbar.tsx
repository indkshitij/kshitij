"use client";

import PlaneGridWrapper from "./PlaneGridWrapper";
import Link from "next/link";
import { navLinks } from "@/data/webEssential";
import ThemeToggler from "@/components/atoms/ThemeToggler";
import Icon from "@/lib/icons";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 👉 close on outside click
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
      <div className="pt-2 hidden md:block">
        <PlaneGridWrapper padding="px-2">
          <div className="flex justify-between py-2 items-center">
            <div className="flex">
              <PlaneGridWrapper extraBorder extraBorderStyle="dotted">
                <div className="h-6 w-6" />
              </PlaneGridWrapper>
            </div>

            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}

              <ThemeToggler size="sm" />
            </div>
          </div>
        </PlaneGridWrapper>
      </div>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden pt-2">
        <PlaneGridWrapper padding="px-2">
          <div className="flex justify-between items-center py-2">
            {/* left (empty or logo placeholder) */}
            <div className="h-6 w-6" />

            {/* right controls */}
            <div className="flex items-center gap-3">
              <ThemeToggler size="sm" />

              <button
                ref={buttonRef}
                onClick={() => setOpen((prev) => !prev)}
                className={clsx(
                  "h-9 w-9 flex items-center justify-center",
                  "rounded-md border border-neutral-200 dark:border-neutral-800",
                  "bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur",
                  "transition-all duration-300",
                  "active:scale-90"
                )}
              >
                <span
                  className={clsx(
                    "transition-all duration-300",
                    open ? "rotate-90 scale-90" : "rotate-0 scale-100"
                  )}
                >
                  <Icon name={open ? "close" : "menu"} />
                </span>
              </button>
            </div>
          </div>
        </PlaneGridWrapper>
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
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        )}
      >
        <div className="rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300",

                  // ✨ stagger animation
                  open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
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