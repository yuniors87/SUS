const { forwardTo } = require('prisma-binding');

const Query = {
  clients: forwardTo('db'),
  client: forwardTo('db'),
};

module.exports = Query;
