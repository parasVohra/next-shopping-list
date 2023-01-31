import { z } from "zod";
import { publicProcedure, createTRPCRouter } from "../trpc";

export const ItemRouter = createTRPCRouter({
  addItem: publicProcedure
    .input(
      z.object({
        name: z
          .string()
          .min(3, { message: "Must be 3 or more character in length" })
          .max(20, { message: "Must be less than 20 characters" })
          .trim(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        return await ctx.prisma.item.create({
          data: {
            name: input.name,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
