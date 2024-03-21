import { setCookiesNext } from "@/lib/cookies/cookiesNext"
import baseURL from "@/lib/others/baseURL"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const userLogin = createAsyncThunk("user/login", async (req, thunkApi) => {
    try {
        const response = await axios.post(`${baseURL}/v1/user/login`, req.formData ,{withCredentials: true})
        if (response.status === 200 && response.data.statuscode===200) {
            const resData =  response.data
            if(resData && resData.data && Object.keys(resData.data).length>0){
                const data = resData.data
                setCookiesNext("user",data)
                req.resolve()
                return data
            }
        }
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const userDetails = createAsyncThunk("user/get", async (formData, thunkApi) => {
    try {
        const response = await  axios.post(`${baseURL}/v1/user/get-user-details`, formData ,{withCredentials: true})
        if (response.status === 200 && response.data.statuscode===200) {
            const resData =  response.data
            if(resData && resData.data && Object.keys(resData.data).length>0){
                const data = resData.data
                return data
            }
        }
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})