import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* This is the main container for all of the application's pages. */}
        <Routes>
          <Route path="/search-engine" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
