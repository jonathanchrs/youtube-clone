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
          high: z
            .object({
              url: z.string().url(),
              width: z.number(),
              height: z.number(),
            })
            .optional(),
          standard: z
            .object({
              url: z.string().url(),
              width: z.number(),
              height: z.number(),
            })
            .optional(),
          maxres: z
            .object({
              url: z.string().url(),
              width: z.number(),
              height: z.number(),
            })
            .optional(),
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
        commentCount: z.string().optional(),
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
        country: z.string().optional(),
      }),
      statistics: z.object({
        viewCount: z.string(),
        subscriberCount: z.string(),
        hiddenSubscriberCount: z.boolean(),
        videoCount: z.string(),
      }),
    })
  ),
});

const subscriptionResponseSchema = z.object({
  items: z.array(
    z.object({
      kind: z.literal("youtube#subscription"),
      etag: z.string(),
      id: z.string(),
      snippet: z.object({
        publishedAt: z.string().datetime(),
        channelTitle: z.string(),
        title: z.string(),
        description: z.string(),
        resourceId: z.object({
          kind: z.string(),
          channelId: z.string(),
        }),
        channelId: z.string(),
        thumbnails: z.record(
          z.string(),
          z.object({
            url: z.string(),
            width: z.number().int().nonnegative(),
            height: z.number().int().nonnegative(),
          })
        ),
      }),
      contentDetails: z.object({
        totalItemCount: z.number().int().nonnegative(),
        newItemCount: z.number().int().nonnegative(),
        activityType: z.string(),
      }),
      subscriberSnippet: z
        .object({
          title: z.string(),
          description: z.string(),
          channelId: z.string(),
          thumbnails: z.record(
            z.string(),
            z.object({
              url: z.string(),
              width: z.number().int().nonnegative(),
              height: z.number().int().nonnegative(),
            })
          ),
        })
        .optional(),
    })
  ),
});

const commentResponseSchema = z.object({
  kind: z.literal("youtube#commentThreadListResponse"),
  etag: z.string(),
  nextPageToken: z.string().optional(),
  pageInfo: z.object({
    totalResults: z.number().int().nonnegative(),
    resultsPerPage: z.number().int().nonnegative(),
  }),
  items: z.array(
    z.object({
      kind: z.literal("youtube#commentThread"),
      etag: z.string(),
      id: z.string(),
      snippet: z.object({
        channelId: z.string(),
        videoId: z.string(),
        topLevelComment: z.object({
          kind: z.literal("youtube#comment"),
          etag: z.string(),
          id: z.string(),
          snippet: z.object({
            channelId: z.string(),
            videoId: z.string(),
            textDisplay: z.string(),
            textOriginal: z.string(),
            authorDisplayName: z.string(),
            authorProfileImageUrl: z.string(),
            authorChannelUrl: z.string(),
            authorChannelId: z.object({
              value: z.string(),
            }),
            canRate: z.boolean(),
            viewerRating: z.string(),
            likeCount: z.number().int().nonnegative(),
            publishedAt: z.string().datetime(),
            updatedAt: z.string().datetime(),
          }),
        }),
        canReply: z.boolean(),
        totalReplyCount: z.number().int().nonnegative(),
        isPublic: z.boolean(),
      }),
      replies: z
        .object({
          comments: z.array(
            z.object({
              kind: z.literal("youtube#comment"),
              etag: z.string(),
              id: z.string(),
              snippet: z.object({
                channelId: z.string(),
                videoId: z.string(),
                textDisplay: z.string(),
                textOriginal: z.string(),
                parentId: z.string().optional(),
                authorDisplayName: z.string(),
                authorProfileImageUrl: z.string(),
                authorChannelUrl: z.string(),
                authorChannelId: z.object({
                  value: z.string(),
                }),
                canRate: z.boolean(),
                viewerRating: z.string(),
                likeCount: z.number().int().nonnegative(),
                publishedAt: z.string().datetime(),
                updatedAt: z.string().datetime(),
              }),
            })
          ),
        })
        .optional(),
    })
  ),
});

export {
  videosResponseSchema,
  channelsResponseSchema,
  channelResponseSchema,
  subscriptionResponseSchema,
  commentResponseSchema,
};
