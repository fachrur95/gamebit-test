import { Exo } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { type ThemeOptions } from "@mui/material/styles/createTheme";

const exo = Exo({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const customTheme: Omit<ThemeOptions, "palette"> = {
  typography: {
    fontFamily: exo.style.fontFamily,
  },
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#A21947"
    }
  },
  ...customTheme
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#A21947"
    }
  },
  ...customTheme
});