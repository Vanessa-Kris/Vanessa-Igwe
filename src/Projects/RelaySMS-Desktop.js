import React from "react";
import { Box, Grid, IconButton, Typography, Stack, Chip } from "@mui/material";
import { HomeOutlined, GithubOutlined } from "@ant-design/icons";
import { useThemeColors } from "../hooks/useThemeColors";

function RelaySMSDesktop() {
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
              • Challenge
            </Typography>
            <Typography
              component="a"
              href="#approach"
              sx={{
                color: "#673147",
                textDecoration: "none",
                fontSize: "14px",
                "&:hover": { color: colors.textPrimary },
              }}
            >
              • Design Approach
            </Typography>
            <Typography
              component="a"
              href="#key-features"
              sx={{
                color: "#673147",
                textDecoration: "none",
                fontSize: "14px",
                "&:hover": { color: colors.textPrimary },
              }}
            >
              • Key Features
            </Typography>
            <Typography
              component="a"
              href="#outcome"
              sx={{
                color: "#673147",
                textDecoration: "none",
                fontSize: "14px",
                "&:hover": { color: colors.textPrimary },
              }}
            >
              • Outcome
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
            desktop interface to manage their vault accounts, including login
            and sign-up functionality, platform management (add/delete), and
            comprehensive settings configuration. Built with Electron and React,
            the application brings RelaySMS experience to the desktop
            environment.
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
            seamless desktop experience that aligns with the RelaySMS brand and
            user expectations.
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
                • <strong>Desktop-First Experience:</strong> Transitioning from
                a mobile-first approach to create an optimized desktop interface
                while maintaining consistency with the mobile app
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
                authentication flows and platform management while keeping the
                interface accessible and user-friendly
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
                application works seamlessly across Windows, macOS, and Linux
                with native look and feel
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
                  management, and settings configuration to identify pain points
                  and optimization opportunities.
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
                  keyboard shortcuts, context menus, and window management for
                  an intuitive native experience.
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
                  feedback and implemented secure storage patterns for sensitive
                  user data.
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
                There are some flaws in the platform management view - more
                platforms would mean scrolling the page to access more
                platforms, so I had to come up with a different approach.
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
            The RelaySMS Desktop Application successfully brings the full vault
            management experience to desktop users, providing a secure,
            intuitive, and powerful tool for managing their tokens.
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
            Key Learnings
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
                expect keyboard shortcuts, native menus, and familiar desktop
                behaviors that differ from browser-based experiences.
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
                <strong>Security and Usability Balance:</strong> Designing
                secure interfaces doesn't mean sacrificing usability. Clear
                visual feedback and progressive disclosure can make secure
                features feel natural and intuitive.
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
            href="/projects/relaysms-website"
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
              ← RelaySMS Landing Page Redesign
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
      </Box>
    </Box>
  );
}

export default RelaySMSDesktop;
