import { getVideo, getVideos } from "@/actions";
import { useQuery } from "@tanstack/react-query";

const GET_VIDEO_QUERY_KEY = "getVideo";

export const useGetVideo = (videoId: string) => {
  return useQuery({
    queryKey: [GET_VIDEO_QUERY_KEY, videoId],
    queryFn: async () => await getVideo(videoId),
  });
};
