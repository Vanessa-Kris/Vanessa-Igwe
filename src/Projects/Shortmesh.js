import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import { LinkOutlined, GithubOutlined } from "@ant-design/icons";
import { useThemeColors } from "../hooks/useThemeColors";

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenges" },
  { id: "build", label: "What I Built" },
  { id: "outcome", label: "Outcome" },
  { id: "learnings", label: "Lessons" },
];

function Shortmesh() {
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
        {/* Header */}
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
          Shortmesh Authy Ecosystem
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
          Designed and developed the Authy website, Authy widget, and the
          Shortmesh Interface API dashboard experience.
        </Typography>

        {/* Links */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mb: 5 }}
        >
          <Typography
            component="a"
            href="https://authy.shortmesh.com/demo/"
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
            View Authy Demo
          </Typography>

          <Typography
            component="a"
            href="https://github.com/shortmesh/Interface-API"
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
            Interface API Repository
          </Typography>
        </Stack>

        {/* Metadata */}
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
              Product Designer & Frontend Developer
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
              PROJECTS
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: colors.textPrimary, mt: 0.5 }}
            >
              Authy Website, Authy Widget, Interface API Dashboard
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
              React, MUI, Figma, API Integrations
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
              FOCUS
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: colors.textPrimary, mt: 0.5 }}
            >
              Authentication UX for Web + Android
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
            <Box id="overview" sx={{ mb: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  color: colors.textPrimary,
                  mb: 3,
                  fontSize: { md: "36px", xs: "28px" },
                  fontWeight: 700,
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
                Shortmesh needed a cohesive product experience across
                user-facing authentication and developer tooling. The ask was to
                deliver a basic but clear Authy website that explains what Authy
                is, and a working demo that users can try immediately.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { md: "18px", xs: "16px" },
                  lineHeight: 1.8,
                  color: colors.textSecondary,
                }}
              >
                I worked end-to-end across product design and frontend
                implementation: the Authy website, the widget interaction model,
                and the Interface API dashboard. The widget experience was
                designed to work consistently across both web and Android
                contexts.
              </Typography>
            </Box>

            <Box
              id="challenge"
              sx={{
                mb: 10,
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
                  mb: 3,
                  fontSize: { md: "32px", xs: "24px" },
                  fontWeight: 700,
                }}
              >
                Challenges
              </Typography>
              <Stack spacing={2.5}>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "17px", lineHeight: 1.8 }}
                >
                  • The project is highly technical, but the website still
                  needed to feel simple and understandable to non-technical
                  users.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "17px", lineHeight: 1.8 }}
                >
                  • The Authy widget needed a single interaction model that
                  could translate well across web and Android environments.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "17px", lineHeight: 1.8 }}
                >
                  • We had to bridge two audiences at once: users trying a quick
                  demo and developers integrating with the Interface API.
                </Typography>
              </Stack>
            </Box>

            <Box id="build" sx={{ mb: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  color: colors.textPrimary,
                  mb: 4,
                  fontSize: { md: "36px", xs: "24px" },
                  fontWeight: 700,
                }}
              >
                What I Built
              </Typography>

              <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                  <Box
                    sx={{
                      bgcolor: colors.bgSecondary,
                      p: 2,
                      borderRadius: "12px",
                      border: "1px solid #2a2a2a",
                    }}
                  >
                    <Box
                      component="img"
                      src="/shortmesh.png"
                      sx={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: 2,
                      color: colors.textSecondary,
                      fontSize: "14px",
                    }}
                  >
                    Authy Website: clear messaging and entry point to demo.
                  </Typography>
                </Grid>

                <Grid item md={6} xs={12}>
                  <Stack spacing={4}>
                    <Box>
                      <Box
                        sx={{
                          bgcolor: colors.bgSecondary,
                          p: 2,
                          borderRadius: "12px",
                          border: "1px solid #2a2a2a",
                        }}
                      >
                        <Box
                          component="img"
                          src="/authy-widget-full.png"
                          sx={{ width: "100%", borderRadius: "8px" }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          mt: 2,
                          color: colors.textSecondary,
                          fontSize: "14px",
                        }}
                      >
                        Full Authy widget flow designed for practical usage.
                      </Typography>
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          bgcolor: colors.bgSecondary,
                          p: 2,
                          borderRadius: "12px",
                          border: "1px solid #2a2a2a",
                        }}
                      >
                        <Box
                          component="img"
                          src="/widget.png"
                          sx={{ width: "100%", borderRadius: "8px" }}
                        />
                      </Box>
                      <Typography
                        sx={{
                          mt: 2,
                          color: colors.textSecondary,
                          fontSize: "14px",
                        }}
                      >
                        Focused Authy widget UI built for reusable integration.
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>

                <Grid item md={12} xs={12}>
                  <Box
                    sx={{
                      bgcolor: colors.bgSecondary,
                      p: 2,
                      borderRadius: "12px",
                      border: "1px solid #2a2a2a",
                    }}
                  >
                    <Box
                      component="img"
                      src="/shortmesh-dashboard.png"
                      sx={{ width: "100%", borderRadius: "8px" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: 2,
                      color: colors.textSecondary,
                      fontSize: "14px",
                    }}
                  >
                    Interface API dashboard for developer-side workflows.
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <Box
              id="outcome"
              sx={{
                mb: 10,
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
                  mb: 3,
                  fontSize: { md: "32px", xs: "24px" },
                  fontWeight: 700,
                }}
              >
                Outcome
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "17px", lineHeight: 1.8, mb: 2 }}
              >
                The final output gave Shortmesh a clean product and a practical
                trial experience: users can understand Authy quickly and test it
                through a demo without heavy onboarding.
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "17px", lineHeight: 1.8 }}
              >
                On the technical side, the widget and Interface API dashboard
                provided a stronger bridge for integration-focused users and
                internal workflows.
              </Typography>
            </Box>

            <Box id="learnings" sx={{ mb: 10 }}>
              <Typography
                variant="h4"
                sx={{
                  color: colors.textPrimary,
                  mb: 3,
                  fontSize: { md: "36px", xs: "24px" },
                  fontWeight: 700,
                }}
              >
                Lessons Learned
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
                    sx={{ fontSize: "16px", lineHeight: 1.8 }}
                  >
                    <strong>Keep technical products approachable:</strong> even
                    for complex systems, clear structure and simple language
                    improve user confidence.
                  </Typography>
                </Box>
              </Stack>
            </Box>

            {/* Bottom Links */}
            <Box sx={{ mb: 6 }}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                <Typography
                  component="a"
                  href="https://authy.shortmesh.com/demo/"
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
                  Open Authy Demo
                </Typography>
                <Typography
                  component="a"
                  href="https://github.com/shortmesh/Interface-API"
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
                  View Interface API Repository
                </Typography>
              </Stack>
            </Box>

            {/* Navigation */}
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
                  width: { xs: "100%", md: "auto" },
                  "&:hover": {
                    borderColor: colors.accent,
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 16px rgba(103, 49, 71, 0.3)",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: colors.textTertiary, fontSize: "14px", mb: 1 }}
                >
                  PREVIOUS
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: colors.textPrimary,
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  ← RelaySMS Telemetry Dashboard
                </Typography>
              </Box>

              <Box
                component="a"
                href="/projects/relaysms-desktop"
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
                    boxShadow: "0 8px 16px rgba(103, 49, 71, 0.3)",
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
                  RelaySMS Desktop Application →
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Shortmesh;
