import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export interface AppBarProps extends MuiAppBarProps {
  open: boolean;
}

export type ItemOpenState = {
  report: boolean;
  system: boolean;
};

export interface LayoutProps {
  itemOpen: ItemOpenState;
  isMobile: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  handleClick: (name: string) => void;
}
