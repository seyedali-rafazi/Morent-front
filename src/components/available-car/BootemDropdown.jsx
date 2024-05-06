import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import Sidebar from "./Sidebar";
import CloseIcon from "@mui/icons-material/Close";

function BootemDropdown() {
  const [state, setState] = useState({
    bottom: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, bottom: open });
  };

  const list = () => <Sidebar />;

  return (
    <Box sx={{ px: "10px", display: { xs: "block", md: "none" } }}>
      <Button variant="contained" sx={{ bgcolor: "primary.600" }}>
        {["Car Fitler"].map((anchor) => (
          <Fragment key={anchor}>
            <Button sx={{ color: "primary.100" }} onClick={toggleDrawer(true)}>
              {anchor}
            </Button>
            <Drawer
              sx={{
                backdropFilter: "blur(1px)",
                "& .MuiBackdrop-root": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                },
                "& .MuiDrawer-paper": {
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                  py: "15px",
                },
              }}
              anchor={"bottom"}
              open={state["bottom"]}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  px: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "17px",
                    fontWeight: "700",
                  }}
                >
                  Car Fitler
                </Typography>
                <IconButton>
                  <CloseIcon onClick={toggleDrawer(false)} />
                </IconButton>
              </Box>
              {list()}
            </Drawer>
          </Fragment>
        ))}
      </Button>
    </Box>
  );
}

export default BootemDropdown;
