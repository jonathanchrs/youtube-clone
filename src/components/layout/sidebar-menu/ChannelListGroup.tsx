"use client";

import { useGetRandomChannels } from "@/queries/useGetRandomChannels";
import ChannelItem from "./ChannelItem";

export default function ChannelList() {
  const { data } = useGetRandomChannels();

  return (
    <div>
      <h2 className="text-gray-500 font-medium px-6 py-4 text-sm">
        SUBSCRIBED
      </h2>
      {data &&
        data.items.map((channel, index) => (
          <ChannelItem
            key={`channel-${index}`}
            thumbnail={channel.snippet.thumbnails.default.url}
            channelName={channel.snippet.title}
          />
        ))}
    </div>
  );
}
