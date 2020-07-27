import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
import DataLoader from "./hoc/dataLoader";

const AppRoutes = () => {
  const paths = {
    home: "/",
    createNote: "/createNote",
    editNote: "/editNote",
  };

  return (
    <BrowserRouter>
      <Routes>
        <DataLoader>
          <Route path={paths.home} element={<Home />} />
        </DataLoader>
        <DataLoader>
          <Route path={paths.createNote} element={<CreateNote />} />
        </DataLoader>
        <DataLoader>
          <Route path={paths.editNote} element={<EditNote />} />
        </DataLoader>

        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
