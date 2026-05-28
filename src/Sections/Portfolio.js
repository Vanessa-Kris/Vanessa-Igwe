import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useThemeColors } from "../hooks/useThemeColors";

export default function Portfolio() {
  const colors = useThemeColors();
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <Box
      sx={{
        m: { md: 15, xs: 1 },
        pt: 7,
        color: colors.textSecondary,
        px: { xs: 1.5 },
      }}
    >
      <Typography variant="h6" sx={{ my: { md: 2, xs: 2 }, fontWeight: 600 }}>
        PORTFOLIO
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: { md: 3, xs: 3 },
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ color: colors.textPrimary }}>
            Featured Projects
          </Typography>
          <Divider
            flexItem
            sx={{
              bgcolor: colors.divider,
              width: { md: "20%", xs: "40%" },
              my: 2,
            }}
          />
        </Box>

        {/* View All Projects Link */}
        <Typography
          component="a"
          href="/projects"
          sx={{
            color: "#673147",
            fontSize: { md: "16px", xs: "14px" },
            fontWeight: 600,
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            position: "relative",
            padding: { md: "10px 0", xs: "8px 0" },
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
            "&:hover": {
              color: colors.textPrimary,
              textDecorationColor: colors.textPrimary,
            },
            "&::after": {
              content: '"→"',
              marginLeft: "8px",
              transition: "margin-left 0.3s ease",
            },
            "&:hover::after": {
              marginLeft: "12px",
            },
          }}
        >
          View All Projects
        </Typography>
      </Box>

      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress, color: "white" }}
        />
      </svg>

      <ul ref={ref} className="list">
        <li className="listitems" style={{ flex: "0 0 550px" }}>
          <Box component="a" href="/projects/relaysms-website">
            <Box
              component="img"
              src="/1.png"
              alt=""
              sx={{ width: "100%", borderRadius: "12px" }}
            />
            <Typography variant="h5" sx={{ fontSize: "20px", mt: 2 }}>
              Landing Page
            </Typography>
            <Typography sx={{ color: colors.textPrimary, fontSize: "25px" }}>
              RelaySMS
            </Typography>
          </Box>
        </li>

        <li className="listitems" style={{ flex: "0 0 550px" }}>
          <Box component="a" href="/projects/relaysms-telemetry">
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
              RelaySMS Telemetry
            </Typography>
          </Box>
        </li>

        <li className="listitems" style={{ flex: "0 0 550px" }}>
          <Box component="a" href="/projects/shortmesh">
            <Box
              component="img"
              src="/project-shortmesh.png"
              alt=""
              sx={{ width: "100%", borderRadius: "12px" }}
            />
            <Typography variant="h5" sx={{ fontSize: "20px", mt: 2 }}>
              Product
            </Typography>
            <Typography sx={{ color: colors.textPrimary, fontSize: "25px" }}>
              ShortMesh
            </Typography>
          </Box>
        </li>

        <li className="listitems" style={{ flex: "0 0 550px" }}>
          <Box
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
            <Typography sx={{ color: colors.textPrimary, fontSize: "25px" }}>
              Stunners Galleria
            </Typography>
          </Box>
        </li>

        {/* <li className="listitems" style={{ flex: "0 0 300px" }}>
          <Box component="a" href="https://blog.stunnersgalleria.com/">
            <Box
              component="img"
              src="/Untitled design(8).png"
              alt=""
              sx={{ width: "300px", height: "400px", borderRadius: "12px" }}
            />
            <Typography variant="h5" sx={{ fontSize: "20px" }}>
              Blogging Website
            </Typography>
            <Typography sx={{ color: colors.textPrimary, fontSize: "25px" }}>
              Stunners Galleria Blog
            </Typography>
          </Box>
        </li> */}

        {/* <li className="listitems">
          <img src="/Stunners Blog.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Blogging Website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://blog.stunnersgalleria.com/"
            sx={{ color: colors.textPrimary, fontSize: "25px" }}
          >
            Stunners Galleria Blog
          </Typography>
        </li>

        <li className="listitems">
          <img src="/desktop.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Linux Desktop App
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/smswithoutborders/RelaySMS-Desktop"
            sx={{ color: colors.textPrimary, fontSize: "25px" }}
          >
            RelaySMS Desktop
          </Typography>
        </li>

        <li className="listitems">
          <img src="/Telemetry.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            User analytics board
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://smswithoutborders.com:8080/"
            sx={{ color: colors.textPrimary, fontSize: "25px" }}
          >
            Open Telemetry
          </Typography>
        </li>
        <li className="listitems">
          <img src="/Deku.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Messaging Website
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/deku-messaging/Deku-Web-FE"
            sx={{ color: colors.textPrimary, fontSize: "25px" }}
          >
            Afkanerd Deku Messaging
          </Typography>
        </li>
        <li className="listitems">
          <img src="/res.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            SMSWithoutBorders Telemetry
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://telemetry.smswithoutborders.com/"
            sx={{ color: colors.textPrimary, fontSize: "25px" }}
          >
            Data Visualization Dashboard
          </Typography>
        </li>
        <li className="listitems">
          <img src="/CNav.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            E-learning Platform
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://career-navigator-academy.github.io/"
            sx={{ color: colors.textPrimary, fontSize: "25px" }}
          >
            Career Navigator Academy
          </Typography>
        </li>
        <li className="listitems">
          <img src="/sheba.png" alt="" />
          <Typography variant="h5" sx={{ fontSize: "20px" }}>
            Blogging web
          </Typography>
          <Typography
            component="a"
            target="_blank"
            rel="noreferrer noopener"
            href="https://sheba-chris.netlify.app"
            sx={{ color: colors.textPrimary, fontSize: "25px" }}
          >
            Sheba's Blog
          </Typography>
        </li> */}
      </ul>
      {/*  */}
    </Box>
  );
}
