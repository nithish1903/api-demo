"use server"
import baseURL from "@/lib/others/baseURL";
import axios from "axios";
import { cookies } from 'next/headers'
import { NextResponse } from "next/server";

// export async function POST(){
//     const loginReq = {
//         email: "support@kasplo.com",
//         password: "syspass"
//       };

//     try {
//         const response = await 

//     } catch (error) {
//         return NextResponse.json({error: error.message}, {status: 500})
//     }
// }

// export const POST = ()=>{
//     const loginReq = {
//         email: "support@kasplo.com",
//         password: "syspass"
//     };
//     axios.post(`${baseURL}/v1/user/login`,loginReq,{
//         headers: {
//         'Content-Type': 'application/json', 
//         },
//         credentials: 'same-origin',
//     })
//     .then((response)=>{
//         const setCookieHeader = response.headers.getSetCookie()
//         console.log('Set-Cookie:', setCookieHeader);

//         const data = response.data
//         NextResponse.json(setCookieHeader)
//         return setCookieHeader;
//     })
//     .catch((error)=>{
//         return NextResponse.json({error: error.message})
//     })
// }

const POST =  async () => {
    const loginReq = {
        email: "support@kasplo.com",
        password: "syspass"
      };

    try {
        const response = await fetch(`${baseURL}/v1/user/login`,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', 
            },
            credentials:"include",
            ache:"no-store",
            body: JSON.stringify(loginReq)
        });
  
       const cookieStore = res.headers;
       const setCookieHeader = cookieStore.get('set-cookie');
       console.log('setCookieHeader:', setCookieHeader);

        const data = await response.json();
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };


export {POST}

