import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateNote from './pages/CreateNote'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createNote/:bookId" element={<CreateNote />} />
      </Routes>
    </BrowserRouter>
  );
}
