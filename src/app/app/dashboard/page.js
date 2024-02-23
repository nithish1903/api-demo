import { Box } from "@mui/material";

import ContainerBox from "@/components/common/ContainerBox";
import HearBar from "@/components/common/HearBar";
import DateDB from "@/components/view/dashboard/DateDB";

export default function Dashboard() {

  return (
    <Box>
      <HearBar title={"Dashboard"} review={"Review Dashboard"} />
      <ContainerBox>
        <DateDB />
      </ContainerBox>
    </Box>
  );
}