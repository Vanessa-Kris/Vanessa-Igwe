import { Box, Container, Typography, Grid } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useThemeColors } from "../hooks/useThemeColors";
import Loader from "../Components/Loader";

export default function Name() {
  const colors = useThemeColors();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <Container
      sx={{
        my: 5,
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: colors.textSecondary,
      }}
    >
      <Box
        sx={{ p: 1, border: `1px solid ${colors.accent}`, borderRadius: "5px" }}
      >
        <Box
          sx={{
            p: 2,
            border: `1px solid ${colors.accent}`,
            borderRadius: "5px",
            height: "fixed",
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <Box
              component="img"
              sx={{
                height: "fixed",
                width: "fixed",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
                display: "flex",
                top: "50%",
                left: "50%",
              }}
              alt="hacker girl"
              src="https://i.pinimg.com/1200x/02/e8/96/02e8963c9a408b751607f942edda9574.jpg"
            />
          )}
          <Typography textAlign="center" variant="h6" sx={{ m: 2 }}>
            MEET ME!
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            display="flex"
            sx={{ my: 2 }}
          >
            <Grid item md={1} xs={1}>
              <Typography sx={{ color: "green" }} variant="h4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                >
                  {"{"}
                </motion.div>
              </Typography>
            </Grid>
            <Grid item md={9} xs={9}>
              <Box textAlign="center">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    500,
                    "Software Developer",
                    500,
                    "Usability Consultant",
                    500,
                    "Product Designer",
                    500,
                  ]}
                  style={{ fontSize: "25px" }}
                  speed={40}
                  repeat={Infinity}
                />
              </Box>
            </Grid>
            <Grid item md={1} xs={1}>
              <Typography sx={{ color: "green" }} variant="h4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                >
                  {"}"}
                </motion.div>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
