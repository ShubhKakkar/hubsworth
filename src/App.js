import React from "react";
import './index.css';
import "./App.css";

// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// elements
import Home from './containers/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
