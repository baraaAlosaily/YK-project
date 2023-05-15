import { Client } from "@notionhq/client";
import type { NextApiRequest,NextApiResponse} from "next";
import IBrand from "./models/brand.model";

const notionSecret="secret_ChJ7AghvfoQvxM7sPTaYIATWe7sgsbR2tNXZtglz8Ef";
const notionDatabaseId="2aa48320ba1a4aa48433e707d3e79897";

const notion= new Client({auth:notionSecret})

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    
    if(!notion||!notionDatabaseId) throw new Error('Missing notion secret or DB-ID.')

    const query=await notion.databases.query({
        database_id:notionDatabaseId
    });

    if(!query) throw new Error('No data found.')

    const brands=query.results.map((result:any)=>{
        const brand:IBrand={
            id:result.id,
            imageUrl:result.properties.image.files[0].file.url,
        }
        return brand;
    })

    res.status(200).json(brands);
}