import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const teammatesActionGet = createAsyncThunk("teammates/GET", async (formData,thunkApi) => {
    try {
        const response = await axios.post("http://localhost:9024/v1/user/get-users-list", formData ,{
            withCredentials: true
        })
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

// localhost:9024/v1/user/add-team-member

export const teammatesAddPost = createAsyncThunk("teammates/Add", async (req,thunkApi) => {
    try {
        const response = await axios.post("http://localhost:9024/v1/user/add-team-member", req.data ,{
            withCredentials: true
        })
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
