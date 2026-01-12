import React from "react";
import { Box, Grid, IconButton, Typography, Chip, Stack } from "@mui/material";
import { HomeOutlined, LinkOutlined, GithubOutlined } from "@ant-design/icons";
import { useThemeColors } from "../hooks/useThemeColors";

function RelaySMSTelemetry() {
  const colors = useThemeColors();
  
  return (
    <Box sx={{ px: { md: 4, xs: 2 } }}>
      <IconButton
        sx={{
          mt: 0,
          ml: { md: 4, xs: 2 },
          bgcolor: colors.accent,
          p: 2,
          position: "fixed",
          zIndex: 1000,
          "&:hover": {
            bgcolor: colors.accentHover,
          },
        }}
        href="/"
      >
        <HomeOutlined style={{ fontSize: "15px", color: "#fff" }} />
      </IconButton>
      <Box sx={{ m: { md: 15, xs: 1 }, pt: 2, color: colors.textSecondary }}>
        {/* Header Section */}
        <Typography
          variant="h2"
          sx={{
            my: { md: 3, xs: 2 },
            mt: { xs: 7 },
            color: colors.textPrimary,
            fontSize: { md: "60px", xs: "32px" },
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          RelaySMS Telemetry Dashboard
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: colors.textTertiary,
            mb: 4,
            fontSize: { md: "20px", xs: "16px" },
            fontWeight: 400,
          }}
        >
          Transforming raw data into actionable insights for better
          decision-making
        </Typography>

        {/* Project Metadata */}
        <Grid
          container
          spacing={3}
          sx={{ mb: 5, pb: 4, borderBottom: "1px solid #2a2a2a" }}
        >
          <Grid item xs={6} md={3}>
            <Typography
              variant="overline"
              sx={{ color: colors.textTertiary, fontSize: "12px", letterSpacing: 1.5 }}
            >
              ROLE
            </Typography>
            <Typography variant="body1" sx={{ color: colors.textPrimary, mt: 0.5 }}>
              Lead UX/UI Designer & Developer
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              variant="overline"
              sx={{ color: colors.textTertiary, fontSize: "12px", letterSpacing: 1.5 }}
            >
              INDUSTRY
            </Typography>
            <Typography variant="body1" sx={{ color: colors.textPrimary, mt: 0.5 }}>
              Open-Source, Analytics
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              variant="overline"
              sx={{ color: colors.textTertiary, fontSize: "12px", letterSpacing: 1.5 }}
            >
              TOOLS
            </Typography>
            <Typography variant="body1" sx={{ color: colors.textPrimary, mt: 0.5 }}>
              React, MUI, Figma
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              variant="overline"
              sx={{ color: colors.textTertiary, fontSize: "12px", letterSpacing: 1.5 }}
            >
              DURATION
            </Typography>
            <Typography variant="body1" sx={{ color: colors.textPrimary, mt: 0.5 }}>
              Q4 2024
            </Typography>
          </Grid>
        </Grid>

        {/* Jump to Section Navigation */}
        <Box
          sx={{
            mb: 6,
            p: 3,
            bgcolor: colors.bgSecondary,
            borderRadius: "12px",
            border: "1px solid #2a2a2a",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: colors.textTertiary,
              fontSize: "12px",
              letterSpacing: 1.5,
              mb: 2,
              display: "block",
            }}
          >
            JUMP TO SECTION
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column" }}
            spacing={2}
            sx={{ flexWrap: "wrap", gap: 1.5 }}
          >
            <Typography
              component="a"
              href="#overview"
              sx={{
                color: "#673147",
                textDecoration: "none",
                fontSize: "14px",
                "&:hover": { color: colors.textPrimary },
              }}
            >
              • Overview
            </Typography>
            <Typography
              component="a"
              href="#challenge"
              sx={{
                color: "#673147",
                textDecoration: "none",
                fontSize: "14px",
                "&:hover": { color: colors.textPrimary },
              }}
            >
              • The Challenge
            </Typography>
            <Typography
              component="a"
              href="#process"
              sx={{
                color: "#673147",
                textDecoration: "none",
                fontSize: "14px",
                "&:hover": { color: colors.textPrimary },
              }}
            >
              • Design Process
            </Typography>
            <Typography
              component="a"
              href="#solution"
              sx={{
                color: "#673147",
                textDecoration: "none",
                fontSize: "14px",
                "&:hover": { color: colors.textPrimary },
              }}
            >
              • The Solution
            </Typography>
            <Typography
              component="a"
              href="#impact"
              sx={{
                color: "#673147",
                textDecoration: "none",
                fontSize: "14px",
                "&:hover": { color: colors.textPrimary },
              }}
            >
              • Results & Impact
            </Typography>
            <Typography
              component="a"
              href="#learnings"
              sx={{
                color: "#673147",
                textDecoration: "none",
                fontSize: "14px",
                "&:hover": { color: colors.textPrimary },
              }}
            >
              • Key Learnings
            </Typography>
          </Stack>
        </Box>

        {/* Project Tags */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 6, flexWrap: "wrap", gap: 1.5 }}
        >
          <Chip
            label="React"
            sx={{
              bgcolor: colors.accent,
              color: '#fff',
              fontWeight: 600,
              fontSize: "13px",
              height: "32px",
            }}
          />
          <Chip
            label="Data Visualization"
            sx={{
              bgcolor: colors.accent,
              color: '#fff',
              fontWeight: 600,
              fontSize: "13px",
              height: "32px",
            }}
          />
          <Chip
            label="Dashboard Design"
            sx={{
              bgcolor: colors.accent,
             color: '#fff',
              fontWeight: 600,
              fontSize: "13px",
              height: "32px",
            }}
          />
          <Chip
            label="UX Research"
            sx={{
              bgcolor: colors.accent,
              color: '#fff',
              fontWeight: 600,
              fontSize: "13px",
              height: "32px",
            }}
          />
          <Chip
            label="MUI-Charts"
            sx={{
              bgcolor: colors.accent,
              color: '#fff',
              fontWeight: 600,
              fontSize: "13px",
              height: "32px",
            }}
          />
        </Stack>

        {/* Quick Links */}
        <Stack direction="row" spacing={3} sx={{ mb: 5 }}>
          <Typography
            component="a"
            href="https://telemetry.smswithoutborders.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#673147",
              fontSize: "16px",
              fontWeight: 600,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": { color: colors.textPrimary },
            }}
          >
            <LinkOutlined style={{ fontSize: "18px" }} />
            Live Dashboard
          </Typography>
          <Typography
            component="a"
            href="https://github.com/smswithoutborders"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#673147",
              fontSize: "16px",
              fontWeight: 600,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": { color: colors.textPrimary },
            }}
          >
            <GithubOutlined style={{ fontSize: "18px" }} />
            GitHub Repository
          </Typography>
        </Stack>

        {/* Overview Section */}
        <Box id="overview" sx={{ my: 10 }}>
          <Typography
            variant="h4"
            sx={{
              color: colors.textPrimary,
              mb: 4,
              fontSize: { md: "36px", xs: "28px" },
              fontWeight: 700,
            }}
          >
            Overview
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "20px",
                  lineHeight: 1.8,
                  mb: 3,
                  color: colors.textSecondary,
                }}
              >
                The RelaySMS Telemetry Dashboard is a comprehensive analytics
                platform that provides real-time insights into user activity,
                message delivery performance, and service reliability across
                different regions.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "20px",
                  lineHeight: 1.8,
                  color: colors.textTertiary,
                }}
              >
                This tool helps the RelaySMS team monitor system health,
                identify bottlenecks, and make data-driven decisions to improve
                service quality.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "#c59700ff",
                  p: 3,
                  borderRadius: "12px",
                  border: "2px solid #c59700ff",
                  position: "relative",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "20px",
                    fontStyle: "italic",
                    color: colors.textPrimary,
                    lineHeight: 1.6,
                  }}
                >
                  "The new dashboard reduced the time to identify critical
                  issues by 60%, allowing our team to respond faster to user
                  needs."
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mt: 2,
                    color: colors.textSecondary,
                    fontSize: "13px",
                  }}
                >
                  — Product Team Lead
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* The Challenge */}
        <Box
          id="challenge"
          sx={{ mb: 10, pt: 10, borderTop: "1px solid #2a2a2a" }}
        >
          <Typography
            variant="h4"
            sx={{
              color: colors.textPrimary,
              mb: 4,
              fontSize: { md: "36px", xs: "28px" },
              fontWeight: 700,
            }}
          >
            The Challenge
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "20px",
                  lineHeight: 1.8,
                  mb: 3,
                  color: colors.textSecondary,
                }}
              >
                The previous dashboard suffered from poor information hierarchy,
                making it difficult to quickly identify critical metrics.
              </Typography>
              <Box component="ul" sx={{ pl: 3, mb: 0 }}>
                <Typography
                  component="li"
                  sx={{ fontSize: "20px", lineHeight: 2, color: colors.textTertiary, mb: 1 }}
                >
                  Visualization methods didn't effectively communicate trends or
                  anomalies at a glance
                </Typography>
                <Typography
                  component="li"
                  sx={{ fontSize: "20px", lineHeight: 2, color: colors.textTertiary, mb: 1 }}
                >
                  No clear way to identify user geographic distribution for
                  internet shutdown preparedness
                </Typography>
                <Typography
                  component="li"
                  sx={{ fontSize: "20px", lineHeight: 2, color: colors.textTertiary }}
                >
                  Team spent excessive time manually analyzing data to extract
                  insights
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: colors.bgSecondary,
                  p: 3,
                  borderRadius: "12px",
                  border: "2px solid #673147",
                  borderLeft: "6px solid #673147",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "#673147",
                    fontSize: "12px",
                    letterSpacing: 1.5,
                    fontWeight: 700,
                    display: "block",
                    mb: 2,
                  }}
                >
                  KEY PROBLEM
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "20px",
                    color: colors.textSecondary,
                    lineHeight: 1.7,
                  }}
                >
                  How might we transform complex telemetry data into actionable
                  insights that help the team respond quickly to system issues
                  and user needs?
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Design Thinking Process */}
        <Box id="process" sx={{ mb: 10, pt: 10, borderTop: "1px solid #2a2a2a" }}>
          <Typography
            variant="h4"
            sx={{
              color: colors.textPrimary,
              mb: 4,
              fontSize: { md: "36px", xs: "28px" },
              fontWeight: 700,
            }}
          >
            Design Process
          </Typography>

          {/* Research */}
          <Box sx={{ mb: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  bgcolor: colors.accent,
                  color: '#fff',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                1
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: colors.textPrimary,
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                Research & Discovery
              </Typography>
            </Box>
            <Box sx={{ pl: { md: 8 } }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", lineHeight: 2, mb: 1.5, color: colors.textTertiary }}
              >
                • Conducted in-house interviews with the development team and
                product manager
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", lineHeight: 2, mb: 1.5, color: colors.textTertiary }}
              >
                • Analyzed and identified pain points in the existing dashboard
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", lineHeight: 2, mb: 1.5, color: colors.textTertiary }}
              >
                • Researched industry-standard dashboard designs from platforms
                like Google Analytics
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", lineHeight: 2, color: colors.textTertiary }}
              >
                • Identified key performance indicators (KPIs) that the team
                needed immediate access to
              </Typography>
            </Box>
          </Box>

          {/* Ideation */}
          <Box sx={{ mb: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  bgcolor: colors.accent,
                  color: '#fff',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                2
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: colors.textPrimary,
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                Ideation & Information Architecture
              </Typography>
            </Box>
            <Box sx={{ pl: { md: 8 } }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", lineHeight: 2, mb: 1.5, color: colors.textTertiary }}
              >
                • Created user personas representing different groups
                (developers, managers, and analysts)
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", lineHeight: 2, mb: 1.5, color: colors.textTertiary }}
              >
                • Developed wireframes - Just kidding 😂 we had to build
                quickly, so I skipped the wireframing and built immediately. We
                already had a template idea.
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", lineHeight: 2, mb: 1.5, color: colors.textTertiary }}
              >
                • Prioritized metrics using the "above the fold" principle for
                critical data
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", lineHeight: 2, color: colors.textTertiary }}
              >
                • Designed card-based layouts for scannability and modularity
              </Typography>
            </Box>
          </Box>

          {/* Prototyping */}
          <Box sx={{ mb: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Box
                sx={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  bgcolor: colors.accent,
                  color: '#fff',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                3
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: colors.textPrimary,
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                Prototyping & Visual Design
              </Typography>
            </Box>
            <Box sx={{ pl: { md: 8 } }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", lineHeight: 2, mb: 1.5, color: colors.textTertiary }}
              >
                • Established a color system to represent different states
                (success, warning, error)
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", lineHeight: 2, mb: 1.5, color: colors.textTertiary }}
              >
                • Selected appropriate chart types for different data types
                (line charts for trends, bar charts for comparisons)
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontSize: "20px", lineHeight: 2, color: colors.textTertiary }}
              >
                • Ensured responsive design for mobile and tablet viewing
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Key Data Points */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            sx={{ color: colors.textPrimary, mb: 3, fontSize: { md: "32px", xs: "24px" } }}
          >
            Key Data Points & Rationale
          </Typography>

          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  bgcolor: colors.bgSecondary,
                  p: 3,
                  borderRadius: "12px",
                  border: "1px solid #2a2a2a",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#673147", mb: 2, fontWeight: 600 }}
                >
                  User Activity Metrics
                </Typography>
                <Box sx={{ pl: { md: 2 }, color: colors.textTertiary }}>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "18px", lineHeight: 1.8, mb: 1 }}
                  >
                    • <strong>Active Users Over Time:</strong> Tracks
                    daily/weekly/monthly active users to understand growth
                    trends
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "18px", lineHeight: 1.8, mb: 1 }}
                  >
                    • <strong>Signup Rate:</strong> Monitors new user
                    acquisition
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "18px", lineHeight: 1.8 }}
                  >
                    • <strong>User Retention Rate:</strong> Identifies if
                    accounts are being deleted or retained
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  bgcolor: colors.bgSecondary,
                  p: 3,
                  borderRadius: "12px",
                  border: "1px solid #2a2a2a",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#673147", mb: 2, fontWeight: 600 }}
                >
                  Message Delivery Performance
                </Typography>
                 <Box sx={{ pl: { md: 2 }, color: colors.textTertiary }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", lineHeight: 1.8, mb: 1 }}
                >
                  • <strong>Success Rate:</strong> Percentage of successfully
                  delivered messages
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", lineHeight: 1.8, mb: 1 }}
                >
                  • <strong>Average Delivery Time:</strong> Time taken from send
                  to delivery
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", lineHeight: 1.8 }}
                >
                  • <strong>Platforms:</strong> Which platforms users publish
                  messages to.
                </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  bgcolor: colors.bgSecondary,
                  p: 3,
                  borderRadius: "12px",
                  border: "1px solid #2a2a2a",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#673147", mb: 2, fontWeight: 600 }}
                >
                  Regional Distribution
                </Typography>
                <Box sx={{ pl: { md: 2 }, color: colors.textTertiary }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", lineHeight: 1.8, mb: 1 }}
                >
                  • <strong>Geographic Heat Map:</strong> Visual representation
                  of usage by region
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", lineHeight: 1.8, mb: 1 }}
                >
                  • <strong>Regional Performance:</strong> Delivery rates per
                  country/region
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "18px", lineHeight: 1.8 }}
                >
                  • <strong>Network Carrier Data:</strong> Performance breakdown
                  by mobile carriers
                </Typography>
                </Box>
              </Box>
            </Grid>

            {/* <Grid item md={6} xs={12}>
              <Box
                sx={{
                  bgcolor: colors.bgSecondary,
                  p: 3,
                  borderRadius: "12px",
                  border: "1px solid #2a2a2a",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#673147", mb: 2, fontWeight: 600 }}
                >
                  System Health Indicators
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "16px", lineHeight: 1.8, mb: 1 }}
                >
                  • <strong>API Response Times:</strong> Monitors backend
                  performance
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "16px", lineHeight: 1.8, mb: 1 }}
                >
                  • <strong>Error Rates:</strong> Tracks system errors and
                  exceptions
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: "16px", lineHeight: 1.8 }}
                >
                  • <strong>Uptime Percentage:</strong> Service availability
                  metrics
                </Typography>
              </Box>
            </Grid> */}
          </Grid>
        </Box>

        {/* Technical Implementation */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            sx={{ color: colors.textPrimary, mb: 3, fontSize: { md: "32px", xs: "24px" } }}
          >
            Technical Implementation
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: "18px",
              lineHeight: 1.8,
              mb: 2,
              width: { md: "75%" },
            }}
          >
            The dashboard was built using React for component-based
            architecture, with mui/x-charts for data visualization.
          </Typography>
          <Box sx={{ mt: 3, pl: { md: 3 } }}>
            <Typography
              variant="h5"
              sx={{ fontSize: "18px", lineHeight: 1.8, mb: 1 }}
            >
              <strong>Frontend:</strong> React, Material-UI, mui/x-charts,
              i18n-iso-countries, Axios, antd, etc
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "18px", lineHeight: 1.8, mb: 1 }}
            >
              <strong>State Management:</strong> React Context API for global
              state
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "18px", lineHeight: 1.8, mb: 1 }}
            >
              <strong>API Integration:</strong> RESTful APIs
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "18px", lineHeight: 1.8 }}>
              <strong>Performance:</strong> Code splitting, memoization, and
              virtualized lists
            </Typography>
          </Box>
        </Box>

        {/* Design Decisions */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h4"
            sx={{ color: colors.textPrimary, mb: 3, fontSize: { md: "32px", xs: "24px" } }}
          >
            Key Design Decisions
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#673147",
                mb: 1.5,
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Card-Based Layout
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "18px", lineHeight: 1.8, width: { md: "75%" } }}
            >
              I chose a modular card-based design to allow users to scan
              information quickly and enable future customization features where
              users can rearrange or hide specific metrics based on their needs.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#673147",
                mb: 1.5,
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Color-Coded Status Indicators
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "18px", lineHeight: 1.8, width: { md: "75%" } }}
            >
              Implemented a consistent color system to allow instant recognition of
              system health without reading detailed metrics.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#673147",
                mb: 1.5,
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Interactive Time Range Selector
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "18px", lineHeight: 1.8, width: { md: "75%" } }}
            >
              Added customizable date ranges (24 hours, 7 days, 30 days, custom)
              to let users analyze data at different granularities, from
              real-time monitoring to long-term trend analysis.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#673147",
                mb: 1.5,
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Responsive Data Visualization
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "18px", lineHeight: 1.8, width: { md: "75%" } }}
            >
              Charts automatically adjust complexity based on screen size -
              detailed tooltips on desktop, simplified views on mobile to
              maintain readability without overwhelming users.
            </Typography>
          </Box>
        </Box>

        {/* Results & Impact */}
        <Box id="impact" sx={{ mb: 10, pt: 10, borderTop: "1px solid #2a2a2a" }}>
          <Typography
            variant="h4"
            sx={{
              color: colors.textPrimary,
              mb: 2,
              fontSize: { md: "36px", xs: "28px" },
              fontWeight: 700,
            }}
          >
            Results & Impact
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", color: colors.textTertiary, mb: 5, maxWidth: "800px" }}
          >
            The redesigned dashboard significantly improved team efficiency and
            decision-making capabilities.
          </Typography>

          <Grid container spacing={4}>
            <Grid item md={4} xs={12}>
              <Box
                sx={{
                  bgcolor: colors.bgSecondary,
                  p: 4,
                  borderRadius: "12px",
                  border: "1px solid #2a2a2a",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#673147",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#673147",
                    mb: 2,
                    fontWeight: 700,
                    fontSize: "56px",
                  }}
                >
                  60%
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    color: colors.textSecondary,
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  Faster Issue Identification
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: colors.textTertiary }}
                >
                  Reduction in time to identify and diagnose critical system
                  issues
                </Typography>
              </Box>
            </Grid>

            <Grid item md={4} xs={12}>
              <Box
                sx={{
                  bgcolor: colors.bgSecondary,
                  p: 4,
                  borderRadius: "12px",
                  border: "1px solid #2a2a2a",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#673147",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#673147",
                    mb: 2,
                    fontWeight: 700,
                    fontSize: "56px",
                  }}
                >
                  85%
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    color: colors.textSecondary,
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  Team Satisfaction
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: colors.textTertiary }}
                >
                  Increase in overall team satisfaction with analytics tools
                </Typography>
              </Box>
            </Grid>

            <Grid item md={4} xs={12}>
              <Box
                sx={{
                  bgcolor: colors.bgSecondary,
                  p: 4,
                  borderRadius: "12px",
                  border: "1px solid #2a2a2a",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "#673147",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    color: "#673147",
                    mb: 2,
                    fontWeight: 700,
                    fontSize: "56px",
                  }}
                >
                  40%
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    color: colors.textSecondary,
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  Faster Decision Making
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "14px", color: colors.textTertiary }}
                >
                  Improvement in speed of data-driven strategic decisions
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Dashboard Preview Video */}
        <Box
          id="solution"
          sx={{ mb: 10, pt: 10, borderTop: "1px solid #2a2a2a" }}
        >
          <Typography
            variant="h4"
            sx={{
              color: colors.textPrimary,
              mb: 2,
              fontSize: { md: "36px", xs: "28px" },
              fontWeight: 700,
            }}
          >
            The Solution: Dashboard Walkthrough
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "18px", color: colors.textTertiary, mb: 5, maxWidth: "800px" }}
          >
            See the redesigned dashboard in action, featuring intuitive
            navigation, real-time data visualization, and responsive design.
          </Typography>
          <Grid container spacing={4}>
            <Grid item md={12} xs={12}>
              <Box
                component={"video"}
                autoPlay
                loop
                muted
                src="/Screencast from 2025-12-08 11-41-01.webm"
                sx={{
                  width: { md: "85%", xs: "100%" },
                  borderRadius: "12px",
                  border: "1px solid #2a2a2a",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Learnings & Future Improvements */}
        <Box
          id="learnings"
          sx={{ mb: 8, pt: 6, borderTop: "1px solid #2a2a2a" }}
        >
          <Typography
            variant="h4"
            sx={{
              color: colors.textPrimary,
              mb: 2,
              fontSize: { md: "36px", xs: "28px" },
              fontWeight: 700,
            }}
          >
            Key Learnings & Future Improvements
          </Typography>

          <Grid container spacing={4} sx={{ mb: 5 }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: colors.accent,
                  color: "#fff",
                  p: 4,
                  borderRadius: "12px",
                  height: "100%",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                   
                    fontSize: "12px",
                    letterSpacing: 1.5,
                    fontWeight: 700,
                    display: "block",
                    mb: 2,
                  }}
                >
                  WHAT I LEARNED
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "20px",
                    lineHeight: 1.8,
                   
                  }}
                >
                  This project taught me the importance of balancing data
                  density with usability. While it's tempting to show all
                  available metrics, careful curation based on user needs leads
                  to better outcomes. Also, there's a whole lot that could be
                  done with chaotic data; it gives room for more creative
                  visualizations and insights.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: colors.bgSecondary,
                  p: 4,
                  borderRadius: "12px",
                  border: "2px solid #673147",
                  borderLeft: "6px solid #673147",
                  height: "100%",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "#673147",
                    fontSize: "12px",
                    letterSpacing: 1.5,
                    fontWeight: 700,
                    display: "block",
                    mb: 2,
                  }}
                >
                  KEY TAKEAWAY
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "20px",
                    lineHeight: 1.8,
                    color: colors.textSecondary,
                    fontStyle: "italic",
                  }}
                >
                  "Understanding your users' priorities and workflow is more
                  important than showcasing every possible data point."
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 5 }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "24px",
                lineHeight: 1.8,
                mb: 3,
                color: colors.textPrimary,
                fontWeight: 600,
              }}
            >
              Future Enhancements
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", mb: 3 }}>
                  <Box
                    sx={{
                      width: "8px",
                      bgcolor: colors.accent,
                      borderRadius: "4px",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "20px", lineHeight: 1.8, color: colors.textSecondary }}
                  >
                    Internet shutdown monitoring and reporting
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", mb: 3 }}>
                  <Box
                    sx={{
                      width: "8px",
                      bgcolor: colors.accent,
                      borderRadius: "4px",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "20px", lineHeight: 1.8, color: colors.textSecondary }}
                  >
                    Automated alert system for anomaly detection
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", mb: 3 }}>
                  <Box
                    sx={{
                      width: "8px",
                      bgcolor: colors.accent,
                      borderRadius: "4px",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "20px", lineHeight: 1.8, color: colors.textSecondary }}
                  >
                    Admin dashboard for in-house team to manage user data, SMS
                    cost breakdown, analysis, and predictions based on trends
                    and data
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", mb: 3 }}>
                  <Box
                    sx={{
                      width: "8px",
                      bgcolor: colors.accent,
                      borderRadius: "4px",
                      mr: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ fontSize: "20px", lineHeight: 1.8, color: colors.textSecondary }}
                  >
                    Predictive analytics using machine learning models
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            textAlign: "center",
            py: 5,
            px: 3,
            bgcolor: colors.bgSecondary,
            borderRadius: "12px",
            border: "1px solid #2a2a2a",
          }}
        >
          <Typography variant="h5" sx={{ color: colors.textPrimary, mb: 3 }}>
            Explore the Live Dashboard
          </Typography>
          <Typography
            component="a"
            href="https://telemetry.smswithoutborders.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#673147",
              fontSize: "18px",
              fontWeight: 600,
              textDecoration: "none",
              padding: "12px 32px",
              border: "2px solid #673147",
              borderRadius: "8px",
              display: "inline-block",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#673147",
                color: '#fff',
                transform: "translateY(-2px)",
                boxShadow: "0 8px 16px rgba(165, 95, 113, 0.3)",
              },
            }}
          >
            View Live Dashboard →
          </Typography>
        </Box>

        {/* Navigation to Previous Project */}
        <Box
          sx={{
            mt: 8,
            mb: 4,
            textAlign: "right",
          }}
        >
          <Box
            component="a"
            href="/projects/relaysms-website"
            sx={{
              display: "inline-block",
              textDecoration: "none",
              bgcolor: colors.bgSecondary,
              p: 3,
              borderRadius: "12px",
              border: "2px solid #2a2a2a",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: "#673147",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 16px rgba(103, 49, 71, 0.3)",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: colors.textTertiary, fontSize: "14px", mb: 1 }}
            >
              NEXT PROJECT  →
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: colors.textPrimary, fontSize: "20px", fontWeight: 600 }}
            >
               RelaySMS Product Page Redesign
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RelaySMSTelemetry;
