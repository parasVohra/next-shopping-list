import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "../trpc";

export const SubscribeRouter = createTRPCRouter({
  getItems: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.item.findMany();
  }),
});
