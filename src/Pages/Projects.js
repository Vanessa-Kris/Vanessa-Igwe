import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useThemeColors } from "../hooks/useThemeColors";

function Projects() {
  const colors = useThemeColors();
  
  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 7, color: colors.textSecondary }}>
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: colors.textPrimary }}>
        Featured Projects
        <Divider
          flexItem
          sx={{ bgcolor: colors.divider, width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>
      <Grid container spacing={4}>
        <Grid
          item
          md={6}
          xs={12}
          component="a"
          href="https://stunnersgalleria.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Box
            component="img"
            src="/first try.png"
            alt=""
            sx={{ width: "100%", borderRadius: "12px" }}
          />
          <Typography variant="h5" sx={{ fontSize: "20px", mt: 2 }}>
            E-commerce website
          </Typography>
          <Typography
            href="https://stunnersgalleria.com"
            sx={{ color: colors.textPrimary, fontSize: "25px" }}
          >
            Stunners Galleria
          </Typography>
        </Grid>

        <Grid
          item
          md={6}
          xs={12}
          component="a"
          href="/projects/relaysms-telemetry"
        >
          <Box
            component="img"
            src="/3.png"
            alt=""
            sx={{ width: "100%", borderRadius: "12px" }}
          />
          <Typography variant="h5" sx={{ fontSize: "20px", mt: 2 }}>
            Dashboard
          </Typography>
          <Typography sx={{ color: colors.textPrimary, fontSize: "25px" }}>
            RelaySMS telemetry Dashboardi
          </Typography>
        </Grid>

        <Grid
          item
          md={6}
          xs={12}
          component="a"
          href="/projects/relaysms-website"
        >
          <Box
            component="img"
            src="/1.png"
            alt=""
            sx={{ width: "100%", borderRadius: "12px" }}
          />
          <Typography variant="h5" sx={{ fontSize: "20px", mt: 2 }}>
            Product Page Redesign
          </Typography>
          <Typography sx={{ color: colors.textPrimary, fontSize: "25px" }}>
            RelaySMS
          </Typography>
        </Grid>

        <Grid
          item
          md={6}
          xs={12}
          component="a"
          href="https://afkanerd.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Box
            component="img"
            src="/Untitled design(10).png"
            alt=""
            sx={{ width: "100%", borderRadius: "12px" }}
          />
          <Typography variant="h5" sx={{ fontSize: "20px", mt: 2 }}>
            landging Page
          </Typography>
          <Typography sx={{ color: colors.textPrimary, fontSize: "25px" }}>
            Afkanerd
          </Typography>
        </Grid>

        <Grid
          item
          md={6}
          xs={12}
          component="a"
          href="/projects/relaysms-desktop"
        >
          <Box
            component="img"
            src="/Untitled design(9).png"
            alt=""
            sx={{ width: "100%", borderRadius: "12px" }}
          />
          <Typography variant="h5" sx={{ fontSize: "20px", mt: 2 }}>
            Desktop App
          </Typography>
          <Typography sx={{ color: colors.textPrimary, fontSize: "25px" }}>
            RelaySMS Desktop
          </Typography>
        </Grid>

        <Grid
          item
          md={6}
          xs={12}
          component="a"
          href="https://blog.stunnersgalleria.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Box
            component="img"
            src="/Untitled design(8).png"
            alt=""
            sx={{ width: "50%", borderRadius: "12px" }}
          />
          <Typography variant="h5" sx={{ fontSize: "20px", mt: 2 }}>
            Blogging
          </Typography>
          <Typography sx={{ color: colors.textPrimary, fontSize: "25px" }}>
            Stunners Galleria Blog
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
