import { publicProcedure, createTRPCRouter } from "../trpc";

export const SubscribeRouter = createTRPCRouter({
  getItems: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.item.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
});
