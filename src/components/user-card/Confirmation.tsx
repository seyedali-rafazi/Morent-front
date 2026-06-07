import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import BillingStep from "./BillingStep";
import OrderBuuton from "../../ui/Buuton";
import usePayment from "../../feachers/payment/usePayment";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const { createPayment, isPending } = usePayment();
  const navigate = useNavigate();
  const handelPaymentCick = () => {
    createPayment();
    navigate("/", { replace: true });
  };

  return (
    <Box sx={{ bgcolor: "primary.100", p: "25px", borderRadius: "8px" }}>
      <BillingStep
        stepTitle="Confirmation"
        stepNumber="Step 4 of 4"
        stpContent="We are getting to the end. Just few clicks and your rental is ready!"
      />
      <Box sx={{ mb: "15px" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "primary.600",
                  },
                }}
              />
            }
            label={
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "12px", md: "16px" } }}
              >
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "primary.600",
                  },
                }}
              />
            }
            label={
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "12px", md: "16px" } }}
              >
                I agree with our terms and conditions and privacy policy.
              </Typography>
            }
          />
        </FormGroup>
      </Box>
      <OrderBuuton onClick={handelPaymentCick}>Rent Now</OrderBuuton>
    </Box>
  );
}

export default Confirmation;
