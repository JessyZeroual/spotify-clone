const fetch = require("node-fetch");

module.exports = {
  Query: {
    artists: async (_, { searchTerms }, context) => {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${searchTerms}&type=artist`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + context.token },
        }
      );
      const data = await response.json();

      return data.artists.items.map((artist) => {
        console.log(artist.images);
        return {
          id: artist.id,
          name: artist.name,
          images: artist.images,
        };
      });
    },

    albums: () => [
      {
        name: "Album1",
      },
      {
        name: "Album2",
      },
    ],
    musics: () => [
      {
        name: "Music1",
      },
      {
        name: "Music2",
      },
    ],
  },
};
