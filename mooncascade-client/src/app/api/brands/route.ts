import axios from "axios";
import { NextResponse } from "next/server";

const DATA_URL='http://localhost:1337/api'

export const getBrands=async()=>{
    const res = await axios.get(`${DATA_URL}/brands`)
    const data = await res
    return data
}