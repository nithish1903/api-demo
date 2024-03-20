import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const dashboardActionPost = createAsyncThunk("user/dasnboard", async (form, thunkApi) => {
    try {
        const response = await axios.post("http://localhost:9024/v1/shopify/get-reviews-count", form,{
            withCredentials: true
        })
        if (response.status === 200 && response.data.statuscode===200) {
            const resData =  response.data
            if(resData && resData.data && Object.keys(resData.data).length>0){
                return resData.data
            }
        }
    } catch (error) {
        // if(error.response.status===401){
        //     Cookies.remove("user")
        //     Cookies.remove("user-cache")
        //     redirect("/auth/login")
        // }
        return thunkApi.rejectWithValue(error)
    }
})
