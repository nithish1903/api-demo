import baseURL from "@/lib/others/baseURL"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const moderationActionPost = createAsyncThunk("user/moderation", async (form, thunkApi) => {
    try {
        const response = await axios.post(`${baseURL}/v1/shopify/get-reviews-list`, form,{
            withCredentials: true
        })
        if (response.status === 200 && response.data.statuscode===200) {
            const resData =  response.data
            if(resData && Object.keys(resData).length>0){
                return resData
            }
        }
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})
