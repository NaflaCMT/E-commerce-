import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Signup } from "./Routes";
import Navbar from "./Pages/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
