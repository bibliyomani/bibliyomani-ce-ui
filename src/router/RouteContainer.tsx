import { createEmotionCache } from '@mantine/core';
import BookUploadPage from 'book/BookUploadPage';
import HomePage from 'home/HomePage';
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
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteContainer;
