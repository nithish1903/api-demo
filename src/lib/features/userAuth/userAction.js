import { setCookiesNext } from "@/lib/cookiesNext"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



// export const userLogin = createAsyncThunk("user/login", async (req, thunkApi) => {
//     try {
//         const response = await axios.post("http://localhost:9024/v1/user/login", req.formData)
//         if (response.status === 200 && response.data.statuscode===200) {
//             const resData =  response.data
//             if(resData && resData.data && Object.keys(resData.data).length>0){
//                 const data = resData.data
//                 console.log(response.headers);

//                 console.log(response.headers['content-type']);
//                 console.log(response.headers['cache-control']);
//                 console.log(response.headers['expires']);
//                 console.log(response.headers['pragma']);
//                 req.resolve()
//                 return data
//             }
//         }
//     } catch (error) {
//         return thunkApi.rejectWithValue(error)
//     }
// })


export const userLogin = createAsyncThunk("user/login", (req, thunkApi) => {
    axios.post("http://localhost:9024/v1/user/login", req.formData,  {
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .then((response)=>{
        //  // Access Set-Cookie header
        console.log(JSON.stringify(response));
        const sessionCookie = response.headers['set-cookie'];
        console.log("---sessionCookie---")
        console.log(sessionCookie);

        if (response.status === 200 && response.data.statuscode===200) {
            const resData =  response.data
            if(resData && resData.data && Object.keys(resData.data).length>0){
                const data = resData.data
                req.resolve()
                return data
            }
        }
    })
    .catch((error)=>{
        return thunkApi.rejectWithValue(error)
    })
})