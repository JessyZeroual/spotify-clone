const { ApolloServer } = require("apollo-server");
require("dotenv").config();
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const getToken = require("./utils/getToken");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = await getToken();
    return { token };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
