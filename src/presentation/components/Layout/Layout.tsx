import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Collapse,
  MenuItem,
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Stack,
  Avatar,
  Link,
} from "@mui/material";

import { SidebarList as list } from "./SidebarList";
import { AppRouter } from "../../../routes";
import {
  AppBarProps,
  LayoutProps,
} from "../../../models/components/LayoutModels";

const drawerWidth = 240;

const picUrl = "https://avatars.githubusercontent.com/u/47181166?v=4";
const logoSm =
  "data:image/png;base64,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";

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

type ComponentProps = AppBarProps & LayoutProps;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({
  open,
  itemOpen,
  isMobile,
  handleDrawerOpen,
  handleDrawerClose,
  handleClick,
}: ComponentProps) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ boxShadow: "none", padding: "0 2rem" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              ...(isMobile && { display: "none" }),
            }}
          >
            <img src={logoSm} alt="SM Direto" />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <Stack
            direction="row"
            spacing={4}
            sx={{
              marginRight: 5,
              ...(open && isMobile && { display: "none" }),
            }}
          >
            <Typography variant="subtitle1">Inicio</Typography>
            <Typography variant="subtitle1">Sobre</Typography>
            <Typography variant="subtitle1">Ajuda</Typography>
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
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div style={{ width: "10rem", textAlign: "center" }}>
            <Typography variant="h6">Aylon A.</Typography>
            <Link href="/editar-perfil">
              <Typography variant="subtitle2">Editar perfil</Typography>
            </Link>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{ overflow: "inherit" }}>
          {list.map((item) => (
            <>
              <ListItem
                key={item.name}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => handleClick(item.description)}
              >
                <ListItemButton
                  onClick={item.onClick}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                  {open && item.children ? (
                    itemOpen[item.description as keyof typeof itemOpen] ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )
                  ) : null}
                </ListItemButton>
              </ListItem>
              {item.children ? (
                <Collapse
                  in={itemOpen[item.description as keyof typeof itemOpen]}
                  timeout="auto"
                  unmountOnExit
                >
                  {item.children.map((child, key) => (
                    <List key={key} component="div" disablePadding>
                      <MenuItem>
                        <ListItemText primary={child.name} />
                      </MenuItem>
                    </List>
                  ))}
                </Collapse>
              ) : null}
            </>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <AppRouter />
      </Box>
    </Box>
  );
}
