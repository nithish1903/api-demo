import { createSlice } from "@reduxjs/toolkit";
import { userDetails, userLogin } from "./userAction";

const initialState = {
  userData:{},
  login:{},
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage:null,
}

const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    userReset:(state)=>{
      state.login = {}
      state.isLoading = false
      state.isSuccess= false
      state.isError= false
      state.errorMessage=null
    }
  },
  extraReducers:(builder)=>{
    builder.addCase( userLogin.pending , (state)=>{
      state.isLoading = true
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = false
      state.login = {}
    });
    builder.addCase( userLogin.fulfilled , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true
      state.login = action.payload
    });
    builder.addCase( userLogin.rejected , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.isError = true;
      state.isSuccess = false
      state.userData = {}
      state.login = {}
    });
    builder.addCase(userDetails.pending , (state)=>{
      state.isLoading = true
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = false
      state.userData = {}
    })
    builder.addCase(userDetails.fulfilled , (state,action)=>{
      state.isLoading = false
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true
      state.userData = action.payload
    })
    builder.addCase(userDetails.rejected , (state,action)=>{
      state.isLoading = false
      state.errorMessage = action.payload;
      state.isError = true;
      state.isSuccess = false
      state.userData = {}
    })
  }
})

export const { userReset } = userSlice.actions

export default userSlice.reducer;