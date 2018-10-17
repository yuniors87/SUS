const { forwardTo } = require('prisma-binding');

const Query = {
  clients: forwardTo('db')
  // async clients(parent, args, ctx, info) {
  //   const clients = await ctx.db.query.clients();
  //   return clients;
  // }
};

module.exports = Query;
