import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";

export default function ThemeToggle({ mode, onToggle }) {
  return (
    <Tooltip title={mode === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}>
      <IconButton
        onClick={onToggle}
        sx={{
          zIndex: 9999,
          padding: { md: 2, xs: 1.5 },
          color: "#673147",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(103, 49, 71, 0.1)",
            transform: "rotate(15deg)",
          },
        }}
        aria-label="toggle theme"
      >
        {mode === "dark" ? (
          <BulbOutlined style={{ fontSize: "28px" }} />
        ) : (
          <BulbFilled style={{ fontSize: "28px" }} />
        )}
      </IconButton>
    </Tooltip>
  );
}
