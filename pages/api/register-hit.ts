import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  hits?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query;
  if (!slug) {
    return res.status(400).json({
      message: "Article slug not provided",
    });
  }
  return res.status(200).json({
    hits: 0,
    message: "Hit tracking is disabled until a data store is configured.",
  });
}
