import { NextRequest, NextResponse } from "next/server";
import {parse} from "json2csv"
import {writeFile} from "fs/promises"
import { join } from "path"

export async function GET(req: NextRequest) {
    try {
        const userData = await req.json();
        const csv = parse(userData);

        const filename = `user_data_${Date.now()}.csv`; // Add file extension
        const filepath = join(process.cwd(), "public", "downloads", filename);

        await writeFile(filepath, csv); // Use await to properly handle async operation

        return NextResponse.redirect(`/download/${filename}`);
    } catch (error) {
        console.error("Error writing file:", error);
        return  NextResponse.error();
    }
}



export async function POST(req: Request){
    const body = await req.json()
    console.log(body)

    return new Response("OK")

}