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

      return data.artists.items.map((artist) => ({
        id: artist.id,
        name: artist.name,
        images: artist.images,
      }));
    },

    newReleases: async (_, args, context) => {
      const response = await fetch(
        `https://api.spotify.com/v1/browse/new-releases?country=FR&offset=0&limit=20`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + context.token },
        }
      );
      const data = await response.json();

      return data.albums.items.map((album) => ({
        id: album.id,
        name: album.name,
        type: album.type,
        images: album.images,
        totalTracks: album.total_tracks,
        releaseDate: album.release_date,
        artistId: album.artists[0].id,
        artistName: album.artists[0].name,
      }));
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
