import { Box, TextField, Typography } from "@mui/material";
import type {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import type { ChangeEventHandler } from "react";

interface InputFieldProps<T extends FieldValues = FieldValues> {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  validationSchema?: RegisterOptions<T, Path<T>>;
  type?: string;
  required?: boolean;
  errors?: FieldErrors<T>;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
}

export default function InputField<T extends FieldValues = FieldValues>({
  name,
  register,
  validationSchema,
  type = "text",
  errors,
  value,
  onChange,
  placeholder,
}: InputFieldProps<T>) {
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
          {(errors[name] as { message?: string })?.message}
        </Typography>
      )}
    </Box>
  );
}

interface BillingInputProps<T extends FieldValues = FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  validationSchema?: RegisterOptions<T, Path<T>>;
  type?: string;
  errors?: FieldErrors<T>;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
}

export function BillingInput<T extends FieldValues = FieldValues>({
  name,
  register,
  validationSchema,
  type = "text",
  errors,
  value,
  onChange,
  placeholder,
}: BillingInputProps<T>) {
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
          {(errors[name] as { message?: string })?.message}
        </Typography>
      )}
    </Box>
  );
}
