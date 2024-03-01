import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/src/lib/utils";

type GridVariants = VariantProps<typeof gridVariants>;
const gridVariants = cva("grid", {
  variants: {
    align: {
      left: "items-start",
      center: "items-center",
      right: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      top: "justify-start",
      center: "justify-center",
      bottom: "justify-end",
      spaceBetween: "justify-between",
      spaceAround: "justify-around",
      start: "justify-start",
      end: "justify-end",
    },
    spacing: {
      none: "gap-0",
      "2xs": "gap-1 md:gap-2",
      xs: "gap-2 md:gap-3",
      sm: "gap-3 md:gap-4",
      md: "gap-4 md:gap-6",
      lg: "gap-6 md:gap-8",
      xl: "gap-8 md:gap-10",
      "2xl": "gap-10 md:gap-12",
    },
    padding: {
      none: "p-0",
      xs: "p-2",
      sm: "p-4 md:p-5",
      md: "p-6",
      lg: "p-8 md:p-10",
      xl: "p-10 md:p-12",
    },
  },
  compoundVariants: [],
});

type IGrid<T extends object> = GridVariants &
  React.HTMLAttributes<HTMLElement> & {
    component?: React.ElementType;
  } & T;

const Grid = forwardRef(
  <T extends object>(
    {
      align,
      children,
      className,
      component: Component = "div",
      justify,
      padding,
      spacing,
      ...props
    }: IGrid<T>,
    ref: React.Ref<HTMLFormElement>,
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          gridVariants({ align, spacing, justify, padding }),
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Grid.displayName = "Grid";

export { Grid };
