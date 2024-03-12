"use client";

import type { ComponentProps } from "react";
import { createContext, useState, useEffect } from "react";

const MSWContext = createContext("");

type Props = Omit<ComponentProps<typeof MSWContext.Provider>, "value">;

export default function MSWConfig({ children }: Props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (process.env["NODE_ENV"] === "development") {
      // replace '@/mocks/browser' to yours
      import("@/src/mocks/msw-worker")
        .then(({ mswWorker }) => mswWorker.start())
        .then(() => setLoaded(true));
    } else {
      setLoaded(true);
    }
  }, []);

  return (
    <MSWContext.Provider value={""}>
      {loaded ? children : <></>}
    </MSWContext.Provider>
  );
}
