import { Box } from "@mui/material";

import PageHeaderComp from "@/components/common/PageHeaderComp";
import ModerationLayout from "@/components/view/moderation/ModerationLayout";

export default function moderation() {

  return (
    <Box>
      <PageHeaderComp title={"Moderation"} review={""} />
      <div>
        <ModerationLayout />
      </div>
    </Box>
  );
}