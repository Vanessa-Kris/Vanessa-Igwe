import React, { Fragment, useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
// import MouseMotionCircle from "./Components/Motion";
import NavBar from "./Components/NavBar";
import Name from "./Sections/Name";
import { useThemeColors } from "./hooks/useThemeColors";

export default function Layout(props) {
  const colors = useThemeColors();
  const [scrollPosition, setScrollPosition] = useState(0);
  const isScrolled = scrollPosition > 100;

  const smoothShiftTransition = {
    transition: "flex-basis 0.95s cubic-bezier(0.22, 0.61, 0.36, 1), max-width 0.95s cubic-bezier(0.22, 0.61, 0.36, 1), width 0.95s cubic-bezier(0.22, 0.61, 0.36, 1)",
    willChange: "flex-basis, max-width, width",
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // If children prop is passed, render simplified layout (for Projects page)
  if (props.children) {
    return (
      <Fragment>
        {/* NavBar fixed on desktop for project pages */}
        <Box
          sx={{
            display: { md: "block", xs: "none" },
            position: "fixed",
            top: 0,
            right: 0,
            pr: 4,
            zIndex: 1000,
          }}
        >
          <NavBar mode={props.mode} toggleTheme={props.toggleTheme} />
        </Box>
        {/* NavBar at top on mobile for project pages */}
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <NavBar mode={props.mode} toggleTheme={props.toggleTheme} />
        </Box>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          {props.children}
        </Box>
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          {props.children}
        </Box>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          {/* <MouseMotionCircle x={mousePosition.x} y={mousePosition.y} /> */}
        </Box>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <Grid
          id="layout"
          container
          columnSpacing={2}
          className={isScrolled ? "transition-delay" : ""}
        >
          <Grid item md={isScrolled ? 8 : 7} xs={12} sx={smoothShiftTransition}>
            <Box id="intro">{props.intro}</Box>
            {/* <Box id="about">{props.about}</Box> */}
            <Box id="portfolio">{props.portfolio}</Box>
            <Box id="experience">{props.experience}</Box>
            {/* <Box id="reviews">{props.reviews}</Box> */}
            {/* <Box id="blogs">{props.blogs}</Box> */}
            <Box id="contact">{props.contact}</Box>
            <Box id="footer">{props.footer}</Box>
          </Grid>
          <Divider
            flexItem
            orientation="vertical"
            sx={{
              bgcolor: colors.accent,
              transition: "all 0.95s cubic-bezier(0.22, 0.61, 0.36, 1)",
            }}
          />
          <Box
            sx={{
              position: "fixed",
              right: 0,
              pr: 4,
              zIndex: 1000,
            }}
          >
            <NavBar mode={props.mode} toggleTheme={props.toggleTheme} />
          </Box>

          <Grid
            item
            md={isScrolled ? 3 : 4}
            className="sticky-grid"
            sx={smoothShiftTransition}
          >
            <Name />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        {props.nav}
        {props.name}
        <Box id="intro">{props.intro}</Box>
        {/* <Box id="about">{props.about}</Box> */}
        <Box id="portfolio">{props.portfolio}</Box>
        <Box id="experience">{props.experience}</Box>
        {/* <Box id="reviews">{props.reviews}</Box>
        <Box id="blogs">{props.blogs}</Box> */}
        <Box id="contact">{props.contact}</Box>
        {props.footer}
      </Box>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        {/* <MouseMotionCircle x={mousePosition.x} y={mousePosition.y} /> */}
      </Box>
    </Fragment>
  );
}
