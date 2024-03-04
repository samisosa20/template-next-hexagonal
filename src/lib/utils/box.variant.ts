import { cva } from "class-variance-authority";

export const boxVariants = cva("", {
  variants: {
    size: {
      xs: "h-6 px-2 py-1 text-xs",
      sm: "h-8 px-3 py-1 text-xs",
      default: "h-10 px-3 py-2 text-sm",
      icon: "h-10 w-10",
    },
    rounded: {
      none: "rounded-none",
      default: "rounded-md",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    size: "default",
    rounded: "default",
  },
});

