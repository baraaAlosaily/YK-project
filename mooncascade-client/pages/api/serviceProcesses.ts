import { Client } from "@notionhq/client";
import type { NextApiRequest,NextApiResponse} from "next";
import IServiceProcess from './models/serviceProcess.model'


const notionSecret="secret_ChJ7AghvfoQvxM7sPTaYIATWe7sgsbR2tNXZtglz8Ef";
const notionDatabaseId="a6c47434e916482d840642c7e8779582";

const notion= new Client({auth:notionSecret})

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    
    if(!notion||!notionDatabaseId) throw new Error('Missing notion secret or DB-ID.')

    const query=await notion.databases.query({
        database_id:notionDatabaseId
    });

    if(!query) throw new Error('No data found.')

    const serviceProsses=query.results.map((result:any)=>{
       const serviceProcess:IServiceProcess={
                id:result.id,
                title:result.properties.title.rich_text[0].text.content,
                description:result.properties.desc.rich_text[0].text.content,

       }
       return serviceProcess;
    })

    res.status(200).json(serviceProsses);
}