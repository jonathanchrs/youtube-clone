import { z } from "zod";

const videosResponseSchema = z.object({
  items: z.array(
    z.object({
      kind: z.literal("youtube#video"),
      etag: z.string(),
      id: z.string(),
      snippet: z.object({
        publishedAt: z.string(),
        channelId: z.string(),
        title: z.string(),
        description: z.string(),
        thumbnails: z.object({
          default: z.object({
            url: z.string().url(),
            width: z.number(),
            height: z.number(),
          }),
          medium: z
            .object({
              url: z.string().url(),
              width: z.number(),
              height: z.number(),
            })
            .optional(),
          high: z.object({
            url: z.string().url(),
            width: z.number(),
            height: z.number(),
          }),
          standard: z.object({
            url: z.string().url(),
            width: z.number(),
            height: z.number(),
          }),
          maxres: z.object({
            url: z.string().url(),
            width: z.number(),
            height: z.number(),
          }),
        }),
        channelTitle: z.string(),
        tags: z.array(z.string()).optional(),
        categoryId: z.string(),
        liveBroadcastContent: z.string(),
        localized: z.object({
          title: z.string(),
          description: z.string(),
        }),
      }),
      statistics: z.object({
        viewCount: z.string(),
        likeCount: z.string(),
        favoriteCount: z.string(),
        commentCount: z.string(),
      }),
    })
  ),
});

const channelsResponseSchema = z.object({
  items: z.array(
    z.object({
      kind: z.string(),
      etag: z.string(),
      id: z.object({
        kind: z.string(),
        channelId: z.string(),
      }),
      snippet: z.object({
        publishedAt: z.string(),
        channelId: z.string(),
        title: z.string(),
        description: z.string().optional(),
        thumbnails: z.object({
          default: z.object({
            url: z.string(),
          }),
          medium: z.object({
            url: z.string(),
          }),
          high: z.object({
            url: z.string(),
          }),
        }),
        channelTitle: z.string(),
        liveBroadcastContent: z.string(),
        publishTime: z.string(),
      }),
    })
  ),
});

const channelResponseSchema = z.object({
  items: z.array(
    z.object({
      kind: z.string(),
      etag: z.string(),
      id: z.string(),
      snippet: z.object({
        title: z.string(),
        description: z.string(),
        customUrl: z.string(),
        publishedAt: z.string(),
        thumbnails: z.object({
          default: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number(),
          }),
          medium: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number(),
          }),
          high: z.object({
            url: z.string(),
            width: z.number(),
            height: z.number(),
          }),
        }),
        localized: z.object({
          title: z.string(),
          description: z.string(),
        }),
        country: z.string(),
      }),
    })
  ),
});

export { videosResponseSchema, channelsResponseSchema, channelResponseSchema };
