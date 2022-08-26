import { FC } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";

import { makeStyles, useTheme } from "@mui/styles";

const picUrl = "https://avatars.githubusercontent.com/u/47181166?v=4";
const logoSm =
  "data:image/png;base64,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";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
  },
}));

const HeaderPage: FC<JSX.Element> = () => {
  const classes = useStyles();
  //   const theme = useTheme();

  return (
    <div className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ padding: "0 5rem", boxShadow: "none" }}
          position="static"
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logoSm} alt="SM Direto" />
            </IconButton>
            <div style={{ flexGrow: 1 }} />
            <Stack direction="row" spacing={4}>
              <Typography variant="h6">Inicio</Typography>
              <Typography variant="h6">Sobre</Typography>
              <Typography variant="h6">Ajuda</Typography>
            </Stack>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
            >
              <Avatar src={picUrl} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default HeaderPage;
