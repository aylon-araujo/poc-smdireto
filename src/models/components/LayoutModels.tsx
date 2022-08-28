import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface AppBarProps extends MuiAppBarProps {
  open: boolean;
}

export interface LayoutProps {
  itemOpen: Object;
  isMobile: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  handleClick: (name: string) => void;
}
