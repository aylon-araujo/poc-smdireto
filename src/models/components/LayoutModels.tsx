import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

export interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  itemOpen: Object;
}

export interface LayoutProps {
  isMobile: boolean;
  handleDrawerOpen?: () => void;
  handleDrawerClose?: () => void;
  handleClick?: (name: string) => void;
}
