import { createSlice } from "@reduxjs/toolkit";
import { moderationActionPost } from "./moderationAction";

const initialState = {
  moderationData:{},
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage:null,
}

const moderationSlice = createSlice({
  name:"moderation",
  initialState,
  reducers:{
    moderationReset:(state)=>{
      state.moderationData = {}
      state.isLoading = false
      state.isSuccess= false
      state.isError= false
      state.errorMessage=null
    }
  },
  extraReducers:(builder)=>{
    builder.addCase( moderationActionPost.pending , (state)=>{
      state.isLoading = true
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = false
      state.moderationData = {}
    });
    builder.addCase( moderationActionPost.fulfilled , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true
      state.moderationData = action.payload
    });
    builder.addCase( moderationActionPost.rejected , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.isError = true;
      state.isSuccess = false
      state.moderationData = {}  
    });
  }
})

export const {moderationReset} = moderationSlice.actions

export default moderationSlice.reducer;