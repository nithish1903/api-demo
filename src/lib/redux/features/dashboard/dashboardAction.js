import { axiosInstance } from "@/lib/others/axiosInstance"
import { createAsyncThunk } from "@reduxjs/toolkit"
import Cookies from "js-cookie"



export const dashboardActionPost = createAsyncThunk("user/dasnboard", async (form, thunkApi) => {
    try {
        const response = await axiosInstance.post(`/v1/shopify/get-reviews-count`, form, {
            headers:{
                "Authorization": Cookies.get("token") ? `Bearer ${JSON.parse(Cookies.get("token"))}` : ''
            }
        } )
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
