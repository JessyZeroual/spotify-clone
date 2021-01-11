const { ApolloError } = require("apollo-server");
const fetch = require("node-fetch");
const { BASE_URL } = require("../constants");
const removeDuplicatesObjectInArray = require("../utils/removeDuplicatesObjectInArray");

const resolvers = {
  Query: {
    newAlbumsReleases: async (_, args, context) => {
      const response = await fetch(
        `${BASE_URL}/browse/new-releases?country=FR&offset=0&limit=20`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + context.token },
        }
      );

      const { albums, error } = await response.json();
      if (error) throw new ApolloError(error.message, error.status);

      return albums.items.map((album) => ({
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
        `${BASE_URL}/playlists/37i9dQZEVXbIPWwFssbupI/tracks?offset=0&limit=50`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + context.token },
        }
      );
      const { items, error } = await response.json();
      if (error) throw new ApolloError(error.message, error.status);

      const mostPopularyItems = items.filter(
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
        `${BASE_URL}/recommendations?seed_artists=2eh8cEKZk4VeruUrGq748D%2C1PTl9q5EaEZejVGts7MBLN&seed_genres=hip-hop&seed_tracks=57sOSHzR4aieOMe99cHqKy%2C79Gk0yMElcX60EJwqdP4xH`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + context.token },
        }
      );

      const { tracks, error } = await response.json();
      if (error) throw new ApolloError(error.message, error.status);

      const _tracks = await removeDuplicatesObjectInArray(tracks, "id");

      return _tracks.map((track) => ({
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
      const response = await fetch(`${BASE_URL}/artists/${id}/albums`, {
        method: "GET",
        headers: { Authorization: "Bearer " + context.token },
      });
      const { items, error } = await response.json();
      if (error) throw new ApolloError(error.message, error.status);

      const _items = await removeDuplicatesObjectInArray(items, "name");

      return _items.map((item) => ({
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
  },
};

module.exports = {
  resolvers,
};
