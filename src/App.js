import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import ProductPage from "./pages/ProductPage";
import TaskScreen from "./pages/TaskScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/task" element={<TaskScreen />} />
        <Route exact path="*" element={<ProductPage />} />

        <Route exact path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
