import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Stack, Chip } from "@mui/material";
import { GithubOutlined } from "@ant-design/icons";
import { useThemeColors } from "../hooks/useThemeColors";

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "approach", label: "Design Approach" },
  { id: "key-features", label: "Key Features" },
  { id: "outcome", label: "Outcome" },
];

function RelaySMSDesktop() {
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
          RelaySMS Desktop Application
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
          Designing a seamless desktop experience for vault management and
          platform configuration
        </Typography>

        {/* Project Links */}
        <Stack direction="row" spacing={3} sx={{ mb: 5 }}>
          <Typography
            component="a"
            href="https://github.com/smswithoutborders/RelaySMS-Desktop"
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
              Electron, React, MUI, Figma
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
              3 Months
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
          <Grid item md={2} sx={{ display: { xs: "none", md: "block" } }}>
            <Box sx={{ position: "sticky", top: 100, pt: 3 }}>
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

          <Grid item xs={12} md={10}>
            {/* Project Tags */}
            <Stack
              direction="row"
              spacing={2}
              sx={{ mb: 6, flexWrap: "wrap", gap: 1.5 }}
            >
              <Chip
                label="Electron"
                sx={{
                  bgcolor: colors.accent,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "13px",
                  height: "32px",
                }}
              />
              <Chip
                label="Desktop App"
                sx={{
                  bgcolor: colors.accent,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "13px",
                  height: "32px",
                }}
              />
              <Chip
                label="Cross-Platform"
                sx={{
                  bgcolor: colors.accent,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "13px",
                  height: "32px",
                }}
              />
              <Chip
                label="Vault Management"
                sx={{
                  bgcolor: colors.accent,
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "13px",
                  height: "32px",
                }}
              />
            </Stack>

            {/* Overview Section */}
            <Box id="overview" sx={{ mb: 12 }}>
              <Typography
                variant="h4"
                sx={{
                  color: colors.textPrimary,
                  mb: 3,
                  mt: 12,
                  fontSize: { md: "36px", xs: "24px" },
                  fontWeight: 600,
                }}
              >
                Project Overview
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { md: "18px", xs: "16px" },
                  lineHeight: 1.8,
                  mb: 2,
                  color: colors.textSecondary,
                }}
              >
                The RelaySMS Desktop Application provides users with a powerful
                desktop interface to manage their vault accounts, including
                login and sign-up functionality, platform management
                (add/delete), and comprehensive settings configuration. Built
                with Electron and React, the application brings RelaySMS
                experience to the desktop environment.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { md: "18px", xs: "16px" },
                  lineHeight: 1.8,
                  color: colors.textSecondary,
                }}
              >
                My role involved designing the complete user interface and
                implementing the frontend components to create an intuitive and
                seamless desktop experience that aligns with the RelaySMS brand
                and user expectations.
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
                      fontSize: { md: "18px", xs: "16px" },
                      lineHeight: 1.8,
                      color: colors.textSecondary,
                      mb: 1,
                    }}
                  >
                    • <strong>Desktop-First Experience:</strong> Transitioning
                    from a mobile-first approach to create an optimized desktop
                    interface while maintaining consistency with the mobile app
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
                    • <strong>Vault Security:</strong> Designing secure
                    authentication flows and platform management while keeping
                    the interface accessible and user-friendly
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
                    • <strong>Cross-Platform Consistency:</strong> Ensuring the
                    application works seamlessly across Windows, macOS, and
                    Linux with native look and feel
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
                      01. User Flow Mapping
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: colors.textSecondary,
                      }}
                    >
                      Mapped out user journeys for authentication, platform
                      management, and settings configuration to identify pain
                      points and optimization opportunities.
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
                      02. Desktop UI Patterns
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: colors.textSecondary,
                      }}
                    >
                      Implemented familiar desktop interaction patterns like
                      keyboard shortcuts, context menus, and window management
                      for an intuitive native experience.
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
                      03. Component Library
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: colors.textSecondary,
                      }}
                    >
                      Built a reusable component library with Material-UI that
                      ensures consistency across all screens while maintaining
                      flexibility for future features.
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
                      04. Security-First Design
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: colors.textSecondary,
                      }}
                    >
                      Designed secure authentication flows with clear visual
                      feedback and implemented secure storage patterns for
                      sensitive user data.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Key Features Showcase */}
            <Box id="key-features" sx={{ mb: 12 }}>
              <Typography
                variant="h4"
                sx={{
                  color: colors.textPrimary,
                  mb: 4,
                  fontSize: { md: "36px", xs: "24px" },
                  fontWeight: 600,
                }}
              >
                Design Drafts
              </Typography>

              <Grid container spacing={4} sx={{ mb: 6 }}>
                <Grid item md={8} xs={12}>
                  <Box
                    sx={{
                      bgcolor: colors.bgSecondary,
                      borderRadius: "12px",
                      border: "2px solid #2a2a2a",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: colors.accent,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Box
                      component={"img"}
                      src="/Vault Management(4).svg"
                      alt="Vault Management Interface"
                      sx={{ width: "100%", display: "block" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: 2,
                      color: colors.textTertiary,
                      fontSize: "14px",
                      fontStyle: "italic",
                    }}
                  >
                    Complete vault management interface with platform add/delete
                    capabilities
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { md: "18px", xs: "16px" },
                      lineHeight: 1.8,
                      mb: 4,
                      mt: 8,
                      color: colors.textSecondary,
                    }}
                  >
                    During testing, I discovered a flaw in the initial platform
                    management view: as platforms increased, users would need to
                    scroll too much just to find and access items. The image
                    below shows the fix I implemented using a Gmail-like split
                    layout, with platforms on the side and each platform
                    expanding account details in the larger content frame for
                    more flexibility.
                  </Typography>
                  <Box
                    component={"img"}
                    src="/relay-desktop.png"
                    alt="Vault Management Interface"
                    sx={{
                      width: "100%",
                      display: "block",
                      borderRadius: "12px",
                      border: "2px solid #2a2a2a",
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
                    Refined platform management using a split-pane pattern
                    inspired by Gmail for faster navigation and scalable account
                    handling.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { md: "18px", xs: "16px" },
                      lineHeight: 1.8,
                      mb: 3,
                      mt: 8,
                      color: colors.textSecondary,
                    }}
                  >
                    I also added a new desktop login flow that supports
                    email-based authentication while keeping the experience
                    consistent with the existing RelaySMS desktop design system.
                  </Typography>
                  <Box
                    component={"img"}
                    src="/relay-desktop-login-new.png"
                    alt="RelaySMS Desktop email login screen"
                    sx={{
                      width: "100%",
                      display: "block",
                      borderRadius: "12px",
                      border: "2px solid #2a2a2a",
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
                    New email login screen for faster onboarding and account
                    access on desktop.
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            {/* Outcome Section */}
            <Box
              id="outcome"
              sx={{
                mb: 8,
                p: 5,
                bgcolor: colors.bgSecondary,
                borderRadius: "12px",
                border: "1px solid #2a2a2a",
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
                  mb: 2,
                  color: colors.textSecondary,
                }}
              >
                The RelaySMS Desktop Application successfully brings the full
                vault management experience to desktop users, providing a
                secure, intuitive, and powerful tool for managing their tokens.
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
                    <strong>Desktop vs. Web UX:</strong> Desktop applications
                    require different interaction patterns than web apps. Users
                    expect keyboard shortcuts, native menus, and familiar
                    desktop behaviors that differ from browser-based
                    experiences.
                  </Typography>
                </Box>

                {/* <Box
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
                <strong>Component Reusability:</strong> Building a solid
                component library early on accelerates development and ensures
                consistency. This investment paid off when expanding to other
                RelaySMS products.
              </Typography>
            </Box> */}
              </Stack>
            </Box>

            {/* Navigation to Previous and Next Project */}
            <Box
              sx={{
                mt: 8,
                mb: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
              }}
            >
              {/* Previous Project Button */}
              <Box
                component="a"
                href="/projects/shortmesh"
                sx={{
                  display: "inline-block",
                  textDecoration: "none",
                  bgcolor: colors.bgSecondary,
                  p: 3,
                  borderRadius: "12px",
                  border: "2px solid #2a2a2a",
                  transition: "all 0.3s ease",
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
                  PREVIOUS PROJECT
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.textPrimary,
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  ← ShortMesh
                </Typography>
              </Box>

              {/* Next Project Button */}
              {/* <Box
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
              NEXT PROJECT
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
          </Box> */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default RelaySMSDesktop;
