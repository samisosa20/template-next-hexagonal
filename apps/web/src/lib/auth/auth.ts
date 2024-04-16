import { NextAuthOptions } from "next-auth";

//import { AppLoader } from "loader/src";
import authConfig from "./auth.config";
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      return {token};
      /* if (account?.provider === "credentials" && token.sub) {
        // token.completedTopics = user.completedTopics
        if ("completedTopics" in user) {
          token.completedTopics = user.completedTopics as boolean;
        }

        if ("picture" in user) {
          token.picture = user.picture as string;
        }
        token.access = user.access;
        token.refresh = user.refresh;

        return token;
      }

      if (account?.provider === "google" && account.id_token) {
        const { access, refresh, profile } =
          await AppLoader.authUseCase().signInWithGoogle({
            token: account.id_token,
          });

        if (profile && "completedTopics" in profile) {
          token.completedTopics = profile.completedTopics;
        }

        token.access = access;
        token.refresh = refresh;

        return token;
      } */

      return token;
    },
    async session({ token, session, user }) {
      const { completedTopics, access, refresh, picture } = token;

      return {
        ...session,
        token: {
          access,
          refresh,
        },
        user: {
          image: picture,
          ...user,
          access,
        },
        // ...(picture && { picture }),
        ...(completedTopics !== undefined && { completedTopics }),
      };
    },
  },
  ...authConfig,
};
