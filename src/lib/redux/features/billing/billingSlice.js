import { createSlice } from "@reduxjs/toolkit";
import { billingActionGet, planActionGet } from "./billingAction";

const initialState = {
  allPlans:[],
  activePlan:{},
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage:null,
}

const billingSlice = createSlice({
  name:"billings",
  initialState,
  reducers:{
    billingReset:(state)=>{
      state.allPlans = {}
      state.activePlan = {}
      state.isLoading = false 
      state.isSuccess= false
      state.isError= false
      state.errorMessage=null
    }
  },
  extraReducers:(builder)=>{
    builder.addCase( billingActionGet.pending , (state)=>{
      state.isLoading = true
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = false
    });
    builder.addCase( billingActionGet.fulfilled , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = null;
      state.isError = false;
      state.isSuccess = true
      state.allPlans = action.payload
    });
    builder.addCase( billingActionGet.rejected , (state,action)=>{
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.isError = true;
      state.isSuccess = false
      state.allPlans = {}  
    });
    builder.addCase( planActionGet.pending , (state)=>{
        state.isLoading = true
        state.errorMessage = null;
        state.isError = false;
        state.isSuccess = false
    });
    builder.addCase( planActionGet.fulfilled , (state,action)=>{
        state.isLoading = false;
        state.errorMessage = null;
        state.isError = false;
        state.isSuccess = true
        state.activePlan = action.payload
    });
    builder.addCase( planActionGet.rejected , (state,action)=>{
        state.isLoading = false;
        state.errorMessage = action.payload;
        state.isError = true;
        state.isSuccess = false
        state.activePlan = {}  
    });
  }
})

export const { billingReset } = billingSlice.actions

export default billingSlice.reducer;