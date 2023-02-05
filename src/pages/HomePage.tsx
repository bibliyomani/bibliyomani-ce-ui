import HomeHeader from 'home/HomeHeader';
import HomePresentationTable from 'home/HomePresentationTable';
import React from 'react';

const HomePage = () => {
  return (
    <div className="mt-8">
      {/* <BookPresentationTable books={books} /> */}
      <HomeHeader />
      <HomePresentationTable />
    </div>
  );
};

export default HomePage;