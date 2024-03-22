import { axiosInstance } from "@/lib/others/axiosInstance"
import { createAsyncThunk } from "@reduxjs/toolkit"
import Cookies from "js-cookie"


export const billingActionGet = createAsyncThunk("billings/GET", async (thunkApi) => {
    try {
        const response = await axiosInstance.get(`/v1/billing-plan`, {
            headers:{
                "Authorization": Cookies.get("token") ? `Bearer ${JSON.parse(Cookies.get("token"))}` : ''
            }
        } )
        if (response.status === 200) {
            const response_data =  response.data
            if(response_data && response_data.data){
                return response_data.data
            }
        }
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})


export const planActionGet = createAsyncThunk("plan/GET", async (id,thunkApi) => {
    try {
        const response = await axiosInstance.get(`/v1/client-billing-plan?account_id=${id}` , {
            headers:{
                "Authorization": Cookies.get("token") ? `Bearer ${JSON.parse(Cookies.get("token"))}` : ''
            }
        } )
        if (response.status === 200) {
            const resData =  response.data
            if(resData && Object.keys(resData).length>0){
                return resData
            }
        }
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})