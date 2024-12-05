"use server";

import {
  channelResponseSchema,
  channelsResponseSchema,
  videosResponseSchema,
} from "@/zod";
import axios, { AxiosError } from "axios";

const YT_BASE_URL = process.env.SECRET_YOUTUBE_API_BASE_URL;
const YT_API_KEY = process.env.SECRET_YOUTUBE_API_KEY;

export const getVideos = async () => {
  const { data } = await axios.get(
    `${YT_BASE_URL}/videos?key=${YT_API_KEY}&chart=mostPopular&part=snippet,statistics,contentDetails&field=items(id,snippet,statistics,contentDetails)`
  );
  const videos = videosResponseSchema.parse(data);
  return videos;
};

export const getChannel = async (channelId: string) => {
  const { data } = await axios.get(
    `${YT_BASE_URL}/channels?key=${YT_API_KEY}&id=${channelId}&part=snippet`
  );
  const channel = channelResponseSchema.parse(data);
  return channel;
};

export const getRandomChannels = async () => {
  const { data } = await axios.get(
    `${YT_BASE_URL}/search?key=${YT_API_KEY}&part=snippet&channelType=any&type=channel&q=game`
  );
  const channel = channelsResponseSchema.parse(data);
  console.log(channel);

  return channel;
};
