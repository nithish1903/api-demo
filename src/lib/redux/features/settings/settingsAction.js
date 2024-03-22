import { axiosInstance } from "@/lib/others/axiosInstance"
import { createAsyncThunk } from "@reduxjs/toolkit"



export const settingsActionGet = createAsyncThunk("settings/GET", async (thunkApi) => {
    try {
        const response = await axiosInstance.post(`/v1/user/get-review-settings`, {})
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



export const settingsActionPost = createAsyncThunk("settings/POST", async (form, thunkApi) => {
    try {
        const response = await axiosInstance.post(`/v1/user/save-review-settings`, form)
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

