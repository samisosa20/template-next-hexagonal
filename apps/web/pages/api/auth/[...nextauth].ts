import NextAuth from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next"

import { authOptions } from "@/src/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    session: {
      strategy: "jwt",
      maxAge: req.body.remember ? 30 * 24 * 60 * 60 : 60 * 60, // 30 days or 1 hour
    },
    ...authOptions,
  });
}
