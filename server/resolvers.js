const fetch = require("node-fetch");
const removeDuplicatesObjectInArray = require("./utils/removeDuplicatesObjectInArray");

module.exports = {
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

    newAlbumsReleases: async (_, args, context) => {
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
    trendyAlbums: async (_, args, context) => {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/37i9dQZEVXbIPWwFssbupI/tracks?offset=0&limit=50`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + context.token },
        }
      );
      const data = await response.json();

      const mostPopularyItems = data.items.filter(
        ({ track }) => track.popularity > 75
      );

      return mostPopularyItems.map(({ track }) => ({
        id: track.album.id,
        name: track.album.name,
        type: track.album.type,
        images: track.album.images,
        totalTracks: track.album.total_tracks,
        releaseDate: track.album.release_date,
        artistId: track.album.artists[0].id,
        artistName: track.album.artists[0].name,
      }));
    },
    recommendedAlbums: async (_, args, context) => {
      const response = await fetch(
        `https://api.spotify.com/v1/recommendations?seed_artists=2eh8cEKZk4VeruUrGq748D%2C1PTl9q5EaEZejVGts7MBLN&seed_genres=hip-hop&seed_tracks=57sOSHzR4aieOMe99cHqKy%2C79Gk0yMElcX60EJwqdP4xH`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + context.token },
        }
      );
      const data = await response.json();

      return data.tracks.map((track) => ({
        id: track.album.id,
        name: track.album.name,
        type: track.album.type,
        images: track.album.images,
        totalTracks: track.album.total_tracks,
        releaseDate: track.album.release_date,
        artistId: track.album.artists[0].id,
        artistName: track.album.artists[0].name,
      }));
    },
    albumsByArtist: async (_, { id }, context) => {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${id}/albums`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + context.token },
        }
      );
      const data = await response.json();

      const items = await removeDuplicatesObjectInArray(data.items, "name");

      return items.map((item) => ({
        id: item.id,
        name: item.name,
        type: item.type,
        images: item.images,
        totalTracks: item.total_tracks,
        releaseDate: item.release_date,
        artistId: item.artists[0].id,
        artistName: item.artists[0].name,
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
