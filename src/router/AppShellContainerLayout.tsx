import { AppShell } from '@mantine/core';
import { NavigationProgress } from '@mantine/nprogress';
import { ReactQueryDevtools } from 'react-query/devtools';
import Footer from 'components/Footer';
import HeaderContainer from 'components/header/HeaderContainer';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AppShellContainerLayout = () => {
  
  return (
    <AppShell padding="md" header={<HeaderContainer />} >
      {/* <div className="w-5/6 mx-auto mt-12"> */}
      <NavigationProgress color='orange' />
      <Outlet />
      <ReactQueryDevtools position='bottom-right'/>
    </AppShell>
  );
};

export default AppShellContainerLayout;
