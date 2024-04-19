import { cn } from "@/src/lib/utils";

interface ContainerLayoutProps {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const style = {
  size: {
    xs: "max-w-[320px]",
    sm: "max-w-[640px]",
    md: "max-w-[1080px]",
    lg: "md:container lg:max-w-[980px] xl:max-w-[1280px]",
    xl: "max-w-[1536px]",
  },
};

export function Container({ children, size = "md", className }: ContainerLayoutProps) {
  return (
    <div className={cn(style.size[size], 'mx-auto w-full p-4 md:py-6', className)}>
      {children}
    </div>
  );
}
