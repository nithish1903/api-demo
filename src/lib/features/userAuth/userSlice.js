import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./userAction";

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
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase( userLogin.pending , (state)=>{
      state.isLoading = true
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = false
      state.login = {}
      state.userData = {}
    });
    builder.addCase( userLogin.fulfilled , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true
      state.userData = {}
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
  }
})

export default userSlice.reducer;