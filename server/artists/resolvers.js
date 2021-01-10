const fetch = require("node-fetch");

const resolvers = {
  Query: {
    artists: async (_, { searchTerms }, context) => {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${searchTerms}&type=artist&market=FR&limit=10`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + context.token },
        }
      );
      const data = await response.json();

      return data.artists.items.map((artist) => ({
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