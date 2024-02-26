import { NextResponse } from "next/server";

export async function POST(request){
    try {

        const reqBody = await request.json()
        console.log(reqBody);

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", reqBody, {
            httpOnly: true, 
        })
        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}