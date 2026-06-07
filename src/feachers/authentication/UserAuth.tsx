import { Box, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import InputField from "../../ui/InputField";
import { useForm } from "react-hook-form";
import useAuth from "./useAuth";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";

interface AuthFormValues {
  phoneNumber: string;
  password: string;
}

function UserAuth() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { isCreating, mutateAsync } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormValues>();

  const handelUserAuth = async (data: AuthFormValues) => {
    try {
      await mutateAsync({ phone: data.phoneNumber });
      navigate("/");
    } catch {
      // errors handled by mutation onError
    }
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
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "700", color: "primary.600" }}
          >
            Sign up / Sign in
          </Typography>
          <InputField<AuthFormValues>
            errors={errors}
            name="phoneNumber"
            placeholder="PhoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPhoneNumber(e.target.value)
            }
            register={register}
            validationSchema={{
              required: "phoneNumber is essentioal",
            }}
          />
          <InputField<AuthFormValues>
            errors={errors}
            placeholder="Password"
            name="password"
            type="text"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
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
