import { Client } from "@notionhq/client";
import type { NextApiRequest,NextApiResponse} from "next";
import { IPosts } from "../models/posts.model";

const notionSecret="secret_ChJ7AghvfoQvxM7sPTaYIATWe7sgsbR2tNXZtglz8Ef";
const notionDatabaseId="e121c8ed87f343ee92b0d80767ab6bf4";

const notion= new Client({auth:notionSecret})

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const filterBase:string='wise'
    
    if(!notion||!notionDatabaseId) throw new Error('Missing notion secret or DB-ID.')

    const query=await notion.databases.query({
        database_id:notionDatabaseId,
        filter:{
                    property:'client',
                    rich_text:{
                        equals:filterBase
                    }
        }
    })

    if(!query) throw new Error('No data found.')

    const blog: IPosts = {
        id: query.results[0].id,
        client: query.results[0].properties.client.title[0].plain_text,
        mainImage: query.results[0].properties.mainImage.files[0].file.url,
        generalDesc: query.results[0].properties.generalDesc.rich_text[0].plain_text,
        solution: query.results[0].properties.solution.rich_text[0].plain_text,
        sector: query.results[0].properties.sector.rich_text[0].plain_text,
        deliverables: query.results[0].properties.deliverables.multi_select.map((item: { name: any; }) => item.name),
        desc1: query.results[0].properties.desc1.rich_text[0].plain_text,
        desc2: query.results[0].properties.desc2.rich_text[0]?.plain_text??undefined,
        ques1: query.results[0].properties.ques1.rich_text[0]?.plain_text??'',
        ans1: query.results[0].properties.ans1.rich_text[0]?.plain_text??'',
        ques2: query.results[0].properties.ques2.rich_text[0]?.plain_text??'',
        ans2: query.results[0].properties.ans2.rich_text[0]?.plain_text??'',
        media1: query.results[0].properties.media1.files[0].file.url,
        media2: query.results[0].properties.media2.files[0].file.url,
        media3: query.results[0].properties.media3.files[0].file.url,
        quoteTalker: query.results[0].properties.quoteTalker.rich_text[0].plain_text,
        externalLink: query.results[0].properties.externalLink.url,
        solutionDesc: query.results[0].properties.solutionDesc.rich_text[0]?.plain_text??'',
        quote: query.results[0].properties.quote.rich_text[0].plain_text,
      };

    res.status(200).json(blog);
}