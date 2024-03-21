import { createSlice } from "@reduxjs/toolkit";
import { teammatesActionGet, teammatesAddPost } from "./teammatesAction";

const initialState = {
  teammatesData:{},
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage:null,
}

const teammatesSlice = createSlice({
  name:"teammates",
  initialState,
  reducers:{
    teammatesReset:(state)=>{
      state.teammatesData = {}
      state.isLoading = false
      state.isSuccess= false
      state.isError= false
      state.errorMessage=null
    }
  },
  extraReducers:(builder)=>{
    builder.addCase( teammatesActionGet.pending , (state)=>{
      state.isLoading = true
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = false
    });
    builder.addCase( teammatesActionGet.fulfilled , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true
      state.teammatesData = action.payload
    });
    builder.addCase( teammatesActionGet.rejected , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.isError = true;
      state.isSuccess = false
      state.teammatesData = {}  
    });
    builder.addCase( teammatesAddPost.fulfilled , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true;
      // if (state.teammatesData && state.teammatesData.data) {
      //   state.teammatesData.data = [...state.teammatesData.data, action.payload];
      // }
    });
    builder.addCase( teammatesAddPost.rejected , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.isError = true;
      state.isSuccess = false
    });
  }
})

export const { teammatesReset } = teammatesSlice.actions

export default teammatesSlice.reducer;