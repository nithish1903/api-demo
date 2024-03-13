import { setCookiesNext } from "@/lib/cookies/cookiesNext"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const userLogin = createAsyncThunk("user/login", async (req, thunkApi) => {
    try {
        const response = await axios.post("http://localhost:9024/v1/user/login", req.formData,{
            withCredentials: true
        })
        if (response.status === 200 && response.data.statuscode===200) {
            const resData =  response.data
            if(resData && resData.data && Object.keys(resData.data).length>0){
                const data = resData.data
                // const setCookieHeader = response.headers["set-cookie"]
                // console.log('Set-Cookie:', setCookieHeader);
                setCookiesNext("user",data)
                req.resolve()
                return data
            }
        }
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})