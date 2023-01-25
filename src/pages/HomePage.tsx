import axios from 'axios';
import BookPresentationTable from 'components/book/BookPresentationTable';
import React, { useEffect, useState } from 'react';
import Book from 'types/Book';

const HomePage = () => {
  const [books, setBooks] = useState<Book[]>();

  useEffect(() => {
    (async () => {
      const res = await axios.get<Book[]>('/book/all');
      setBooks(res.data);
    })();
  }, []);

  return (
    <div className="mt-8">
      <BookPresentationTable books={books} />
    </div>
  );
};

export default HomePage;
