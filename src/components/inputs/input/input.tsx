import * as React from "react";

import { cn } from "@/src/lib/utils";

export interface InputProps
extends React.InputHTMLAttributes<HTMLInputElement> {}


<input type="text" size={2} />;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-input bg-transparent ring-offset-transparent file:border-0 file:bg-transparent text-sm text-neutral-700 file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
