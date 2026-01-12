import { Box, Divider } from "@mui/material";
import React from "react";
import { useThemeColors } from "../hooks/useThemeColors";

export default function Footer() {
  const colors = useThemeColors();
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ my: { md: 10, xs: 2 }, pt: 7, color: colors.textSecondary }}>
      <Divider flexItem sx={{ bgcolor: "#673147", my: 2 }} />
      <Box sx={{ paddingLeft: { md: 7, xs: 2 } }}>
        Copyright © {currentYear}. All rights reserved. <br /> Developed by Vanessa Kris
      </Box>
    </Box>
  );
}
