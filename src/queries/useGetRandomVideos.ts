import { getVideos } from "@/actions";
import { useQuery } from "@tanstack/react-query";

const GET_RANDOM_VIDEOS_QUERY_KEY = "getRandomVideos";

export const useGetRandomVideos = () => {
  return useQuery({
    queryKey: [GET_RANDOM_VIDEOS_QUERY_KEY],
    queryFn: async () => await getVideos(),
  });
};
