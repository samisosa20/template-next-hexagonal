import { primaryFont, secondaryFont } from "@/src/lib/fonts";
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
  title: "h2",
  subtitle: "h3",
  body: "p",
  caption: "span",
};

type ComponentType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"

type TypographyVariants = VariantProps<typeof typographyStyles>;

export const typographyStyles = cva("", {
  variants: {
    variant: {
      h1: "text-4xl md:text-6xl",
      h2: "text-3xl md:text-5xl",
      h3: "text-2xl md:text-4xl",
      h4: "text-xl md:text-3xl",
      h5: "text-xl md:text-2xl",
      h6: "text-base md:text-xl",
      title: "text-xl md:text-2xl",
      subtitle: "text-base md:text-xl",
      body: "text-sm md:text-base",
      caption: "text-xs md:text-sm",
      overline: "text-xs",
    },
    weight: {
      300: "font-light",
      400: "font-normal",
      500: "font-medium",
      600: "font-semibold",
      700: "font-bold",
      800: "font-extrabold",
      900: "font-black",
    },
    family: {
      primary: primaryFont.className,
      secondary: secondaryFont.className,
      sans: "font-sans",
      mono: "font-mono",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      body: "text-slate-900",
      success: "text-green-500",
      danger: "text-red-500"
    },
  },
  defaultVariants: {
    variant: "body",
    color: "body",
    weight: 400,
    family: 'primary'
  },
});

export interface ITypography
  extends Omit<React.HTMLAttributes<HTMLElement>, "color" | "style">,
    TypographyVariants {
  component?: ComponentType;
}
export function Typography({
  variant,
  weight,
  color,
  family,
  className,
  component,
  ...props
}: ITypography) {
  const Component = component || variantMap[variant || "body"];

  return (
    <Component
      className={typographyStyles({
        className,
        weight,
        color,
        family,
        variant,
      })}
      {...props}
    />
  );
}
