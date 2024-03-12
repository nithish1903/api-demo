import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const response = await axios.post("http://localhost:9024/v1/user/login", req.formData)
        if (response.status === 200 && response.data.statuscode===200) {
            const resData =  response.data
            if(resData && resData.data && Object.keys(resData.data).length>0){
                const data = resData.data
                console.log(data,"red succ")
                const nextResponse = NextResponse.json(data)
                nextResponse.cookies.set("token", data, { httpOnly: true, })
                req.resolve()
                return response.data.data
            }
        }
        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}