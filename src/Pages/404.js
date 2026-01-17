import { Box, Typography, Button } from "@mui/material";
import React from "react";
import SEO from "../Components/SEO";

export default function PageNotFound() {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Vanessa Christopher"
        description="The page you're looking for doesn't exist. Return to Vanessa Christopher's portfolio homepage."
      />
      <Box align="center" sx={{ mt: { md: 40, sm: 40, xs: 30 } }}>
        <Typography variant="h2" sx={{ pb: 3 }}>
          Damn! You got lost somehow
        </Typography>
        <Button component="a" href="/" variant="contained">
          Let's get you back home
        </Button>
      </Box>
    </>
  );
}
