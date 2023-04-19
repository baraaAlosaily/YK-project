import axios from "axios";
import { NextResponse } from "next/server";

const DATA_URL='http://localhost:1337/api'

export const getExpandedData=async()=>{
    const res = await axios.get(`${DATA_URL}/expands`)
    const data = await res
    return data
}