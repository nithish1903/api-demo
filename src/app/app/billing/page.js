import { Box } from "@mui/material";

import ContainerBox from "@/components/common/ContainerBox";
import PageHeaderComp from "@/components/common/PageHeaderComp";
import BillingMainCompo from "@/components/view/billing/BillingMainCompo";

export default function Dashboard() {

  return (
    <Box>
      <PageHeaderComp title={"Billing"} review={""} />
      <ContainerBox>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="">
                <h5>Billing</h5>
              </div>
            </div>
            <div className="col-span-12">
              <BillingMainCompo />
            </div>
          </div>
      </ContainerBox>
    </Box>
  );
}