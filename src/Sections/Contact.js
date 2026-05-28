import {
  Box,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { useThemeColors } from "../hooks/useThemeColors";

export default function Contact() {
  const colors = useThemeColors();

  return (
    <Box
      sx={{
        m: { md: 15, xs: 1 },
        pt: 7,
        color: colors.textSecondary,
        px: { xs: 1.5 },
      }}
    >
      <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        CONTACT
      </Typography>
      <Typography
        variant="h3"
        sx={{ my: { md: 3, xs: 3 }, color: colors.textPrimary }}
      >
        Get In Touch
        <Divider
          flexItem
          sx={{
            bgcolor: colors.divider,
            width: { md: "20%", xs: "40%" },
            my: 2,
          }}
        />
      </Typography>

      <Typography sx={{ pb: 3 }}>
        If you have a project, collaboration, or just want to say hello, reach
        out through any of my socials below.
      </Typography>

      <Box sx={{ py: 5 }}>
        <Typography variant="h5" sx={{ fontSize: { md: "17px" } }}>
          Address
        </Typography>

        <Typography
          variant={"h4"}
          sx={{
            fontSize: { md: "30px", xs: "25px" },
            color: colors.textPrimary,
          }}
        >
          Cameroon
        </Typography>

        <Typography variant="h5" sx={{ fontSize: { md: "17px" }, mt: 5 }}>
          Email
        </Typography>

        <Typography
          variant={"h4"}
          sx={{
            mb: 5,
            fontSize: { md: "30px", xs: "25px" },
            color: colors.textPrimary,
          }}
        >
          Vanessaigwe1@gmail.com
        </Typography>

        <Typography variant="h5" sx={{ fontSize: { md: "17px" }, mb: 2 }}>
          Socials
        </Typography>

        <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap", rowGap: 2 }}>
          <Box component="a" href="https://github.com/Vanessa-Kris" target="_blank">
            <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faGithub} color="#673147" />
          </Box>
          <Box component="a" href="https://www.linkedin.com/in/vanessachristopherigwe" target="_blank">
            <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faLinkedin} color="#673147" />
          </Box>
          <Box component="a" href="https://wa.me/237670338998" target="_blank">
            <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faWhatsapp} color="#673147" />
          </Box>
          <Box component="a" href="https://www.instagram.com/vanessachristopherigwe/" target="_blank">
            <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faInstagram} color="#673147" />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
