import AboutPage from '@Pages/AboutPage';
import HomePage from '@Pages/HomePage';
import DashboardPage from '@Pages/DashboardPage';
import ProjectPage from '@Pages/ProjectPage';
import { Suspense, useEffect } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  useEffect(() => {
    console.log('component did mount');
  }, []);
  return (
    <Suspense fallback={<h3>Loding Fallback...</h3>}>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </Suspense>
  );
}
