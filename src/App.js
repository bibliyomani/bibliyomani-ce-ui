import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from 'components/navigation/Navigation';
import Footer from 'components/Footer';
import BookUploadPage from 'pages/BookUploadPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen mx-auto w-4/5 border border-1">
      <div className="mt-4 h-20">
        <Navigation />
      </div>

      <div className="flex-1">
        <Router>
          <Routes>
            {/* <Route exact path="/" element={<Demo />} /> */}
            <Route exact path="/upload" element={<BookUploadPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
