
import { axiosInstance } from "@/lib/others/axiosInstance"
import { createAsyncThunk } from "@reduxjs/toolkit"



export const teammatesActionGet = createAsyncThunk("teammates/GET", async (formData,thunkApi) => {
    try {
        const response = await axiosInstance.post(`/v1/user/get-users-list`, formData)
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

export const teammatesAddPost = createAsyncThunk("teammates/Add", async (req,thunkApi) => {
    try {
        const response = await axiosInstance.post(`/v1/user/add-team-member`, req.data)
        if (response.status === 200 && response.data.statuscode===200) {
            const resData =  response.data
            if(resData && Object.keys(resData).length>0){
                req.resolve()
                return resData.data
            }
        }
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

