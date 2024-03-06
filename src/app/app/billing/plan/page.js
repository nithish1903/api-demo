import { Box } from "@mui/material";

import ContainerBox from "@/components/common/ContainerBox";
import PageHeaderComp from "@/components/common/PageHeaderComp";
import BillingPlanLayout from "@/components/view/billing-plan/BillingPlanLayout";

export default function Dashboard() {

  return (
    <Box>
      <PageHeaderComp title={"Billing"} review={""} />
      <ContainerBox>
          <BillingPlanLayout />
      </ContainerBox>
    </Box>
  );
}