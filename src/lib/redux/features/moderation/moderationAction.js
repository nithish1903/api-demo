import { axiosInstance } from "@/lib/others/axiosInstance"
import { createAsyncThunk } from "@reduxjs/toolkit"



export const moderationActionPost = createAsyncThunk("user/moderation", async (form, thunkApi) => {
    try {
        const response = await axiosInstance.post(`/v1/shopify/get-reviews-list`, form)
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
