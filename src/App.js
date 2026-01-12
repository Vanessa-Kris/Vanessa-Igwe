import React, { useEffect, useState, useMemo } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import About from "./Sections/About";
import Portfolio from "./Sections/Portfolio";
import Reviews from "./Sections/Reviews";
import Experience from "./Sections/Experience";
import Blogs from "./Sections/Blogs";
import PageNotFound from "./Pages/404";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Name from "./Sections/Name";
import Layout from "./Layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Intro from "./Sections/Intro";
import Loader from "./Components/Loader";
import Projects from "./Pages/Projects";
import RelaySMSWebsite from "./Projects/RelaySMS-Website";
import RelaySMSTelemetry from "./Projects/RelaySMS-Telemetry";
import RelaySMSDesktop from "./Projects/RelaySMS-Desktop";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mode, setMode] = useState(() => {
    // Get theme from localStorage or default to 'dark'
    return localStorage.getItem('themeMode') || 'dark';
  });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "#673147",
          },
          secondary: {
            main: mode === "dark" ? "#fff" : "#000",
          },
          background: {
            default: mode === "dark" ? "#161616" : "#ffffff",
            paper: mode === "dark" ? "#1a1a1a" : "#f5f5f5",
          },
          text: {
            primary: mode === "dark" ? "#d7d0d7" : "#1a1a1a",
            secondary: mode === "dark" ? "#999" : "#666",
          },
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: "background-color 0.3s ease, color 0.3s ease",
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "dark" ? "light" : "dark";
      localStorage.setItem('themeMode', newMode);
      return newMode;
    });
  };

  const disableRightClick = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", disableRightClick);
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
      document.removeEventListener("contextmenu", disableRightClick);
    }, 3000);
  }, []);

  // Update body class when theme changes
  useEffect(() => {
    document.body.className = mode === "dark" ? "dark-mode" : "light-mode";
  }, [mode]);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route
              path=""
              element={
                <Layout
                  mode={mode}
                  toggleTheme={toggleTheme}
                  nav={<NavBar mode={mode} toggleTheme={toggleTheme} />}
                  name={<Name />}
                  intro={<Intro />}
                  about={<About />}
                  portfolio={<Portfolio />}
                  experience={<Experience />}
                  reviews={<Reviews />}
                  blogs={<Blogs />}
                  contact={<Contact />}
                  footer={<Footer />}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/projects"
              element={
                <Layout mode={mode} toggleTheme={toggleTheme}>
                  <Projects />
                </Layout>
              }
            />
            <Route
              path="projects/relaysms-website"
              element={
                <Layout mode={mode} toggleTheme={toggleTheme}>
                  <RelaySMSWebsite />
                </Layout>
              }
            />
            <Route
              path="projects/relaysms-telemetry"
              element={
                <Layout mode={mode} toggleTheme={toggleTheme}>
                  <RelaySMSTelemetry />
                </Layout>
              }
            />
            <Route
              path="projects/relaysms-desktop"
              element={
                <Layout mode={mode} toggleTheme={toggleTheme}>
                  <RelaySMSDesktop />
                </Layout>
              }
            />
          </Routes>
        )}
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
