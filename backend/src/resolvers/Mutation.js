const Mutations = {
  async createClient(parent, args, ctx, info) {
    const client = await ctx.db.mutation.createClient(
      {
        data: {
          ...args,
        },
      },
      info
    );
    return client;
  },
  updateClient(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;
    return ctx.db.mutation.uodateClient(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    );
  },
};

module.exports = Mutations;
