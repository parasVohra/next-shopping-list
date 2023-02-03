import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "../trpc";

export const EditItemRouter = createTRPCRouter({
  editItem: publicProcedure
    .input(
      z.object({
        id: z.string().cuid(),
        name: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, name } = input;
      await ctx.prisma.item.update({ where: { id }, data: { name: name } });
      return id;
    }),
});
