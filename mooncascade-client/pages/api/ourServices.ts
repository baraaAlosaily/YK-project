import { Client } from "@notionhq/client";
import type { NextApiRequest,NextApiResponse} from "next";
import { IProcess } from "./models/processes.model";
import { IOurService } from "./models/ourServices";

const notionSecret="secret_ChJ7AghvfoQvxM7sPTaYIATWe7sgsbR2tNXZtglz8Ef";
const notionDatabaseId="d2bacf9ab8e84d5cbb7a5fb0788f4ba3";

const notion= new Client({auth:notionSecret})

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    
    if(!notion||!notionDatabaseId) throw new Error('Missing notion secret or DB-ID.')

    const query=await notion.databases.query({
        database_id:notionDatabaseId
    });

    if(!query) throw new Error('No data found.')

    const homeExpands=query.results.map((result:any)=>{
        const homeExpand:IOurService={
            id:result.id,
            title:result.properties.title.rich_text[0].text.content,
            description:result.properties.description.rich_text[0].text.content,
            services:result.properties.services.multi_select.map((service:any)=>service.name)
        }
        return homeExpand;
    })

    res.status(200).json(homeExpands);
}