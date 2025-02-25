import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userAuth/userSlice";
import dashboardSlice from "./features/dashboard/dashboardSlice";
import moderationSlice from "./features/moderation/moderationSlice";
import settingsSlice from "./features/settings/settingsSlice";
import teammatesSlice from "./features/teammates/teammatesSlice";
import billingSlice from "./features/billing/billingSlice";
import generalSettingsSlice from "./features/generalSettings/generalSettingsSlice";


const store = configureStore({
    reducer:{
        user:userSlice,
        dashboard:dashboardSlice,
        moderation:moderationSlice,
        settings:settingsSlice,
        teammates:teammatesSlice,
        billings:billingSlice,
        generalSettings:generalSettingsSlice
    },
})


export default store