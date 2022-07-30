import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./pages";
import { RecursivePage } from "./pages/recursive";
import Transition from "./pages/transition";

export const Routing: React.FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/transition" element={<Transition />} />
      <Route path="/recursive" element={<RecursivePage />} />
    </Routes>
  );
});
