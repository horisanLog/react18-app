import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./pages";

export const Routing: React.FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
    </Routes>
  );
});
