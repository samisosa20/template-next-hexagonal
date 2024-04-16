"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import React, { Suspense, useEffect } from "react";
import { DropDownMenuMobile } from "./dropdwonmenu.mobile.dashboard";
import { Stack } from "@/src/components";

interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const refMobileMenu = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (refMobileMenu.current !== null) {
      if (!refMobileMenu.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, [refMobileMenu]);

  return (
    <motion.header className="sticky top-0 z-20 flex items-center h-16 border-none md:h-20 bg-white">
      <div className="container flex justify-between md:justify-start items-center w-full px-4 mx-auto">
        <div className="md:hidden flex">
          <Stack
            className="w-6 h-6 p-0.5 cursor-pointer md:hidden flex"
            align="center"
            justify="center"
            spacing="2xs"
            onClick={handleOpen}
          >
            <div className="w-full bg-primary h-0.5 rounded-sm pointer-events-none"></div>
            <div className="w-full bg-primary h-0.5 rounded-sm pointer-events-none"></div>
            <div className="w-full bg-primary h-0.5 rounded-sm pointer-events-none"></div>
          </Stack>
          <DropDownMenuMobile
            handleClose={() => handleClickOutside}
            refMobileMenu={refMobileMenu}
            open={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>

        {/* Left group */}
        <Stack
          align="center"
          spacing="xl"
          className="absolute md:relative mx-auto md:m-0 left-0 right-0 w-max"
        >
          {/* Brand */}
          <Link
            className="overflow-hidden"
            href="/dashboard"
          >
            <Image
              src={"http://via.placeholder.com/150x50"}
              alt="Logo"
              width={150}
              height={50}
            />
          </Link>
        </Stack>
        {/* Right group */}
        <Stack direction="row" className="md:ml-auto">
          <Suspense fallback={<div />}>{children}</Suspense>
        </Stack>
      </div>
    </motion.header>
  );
}
