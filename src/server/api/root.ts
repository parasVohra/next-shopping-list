import { createTRPCRouter } from "./trpc";
import { ItemRouter } from "./routers/item";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  addItem: ItemRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
