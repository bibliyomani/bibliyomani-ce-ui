import React, { useEffect, useState } from 'react';

const useDocumentTitle = (param: string) => {
  const [title, setTitle] = useState(`${param} | Bibliyomani`);
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = 'Bibliyomani';
    };
  }, [title]);

  return [title, setTitle];
};

export { useDocumentTitle };