import HomeHeader from 'home/HomeHeader';
import HomePresentationTable from 'home/HomePresentationTable';
import React, { useEffect, useRef, useState } from 'react';

import autoAnimate from '@formkit/auto-animate';
import { BookMetada } from 'types/Book';
import BookPage from './BookPage';

const HomePage = () => {
  const parent = useRef(null);
  const [metadata, setMetadata] = useState<BookMetada>();

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 1500 });
  }, [parent]);

  if (metadata) {
    return <BookPage metadata={metadata} />;
  }

  return (
    <div className="mt-8" ref={parent}>
      <HomeHeader />
      <HomePresentationTable setMetadata={setMetadata} />
    </div>
  );
};

export default HomePage;
