require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const getToken = require("./utils/getToken");

const { commonTypeDef } = require("./commonTypeDef");
const albums = require("./albums");
const artists = require("./artists");
const tracks = require("./tracks");
const pjson = require("../client/package.json");

const server = new ApolloServer({
  typeDefs: [commonTypeDef, albums.typeDef, artists.typeDef, tracks.typeDef],
  resolvers: [albums.resolvers, artists.resolvers, tracks.resolvers],
  context: async () => {
    const token = await getToken();
    return { token };
  },
});

server
  .listen({ host: `${pjson["server-host"]}`, port: 8000 })
  .then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
