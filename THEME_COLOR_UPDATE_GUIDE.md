# Theme Color Update Instructions

Since there are many files with hardcoded colors, here's a consolidated approach:

## Files Successfully Updated ✅

1. **src/Sections/Intro.js** - Uses `useThemeColors` hook
2. **src/Sections/About.js** - Uses `useThemeColors` hook  
3. **src/Sections/Contact.js** - Uses `useThemeColors` hook
4. **src/Sections/Reviews.js** - Uses `useThemeColors` hook
5. **src/Projects/RelaySMS-Telemetry.js** - Partially updated
6. **src/App.css** - Body theme classes added
7. **src/App.js** - Theme state management
8. **src/Components/NavBar.js** - Theme toggle added
9. **src/Components/ThemeToggle.js** - Created
10. **src/Layout.js** - Theme props passed
11. **src/hooks/useThemeColors.js** - Created

## Files That Still Need Updates:

### Sections:
- **src/Sections/Blogs.js** - Add `useThemeColors` hook and replace:
  - Line 52: `color: "#d7d0d7"` → `color: colors.textSecondary`
  - Line 56: `color: "#fff"` → `color: colors.textPrimary`
  - Line 60: `bgcolor: "#d7d0d7"` → `bgcolor: colors.divider`
  - Line 86: `color: "#fff"` → `color: colors.textPrimary`
  - Line 101: `backgroundColor: "#161616"` → `backgroundColor: colors.bgPrimary`
  - Line 102: `color: "#d7d0d7"` → `color: colors.textSecondary`

- **src/Sections/Portfolio.js** - Add `useThemeColors` hook and replace all:
  - `color: "#fff"` → `color: colors.textPrimary`
  - `color: "#d7d0d7"` → `color: colors.textSecondary`
  - `bgcolor: "#d7d0d7"` → `bgcolor: colors.divider`

- **src/Sections/Experience.js** - Add `useThemeColors` hook and replace all:
  - `color: "#fff"` → `color: colors.textPrimary`
  - `color: "#d7d0d7"` → `color: colors.textSecondary`
  - `bgcolor: "#232323"` → `bgcolor: colors.bgSecondary`

- **src/Sections/Name.js** - Replace:
  - `color: "#d7d0d7"` → `color: colors.textSecondary`

### Project Pages:
- **src/Projects/RelaySMS-Website.js** - Add `useThemeColors` hook and replace:
  - `bgcolor: "#673147"` → `bgcolor: colors.accent`
  - `color: "#d7d0d7"` → `color: colors.textSecondary`
  - `color: "#fff"` → `color: colors.textPrimary`
  - `bgcolor: "#d7d0d7"` → `bgcolor: colors.divider`
  - `bgcolor: "#1a1a1a"` → `bgcolor: colors.bgSecondary`
  - `color: "#999"` → `color: colors.textTertiary`
  - `borderColor: "#673147"` → `borderColor: colors.accent`

- **src/Projects/RelaySMS-Desktop.js** - Add `useThemeColors` hook and replace:
  - Same color replacements as RelaySMS-Website.js

- **src/Projects/RelaySMS-Telemetry.js** - Complete the remaining updates:
  - All remaining hardcoded colors need to be replaced with theme colors

### Pages:
- **src/Pages/Projects.js** - Add `useThemeColors` hook and replace:
  - `color: "#d7d0d7"` → `color: colors.textSecondary`
  - `color: "#fff"` → `color: colors.textPrimary`
  - `bgcolor: "#d7d0d7"` → `bgcolor: colors.divider`

### Other:
- **src/Blogs/transition.js** - Replace `color: "#fff"` → `color: colors.textPrimary`
- **src/Blogs/outreachy21.js** - Replace `color: "#fff"` → `color: colors.textPrimary`
- **src/Layout.js** - Replace `bgcolor: "#673147"` → `bgcolor: colors.accent`

## Quick Find & Replace Pattern

For each file that needs updates:

1. Add import at top:
```javascript
import { useThemeColors } from "../hooks/useThemeColors"; // or ../../hooks for deeper paths
```

2. Add hook inside component:
```javascript
const colors = useThemeColors();
```

3. Replace colors:
- `#fff` or `#ffffff` → `colors.textPrimary`
- `#d7d0d7` → `colors.textSecondary`
- `#999` → `colors.textTertiary`
- `#1a1a1a` → `colors.bgSecondary`
- `#161616` → `colors.bgPrimary`
- `#673147` (for bgcolor) → `colors.accent`
- `#8a3f5e` (for hover) → `colors.accentHover`
- `#2a2a2a` or `#292929ff` → `colors.borderPrimary`

## Testing

After updates:
1. Click the bulb icon to toggle theme
2. Verify all colors change appropriately
3. Check that accent colors (#673147) remain consistent
4. Ensure text is readable in both modes

