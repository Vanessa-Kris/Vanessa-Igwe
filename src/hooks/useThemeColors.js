import { useTheme } from "@mui/material/styles";

export const useThemeColors = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return {
    // Background colors
    bgPrimary: isDark ? "#161616" : "#ffffff",
    bgSecondary: isDark ? "#1a1a1a" : "#f5f5f5",
    bgTertiary: isDark ? "#0a0a0a" : "#fafafa",
    
    // Text colors
    textPrimary: isDark ? "#fff" : "#1a1a1a",
    textSecondary: isDark ? "#d7d0d7" : "#4a4a4a",
    textTertiary: isDark ? "#999" : "#666",
    
    // Border colors
    borderPrimary: isDark ? "#2a2a2a" : "#e0e0e0",
    borderSecondary: isDark ? "#292929ff" : "#d0d0d0",
    
    // Accent colors (keep consistent)
    accent: "#673147",
    accentHover: "#8a3f5e",
    
    // Divider
    divider: isDark ? "#d7d0d7" : "#999",
    
    // Special backgrounds
    cardBg: isDark ? "#1a1a1a" : "#f5f5f5",
    cardBgAlt: isDark ? "#000000ff" : "#ffffff",
    
    // Helper
    isDark,
    isLight: !isDark,

    // MUI palette passthrough for components that use theme background tokens
    background: {
      default: theme.palette.background.default,
      paper: theme.palette.background.paper,
    },
  };
};
