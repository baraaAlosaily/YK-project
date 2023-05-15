import { Client } from "@notionhq/client";
import type { NextApiRequest,NextApiResponse} from "next";
import { IHomeExpand } from "./models/homeExpand.model";

const notionSecret="secret_ChJ7AghvfoQvxM7sPTaYIATWe7sgsbR2tNXZtglz8Ef";
const notionDatabaseId="6f82390cc8d441c89cf5238050b605cb";

const notion= new Client({auth:notionSecret})

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    
    if(!notion||!notionDatabaseId) throw new Error('Missing notion secret or DB-ID.')

    const query=await notion.databases.query({
        database_id:notionDatabaseId
    });

    if(!query) throw new Error('No data found.')

    const homeExpands=query.results.map((result:any)=>{
        const homeExpand:IHomeExpand={
            id:result.id,
            title:result.properties.title.rich_text[0].text.content,
            description:result.properties.description.rich_text[0].text.content,
        }
        return homeExpand;
    })

    res.status(200).json(homeExpands);
}