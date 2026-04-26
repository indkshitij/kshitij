"use client";

import PageWrapper from "./page-wrapper";
import Link from "next/link";
import NAV_LINK from "@/data/web-essential";
import ThemeToggler from "@/components/atoms/theme-toggler";
import Icon from "@/lib/icons";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

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
            {/* left spacer */}
            <div className="h-6 w-6" />

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
                  className="w-48 mt-2 p-2.5"
                >
                  {NAV_LINK.map((link) => (
                    <DropdownMenuItem key={link.name} asChild>
                      <Link href={link.href} className="text-sm cursor-pointer">
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
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
