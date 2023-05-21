import { Client } from "@notionhq/client";
import type { NextApiRequest,NextApiResponse} from "next";
import  IBlog  from "./models/blogs.model";
import { url } from "inspector";

const notionSecret="secret_ChJ7AghvfoQvxM7sPTaYIATWe7sgsbR2tNXZtglz8Ef";
const notionDatabaseId="3d7e878978f94cceb8f03407248f7acd";
const notion= new Client({auth:notionSecret})

export default async function handler(req:NextApiRequest,res:NextApiResponse){
        
    if(!notion||!notionDatabaseId) throw new Error('Missing notion secret or DB-ID.')

    const query=await notion.databases.query({
        database_id:notionDatabaseId
    })

    if(!query) throw new Error('No data found.')

    console.log(query)

    const blogs=query.results.map((response:any)=>{
        const blog: IBlog = {
            id: response.id,
            title: response.properties.title.rich_text[0].plain_text,
            imageUrl: response.properties.imageUrl.files[0].file.url,
            description: response.properties.description.rich_text[0].text.content,
            author: response.properties.author.rich_text[0].text.content,
            categories: response.properties.categories.multi_select.map((item: { name: any; }) => item.name),
            date: response.properties.date.date.start,
            link: response.properties.link.rich_text[0]?.plain_text
        };

        return blog;
    })

    res.status(200).json(blogs);
}