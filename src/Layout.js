import React, { Fragment, useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { Box, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import MouseMotionCircle from "./Components/Motion";
import NavBar from "./Components/NavBar";
import Name from "./Sections/Name";
import ThemeToggle from "./Components/ThemeToggle";
import { useThemeColors } from "./hooks/useThemeColors";

export default function Layout(props) {
  const colors = useThemeColors();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // If children prop is passed, render simplified layout (for Projects page)
  if (props.children) {
    return (
      <Fragment>
        {/* Theme toggle for project pages - fixed position */}
        <Box
          sx={{
            position: "fixed",
            top: { md: 40, xs: 20 },
            right: { md: 90, xs: 70 },
            zIndex: 1000,
          }}
        >
          {/* <ThemeToggle mode={props.mode} onToggle={props.toggleTheme} /> */}
        </Box>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          {props.children}
        </Box>
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          {props.children}
        </Box>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <MouseMotionCircle x={mousePosition.x} y={mousePosition.y} />
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
          className={scrollPosition > 100 ? "transition-delay" : ""}
        >
          <Grid item md={scrollPosition > 100 ? 8 : 7} xs={12}>
            <Box id="intro">{props.intro}</Box>
            <Box id="about">{props.about}</Box>
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
            sx={{ bgcolor: colors.accent, transition: "all 0.3s ease 0.5s" }}
          />
          <Box
            sx={{
              position: "fixed",
              right: 0,
              pr: 4,
            }}
          >
            <NavBar mode={props.mode} toggleTheme={props.toggleTheme} />
          </Box>

          <Grid item md={scrollPosition > 100 ? 3 : 4} className="sticky-grid">
            <Name />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        {props.nav}
        {props.name}
        <Box id="intro">{props.intro}</Box>
        <Box id="about">{props.about}</Box>
        <Box id="experience">{props.experience}</Box>
        <Box id="portfolio">{props.portfolio}</Box>
        <Box id="reviews">{props.reviews}</Box>
        <Box id="blogs">{props.blogs}</Box>
        <Box id="contact">{props.contact}</Box>
        {props.footer}
      </Box>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <MouseMotionCircle x={mousePosition.x} y={mousePosition.y} />
      </Box>
    </Fragment>
  );
}
