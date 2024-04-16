"use client";
import React from "react";
import { cn } from "@/src/lib/utils";
import { Icons, Stack } from "@/src/components";


interface DropDownProps {
  open: boolean;
  handleClose: () => void;
  refMobileMenu: any;
  setIsOpen: any;
}

export function DropDownMenuMobile({
  open,
  handleClose,
  refMobileMenu,
  setIsOpen,
}: DropDownProps) {
  return (
    <div
      className={cn(
        "fixed top-0 z-20  h-full w-full",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <div
        className={cn(
          open ? "opacity-100" : "opacity-0",
          "fixed top-0 z-10  h-full w-full bg-black/80 transition-all duration-500 ease-in-out",
        )}
      />
      <div
        onClick={handleClose}
        className={cn(
          open ? "opacity-100" : "opacity-0",
          "cursor-pointer transition-all absolute left-0  duration-300 ease-in-out z-30 mt-2",
        )}
      >
        <Icons.close className="min-w-7" />
      </div>
      <Stack
        className={cn(
          open ? "left-0" : "-left-full",
          "pt-10 h-full z-20 bg-white overflow-auto w-5/6 fixed  top-0 transition-all duration-500 ease-in-out",
        )}
        justify="spaceBetween"
        ref={refMobileMenu}
      >
        
      </Stack>
    </div>
  );
}
