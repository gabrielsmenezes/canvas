"use client";

import * as React from "react";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme";

export default function MuiThemeProvider({
                                        children,
                                      }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {children}
      </ThemeProvider>
  );
}
