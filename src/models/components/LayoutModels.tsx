import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

export interface AppBarProps extends MuiAppBarProps {
  open: boolean;
}

type ItemOpenState = {
  report: boolean | string;
  system: boolean | string;
};

export interface LayoutProps {
  itemOpen: ItemOpenState;
  isMobile: boolean;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  handleClick: (name: string) => void;
}
