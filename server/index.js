const { ApolloServer, gql } = require("apollo-server");
require("dotenv").config();
const albums = require("./albums");
const artists = require("./artists");
const tracks = require("./tracks");
const getToken = require("./utils/getToken");

const typeDef = gql`
  type Query

  type Image {
    height: Int
    url: String
    width: Int
  }
`;

const server = new ApolloServer({
  typeDefs: [typeDef, albums.typeDef, artists.typeDef, tracks.typeDef],
  resolvers: [albums.resolvers, artists.resolvers, tracks.resolvers],
  context: async ({ req }) => {
    const token = await getToken();
    return { token };
  },
});

server.listen({ host: "192.168.1.14", port: 8000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
