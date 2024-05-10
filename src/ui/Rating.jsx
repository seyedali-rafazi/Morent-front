import { Box, Rating, Typography } from "@mui/material";
import React, { useState } from "react";

function RatingCar() {
  const [value, setValue] = useState(2);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        size="small"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography variant="body2" sx={{ color: "secondary.300" }}>
        0+ Reviewer
      </Typography>
    </Box>
  );
}

export default RatingCar;
