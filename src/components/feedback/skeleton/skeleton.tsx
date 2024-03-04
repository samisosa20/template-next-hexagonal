import { cn } from "@/src/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <span
      aria-live="polite"
      aria-busy="true"
      className={cn(className, "inline-block")}
    >
      <span className="inline-flex w-full leading-none bg-gray-300 rounded-md select-none animate-pulse min-h-4 h-full" />
      <br />
    </span>
  );
}

const SVGSkeleton = ({ className }: React.HTMLAttributes<SVGElement>) => (
  <svg className={cn("animate-pulse rounded bg-gray-300", className)} />
);

export { SVGSkeleton, Skeleton };
