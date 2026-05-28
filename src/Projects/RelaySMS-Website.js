import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { LinkOutlined } from "@ant-design/icons";
import { useThemeColors } from "../hooks/useThemeColors";

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "approach", label: "Approach" },
  { id: "comparison", label: "Before & After" },
  { id: "outcome", label: "Outcome" },
];

function RelaySMSWebsite() {
  const colors = useThemeColors();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers = [];
    tocSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <Box sx={{ px: { md: 4, xs: 2 } }}>
      <Box sx={{ mx: { md: 15, xs: 1 }, pt: 8, color: colors.textSecondary }}>
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
          RelaySMS Product Page Redesign
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
          Transforming a complex product into a compelling user story through
          strategic redesign
        </Typography>

        {/* Project Links */}

        <Typography
          component="a"
          href="https://relay.smswithoutborders.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#673147",
            mb: 4,
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
          View Live Website
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
              sx={{
                color: colors.textTertiary,
                fontSize: "12px",
                letterSpacing: 1.5,
              }}
            >
              ROLE
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: colors.textPrimary, mt: 0.5 }}
            >
              UI/UX Designer & Developer
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              variant="overline"
              sx={{
                color: colors.textTertiary,
                fontSize: "12px",
                letterSpacing: 1.5,
              }}
            >
              INDUSTRY
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: colors.textPrimary, mt: 0.5 }}
            >
              Open-Source, Communication
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              variant="overline"
              sx={{
                color: colors.textTertiary,
                fontSize: "12px",
                letterSpacing: 1.5,
              }}
            >
              TOOLS
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: colors.textPrimary, mt: 0.5 }}
            >
              React, MUI, Figma
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography
              variant="overline"
              sx={{
                color: colors.textTertiary,
                fontSize: "12px",
                letterSpacing: 1.5,
              }}
            >
              DURATION
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: colors.textPrimary, mt: 0.5 }}
            >
              2 Weeks
            </Typography>
          </Grid>
        </Grid>

        {/* Mobile TOC */}
        <Box
          sx={{
            display: { md: "none", xs: "block" },
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
          <Stack direction="column" spacing={2} sx={{ gap: 1.5 }}>
            {tocSections.map(({ id, label }) => (
              <Typography
                key={id}
                component="a"
                href={`#${id}`}
                sx={{
                  textDecoration: "none",
                  fontSize: "14px",
                  color: activeSection === id ? "#673147" : colors.textTertiary,
                  fontWeight: activeSection === id ? 600 : 400,
                  "&:hover": { color: "#673147" },
                }}
              >
                • {label}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Two-column layout: sticky TOC + main content */}
      <Box sx={{ mx: { md: 15, xs: 1 }, color: colors.textSecondary, pb: 8 }}>
        <Grid container spacing={4}>
          {/* Sticky TOC sidebar - desktop only */}
          <Grid item md={2} sx={{ display: { xs: "none", md: "block" } }}>
            <Box
              sx={{
                position: "sticky",
                top: 100,
                pt: 3,
                // bgcolor: colors.bgSecondary,
                // borderRadius: "12px",
                // border: "1px solid #2a2a2a",
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: colors.textTertiary,
                  fontSize: "14px",
                  letterSpacing: 1.5,
                  mb: 2,
                  display: "block",
                }}
              >
                CONTENTS
              </Typography>
              <Stack direction="column" spacing={1.5}>
                {tocSections.map(({ id, label }) => (
                  <Typography
                    key={id}
                    component="a"
                    href={`#${id}`}
                    sx={{
                      textDecoration: "none",
                      fontSize: "14px",
                      display: "block",
                      fontWeight: activeSection === id ? 600 : 400,
                      color:
                        activeSection === id ? "#673147" : colors.textTertiary,
                      borderLeft:
                        activeSection === id
                          ? "2px solid #673147"
                          : "2px solid transparent",
                      pl: 1,
                      transition: "all 0.2s ease",
                      "&:hover": { color: "#673147" },
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Main content column */}
          <Grid item xs={12} md={10}>
            {/* Overview Section */}
            <Box id="overview" sx={{ mb: 12 }}>
              <Typography
                variant="h4"
                sx={{
                  color: colors.textPrimary,
                  mb: 3,
                  mt: 6,
                  fontSize: { md: "36px", xs: "24px" },
                  fontWeight: 600,
                }}
              >
                Project Overview
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  // fontSize: { md: "18px", xs: "16px" },
                  lineHeight: 1.8,
                  mb: 2,
                  color: colors.textSecondary,
                }}
              >
                RelaySMS is an innovative communication platform that enables
                users to send messages to online platforms like X (Twitter),
                Gmail, and Telegram without an active internet connection.
                Messages are sent via SMS from the users device, making it
                accessible in low-connectivity environments.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  // fontSize: { md: "18px", xs: "16px" },
                  lineHeight: 1.8,
                  color: colors.textSecondary,
                }}
              >
                The original product page failed to communicate this unique
                value proposition effectively. My task was to redesign the
                entire landing page to improve user engagement, simplify
                navigation, and highlight the key benefits that make RelaySMS
                stand out.
              </Typography>
            </Box>

            {/* Challenge Section */}
            <Box
              id="challenge"
              sx={{
                mb: 12,
                p: 4,
                bgcolor: colors.bgSecondary,
                borderRadius: "12px",
                borderLeft: `4px solid ${colors.accent}`,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: colors.textPrimary,
                  mb: 3,
                  fontSize: { md: "36px", xs: "24px" },
                  fontWeight: 600,
                }}
              >
                The Challenge
              </Typography>
              <Stack spacing={2}>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      // fontSize: { md: "18px", xs: "16px" },
                      lineHeight: 1.8,
                      color: colors.textSecondary,
                      mb: 1,
                    }}
                  >
                    • <strong>Poor Information Hierarchy:</strong> Users
                    struggled to understand what RelaySMS does and why it
                    matters
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      // fontSize: { md: "18px", xs: "16px" },
                      lineHeight: 1.8,
                      color: colors.textSecondary,
                      mb: 1,
                    }}
                  >
                    • <strong>Lack of Visual Engagement:</strong> The original
                    design was text-heavy with minimal visual elements to
                    capture attention
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { md: "18px", xs: "16px" },
                      lineHeight: 1.8,
                      color: colors.textSecondary,
                      mb: 1,
                    }}
                  >
                    • <strong>Unclear Call-to-Actions:</strong> Multiple CTAs
                    competed for attention without clear user journey
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Design Approach Section */}
            <Box id="approach" sx={{ mb: 12 }}>
              <Typography
                variant="h4"
                sx={{
                  color: colors.textPrimary,
                  mb: 4,
                  fontSize: { md: "36px", xs: "24px" },
                  fontWeight: 600,
                }}
              >
                Design Approach
              </Typography>

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: colors.bgSecondary,
                      borderRadius: "12px",
                      height: "100%",
                      border: "1px solid #2a2a2a",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.textPrimary,
                        mb: 2,
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      01. User Research
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: colors.textSecondary,
                      }}
                    >
                      Outlined and prioritized key user needs and pain points to
                      inform the design process.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: colors.bgSecondary,
                      borderRadius: "12px",
                      height: "100%",
                      border: "1px solid #2a2a2a",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.textPrimary,
                        mb: 2,
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      02. Information Architecture
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: colors.textSecondary,
                      }}
                    >
                      Restructured content hierarchy to follow a clear user
                      journey: Problem → Solution → Features → Trust Signals →
                      Action.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: colors.bgSecondary,
                      borderRadius: "12px",
                      height: "100%",
                      border: "1px solid #2a2a2a",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.textPrimary,
                        mb: 2,
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      03. Visual Design
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: colors.textSecondary,
                      }}
                    >
                      Created engaging visuals to break up
                      text and make technical concepts more digestible and
                      approachable. 
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      p: 3,
                      bgcolor: colors.bgSecondary,
                      borderRadius: "12px",
                      height: "100%",
                      border: "1px solid #2a2a2a",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: colors.textPrimary,
                        mb: 2,
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      04. Responsive Optimization
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: colors.textSecondary,
                      }}
                    >
                      Designed mobile-first layouts ensuring seamless experience
                      across all devices, particularly important for the target
                      audience.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Before & After Comparison */}
            <Box id="comparison" sx={{ mb: 12 }}>
              <Typography
                variant="h4"
                sx={{
                  color: colors.textPrimary,
                  mt: 4,
                  fontSize: { md: "36px", xs: "24px" },
                  fontWeight: 600,
                }}
              >
                Before & After Comparison
              </Typography>

              <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                  <Box
                    sx={{
                      p: 2,
                      // bgcolor: colors.bgSecondary,
                      // borderRadius: "12px",
                      // border: "1px solid #2a2a2a",
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: colors.accent,
                        fontSize: "12px",
                        letterSpacing: 1.5,
                        mb: 2,
                        display: "block",
                      }}
                    >
                      BEFORE
                    </Typography>
                    <Box
                      component={"img"}
                      src="/relayold1.png"
                      sx={{
                        width: "100%",
                        borderRadius: "8px",
                        border: "1px solid #2a2a2a",
                      }}
                    />
                    <Typography
                      sx={{
                        mt: 2,
                        color: colors.textTertiary,
                        fontSize: "14px",
                        fontStyle: "italic",
                      }}
                    >
                      Original hero section with unclear messaging and uneven
                      font usage
                    </Typography>
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box
                    sx={{
                      p: 2,
                      // bgcolor: colors.bgSecondary,
                      // borderRadius: "12px",
                      // border: "1px solid #2a2a2a",
                      mt: { md: 6, xs: 2 },
                    }}
                  >
                    <Box
                      component={"img"}
                      src="/relayold2.png"
                      sx={{
                        width: "100%",
                        borderRadius: "8px",
                        border: "1px solid #2a2a2a",
                      }}
                    />
                    <Typography
                      sx={{
                        mt: 2,
                        color: colors.textTertiary,
                        fontSize: "14px",
                        fontStyle: "italic",
                      }}
                    >
                      Old getting started section: Poor visual hierarchy
                    </Typography>
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box
                    sx={{
                      p: 2,
                      // bgcolor: colors.bgSecondary,
                      // borderRadius: "12px",
                      // border: "1px solid #2a2a2a",
                    }}
                  >
                    <Typography
                      variant="overline"
                      sx={{
                        color: "#4caf50",
                        fontSize: "12px",
                        letterSpacing: 1.5,
                        mb: 2,
                        display: "block",
                      }}
                    >
                      AFTER
                    </Typography>
                    <Box
                      component={"img"}
                      src="/relay-home.png"
                      sx={{
                        width: "100%",
                        borderRadius: "8px",
                        border: "1px solid #2a2a2a",
                      }}
                    />
                    <Typography
                      sx={{
                        mt: 2,
                        color: colors.textTertiary,
                        fontSize: "14px",
                        fontStyle: "italic",
                      }}
                    >
                      Redesigned hero with clear value proposition and engaging
                      visuals
                    </Typography>
                  </Box>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Box
                    sx={{
                      p: 2,
                      // bgcolor: colors.bgSecondary,
                      // borderRadius: "12px",
                      // border: "1px solid #2a2a2a",
                      mt: { md: 6, xs: 2 },
                    }}
                  >
                    <Box
                      component={"img"}
                      src="/getting-started.png"
                      sx={{
                        width: "100%",
                        borderRadius: "8px",
                        border: "1px solid #2a2a2a",
                      }}
                    />
                    <Typography
                      sx={{
                        mt: 2,
                        color: colors.textTertiary,
                        fontSize: "14px",
                        fontStyle: "italic",
                      }}
                    >
                      Redesigned getting started section: Scannable sections
                      with visual interest and numbered steps.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* System Overview Highlight */}
            <Box
              sx={{
                my: 12,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: colors.textPrimary,
                  mb: 2,
                  fontSize: { md: "28px", xs: "22px" },
                  fontWeight: 700,
                  position: "relative",
                }}
              >
                Additional Contribution: System Overview Page
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { md: "18px", xs: "16px" },
                  lineHeight: 1.8,
                  mb: 3,
                  color: colors.textSecondary,
                  position: "relative",
                }}
              >
                As part of the redesign, I created a dedicated{" "}
                <strong>System Overview page</strong> that helps users
                understand the complete RelaySMS ecosystem. This interactive
                page breaks down the technical architecture into digestible
                visual components, making it easier for both technical and
                non-technical audiences to grasp how the entire system works
                together.
              </Typography>
              <Box
                component={"img"}
                src="/relay-system.png"
                sx={{
                  width: { md: "70%", xs: "100%" },
                  borderRadius: "8px",
                  border: `2px solid ${colors.accent}`,
                }}
              />

              <Typography
                component="a"
                href="https://relay.smswithoutborders.com/system-overview"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#673147",
                  my: 4,
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
                View Systen Overview
              </Typography>
            </Box>

            {/* Outcome Section */}
            <Box
              id="outcome"
              sx={{
                mb: 8,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: colors.textPrimary,
                  mb: 4,
                  fontSize: { md: "36px", xs: "24px" },
                  fontWeight: 600,
                }}
              >
                Outcome & Impact
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { md: "18px", xs: "16px" },
                  lineHeight: 1.8,
                  mb: 3,
                  color: colors.textSecondary,
                }}
              >
                The redesign of the RelaySMS product page resulted in a more
                user-friendly and visually appealing experience that effectively
                communicates the value of RelaySMS to it's users.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: colors.textPrimary,
                  mt: 5,
                  mb: 3,
                  fontSize: { md: "24px", xs: "20px" },
                  fontWeight: 600,
                }}
              >
                Design Iterations
              </Typography>

              <Grid container spacing={3}>
                <Grid item md={6} xs={12} sm={6}>
                  <Box
                    sx={{
                      bgcolor: colors.bgSecondary,
                      borderRadius: "8px",
                      border: "2px solid #2a2a2a",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: colors.accent,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      component={"img"}
                      src="/relay-rough.png"
                      sx={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: 2,
                      color: colors.textSecondary,
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    Figma
                  </Typography>
                </Grid>
                <Grid item md={6} xs={12} sm={6}>
                  <Box
                    sx={{
                      bgcolor: colors.bgSecondary,
                      borderRadius: "8px",
                      border: "2px solid #2a2a2a",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: colors.accent,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      component={"img"}
                      src="/relay.png"
                      sx={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: 2,
                      color: colors.textSecondary,
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    Final Design{" "}
                  </Typography>
                </Grid>
                {/* <Grid item md={3} xs={12} sm={6}>
                  <Box
                    sx={{
                      bgcolor: colors.bgSecondary,
                      borderRadius: "8px",
                      border: "2px solid #2a2a2a",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: colors.accent,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      component={"img"}
                      src="/3(2).png"
                      sx={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: 2,
                      color: colors.textSecondary,
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    Final Design
                  </Typography>
                </Grid> */}
                {/* <Grid item md={3} xs={12} sm={6}>
                  <Box
                    sx={{
                      bgcolor: colors.bgSecondary,
                      p: 2,
                      borderRadius: "12px",
                      border: "2px solid #2a2a2a",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: colors.accent,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      component={"img"}
                      src="/Frame.png"
                      sx={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: 2,
                      color: colors.textSecondary,
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    Other components & notes
                  </Typography>
                </Grid> */}
              </Grid>

              <Typography
                component="a"
                href="https://relay.smswithoutborders.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#673147",
                  mt: 5,
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
                View Live Website
              </Typography>
            </Box>

            {/* Key Learnings */}
            <Box sx={{ mb: 12 }}>
              <Typography
                variant="h4"
                sx={{
                  color: colors.textPrimary,
                  mb: 3,
                  fontSize: { md: "36px", xs: "24px" },
                  fontWeight: 600,
                }}
              >
                Lessons
              </Typography>

              <Stack spacing={2.5}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: colors.bgSecondary,
                    borderRadius: "8px",
                    borderLeft: `3px solid ${colors.accent}`,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: colors.textSecondary,
                    }}
                  >
                    <strong>Visual hierarchy matters:</strong> Users process
                    information in seconds. Clear headings, whitespace, and
                    visual cues guide them through the content effortlessly.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 3,
                    bgcolor: colors.bgSecondary,
                    borderRadius: "8px",
                    borderLeft: `3px solid ${colors.accent}`,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: colors.textSecondary,
                    }}
                  >
                    <strong>Show, don't just tell:</strong> Combining visuals
                    with text increased comprehension and made technical
                    concepts more accessible to non-technical users.
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Navigation to Next Project */}
            <Box
              sx={{
                mt: 8,
                mb: 4,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Box
                component="a"
                href="/projects/relaysms-telemetry"
                sx={{
                  display: "inline-block",
                  textDecoration: "none",
                  bgcolor: colors.bgSecondary,
                  p: 3,
                  borderRadius: "12px",
                  border: "2px solid #2a2a2a",
                  transition: "all 0.3s ease",
                  textAlign: "right",
                  width: { xs: "100%", md: "auto" },
                  "&:hover": {
                    borderColor: colors.accent,
                    transform: "translateY(-2px)",
                    boxShadow: `0 8px 16px rgba(103, 49, 71, 0.3)`,
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: colors.textTertiary, fontSize: "14px", mb: 1 }}
                >
                  NEXT
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.textPrimary,
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  RelaySMS Telemetry Dashboard →
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default RelaySMSWebsite;
