import { Box, Typography } from "@mui/material";

interface BillingStepProps {
  stepTitle: string;
  stepNumber: string;
  stpContent: string;
}

function BillingStep({ stepTitle, stepNumber, stpContent }: BillingStepProps) {
  return (
    <Box sx={{ mb: "20px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">{stepTitle}</Typography>
        <Typography variant="body2" sx={{ color: "secondary.200" }}>
          {stepNumber}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" sx={{ color: "secondary.200" }}>
          {stpContent}
        </Typography>
      </Box>
    </Box>
  );
}

export default BillingStep;
