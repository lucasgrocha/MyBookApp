import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppRoutes />
    </>
  );
}

export default App;
