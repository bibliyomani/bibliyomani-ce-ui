import BookPage from 'pages/BookPage';
import BookUploadPage from 'pages/BookUploadPage';
import HomePage from 'pages/HomePage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppShellContainerLayout from 'router/AppShellContainerLayout';

const RouteContainer = () => {
  return (
    <BrowserRouter>
      <div className="flex w-screen h-screen">
        <Routes>
          <Route element={<AppShellContainerLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<BookUploadPage />} />
            <Route path="/book" element={<BookPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteContainer;
