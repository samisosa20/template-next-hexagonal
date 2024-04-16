import { getServerSession } from "next-auth/next";

import { authOptions } from "@/src/lib/auth";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session?.user;
}

/* export async function getCurrentSessionToken() {
  const session = await getServerSession(authOptions);

  return session?.token?.access;
} */
