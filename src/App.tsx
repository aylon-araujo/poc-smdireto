import { FC, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Appbar from "./presentation/components/Header/index";
import Layout from "./presentation/components/Layout";

const App: FC<any> = () => {
  const theme = createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: "#ec6262",
      },
      secondary: {
        main: "#3EA6FF",
      },
      background: {
        default: "#fff",
        paper: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Layout />
      </div>
    </ThemeProvider>
  );
};

export default App;
