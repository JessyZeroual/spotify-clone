const fetch = require("node-fetch");

const resolvers = {
  Query: {
    tracksByAlbum: async (_, { id }, context) => {
      const response = await fetch(
        `https://api.spotify.com/v1/albums/${id}/tracks`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + context.token },
        }
      );
      const data = await response.json();

      return data.items.map((item) => ({
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
