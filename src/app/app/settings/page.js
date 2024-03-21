import { Box } from "@mui/material";

import ContainerBox from "@/components/common/ContainerBox";
import PageHeaderComp from "@/components/common/PageHeaderComp";
import TabPreviewES from "@/components/view/email-settings/TabPreviewES";

export default function Dashboard() {

  return (
    <Box>
      <PageHeaderComp title={"Settings"} review={""} />
      <ContainerBox>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="">
                <h5>Settings</h5>
              </div>
            </div>
            <div className="col-span-12">
              <TabPreviewES />
            </div>
          </div>
      </ContainerBox>
    </Box>
  );
}