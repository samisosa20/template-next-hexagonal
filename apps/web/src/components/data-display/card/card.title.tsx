import { Stack, Typography } from "../..";

interface CardProps {
    children?: React.ReactNode;
    className?: string;
  }
  

export function CardTitle({children}: CardProps) {
    return     <Stack direction="row" justify="spaceBetween" align="center">
    <Typography weight={500} variant="h4" family="secondary">{children}</Typography>
  </Stack>
}