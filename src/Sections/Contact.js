import {
  Box,
  Typography,
  Divider,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { useThemeColors } from "../hooks/useThemeColors";

export default function Contact() {
  const colors = useThemeColors();
  
  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 7, color: colors.textSecondary }}>
      <Typography variant="h6" sx={{ my: { md: 5, xs: 5 }, fontWeight: 600 }}>
        CONTACT
      </Typography>
      <Typography variant="h3" sx={{ my: { md: 3, xs: 3 }, color: colors.textPrimary }}>
        Get In Touch
        <Divider
          flexItem
          sx={{ bgcolor: colors.divider, width: { md: "20%", xs: "40%" }, my: 2 }}
        />
      </Typography>

      <Typography sx={{ pb: 3 }}>
        If you have any suggestion, project, or even want to say “hello,” please
        fill out the form below, and I will reply to you shortly.
      </Typography>

      <Grid
        component="form"
        action="https://formspree.io/f/mpzgognj"
        method="POST"
        container
        columnSpacing={2}
      >
        <Grid item md={6} xs={12} sx={{ py: 2 }}>
          Name* <br />
          <TextField
            fullWidth
            name="name"
            id="outlined-basic"
            sx={{ border: "1px solid #673147", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item md={6} xs={12} sx={{ py: 2 }}>
          Email* <br />
          <TextField
            fullWidth
            name="email"
            id="outlined-basic"
            variant="outlined"
            sx={{ border: "1px solid #673147", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item md={12} xs={12} sx={{ py: 2 }}>
          Phone Number <br />
          <TextField
            fullWidth
            name="number"
            id="outlined-basic"
            variant="outlined"
            sx={{ border: "1px solid #673147", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item md={12} xs={12} sx={{ py: 2 }}>
          Message* <br />
          <TextField
            fullWidth
            name="message"
            multiline
            rows={4}
            id="outlined-basic"
            variant="outlined"
            className="input"
            sx={{
              border: "1px solid #673147",
              borderRadius: "5px",
            }}
          />
        </Grid>

        <Grid item md={12} xs={12} sx={{ py: 2 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "100%", p: 2, fontWeight: 900 }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ py: 5 }}>
        <Typography variant="h5" sx={{ fontSize: { md: "17px" } }}>
          Adress
        </Typography>

        <Typography
          variant={"h4"}
          sx={{ fontSize: { md: "30px", xs: "25px" }, color: colors.textPrimary }}
        >
          Cameroon
        </Typography>

        <Typography variant="h5" sx={{ fontSize: { md: "17px" }, mt: 5 }}>
          Email
        </Typography>

        <Typography
          variant={"h4"}
          sx={{ mb: 5, fontSize: { md: "30px", xs: "25px" }, color: colors.textPrimary }}
        >
          Vanessaigwe1@gmail.com
        </Typography>

        <Box
          component="a"
          href="https://github.com/Vanessa-Kris"
          target="_blank"
        >
          <FontAwesomeIcon
            style={{ fontSize: "30px", marginRight: 30 }}
            icon={faGithub}
            color="#673147"
          />
        </Box>
        <Box
          component="a"
          href="https://www.linkedin.com/in/vanessachristopherigwe"
          target="_blank"
        >
          <FontAwesomeIcon
            style={{ fontSize: "30px", marginRight: 30 }}
            icon={faLinkedin}
            color="#673147"
          />
        </Box>

        <Box
          component="a"
          href="https://twitter.com/Mini_on_Nessa"
          target="_blank"
        >
          <FontAwesomeIcon
            style={{ fontSize: "30px", marginRight: 30 }}
            icon={faXTwitter}
            color="#673147"
          />
        </Box>

        <Box
          component="a"
          href="https://facebook.com/vanesssachrsitopherigwe/"
          target="_blank"
        >
          <FontAwesomeIcon
            style={{ fontSize: "30px", marginRight: 30 }}
            icon={faFacebook}
            color="#673147"
          />
        </Box>

        <Box
          component="a"
          href="https://www.instagram.com/vanessachristopherigwe/"
          target="_blank"
        >
          <FontAwesomeIcon
            style={{ fontSize: "30px", marginRight: 30 }}
            icon={faInstagram}
            color="#673147"
          />
        </Box>
      </Box>
    </Box>
  );
}
