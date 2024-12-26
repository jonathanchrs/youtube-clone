"use server";

import {
  channelResponseSchema,
  channelsResponseSchema,
  commentResponseSchema,
  subscriptionResponseSchema,
  videosResponseSchema,
} from "@/zod";
import axios from "axios";
import { getServerSession } from "next-auth";

const YT_BASE_URL = process.env.SECRET_YOUTUBE_API_BASE_URL;
const YT_API_KEY = process.env.SECRET_YOUTUBE_API_KEY;

export const getVideo = async (videoId: string) => {
  const { data } = await axios.get(
    `${YT_BASE_URL}/videos?key=${YT_API_KEY}&id=${videoId}&part=snippet,statistics,contentDetails&field=items(id,snippet,statistics,contentDetails)`
  );
  const video = videosResponseSchema.parse(data);
  return video.items[0];
};

export const getVideos = async () => {
  const { data } = await axios.get(
    `${YT_BASE_URL}/videos?key=${YT_API_KEY}&chart=mostPopular&part=snippet,statistics,contentDetails&field=items(id,snippet,statistics,contentDetails)&maxResults=10`
  );
  const videos = videosResponseSchema.parse(data);
  return videos;
};

export const getChannel = async (channelId?: string) => {
  const { data } = await axios.get(
    `${YT_BASE_URL}/channels?key=${YT_API_KEY}&id=${channelId}&part=snippet,statistics`
  );
  const channel = channelResponseSchema.parse(data);
  return channel;
};

export const getRandomChannels = async () => {
  const { data } = await axios.get(
    `${YT_BASE_URL}/search?key=${YT_API_KEY}&part=snippet&type=channel`
  );
  const channel = channelsResponseSchema.parse(data);
  return channel;
};

export const getVideoComments = async (videoId: string) => {
  console.log(videoId);
  const { data } = await axios.get(
    `${YT_BASE_URL}/commentThreads?key=${YT_API_KEY}&part=id,snippet&videoId=${videoId}`
  );
  const comments = commentResponseSchema.parse(data);

  return comments;
};

export const getChannelSubscription = async () => {
  // const getCookies = await cookies();

  // const token = getCookies.get("next-auth.session-token")?.value || "";
  // console.log(token);
  const session = await getServerSession();

  const { data } = await axios.get(`${YT_BASE_URL}/subscriptions?mine=true`, {
    headers: {
      Authorization: `Bearer ${session?.user.token}`,
    },
  });

  const subscription = subscriptionResponseSchema.parse(data);
  return subscription;
};
