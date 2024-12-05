import { getRandomChannels } from "@/actions";
import { useQuery } from "@tanstack/react-query";

const GET_RANDOM_CHANNELS_QUERY_KEY = "getRandomChannels";

export const useGetRandomChannels = () => {
  return useQuery({
    queryKey: [GET_RANDOM_CHANNELS_QUERY_KEY],
    queryFn: async () => await getRandomChannels(),
  });
};
