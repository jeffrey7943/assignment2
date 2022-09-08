import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import UpdateInput from "./components/UpdateInput";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/update/:id" element={<UpdateInput />} />
    </Routes>
  </BrowserRouter>
);
