import { Box, TextField, Typography } from "@mui/material";
import React from "react";

export default function InputField({
  label,
  name,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
  value,
  onChange,
  placeholder,
}) {
  return (
    <Box>
      <TextField
        sx={{
          width: { xs: "250px", sm: "350px" },
          "& .MuiOutlinedInput-root": {
            color: "#000",
            fontFamily: "Arial",
            fontWeight: "bold",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.300",
              borderWidth: "2px",
            },
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.600",
                borderWidth: "3px",
              },
            },
            "&:hover:not(.Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc",
              },
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "primary.500",
            fontWeight: "bold",
            "&.Mui-focused": {
              color: "primary.600",
              fontWeight: "bold",
            },
          },
        }}
        label={placeholder}
        {...register(name, validationSchema)}
        id={name}
        autoComplete="off"
        type={type}
        value={value}
        onChange={onChange}
        variant="outlined"
      />
      {errors && errors[name] && (
        <Typography variant="body2" sx={{ color: "error.main" }}>
          {errors[name]?.message}
        </Typography>
      )}
    </Box>
  );
}

export function BillingInput({
  label,
  name,
  register,
  validationSchema,
  type = "text",
  required,
  errors,
  value,
  onChange,
  placeholder,
}) {
  return (
    <Box>
      <TextField
        label={placeholder}
        {...register(name, validationSchema)}
        id={name}
        autoComplete="off"
        type={type}
        value={value}
        onChange={onChange}
        variant="filled"
        fullWidth
      />
      {errors && errors[name] && (
        <Typography variant="body2" sx={{ color: "error.main" }}>
          {errors[name]?.message}
        </Typography>
      )}
    </Box>
  );
}
