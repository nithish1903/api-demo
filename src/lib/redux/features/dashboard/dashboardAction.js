import { axiosInstance } from "@/lib/others/axiosInstance"
import { createAsyncThunk } from "@reduxjs/toolkit"



export const dashboardActionPost = createAsyncThunk("user/dasnboard", async (form, thunkApi) => {
    try {
        const response = await axiosInstance.post(`/v1/shopify/get-reviews-count`, form)
        if (response.status === 200 && response.data.statuscode===200) {
            const resData =  response.data
            if(resData && resData.data && Object.keys(resData.data).length>0){
                return resData.data
            }
        }
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})
