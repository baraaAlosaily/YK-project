import { Client } from "@notionhq/client";
import type { NextApiRequest,NextApiResponse} from "next";
import { SomeClient } from "./models/someclients.model";

const notionSecret="secret_ChJ7AghvfoQvxM7sPTaYIATWe7sgsbR2tNXZtglz8Ef";
const notionDatabaseId="5e03acdecf4a4380b8648274c1158c64";

const notion= new Client({auth:notionSecret})

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    
    if(!notion||!notionDatabaseId) throw new Error('Missing notion secret or DB-ID.')

    const query=await notion.databases.query({
        database_id:notionDatabaseId
    });

    if(!query) throw new Error('No data found.')

    const someClients=query.results.map((result:any)=>{
       const client:SomeClient={
                id:result.id,
                imageUrl:result.properties.imageUrl.files[0].file.url,
       }
       return client;
    })

    res.status(200).json(someClients);
}