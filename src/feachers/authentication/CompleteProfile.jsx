import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import InputField from "../../ui/InputField";
import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import useCompleteUser from "./useComplete";

function CompleteProfile() {
  const navigate = useNavigate();
  const { isUpdating, complete } = useCompleteUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handelComplete = (data) => {
    complete(data, {
      onSuccess: () => {
        navigate("/");
        reset();
      },
    });
  };

  return (
    <Box
      sx={{
        bgcolor: "#F3F8FF",
        height: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
      }}
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: "64px", md: "74px" },
        }}
      >
        <form
          onSubmit={handleSubmit(handelComplete)}
          style={{ display: "flex", flexDirection: "column", gap: "25px" }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "700", color: "primary.600" }}
          >
            Complete profile
          </Typography>
          <InputField
            errors={errors}
            placeholder="Name"
            name="name"
            type="text"
            register={register}
            validationSchema={{
              required: "First name is essentioal",
            }}
          />
          <InputField
            errors={errors}
            placeholder="Email"
            name="email"
            type="text"
            register={register}
            validationSchema={{
              required: "Email is essentioal",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid Email",
              },
            }}
          />
          <InputField
            errors={errors}
            placeholder="Address"
            name="address"
            type="text"
            register={register}
            validationSchema={{
              required: "address is essentioal",
            }}
          />
          <Button
            sx={{ bgcolor: "primary.600", p: "12px" }}
            type="submit"
            variant="contained"
          >
            {isUpdating ? <Loading width={"20px"} /> : "Enter"}
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default CompleteProfile;
