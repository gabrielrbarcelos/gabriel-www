import type { NextApiRequest, NextApiResponse } from "next";
import { pick } from "@contentlayer/client";
import { allPosts } from ".contentlayer/generated";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = allPosts.map((post) =>
    pick(post, ["slug", "title", "publishedAt", "image", "tags", "summary"])
  );
  const postsWithLikes = posts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .map((post) => ({
      ...post,
      id: post.slug,
      likes: 0,
      views: 0,
    }));

  res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
  res.status(200).json({ posts: postsWithLikes });
}
