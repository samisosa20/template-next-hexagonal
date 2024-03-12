import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

//import { LoginRequest } from "architecture/src/shared/domain/models/loginRequest";
//import { AppLoader } from "loader/src";

export default {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) {
            throw new Error("Please enter an email and password");
          }

          /* const { login } = AppLoader.authUseCase();
          const response = await login(credentials as LoginRequest);

          if (!response) return null;

          const token = {
            access: response.access,
            refresh: response.refresh,
          };

          if (response.profile) {
            const { email, firstName, lastName, avatar, completedTopics } =
              response.profile;

            return {
              id: "credentials",
              email,
              name: firstName + " " + lastName,
              ...(avatar && { image: avatar }),
              ...(completedTopics !== undefined && { completedTopics }),
              ...token,
            };
          } */

          return {
            id: "credentials",
            //...token,
          };
        } catch (error) {
          console.error("Error during authorization:", error);
          throw error; // Rethrow the error to propagate it
        }
      },
    })
  ],
} satisfies NextAuthOptions;
