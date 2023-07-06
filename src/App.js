import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Home, Label, ProductPage } from "./components/index";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/products/:id" element={<ProductPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
