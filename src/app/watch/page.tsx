"use client";

import DownloadIcon from "@/components/icons/DownloadIcon";
import LikeIcon from "@/components/icons/LikeIcon";
import MoreIcon from "@/components/icons/MoreIcon";
import ShareIcon from "@/components/icons/ShareIcon";
import VideoDislikeIcon from "@/components/icons/VideoDislikeIcon";
import VideoLikeIcon from "@/components/icons/VideoLikeIcon";
import VideoItem from "@/components/VideoItem";
import { useGetChannel } from "@/queries/useGetChannel";
import { useGetRandomVideos } from "@/queries/useGetRandomVideos";
import { useGetVideo } from "@/queries/useGetVideo";
import { useGetVideoComments } from "@/queries/useGetVideoComment";
import { formatDate, formatNumber } from "@/utils";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Watch = () => {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("v");

  if (!videoId) return;

  const { data: videoData } = useGetVideo(videoId);
  const { data: channelData } = useGetChannel(videoData?.snippet.channelId);
  const { data: randomVideoData } = useGetRandomVideos();
  const { data: videoComments } = useGetVideoComments(videoId);

  return (
    <main className="w-full h-full p-4 flex overflow-y-scroll scrollbar-hide scrollbar-hover justify-center">
      <div className="lg:w-full md:w-full sm:w-full lg:flex">
        <div className="lg:flex-1 md:w-full sm:w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&fs=1`}
            className="aspect-video rounded-2xl w-full"
            allow="autoplay"
            allowFullScreen
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
                  <button className="bg-gray-100 rounded-full px-4 py-2 lg:flex gap-2 items-center hover:bg-gray-200 hidden">
                    <ShareIcon />
                    Share
                  </button>
                  <button className="bg-gray-100 rounded-full px-4 py-2 lg:flex gap-2 items-center hover:bg-gray-200 hidden">
                    <DownloadIcon />
                    Download
                  </button>
                  <button className="bg-gray-100 rounded-full p-2 flex gap-2 items-center hover:bg-gray-200">
                    <MoreIcon />
                  </button>
                </div>
              )}
            </div>
            <div className="pb-4">
              {videoData && (
                <div className="rounded-xl bg-gray-100 mt-4 p-4 text-sm">
                  <p className="font-medium">{`${formatNumber(
                    videoData.statistics.viewCount
                  )} views ${formatDate(videoData.snippet.publishedAt)}`}</p>

                  <p className="mt-1">
                    {videoData.snippet.description
                      .split("\n")
                      .map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                  </p>
                </div>
              )}

              {videoComments && (
                <h1 className="font-bold text-2xl mt-5 mb-2">{`${videoComments.items.length} Comments`}</h1>
              )}
              {videoComments &&
                videoData &&
                videoComments.items.map((comments, index) => (
                  <div className="flex py-4 gap-4" key={`comment-${index}`}>
                    <img
                      className="aspect-square rounded-full w-10 h-10"
                      src={
                        comments.snippet.topLevelComment.snippet
                          .authorProfileImageUrl
                      }
                    />
                    <div className="text-sm">
                      <div className="flex gap-2 mb-1 items-center">
                        <h6
                          className={`font-semibold ${
                            comments.snippet.topLevelComment.snippet
                              .authorChannelId.value ===
                              videoData.snippet.channelId &&
                            "bg-gray-400 px-2 py-[1px] rounded-full text-white"
                          }`}
                        >
                          {
                            comments.snippet.topLevelComment.snippet
                              .authorDisplayName
                          }
                        </h6>
                        <h6 className="text-gray-500 text-xs font-medium">
                          {formatDate(
                            comments.snippet.topLevelComment.snippet.publishedAt
                          )}
                        </h6>
                      </div>
                      <p>
                        {comments.snippet.topLevelComment.snippet.textDisplay}
                      </p>
                      <div className="flex gap-4 items-center mt-2">
                        <div className="flex gap-2 items-center text-gray-500 font-semibold">
                          <LikeIcon size="20" />
                          {formatNumber(
                            comments.snippet.topLevelComment.snippet.likeCount.toString()
                          )}
                        </div>
                        <div className="flex gap-2 items-center">
                          <VideoDislikeIcon size="20" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="lg:w-[500px] sm:w-full px-3 flex flex-col gap-4 pb-10">
          {randomVideoData &&
            randomVideoData.items.map((video, index) => (
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
                detailPosition="right"
              />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Watch;
