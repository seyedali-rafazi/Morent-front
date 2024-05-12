import { Box, Typography } from "@mui/material";
import React from "react";
import { BillingInput } from "../../ui/InputField";
import { useFormBilling } from "../../context/FormContext";
import { register } from "swiper/element";
import { useForm } from "react-hook-form";
import BillingStep from "./BillingStep";

function BillingInfo() {
  const { billingForm, setBillingForm } = useFormBilling();
  console.log(billingForm.phoneNumber);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <Box sx={{ bgcolor: "primary.100", p: "25px", borderRadius: "8px" }}>
      <BillingStep
        stepTitle="Billing Info"
        stepNumber="Step 1of4"
        stpContent="Please enter your billing info"
      />
      <Box>
        <form
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "25px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: { xs: "100%", md: "40%" },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "600" }}
            >
              Name
            </Typography>
            <BillingInput
              errors={errors}
              placeholder="Name"
              name="name"
              type="text"
              value={billingForm.name}
              register={register}
              onChange={(v) =>
                setBillingForm({ ...billingForm, name: v.target.value })
              }
              validationSchema={{
                required: "password is essentioal",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: { xs: "100%", md: "40%" },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "600" }}
            >
              Phone Number
            </Typography>
            <BillingInput
              errors={errors}
              name="phoneNumber"
              placeholder="PhoneNumber"
              type="text"
              value={billingForm.phoneNumber}
              register={register}
              onChange={(v) =>
                setBillingForm({ ...billingForm, phoneNumber: v.target.value })
              }
              validationSchema={{
                required: "phoneNumber is essentioal",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: { xs: "100%", md: "40%" },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "600" }}
            >
              Address
            </Typography>
            <BillingInput
              errors={errors}
              name="address"
              placeholder="Address"
              type="text"
              value={billingForm.Address}
              register={register}
              onChange={(v) =>
                setBillingForm({ ...billingForm, address: v.target.value })
              }
              validationSchema={{
                required: "phoneNumber is essentioal",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: { xs: "100%", md: "40%" },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: "15px", fontWeight: "600" }}
            >
              City / Town
            </Typography>
            <BillingInput
              errors={errors}
              name="city"
              placeholder="City or Town"
              type="text"
              value={billingForm.city}
              register={register}
              onChange={(v) =>
                setBillingForm({ ...billingForm, city: v.target.value })
              }
              validationSchema={{
                required: "phoneNumber is essentioal",
              }}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default BillingInfo;
