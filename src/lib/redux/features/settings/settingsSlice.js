import { createSlice } from "@reduxjs/toolkit";
import { settingsActionGet, settingsActionPost } from "./settingsAction";

const initialState = {
  settingsData:{},
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage:null,
}

const settingsSlice = createSlice({
  name:"settings",
  initialState,
  reducers:{
    settingReset:(state)=>{
      state.settingsData = {}
      state.isLoading = false
      state.isSuccess= false
      state.isError= false
      state.errorMessage=null
    }
  },
  extraReducers:(builder)=>{
    builder.addCase( settingsActionGet.pending , (state)=>{
      state.isLoading = true
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = false
      state.settingsData = {}
    });
    builder.addCase( settingsActionGet.fulfilled , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true
      state.settingsData = action.payload
    });
    builder.addCase( settingsActionGet.rejected , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.isError = true;
      state.isSuccess = false
      state.settingsData = {}  
    });
    builder.addCase( settingsActionPost.pending , (state)=>{
      state.isLoading = true
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = false
      state.settingsData = {}
    });
    builder.addCase( settingsActionPost.fulfilled , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true
      state.settingsData = action.payload
    });
    builder.addCase( settingsActionPost.rejected , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.isError = true;
      state.isSuccess = false
      state.settingsData = {}  
    });
  }
})

export const {settingReset} = settingsSlice.actions

export default settingsSlice.reducer;