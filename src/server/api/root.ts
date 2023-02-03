import { createTRPCRouter } from "./trpc";
import { ItemRouter } from "./routers/item";
import { SubscribeRouter } from "./routers/subscriber";
import { DeleteItemRouter } from "./routers/deleteItem";
import { EditItemRouter } from "./routers/editItem";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  addItem: ItemRouter,
  getItem: SubscribeRouter,
  deleteItem: DeleteItemRouter,
  editItem: EditItemRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
