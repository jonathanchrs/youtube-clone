"use client";

import VideoItem from "@/components/VideoItem";
import { useGetRandomVideos } from "@/queries/useGetRandomVideos";

const Home = () => {
  const { data } = useGetRandomVideos();

  return (
    <main className="p-3 w-full grid grid-cols-1 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-10 overflow-y-scroll content-start">
      {data &&
        data.items.map((video, index) => (
          <VideoItem
            key={`video-${index}`}
            videoThumbnail={
              video.snippet.thumbnails.high?.url ??
              video.snippet.thumbnails.default.url
            }
            videoTitle={video.snippet.title}
            channelId={video.snippet.channelId}
            viewCounts={video.statistics.viewCount}
            channelTitle={video.snippet.channelTitle}
            publishedAt={video.snippet.publishedAt}
            videoId={video.id}
          />
        ))}
    </main>
  );
};

export default Home;
