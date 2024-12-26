"use client";

import { useSession } from "next-auth/react";
import ChannelItem from "./ChannelItem";
import { useGetSubscriptionChannel } from "@/queries/useGetSubscription";

export default function ChannelList() {
  const { data } = useGetSubscriptionChannel();
  const { data: session } = useSession();

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
