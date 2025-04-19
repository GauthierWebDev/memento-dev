import { Session } from "@auth/core/types";

declare global {
  namespace Vike {
    interface PageContext {
      session?: Session | null;
    }
  }
}

// biome-ignore lint/complexity/noUselessEmptyExport: ensure that the file is considered as a module
export {};
