import { AppShell } from '@mantine/core';
import Footer from 'components/Footer';
import HeaderContainer from 'components/header/HeaderContainer';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppRouter = () => {
  return (
    <AppShell padding="md" header={<HeaderContainer />} footer={<Footer />}>
      <div className="w-5/6 mx-auto mt-12">
        <Outlet />
      </div>
    </AppShell>
  );
};

export default AppRouter;
