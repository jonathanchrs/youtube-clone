import { getChannelSubscription } from "@/actions";
import { useQuery } from "@tanstack/react-query";

const GET_CHANNEL_SUBSCRIPTION_QUERY_KEY = "getChannel";

export const useGetSubscriptionChannel = () => {
  return useQuery({
    queryKey: [GET_CHANNEL_SUBSCRIPTION_QUERY_KEY],
    queryFn: async () => await getChannelSubscription(),
  });
};
