import { Client } from "@notionhq/client";
import type { NextApiRequest,NextApiResponse} from "next";
import {IPost} from "../models/posts.model";

const notionSecret="secret_ChJ7AghvfoQvxM7sPTaYIATWe7sgsbR2tNXZtglz8Ef";
const notionDatabaseId="e121c8ed87f343ee92b0d80767ab6bf4";
const notion= new Client({auth:notionSecret})

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    
    if(!notion||!notionDatabaseId) throw new Error('Missing notion secret or DB-ID.')

    const query=await notion.databases.query({
        database_id:notionDatabaseId
    })

    if(!query) throw new Error('No data found.')

    const posts=query.results.map((response:any)=>{
        const post: IPost = {
            id: response.id,
            client: response.properties.client.title[0].plain_text,
            sector: response.properties.sector.multi_select.map((item: { name: any; }) => item.name),
            solution: response.properties.solution.multi_select.map((item: { name: any; }) => item.name),
            smImage: response.properties.smImage.files[0].file.url,
          };
          return post;
    })

    res.status(200).json(posts);
}