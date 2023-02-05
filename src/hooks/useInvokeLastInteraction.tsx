import React, { useEffect } from 'react';
import { patch } from 'services/HttpService';

const useInvokeLastInteraction = (bookId: string) => {
  const invokePostRequest = async () => {
    const [data, err] = await patch(`/book/${bookId}`);
  };

  useEffect(() => {
    invokePostRequest();
  }, []);

  return {};
};

export default useInvokeLastInteraction;