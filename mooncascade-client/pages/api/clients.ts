import { Client } from "@notionhq/client";
import type { NextApiRequest,NextApiResponse} from "next";
import { IClient } from "../models/clients.model";

const notionSecret="secret_ChJ7AghvfoQvxM7sPTaYIATWe7sgsbR2tNXZtglz8Ef";
const notionDatabaseId="ce5f6b2093cd474eb33e2690bbfa6b01";

const notion= new Client({auth:notionSecret})

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    
    if(!notion||!notionDatabaseId) throw new Error('Missing notion secret or DB-ID.')

    const query=await notion.databases.query({
        database_id:notionDatabaseId
    });

    if(!query) throw new Error('No data found.')

    const clients=query.results.map((result:any)=>{
       const client:IClient={
              id:result.id,
              imageUrl:result.properties.imageUrl.files[0].file.url,
              clientName:result.properties.clientName.rich_text[0].text.content,
       }
       return client;
    })

    res.status(200).json(clients);
}