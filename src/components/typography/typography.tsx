import { cn } from "@/src/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const variantMap: {
  [key: string]: React.ElementType;
} = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
};

type TypographyVariants = VariantProps<typeof typographyStyles>;

export const typographyStyles = cva("", {
  variants: {
    variant: {
      h1: "text-4xl md:text-6xl",
      h2: "text-3xl md:text-5xl font-bold",
      h3: "text-2xl md:text-4xl",
      h4: "text-xl md:text-3xl",
      h5: "text-xl md:text-2xl",
      h6: "text-base md:text-xl",
      subtitle1: "text-base md:text-xl",
      subtitle2: "text-sm md:text-lg",
      body1: "text-base",
      body2: "text-sm md:text-base",
      caption: "text-xs md:text-sm",
      overline: "text-xs",
    },
    color: {
      primary: "text-primary-300",
      secondary: "text-primary-200",
      accent: "text-accent-100",
      body: "text-body-100",
    },
  },
  defaultVariants: {
    variant: "body1",
    color: "body",
  },
});

export interface ITypography
  extends Omit<React.HTMLAttributes<HTMLElement>, "color" | "style">,
    TypographyVariants {
  component?: React.ElementType;
}
export function Typography({
  variant,
  color,
  className,
  component,
  ...props
}: ITypography) {
  const Component = component || variantMap[variant || "body1"];

  return (
    <Component
      className={typographyStyles({
        className,
        color,
        variant,
      })}
      {...props}
    />
  );
}
