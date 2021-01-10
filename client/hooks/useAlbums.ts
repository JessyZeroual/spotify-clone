import { useQuery } from "@apollo/client";
import GET_NEW_ALBUMS_RELEASES from "../gql/albums/Query/newAlbumsReleases";
import GET_TRENDY_ALBUMS from "../gql/albums/Query/trendyAlbums";
import GET_RECOMMENDED_ALBUMS from "../gql/albums/Query/recommendedAlbums";

interface Album {
  id: string;
  name: string;
  images: {
    url: string;
  }[];
  type: string;
  artistName: string;
}

const useAlbums = (): {
  newAlbumsReleases: Album[];
  trendyAlbums: Album[];
  recommendedAlbums: Album[];
  loading: boolean;
} => {
  let loading = true;
  const newAlbumsReleasesResult = useQuery(GET_NEW_ALBUMS_RELEASES);
  const trendyAlbumsResult = useQuery(GET_TRENDY_ALBUMS);
  const recommendedAlbumsResult = useQuery(GET_RECOMMENDED_ALBUMS);

  const { newAlbumsReleases } = newAlbumsReleasesResult.data || [];
  const { trendyAlbums } = trendyAlbumsResult.data || [];
  const { recommendedAlbums } = recommendedAlbumsResult.data || [];

  if (
    !newAlbumsReleasesResult.loading &&
    !trendyAlbumsResult.loading &&
    !recommendedAlbumsResult.loading
  )
    loading = false;

  return {
    newAlbumsReleases,
    trendyAlbums,
    recommendedAlbums,
    loading
  };
};

export default useAlbums;
