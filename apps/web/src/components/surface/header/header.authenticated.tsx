"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

//import { useAuthProfileListSuspense as useAuthProfileList } from "architecture/src/shared/api/endpoints/auth/auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button,
  Stack,
  Typography,
  Avatar,
  AvatarFallback,
} from "@/src/components";

import { Suspense } from "react";


export function HeaderAuthenticated() {
  return (
    <Stack direction="row" spacing="xs" align="center">
      <>
        <Button variant="link" size="small"></Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Suspense fallback={<>Loading UserInformation...</>}>
              <UserInformation />
            </Suspense>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href="/dashboard/perfil">Perfil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                signOut({
                  callbackUrl: "/",
                })
              }
              className="cursor-pointer"
            >
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    </Stack>
  );
}

export function UserInformation() {
  //const { data: user } = useAuthProfileList();
  const user = {
    firstName: 'Henrique',
    lastName: 'Restrepo alvares',
  }
  const { firstName, lastName } = user;
  return (
    <Stack direction="row" spacing="xs">
      <Stack className="hidden md:flex" align="right" justify="center">
        <Typography className="capitalize" weight={600}>
          {firstName} {lastName}
        </Typography>
      </Stack>
      <Stack direction="row">
        <Avatar className="w-12 h-12 rounded-dot">
          <AvatarFallback className="rounded-none">{`${firstName[0]}${lastName[0]}`}</AvatarFallback>
        </Avatar>
      </Stack>
    </Stack>
  );
}

UserInformation.displayName = "UserInformation";

HeaderAuthenticated.displayName = "Header.Authenticated";
