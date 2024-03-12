"use client";

import MSWConfig from "@/src/providers/msw-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

// TODO: Create a custom provider for every provider
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <SessionProvider>
      <MSWConfig>
        <QueryClientProvider client={queryClient}>
          <ReactQueryStreamedHydration>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              {children}
            </ThemeProvider>

            <ReactQueryDevtools initialIsOpen={false} />
          </ReactQueryStreamedHydration>
        </QueryClientProvider>
      </MSWConfig>
    </SessionProvider>
  );
};
