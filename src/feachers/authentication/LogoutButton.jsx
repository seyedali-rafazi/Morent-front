import { Button, Typography } from "@mui/material";
import { CiLogout } from "react-icons/ci";
import { userLogout } from "../../services/userAuthService";
import { useQueryClient } from "@tanstack/react-query";

const LogoutButton = () => {
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    await userLogout();
    queryClient.invalidateQueries({ queryKey: ["user"] });
    window.location.href = "/";
  };

  return (
    <Button
      fullWidth
      onClick={handleLogout}
      sx={{
        mt: 1,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 1.2,
        px: 1.5,
        py: 1.2,
        borderRadius: "12px",
        color: "error.500",
        fontWeight: 600,
        textTransform: "none",
        "&:hover": {
          bgcolor: "error.100",
          color: "error.600",
        },
      }}
    >
      <CiLogout size={20} />
      <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>Logout</Typography>
    </Button>
  );
};

export default LogoutButton;
