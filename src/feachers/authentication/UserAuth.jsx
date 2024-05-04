import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import InputField from "../../ui/InputField";
import { useForm } from "react-hook-form";
import useAuth from "./useAuth";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

function UserAuth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, isCreating, mutateAsync } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handelUserAuth = async (data) => {
    try {
      const { user } = await mutateAsync(data);
      if (!user.isActive) {
        navigate("/Complete-profile");
      } else {
        navigate("/");
      }
    } catch (error) {}
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
          onSubmit={handleSubmit(handelUserAuth)}
          style={{ display: "flex", flexDirection: "column", gap: "25px" }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "700", color: "primary.600" }}
          >
            Sign up / Sign in
          </Typography>
          <InputField
            errors={errors}
            name="phoneNumber"
            placeholder="PhoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(v) => setPhoneNumber(v.target.value)}
            register={register}
            validationSchema={{
              required: "phoneNumber is essentioal",
            }}
          />
          <InputField
            errors={errors}
            placeholder="Password"
            name="password"
            type="text"
            value={password}
            onChange={(v) => setPassword(v.target.value)}
            register={register}
            validationSchema={{
              required: "password is essentioal",
            }}
          />
          <Button
            sx={{ bgcolor: "primary.600", p: "12px" }}
            type="submit"
            variant="contained"
          >
            {isCreating ? <Loading width={"20px"} /> : " Sign up / Sign in"}
          </Button>
        </form>
      </Container>
    </Box>
  );
}

export default UserAuth;
