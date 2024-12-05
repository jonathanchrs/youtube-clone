"use client";

import VideoItem from "@/components/VideoItem";
import { useGetRandomVideos } from "@/queries/useGetRandomVideos";

const Home = () => {
  const { data } = useGetRandomVideos();
  return (
    <main className="p-3 flex flex-wrap w-full gap-6 content-start">
      {data &&
        data.items.map((video, index) => (
          <VideoItem
            key={`video-${index}`}
            videoThumbnail={video.snippet.thumbnails.high.url}
            videoTitle={video.snippet.title}
            channelId={video.snippet.channelId}
            viewCounts={video.statistics.viewCount}
            channelTitle={video.snippet.channelTitle}
            publishedAt={video.snippet.publishedAt}
          />
        ))}
    </main>
  );
};

export default Home;
