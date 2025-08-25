import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        pt: 3,
        pb: 2,
        px: 2,
        mt: 0, 
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} TaskNest | Stay Organized, Stay Productive
      </Typography>
    </Box>
  );
};

export default Footer;
