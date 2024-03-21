import { createSlice } from "@reduxjs/toolkit";
import { generalSettingsGet, publicKey_update } from "./generalSettingsAction";

const initialState = {
    settings:{},
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage:null,
}

const generalSettingsSlice = createSlice({
  name:"generalSettings",
  initialState,
  reducers:{
    generalSettingsReset:(state)=>{
      state.settings = {}
      state.isLoading = false
      state.isSuccess= false
      state.isError= false
      state.errorMessage=null
    }
  },
  extraReducers:(builder)=>{
    builder.addCase( generalSettingsGet.pending , (state)=>{
      state.isLoading = true
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = false
      state.settings = {}
    });
    builder.addCase( generalSettingsGet.fulfilled , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true
      state.settings = action.payload
    });
    builder.addCase( generalSettingsGet.rejected , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.isError = true;
      state.isSuccess = false
      state.settings = {}
    });
    
    builder.addCase( publicKey_update.pending , (state)=>{
      state.isLoading = true
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = false
      state.settings = {}
    });
    builder.addCase( publicKey_update.fulfilled , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true
      const { payload } = action;
      state.settings = { ...state.settings,"public_key":payload.public_key };
    });
    builder.addCase( publicKey_update.rejected , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.isError = true;
      state.isSuccess = false
      state.settings = {}
    });
  }
})

export const { generalSettingsReset } = generalSettingsSlice.actions

export default generalSettingsSlice.reducer;