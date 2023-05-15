import { Client } from "@notionhq/client";
import type { NextApiRequest,NextApiResponse} from "next";
import { IService } from "./models/services.model";

const notionSecret="secret_ChJ7AghvfoQvxM7sPTaYIATWe7sgsbR2tNXZtglz8Ef";
const notionDatabaseId="117ba7bda2634e90a1724f60e059c764";

const notion= new Client({auth:notionSecret})

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    
    if(!notion||!notionDatabaseId) throw new Error('Missing notion secret or DB-ID.')

    const query=await notion.databases.query({
        database_id:notionDatabaseId
    });

    if(!query) throw new Error('No data found.')

    const services=query.results.map((result:any)=>{
       const service:IService={
                id:result.id,
                title:result.properties.title.title[0].text.content,
                shortDesc:result.properties.shortDesc.rich_text[0].text.content,
                services:result.properties.services.multi_select.map((service:any)=>service.name),

       }
       return service;
    })

    res.status(200).json(services);
}