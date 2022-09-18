import Demo from "./Demo";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "components/Navigation";
import Footer from "components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto w-4/5">
       <div className="mt-4 h-20">
        <Navigation />
      </div>

      <div className="flex-1">
        <Router>
          <Routes>
            <Route exact path="/" element={<Demo />} />
          </Routes>
        </Router>
      </div>
    <Footer />
    </div>
  );
};

export default App;