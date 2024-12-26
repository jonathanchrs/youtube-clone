import { getVideoComments } from "@/actions";
import { useQuery } from "@tanstack/react-query";

const GET_VIDEO_COMMENTS_QUERY_KEY = "getVideoComments";

export const useGetVideoComments = (videoId: string) => {
  return useQuery({
    queryKey: [GET_VIDEO_COMMENTS_QUERY_KEY, videoId],
    queryFn: async () => await getVideoComments(videoId),
  });
};
