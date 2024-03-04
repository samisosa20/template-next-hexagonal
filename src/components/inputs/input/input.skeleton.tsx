import { VariantProps } from "class-variance-authority";

import { Skeleton } from "../..";
import { cn, boxVariants } from "@/src/lib/utils";

interface InputSkeletonProps
  extends Pick<React.HTMLAttributes<HTMLInputElement>, "className">,
    VariantProps<typeof boxVariants> {}

export function InputSkeleton({ className, size }: InputSkeletonProps) {
  return (
    <Skeleton
      className={cn(boxVariants({ size }), "w-full max-w-64", className)}
    />
  );
}
