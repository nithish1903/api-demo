import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userAuth/userSlice";
import dashboardSlice from "./features/dashboard/dashboardSlice";
import moderationSlice from "./features/moderation/moderationSlice";


const store = configureStore({
    reducer:{
        user:userSlice,
        dashboard:dashboardSlice,
        moderation:moderationSlice,
    },
})


export default store