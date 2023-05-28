import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // Revalidate our '/' path
  await res.revalidate("/");

  // Return a response to confirm everything went ok
  return res.json({ revalidated: true });
}