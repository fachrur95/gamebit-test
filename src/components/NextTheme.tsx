"use client";
import { ThemeProvider } from "next-themes";
import ThemeRegistry from "./ThemeRegistry";

export default function NextTheme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="system">
      <ThemeRegistry>{children}</ThemeRegistry>
    </ThemeProvider>
  );
}
