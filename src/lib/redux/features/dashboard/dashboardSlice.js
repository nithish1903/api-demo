import { createSlice } from "@reduxjs/toolkit";
import { dashboardActionPost } from "./dashboardAction";

const initialState = {
  dashboardData:{},
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage:null,
}

const dashboardSlice = createSlice({
  name:"dashboard",
  initialState,
  reducers:{
    dashboardReset:(state)=>{
      state.dashboardData = {}
      state.isLoading = false
      state.isSuccess= false
      state.isError= false
      state.errorMessage=null
    }
  },
  extraReducers:(builder)=>{
    builder.addCase( dashboardActionPost.pending , (state)=>{
      state.isLoading = true
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = false
      state.dashboardData = {}
    });
    builder.addCase( dashboardActionPost.fulfilled , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true
      state.dashboardData = action.payload
    });
    builder.addCase( dashboardActionPost.rejected , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.isError = true;
      state.isSuccess = false
      state.dashboardData = {}  
    });
  }
})

export const {dashboardReset} = dashboardSlice.actions

export default dashboardSlice.reducer;