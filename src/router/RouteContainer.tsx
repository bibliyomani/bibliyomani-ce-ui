import BookUploadPage from 'book/BookUploadPage';
import HomePage from 'home/HomePage';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthLayout from './AuthLayout';

const App = () => {
  return <h1>enes10</h1>;
};

const RouteContainer = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/upload" element={<BookUploadPage />} />
          <Route element={<AuthLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
};

export default RouteContainer;
