import { setupWorker } from "msw/browser";
import { handlers } from "./handlers/handlers";

export const mswWorker = setupWorker(...handlers);
