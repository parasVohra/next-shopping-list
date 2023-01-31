import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "../trpc";

export const DeleteItemRouter = createTRPCRouter({
  deleteItem: publicProcedure
    .input(z.string().cuid())
    .mutation(async ({ ctx, input: id }) => {
      await ctx.prisma.item.delete({ where: { id } });
      return id;
    }),
});
