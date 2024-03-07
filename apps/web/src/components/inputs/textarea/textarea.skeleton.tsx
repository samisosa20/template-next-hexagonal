import { Skeleton } from "../..";
import { cn } from "@/src/lib/utils";

interface TextareaSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function TextareaSkeleton({ className }: TextareaSkeletonProps) {
  return <Skeleton className={cn("w-full h-20", className)} />;
}
