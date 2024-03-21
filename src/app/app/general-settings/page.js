import { Box } from "@mui/material";

import PageHeaderComp from "@/components/common/PageHeaderComp";
import ContainerBox from "@/components/common/ContainerBox";
import GeneralSettingsLayout from "@/components/view/general-settings/GeneralSettingsLayout";

export default function GeneralSettings() {

  return (
    <Box>
      <PageHeaderComp title={"General Settings"} review={""} />
      <ContainerBox>
        <GeneralSettingsLayout />
      </ContainerBox>
    </Box>
  );
}