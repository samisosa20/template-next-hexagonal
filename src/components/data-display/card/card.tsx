import { cn } from "@/src/lib/utils";

import { Stack, Typography } from "../..";


export function Card({title, children}) {
  return <Stack className="shadow rounded bg-white w-full">
    <Stack direction="row" justify="spaceBetween" align="center" padding="xs">
      <Typography variant="subtitle">{title}</Typography>
    </Stack>
    <Stack padding="xs">
      {children}
    </Stack>
  </Stack>
}