import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";

function EmptyPage({ emptySection, bodyContent, buttonContent, path }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        p: "30px",
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "350px",
          width: "100%",
          bgcolor: "primary.100",
          border: "2px solid black",
          borderColor: "secondary.200",
          borderRadius: "15px",
          p: "15px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: "17px",
            fontWeight: "600",
            textAlign: "start",
            width: "100%",
            borderBottom: "2px solid black",
            borderColor: "secondary.200",
            py: "5px",
          }}
        >
          {emptySection}
        </Typography>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "17px",
              fontWeight: "600",
              textAlign:"center"
            }}
          >
            {bodyContent}
          </Typography>
          <Link
            href={path}
            variant="contained"
            underline="none"
            sx={{
              bgcolor: "primary.600",
              px: "20px",
              py: "7px",
              color: "primary.100",
              borderRadius: "6px",
            }}
          >
            {buttonContent}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default EmptyPage;
