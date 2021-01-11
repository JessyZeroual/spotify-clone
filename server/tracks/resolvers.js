const { ApolloError } = require("apollo-server");
const fetch = require("node-fetch");
const { BASE_URL } = require("../constants");

const resolvers = {
  Query: {
    tracksByAlbum: async (_, { id }, context) => {
      const response = await fetch(`${BASE_URL}/albums/${id}/tracks`, {
        method: "GET",
        headers: { Authorization: "Bearer " + context.token },
      });

      const { items, error } = await response.json();
      if (error) throw new ApolloError(error.message, error.status);

      return items.map((item) => ({
        id: item.id,
        name: item.name,
        artists: item.artists,
      }));
    },
  },
};

module.exports = {
  resolvers,
};
