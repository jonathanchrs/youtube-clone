"use client";

import { useGetChannel } from "@/queries/useGetChannel";
import { formatDate, formatNumber } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type VideoItemProps = {
  videoId: string;
  videoThumbnail: string;
  channelId: string;
  channelTitle: string;
  videoTitle: string;
  viewCounts: string;
  publishedAt: string;
};

const VideoItem = ({
  videoId,
  videoThumbnail,
  channelId,
  channelTitle,
  videoTitle,
  viewCounts,
  publishedAt,
}: VideoItemProps) => {
  const { data } = useGetChannel(channelId);

  return (
    <Link href={`/watch?v=${videoId}`}>
      <main className="w-full">
        <Image
          src={videoThumbnail}
          alt="thumbnail"
          width={400}
          height={20}
          className="aspect-video rounded-2xl w-full object-cover"
        />
        <div className="flex gap-3">
          {data && (
            <Image
              src={
                data.items[0].snippet.thumbnails.high.url ??
                data.items[0].snippet.thumbnails.default.url
              }
              width={45}
              height={45}
              alt="channel thumbnail"
              className="aspect-square rounded-full mt-3 w-[45px] h-[45px]"
            />
          )}
          <div className="mt-3">
            <h2 className="font-bold text-wrap">{videoTitle}</h2>
            <div>
              <p className="text-gray-500 font-medium">{channelTitle}</p>
              <p className="text-gray-500 font-medium">
                {`${formatNumber(viewCounts)} views `} &#x2022;{" "}
                {formatDate(publishedAt)}
              </p>
            </div>
          </div>
        </div>
      </main>
    </Link>
  );
};

export default VideoItem;
