import { NotionAPI } from 'notion-client';
import type { NextApiRequest,NextApiResponse} from "next";
const notion = new NotionAPI()

export default async function handler(req:NextApiRequest,res:NextApiResponse){    
    console.log(req.query.queryParam)
    const recordMap = await notion.getPage(req.query.queryParam as unknown as string)
    res.status(200).json(recordMap)
}