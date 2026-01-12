import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  likes?: number;
};

module.exports = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { slug } = req.query;
  if (!slug) {
    return res.status(400).json({
      message: "Article slug not provided",
    });
  }

  return res.status(200).json({
    likes: 0,
    message: "Likes are disabled until a data store is configured.",
  });
};
