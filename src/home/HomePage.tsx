import HomeHeader from 'home/HomeHeader';
import React, { useEffect, useRef, useState } from 'react';

import autoAnimate from '@formkit/auto-animate';
import BookVieweer from 'book/BookViewer';
import HomeRecentsTable from 'home/HomeRecentsTable';
import { BookMetada } from 'types/Book';

const HomePage = () => {
  const parent = useRef(null);
  const [metadata, setMetadata] = useState<BookMetada>();

  useEffect(() => {
    parent.current && autoAnimate(parent.current, { duration: 1500 });
  }, [parent]);

  if (metadata) {
    return <BookVieweer metadata={metadata} />;
  }

  return (
    <div className="mt-8" ref={parent}>
      {/* <HomeHeader /> */}
      <HomeRecentsTable setMetadata={setMetadata} />
    </div>
  );
};

export default HomePage;
