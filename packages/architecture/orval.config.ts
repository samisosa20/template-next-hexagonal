import { faker } from "@faker-js/faker";
import { defineConfig } from "orval";

const query = {
  useQuery: true,
  useSuspenseQuery: true,
};

export default defineConfig({
  nameProject: {
    output: {
      mode: "tags-split",
      target: "./src/shared/api/endpoints/fileSpec.ts",
      schemas: "./src/shared/domain/models",
      mock: {
        type: "msw",
        locale: "es_MX",
      },
      client: "react-query",
      prettier: true,
      tslint: true,
      tsconfig: "./tsconfig.json",
      override: {
        mutator: {
          path: "./src/lib/api-client/api-client.ts",
          name: "apiClient",
        },
        query,
        operations: {
          notification_list: {
            query: {
              ...query,
              useInfinite: true,
            },
          },
        },
        mock: {
          properties: {
            "/photo/": () => "http://via.placeholder.com/640x360",
          },
        },
      },
    },
    input: {
      target: "", // use swagger "https://backend.com/api-doc/?format=openapi",
    },
  },
});