import { Skeleton } from "../..";
import { cn } from "@/src/lib/utils";

interface LabelSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LabelSkeleton({ className }: LabelSkeletonProps) {
  return <Skeleton className={cn("w-full max-w-40 h-5", className)} />;
}
