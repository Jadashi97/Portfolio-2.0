
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { CustomApiError, PageInfo } from "../typings";
import { sanityClient } from "../sanity";

const query = groq`
  *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const pageInfo: PageInfo = await sanityClient.fetch(query);
    
    return res.status(200).json({ pageInfo });
  } catch (err) {
    console.log(err)
    const error: CustomApiError = {
      status: 500,
      message: (err as unknown as any).message,
      pageInfo: null
    };

    return res.status(500).json(error)
  }
}