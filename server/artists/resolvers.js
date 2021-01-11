const { ApolloError } = require("apollo-server");
const fetch = require("node-fetch");
const { BASE_URL } = require("../constants");

const resolvers = {
  Query: {
    artists: async (_, { searchTerms }, context) => {
      const response = await fetch(
        `${BASE_URL}/search?q=${searchTerms}&type=artist&market=FR&limit=10`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + context.token },
        }
      );
      const { artists, error } = await response.json();
      if (error) throw new ApolloError(error.message, error.status);

      return artists.items.map((artist) => ({
        id: artist.id,
        name: artist.name,
        type: artist.type,
        images: artist.images,
      }));
    },
  },
};

module.exports = {
  resolvers,
};
