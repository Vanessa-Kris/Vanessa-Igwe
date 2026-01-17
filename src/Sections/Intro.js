import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import { useThemeColors } from "../hooks/useThemeColors";

export default function Intro() {
  const colors = useThemeColors();

  return (
    <Box
      sx={{
        m: { md: 15, xs: 1 },
        color: colors.textSecondary,
        pt: 8,
        px: { xs: 1.5 },
      }}
    >
      <Typography
        variant="h3"
        sx={{ my: { md: 3, xs: 3 }, color: colors.textPrimary }}
      >
        Software Developer & Designer
        <Divider
          flexItem
          sx={{
            bgcolor: colors.divider,
            width: { md: "20%", xs: "40%" },
            my: 2,
          }}
        />
      </Typography>

      <Typography>
        Creative software developer and designer building visually stunning and
        functional digital experiences. I’m passionate about clean UI, elegant
        product design, and seamless user experiences. Outside tech, I’m
        building a fashion brand, obsessed with loc culture, and deeply inspired
        by music, food, and art.
      </Typography>
      <Box
        sx={{ mt: 7, width: { md: "70%", xs: "95%" } }}
        component="img"
        src="/VanessaCIgwe.svg"
      />
    </Box>
  );
}
