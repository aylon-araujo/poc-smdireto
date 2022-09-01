import { ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from './presentation/components/Layout';
// import '@/presentation/styles/index.scss';

export const App = () => {
  const theme = createTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#ec6262',
      },
      secondary: {
        main: '#3EA6FF',
      },
      background: {
        default: '#fff',
        paper: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};
