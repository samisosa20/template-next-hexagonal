import { Stack, Typography } from "../..";

interface CardProps {
    children?: React.ReactNode;
    className?: string;
  }
  

export function CardTitle({children}: CardProps) {
    return     <Stack direction="row" justify="spaceBetween" align="center" padding="xs">
    <Typography variant="subtitle">{children}</Typography>
  </Stack>
}