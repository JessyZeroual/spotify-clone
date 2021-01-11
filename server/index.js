const { ApolloServer, gql } = require("apollo-server");
require("dotenv").config();
const albums = require("./albums");
const artists = require("./artists");
const tracks = require("./tracks");
const { commonTypeDef } = require("./commonTypeDef");
const getToken = require("./utils/getToken");
const pjson = require("../client/package.json");

const server = new ApolloServer({
  typeDefs: [commonTypeDef, albums.typeDef, artists.typeDef, tracks.typeDef],
  resolvers: [albums.resolvers, artists.resolvers, tracks.resolvers],
  context: async ({ req }) => {
    const token = await getToken();
    return { token };
  },
});

server.listen({ host: `${pjson.host}`, port: 8000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
