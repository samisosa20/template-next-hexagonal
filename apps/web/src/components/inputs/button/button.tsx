import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/src/lib/utils";

import defaultConfig from "@/defaultConfig.json"

type Variants = "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "link" | null
type Rounded = "none" | "sm" | "md" | "lg" | "full" | null
type Size = "small" | "medium" | "large" | null

const buttonVariants = cva(
  "flex gap-2 items-center w-max ",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 hover:bg-violet-400",
        secondary: "bg-transparent border border-neutral-500 hover:border-neutral-400 text-neutral-500 hover:text-neutral-400",
        success: "bg-green-500 hover:bg-green-400",
        warning: "bg-amber-500 hover:bg-amber-400",
        danger: "bg-red-500 hover:bg-red-400",
        info: "bg-cyan-500 hover:bg-cyan-400",
        link: "bg-transparent text-sky-500 hover:text-sky-400",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded",
        md: "rounded-lg",
        lg: "rounded-xl",
        full: "rounded-full",
      },
      size: {
        small: "px-2 py-2 font-medium text-sm",
        medium: "px-4 py-3 font-semibold text-base",
        large: "px-4 py-3 font-bold text-lg",
      }
    },
    defaultVariants: {
      variant: defaultConfig.button.variant as Variants,
      rounded:  defaultConfig.button.rounded as Rounded,
      size:  defaultConfig.button.size as Size,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    children?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, rounded, size, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({ variant, className, rounded, size }),
          props.disabled &&
            "bg-muted text-neutral-200 pointer-events-none",
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
