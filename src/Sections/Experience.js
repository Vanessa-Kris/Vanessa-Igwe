import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { useThemeColors } from "../hooks/useThemeColors";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Experience() {
  const colors = useThemeColors();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ m: { md: 15, xs: 1 }, pt: 7, color: colors.textSecondary }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          component="text"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              color: colors.textSecondary,
              fontSize: { md: "20px", xs: "15px" },
            }}
            label="Experience"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: colors.textSecondary,
              fontSize: { md: "20px", xs: "15px" },
              mx: { md: 2, xs: 0 },
            }}
            label="Skills"
            {...a11yProps(1)}
          />
          {/* <Tab
            sx={{ color: colors.textSecondary, fontSize: { md: "20px", xs: "15px" } }}
            label="Skills"
            {...a11yProps(2)}
          /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* <Box
          sx={{
            "& .MuiCard-root": {
              bgcolor: colors.bgSecondary,
              color: colors.textSecondary,
              border: `0.2px solid ${colors.divider}`,
              boxShadow: "none",
              backgroundImage: "none",
            },
          }}
        > */}
        <Card
          elevation={0}
          sx={{
            p: { md: 2, xs: 1 },
            my: { md: 3, xs: 3 },
            border: `0.2px solid ${colors.borderSecondary}`,
          }}
        >
          <Typography
            sx={{ px: { md: 2, xs: 1 }, color: colors.textPrimary }}
            variant="h5"
          >
            Outreachy{" "}
            <span style={{ fontSize: "15px", color: colors.textSecondary }}>
              ( Dec 2021 - Mar 2022 )
            </span>
          </Typography>
          <Typography
            sx={{ px: 2, pt: 2, color: colors.textPrimary }}
            variant="h4"
          >
            Fedora (Package Manager)
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            * Packaged software for the Fedora Operating System :
            <ul style={{ marginLeft: 20 }}>
              <a
                style={{ textDecoration: "underline" }}
                target="_blank"
                rel="noreferrer noopener"
                href="https://packages.fedoraproject.org/pkgs/python-ephyviewer/python3-ephyviewer/"
              >
                <li>Python Ephyviewer</li>{" "}
              </a>
              <a
                style={{ textDecoration: "underline" }}
                target="_blank"
                rel="noreferrer noopener"
                href="https://packages.fedoraproject.org/pkgs/python-pooch/python3-pooch/"
              >
                {" "}
                <li>Python Pooch</li>{" "}
              </a>
              <a
                style={{ textDecoration: "underline" }}
                target="_blank"
                rel="noreferrer noopener"
                href="https://packages.fedoraproject.org/pkgs/python-astor/python3-astor/"
              >
                {" "}
                <li>Python Astor</li>{" "}
              </a>
            </ul>
            * Chaired NeuroFedora meeting
            <br />
            * Edited Fedora documents
            <br />* Collaborative developement with Git ( Pagure )
          </CardContent>
        </Card>
        {/*  */}
        <Card
          elevation={0}
          sx={{
            p: { md: 2, xs: 1 },
            my: { md: 3, xs: 3 },
            border: `0.2px solid ${colors.borderSecondary}`,
          }}
        >
          <Typography sx={{ px: 2, color: colors.textPrimary }} variant="h5">
            Stunners Galleria{" "}
            <span style={{ fontSize: "15px", color: colors.textSecondary }}>
              ( Jan 2023 - Today )
            </span>
          </Typography>
          <Typography
            sx={{ px: 2, pt: 2, color: colors.textPrimary }}
            variant="h4"
          >
            Freelance Front-end Engineer
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            * Worked closely with the backend team to create the{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "underline" }}
              href="https://stunnersgalleria.com"
            >
              Stunners Galleria online store{" "}
            </a>
            <br />* Worked closely with the backend team to create the{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "underline" }}
              href="https://blog.stunnersgalleria.com"
            >
              Stunners Galleria Blog website.{" "}
            </a>
            <br />* Created non technical content for Stunners Galleria blog
          </CardContent>
        </Card>
        {/*  */}
        {/*  */}
        <Card
          elevation={0}
          sx={{
            p: { md: 2, xs: 1 },
            my: { md: 3, xs: 3 },
            border: `0.2px solid ${colors.borderSecondary}`,
          }}
        >
          <Typography sx={{ px: 2, color: colors.textPrimary }} variant="h5">
            Afkanerd{" "}
            <span style={{ fontSize: "15px", color: colors.textSecondary }}>
              ( Apr 2022 - Apr 2023 )
            </span>
          </Typography>
          <Typography
            sx={{ px: 2, pt: 2, color: colors.textPrimary }}
            variant="h4"
          >
            Jr. Front-end Engineer
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            * Worked with the backend team to build{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "underline" }}
              href="https://smswithoutborders.com:8080/"
            >
              SMSWithoutBorders User analytics{" "}
            </a>
            <br />* Worked closely with the backend team to maintain{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "underline" }}
              href="https://smswithoutborders.com/"
            >
              SMSWithoutBorders web platform{" "}
            </a>
            <br />* Worked closely with the backend team to build Deku SMS
            Messaging{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "underline" }}
              href="https://github.com/deku-messaging/Deku-Web-FE"
            >
              web interface{" "}
            </a>
          </CardContent>
        </Card>
        <Card
          elevation={0}
          sx={{
            p: { md: 2, xs: 1 },
            my: { md: 3, xs: 3 },
            border: `0.2px solid ${colors.borderSecondary}`,
          }}
        >
          <Typography sx={{ px: 2, color: colors.textPrimary }} variant="h5">
            Afkanerd
            <span style={{ fontSize: "15px", color: colors.textSecondary }}>
              ( March 2024 - March 2025 )
            </span>
          </Typography>
          <Typography
            sx={{ px: 2, pt: 2, color: colors.textPrimary }}
            variant="h4"
          >
            Desktop App Developer
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            * Worked with an awesome team to build the RelaySMS{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "underline" }}
              href="https://github.com/smswithoutborders/relaysms-desktop/tree/develop"
            >
              Desktop App
            </a>
            <br />* Developed an API endpoint to provide access to{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "underline" }}
              href="https://github.com/smswithoutborders/RelaySMS-Publisher"
            >
              publication metrics.
            </a>
          </CardContent>
        </Card>
        {/*  */}
        <Card
          elevation={0}
          sx={{
            p: { md: 2, xs: 1 },
            my: { md: 3, xs: 3 },
            border: `0.2px solid ${colors.borderSecondary}`,
          }}
        >
          <Typography sx={{ px: 2, color: colors.textPrimary }} variant="h5">
            Afkanerd
            <span style={{ fontSize: "15px", color: colors.textSecondary }}>
              ( March 2025 - Today )
            </span>
          </Typography>
          <Typography
            sx={{ px: 2, pt: 2, color: colors.textPrimary }}
            variant="h4"
          >
            Front-end Engineer
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            * Worked with an awesome team to re-build the RelaySMS{" "}
            <a
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "underline" }}
              href="https://github.com/smswithoutborders/relaysms-website/"
            >
              Website
            </a>
            <br />* Redesigned landing/ product pages across the organization{" "}
            <br />* Designed and implemented new user interfaces using React{" "}
            <br /> * Created branding assets and marketing materials for
            RelaySMS
            <br /> * Collaborated with cross-functional teams to ensure brand
            consistency
            <br /> * Conducted user research and usability testing to inform
            design decisions
            <br /> * Worked on NostaBridge product page and dashboard, also
            created branding assets
            <br /> * Worked on QueueDroid page and dashboard, also created
            branding assets
          </CardContent>
        </Card>
        {/* </Box> */}
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={1}>
        <Card sx={{ p: 2, my: 2, bgcolor: colors.bgSecondary, color: colors.textSecondary }}>
          <Typography sx={{ px: 2, color: colors.textPrimary }} variant="h5">
            Faith International College{" "}
            <span style={{ fontSize: "15px", color: colors.textSecondary }}>
              ( 2010 - 2016 )
            </span>
          </Typography>
          <Typography sx={{ px: 2, pt: 2, color: colors.textPrimary }} variant="h4">
            High Scool
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            Obtained my WAEC certification (West African Examination Council).
            You can download it{" "}
            <span
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={handleDownloadClick}
            >
              here.
            </span>
          </CardContent>
        </Card>

        
        <Card sx={{ p: 2, my: 2, bgcolor: colors.bgSecondary, color: colors.textSecondary }}>
          <Typography sx={{ px: 2, color: colors.textPrimary }} variant="h5">
            RIVERS STATE UNIVERSITY OF SCIENCE AND TECHNOLOGY{" "}
            <span style={{ fontSize: "15px", color: colors.textSecondary }}>
              ( 2016 - 2019 )
            </span>
          </Typography>
          <Typography sx={{ px: 2, pt: 2, color: colors.textPrimary }} variant="h4">
            Biology
          </Typography>
          <CardContent sx={{ fontSize: "18px" }}>
            Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>
      </CustomTabPanel> */}
      <CustomTabPanel value={value} index={1}>
        <Box>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            HTML
          </Typography>
          <LinearProgress variant="determinate" value={98} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            CSS
          </Typography>
          <LinearProgress variant="determinate" value={90} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Bootstrap
          </Typography>
          <LinearProgress variant="determinate" value={90} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Git/GitHub
          </Typography>
          <LinearProgress variant="determinate" value={85} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            React JS
          </Typography>
          <LinearProgress variant="determinate" value={80} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            JavaScript
          </Typography>
          <LinearProgress variant="determinate" value={70} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Linux System
          </Typography>
          <LinearProgress variant="determinate" value={60} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Electron JS
          </Typography>
          <LinearProgress variant="determinate" value={80} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Framer Motion
          </Typography>
          <LinearProgress variant="determinate" value={50} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Figma
          </Typography>
          <LinearProgress variant="determinate" value={50} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Mui
          </Typography>
          <LinearProgress variant="determinate" value={79} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Tailwind
          </Typography>
          <LinearProgress variant="determinate" value={40} />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" sx={{ fontSize: "15px" }}>
            Python
          </Typography>
          <LinearProgress variant="determinate" value={30} />
        </Box>
      </CustomTabPanel>
    </Box>
  );
}
