import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
export default function HomePageRoutes() {
  return (
    <Suspense fallback={<h3>Loding Nested Part...</h3>}>
      <Routes>
        <Route path="/" element={<h2>This is home.</h2>} />
        <Route path="/nav1" element={<h2>This is nav1.</h2>} />
        <Route path="/nav2" element={<h2>This is nav2.</h2>} />
        <Route path="/nav3" element={<h2>This is nav3 .</h2>} />
      </Routes>
    </Suspense>
  );
}
