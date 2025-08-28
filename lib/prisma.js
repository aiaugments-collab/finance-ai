import { PrismaClient } from "@prisma/client";
import { logEnvironmentWarnings, NODE_ENV } from "@/lib/env";

// Log environment warnings on startup
logEnvironmentWarnings();

export const db = globalThis.prisma || new PrismaClient();

if (NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.
