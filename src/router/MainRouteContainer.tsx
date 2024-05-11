import { NavigationProgress } from '@mantine/nprogress';
import { useAutoAnimate } from 'kanca';
import Navbar from 'navbar/Navbar';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export default function MainRouteContainer() {
  const ref = useAutoAnimate();

  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Navbar />
        <div className="flex flex-1 flex-col">
          {/** <div className="flex bg-gray-300 h-16 p-4">Header</div> */}

          <div className="flex flex-1 overflow-y-auto bg-slate-50 paragraph px-3 w-full" ref={ref}>
            <NavigationProgress color={'yellow'} />
            <Outlet />
          </div>
        </div>
      </div>
      {/**
      <div className="flex bg-gray-100">Footer</div> */}
    </main>
  );
}
