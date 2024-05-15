import { Button, Typography } from "@mui/material";
import { CiLogout } from "react-icons/ci";
import { userLogout } from "../../services/userAuthService";

const LogoutButton = () => {
  const handleLogout = async () => {
    await userLogout();
    document.location.href = "/";
  };

  return (
    <Button
      sx={{
        minWidth: "120px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "8px",
        padding: "12px",
        borderRadius: "8px",
        fontSize: "20px",
        whiteSpace: "nowrap",
        "&:hover": {
          bgcolor: "error.main",
          color: "primary.100",
        },
      }}
      onClick={handleLogout}
    >
      <CiLogout />
      <Typography>Logout</Typography>
    </Button>
  );
};

export default LogoutButton;
