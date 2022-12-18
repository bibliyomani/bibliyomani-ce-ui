import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from 'components/Footer';
import BookUploadPage from 'pages/BookUploadPage';
import Navigation from 'components/navigation/Navigation';
import HomePage from 'pages/HomePage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto w-4/5">
      <Router>
        <div className="mt-4 h-20">
          <Navigation />
        </div>

        <div className="flex-1 mt-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<BookUploadPage />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
};

export default App;