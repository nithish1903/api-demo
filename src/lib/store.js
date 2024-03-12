import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userAuth/userSlice";
import dashboardSlice from "./features/dashboard/dashboardSlice";


const store = configureStore({
    reducer:{
        user:userSlice,
        dashboard:dashboardSlice,
    }
})


export default store