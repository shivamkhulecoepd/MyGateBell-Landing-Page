export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  surfaceMuted: string;
  surfaceElevated: string;
  accentSoft: string;
  accentStrong: string;
  backdrop: string;
  shadowSoft: string;
  shadowStrong: string;
  shadowFocus: string;
  success: string;
  textOnPrimary: string;
  textOnAccent: string;
  overlay: string;
  gridLine: string;
  shadowInset: string;
};

export const lightColors: ThemeColors = {
  primary: "#2395cf", // Sky Blue
  secondary: "#283f7d", // Dark Blue
  accent: "#D9E9F8",
  background: "#F4F7FB",
  surface: "#FFFFFF",
  textPrimary: "#0F172A",
  textSecondary: "#5D6982",
  border: "#DCE4F0",
  surfaceMuted: "#EEF3F9",
  surfaceElevated: "#FAFCFF",
  accentSoft: "rgba(36, 87, 245, 0.10)",
  accentStrong: "rgba(26, 153, 114, 0.16)",
  backdrop: "rgba(244, 247, 251, 0.82)",
  shadowSoft: "0 20px 50px rgba(15, 23, 42, 0.08)",
  shadowStrong: "0 36px 100px rgba(15, 23, 42, 0.14)",
  shadowFocus: "0 0 0 4px rgba(36, 87, 245, 0.18)",
  success: "#1C9A72",
  textOnPrimary: "#FDFEFF",
  textOnAccent: "#102018",
  overlay: "rgba(255, 255, 255, 0.56)",
  gridLine: "rgba(108, 123, 149, 0.14)",
  shadowInset: "inset 0 1px 0 rgba(255, 255, 255, 0.7)",
};

export const darkColors: ThemeColors = {
    primary: "#2395cf", // Sky Blue
  secondary: "#283f7d", // Dark BlueF
  accent: "#16324D",
  background: "#09111F",
  surface: "#0F1829",
  textPrimary: "#F5F7FB",
  textSecondary: "#A7B3C8",
  border: "#202E46",
  surfaceMuted: "#111C2E",
  surfaceElevated: "#152238",
  accentSoft: "rgba(123, 168, 255, 0.16)",
  accentStrong: "rgba(47, 187, 140, 0.18)",
  backdrop: "rgba(9, 17, 31, 0.82)",
  shadowSoft: "0 20px 56px rgba(0, 0, 0, 0.26)",
  shadowStrong: "0 40px 120px rgba(0, 0, 0, 0.38)",
  shadowFocus: "0 0 0 4px rgba(123, 168, 255, 0.24)",
  success: "#56D5A9",
  textOnPrimary: "#08101C",
  textOnAccent: "#E9FFF7",
  overlay: "rgba(15, 24, 41, 0.52)",
  gridLine: "rgba(167, 179, 200, 0.12)",
  shadowInset: "inset 0 1px 0 rgba(255, 255, 255, 0.04)",
};

export const themePalettes = {
  light: lightColors,
  dark: darkColors,
};

export const themeVariableKeys = Object.keys(lightColors) as Array<
  keyof ThemeColors
>;
