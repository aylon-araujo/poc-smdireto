import { Route, Routes } from "react-router-dom";

import Dashboard from "../../presentation/pages/Dashboard";
import NotFound from "../../presentation/components/NotFound";

import { Routes as RT } from "../routes";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path={RT.NOT_FOUND} element={<NotFound route="/dashboard" />} />
      <Route path={RT.HOME} element={<h1>Hello World</h1>} />
      <Route path={RT.DASHBOARD} element={<Dashboard />} />
    </Routes>
  );
}
