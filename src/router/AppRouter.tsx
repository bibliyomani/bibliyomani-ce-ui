import { AppShell } from '@mantine/core';
import Footer from 'components/Footer';
import HeaderContainer from 'components/header/HeaderContainer';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationProgress } from '@mantine/nprogress';

const AppRouter = () => {
  useEffect(() => {
    console.log('1');
  }, []);

  return (
    <AppShell padding="md" header={<HeaderContainer />} footer={<Footer />}>
      {/* <div className="w-5/6 mx-auto mt-12"> */}
      <NavigationProgress />

      <Outlet />
    </AppShell>
  );
};

export default AppRouter;
