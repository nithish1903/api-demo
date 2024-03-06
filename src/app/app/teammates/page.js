import { Box } from "@mui/material";

import PageHeaderComp from "@/components/common/PageHeaderComp";
import TeammatesLayout from "@/components/view/teammates/TeammatesLayout";
import ProfileEmailPreferences from "@/components/view/teammates/ProfileEmailPreferences";

export default function Dashboard() {

  return (
    <Box>
      <PageHeaderComp title={"Teammates"} review={""} />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-8">
          <TeammatesLayout />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ProfileEmailPreferences />
        </div>
      </div>
    </Box>
  );
}