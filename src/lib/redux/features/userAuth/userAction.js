import { setCookiesNext } from "@/lib/cookies/cookiesNext"
import { axiosInstance, baseURL } from "@/lib/others/axiosInstance"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Cookies from "js-cookie"


export const userLogin = createAsyncThunk("user/login", async (req, thunkApi) => {
    try {
        const response = await axios.post(`${baseURL}/v1/user/login`, req.formData)
        if (response.status === 200 && response.data.statuscode===200) {
            const resData =  response.data
            if(resData && resData.data && Object.keys(resData.data).length>0){
                const data = resData.data
                if(data.token){
                    setCookiesNext("token",data.token)
                }
                delete data.token
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
        const response = await  axiosInstance.post(`/v1/user/get-user-details`, formData, {
            headers:{
                "Authorization": Cookies.get("token") ? `Bearer ${JSON.parse(Cookies.get("token"))}` : ''
            }
        } )
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