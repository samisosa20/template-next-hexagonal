import { cn } from "@/src/lib/utils";

import { Stack } from "../..";
import { CardTitle } from "./card.title";


interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export function Card({children, className}: CardProps) {
  return <Stack className={cn("shadow rounded bg-white w-full", className)}>
      {children}
  </Stack>
}

Card.displayName = "Card";
Card.Title = CardTitle;