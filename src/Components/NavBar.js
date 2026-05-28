import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Box } from "@mui/material";
import { MenuOutlined } from "@ant-design/icons";
import { useThemeColors } from "../hooks/useThemeColors";
import ThemeToggle from "./ThemeToggle";
// import { Link } from "react-scroll";

export default function NavBar({ mode, toggleTheme }) {
  const colors = useThemeColors();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>
      <Box
        sx={{
          justifyContent: "flex-end",
          display: "flex",
          alignItems: "center",
          pr: { md: 1, xs: 2 },
          pt: { md: 5, xs: 3 },
          gap: 1,
        }}
      >
        <ThemeToggle mode={mode} onToggle={toggleTheme} />
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          sx={{
            padding: { md: 2, xs: 1.5 },
          }}
        >
          <MenuOutlined style={{ fontSize: "25px", color: "#673147" }} />
        </IconButton>
        <Menu
        elevation={0}
          PaperProps={{
            sx: {
              // backgroundColor: "#000000ff",
              // color: colors.textSecondary,
              bgcolor: colors.background.paper,
              color: colors.textSecondary,
              minWidth: "220px",
              borderRadius: "12px",
              // border: "1px solid #292929ff",
              // boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              mt: 1,
              borderradius: "2px",
            },
          }}
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            component="a"
            href="/"
            onClick={handleClose}
            sx={{
              py: 1.5,
              px: 3,
              fontSize: "16px",
              fontWeight: 500,
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#673147",
                color: colors.textPrimary,
                paddingLeft: "28px",
              },
            }}
          >
            Home
          </MenuItem>

          <MenuItem
            component="a"
            href="/projects"
            onClick={handleClose}
            sx={{
              py: 1.5,
              px: 3,
              fontSize: "16px",
              fontWeight: 500,
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#673147",
                color: colors.textPrimary,
                paddingLeft: "28px",
              },
            }}
          >
            Projects
          </MenuItem>

          {/* <MenuItem
            component="a"
            href="#blogs"
            onClick={handleClose}
            sx={{
              py: 1.5,
              px: 3,
              fontSize: "16px",
              fontWeight: 500,
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#673147",
                color: colors.textPrimary,
                paddingLeft: "28px",
              },
            }}
          >
            Blogs
          </MenuItem> */}
          <MenuItem
            component="a"
            href="#contact"
            onClick={handleClose}
            sx={{
              py: 1.5,
              px: 3,
              fontSize: "16px",
              fontWeight: 500,
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#673147",
                color: colors.textPrimary,
                paddingLeft: "28px",
              },
            }}
          >
            Contact
          </MenuItem>
        </Menu>
      </Box>
    </nav>
  );
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "auto",
      });
    }
  });
});
