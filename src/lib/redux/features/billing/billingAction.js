import baseURL from "@/lib/others/baseURL"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const billingActionGet = createAsyncThunk("billings/GET", async (thunkApi) => {
    try {
        const response = await axios.get(`${baseURL}/v1/billing-plan` ,{
            withCredentials: true
        })
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
        const response = await axios.get(`${baseURL}/v1/client-billing-plan?account_id=${id}` ,{
            withCredentials: true
        })
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