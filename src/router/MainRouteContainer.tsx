import { NavigationProgress } from '@mantine/nprogress';
import { useAutoAnimate } from 'kanca';
import Navbar from 'navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { BookMetada } from 'types/Book';

export default function MainRouteContainer() {
  const ref = useAutoAnimate();
  const [metadata, setMetadata] = useState<BookMetada>();

  return (
    <main className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Navbar {...{ metadata, setMetadata }} />
        <div className="flex flex-1 flex-col">
          {/** <div className="flex bg-gray-300 h-16 p-4">Header</div> */}

          <div className="flex flex-1 overflow-y-auto bg-slate-50 paragraph px-3 w-full" ref={ref}>
            <NavigationProgress color={'yellow'} />
            <Outlet context={[metadata, setMetadata]} />
          </div>
        </div>
      </div>
      {/**
      <div className="flex bg-gray-100">Footer</div> */}
    </main>
  );
}
