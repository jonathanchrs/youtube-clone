import { getChannel } from "@/actions";
import { useQuery } from "@tanstack/react-query";

const GET_CHANNEL_QUERY_KEY = "getChannel";

export const useGetChannel = (channelId: string) => {
  return useQuery({
    queryKey: [GET_CHANNEL_QUERY_KEY, channelId],
    queryFn: async () => await getChannel(channelId),
  });
};
