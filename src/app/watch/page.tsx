"use client";

import DownloadIcon from "@/components/icons/DownloadIcon";
import MoreIcon from "@/components/icons/MoreIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import VideoDislikeIcon from "@/components/icons/VideoDislikeIcon";
import VideoLikeIcon from "@/components/icons/VideoLikeIcon";
import { useGetChannel } from "@/queries/useGetChannel";
import { useGetVideo } from "@/queries/useGetVideo";
import { formatNumber } from "@/utils";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Watch = () => {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("v");

  if (!videoId) return;

  const { data: videoData } = useGetVideo(videoId);
  const { data: channelData } = useGetChannel(videoData?.snippet.channelId);

  return (
    <main className="w-full h-full p-4 flex">
      <div className="w-3/4">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=true`}
          className="lg:w-full sm:w-full aspect-video rounded-2xl"
        ></iframe>
        <div className="mt-5 space-y-2">
          <h1 className="font-semibold text-xl mb-4">
            {videoData?.snippet.title}
          </h1>
          <div className="flex items-center justify-between">
            {channelData && (
              <div className="flex gap-3 items-center">
                <Image
                  src={
                    channelData.items[0].snippet.thumbnails.high.url ??
                    channelData.items[0].snippet.thumbnails.default.url
                  }
                  width={45}
                  height={45}
                  alt="channel thumbnail"
                  className="aspect-square rounded-full w-[45px] h-[45px]"
                />
                <div>
                  <h2 className="font-semibold">
                    {channelData.items[0].snippet.title}
                  </h2>
                  <h5 className="text-gray-500 font-medium">
                    {`${formatNumber(
                      channelData.items[0].statistics.subscriberCount
                    )} Subscribers`}
                  </h5>
                </div>
                <div className="ml-6">
                  <button className="bg-black rounded-full text-white py-2 px-6 font-semibold">
                    Subscribe
                  </button>
                </div>
              </div>
            )}
            {videoData && (
              <div className="flex gap-3 font-semibold">
                <div className="flex">
                  <button className="bg-gray-100 rounded-s-full px-4 py-2 flex gap-2 border-r-2 items-center hover:bg-gray-200">
                    <VideoLikeIcon />
                    {formatNumber(videoData?.statistics.likeCount)}
                  </button>
                  <button className="bg-gray-100 rounded-e-full px-4 py-2 hover:bg-gray-200">
                    <VideoDislikeIcon />
                  </button>
                </div>
                <button className="bg-gray-100 rounded-full px-4 py-2 flex gap-2 items-center hover:bg-gray-200">
                  <ShareIcon />
                  Share
                </button>
                <button className="bg-gray-100 rounded-full px-4 py-2 flex gap-2 items-center hover:bg-gray-200">
                  <DownloadIcon />
                  Download
                </button>
                <button className="bg-gray-100 rounded-full p-2 flex gap-2 items-center hover:bg-gray-200">
                  <MoreIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Watch;
