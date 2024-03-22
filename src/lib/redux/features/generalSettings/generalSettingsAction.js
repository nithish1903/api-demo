import { axiosInstance } from "@/lib/others/axiosInstance"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const generalSettingsGet = createAsyncThunk("generalSettings/GET", async (formData, thunkApi) => {
    try {
        const response = await axiosInstance.post(`/v1/user/get-account-details`, formData)
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


export const publicKey_update = createAsyncThunk("publicKey/update", async (formData, thunkApi) => {
    try {
        const response = await axiosInstance.post(`/v1/user/update-account-details`, formData)
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