import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useThemeColors } from "../hooks/useThemeColors";

export default function Reviews() {
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
      {/* <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        What People Are Saying
      </Typography> */}
      <Typography
        variant="h3"
        sx={{ my: { md: 3, xs: 3 }, color: colors.textPrimary }}
      >
        Reviews
        <Divider
          flexItem
          sx={{
            bgcolor: colors.divider,
            width: { md: "20%", xs: "40%" },
            my: 2,
          }}
        />
      </Typography>

      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>

      <ul ref={ref} className="list2">
        <li className="listitems2">
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            "Vanessa is an outstanding teammate – she's a quick learner,
            incredibly creative, and an absolute joy to have around."
          </Typography>
          <Typography sx={{ color: colors.textPrimary, pt: 4, pb: 1 }}>
            Promise Fru
          </Typography>
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Collaborator
          </Typography>
        </li>
        <li className="listitems2">
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            "I couldn't have found a better person to create my blogging
            website; it looks super cool and matches my vision perfectly."
          </Typography>
          <Typography sx={{ color: colors.textPrimary, pt: 4, pb: 1 }}>
            Sheba C.
          </Typography>
          <Typography variant="h5" sx={{ fontSize: "17px" }}>
            Client
          </Typography>
        </li>
      </ul>
    </Box>
  );
}
