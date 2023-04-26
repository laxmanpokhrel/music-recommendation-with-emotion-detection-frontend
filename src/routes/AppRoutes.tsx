import AboutPage from "@Pages/AboutPage";
import DashboardPage from "@Pages/DashboardPage";
import ProjectPage from "@Pages/ProjectPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Suspense fallback={<h3>Loding Fallback...</h3>}>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </Suspense>
  );
}
