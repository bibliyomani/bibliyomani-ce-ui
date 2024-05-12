import HomeHeader from 'home/HomeHeader';
import React, { useEffect, useRef, useState } from 'react';

import autoAnimate from '@formkit/auto-animate';
import BookVieweer from 'book/BookViewer';
import HomeRecentsTable from 'home/HomeRecentsTable';
import { useOutletContext } from 'react-router-dom';

const HomePage = () => {
  const parent = useRef(null);
  const [metadata, setMetadata] = useOutletContext();

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 1500 });
  }, [parent]);

  if (metadata) {
    return <BookVieweer metadata={metadata} />;
  }

  return (
    <div className="w-full mt-8" ref={parent}>
      {/* <HomeHeader /> */}
      <HomeRecentsTable setMetadata={setMetadata} />
    </div>
  );
};

export default HomePage;
