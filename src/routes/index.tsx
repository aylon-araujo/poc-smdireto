import { BrowserRouter } from 'react-router-dom';

import { DashboardRoutes } from './Dashboard';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <DashboardRoutes />
    </BrowserRouter>
  );
};
