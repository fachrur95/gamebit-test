"use client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { darkTheme, lightTheme } from "./theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTheme, setCurrentTheme] = useState<
    "system" | "light" | "dark" | string | undefined
  >("system");
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const curTheme = theme === "system" ? systemTheme : theme;
    setCurrentTheme(curTheme);
  }, [theme, systemTheme]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline enableColorScheme={true} />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
