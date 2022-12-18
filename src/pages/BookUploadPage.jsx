import React, { useState, useEffect } from 'react';
import BookUploadComponent from 'components/upload/BookUploadComponent';
import { useTranslation } from 'react-i18next';
import { Space } from '@mantine/core';

const BookUploadPage = () => {
  const [acceptedFiles, setAcceptedFiles] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    console.log(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <div>
      <BookUploadComponent setAcceptedFiles={setAcceptedFiles} />
      <Space h={'xl'} />
      <Space h={'xl'} />
      <div className="mt-32px flex flex-col justify-start">
        <p>{t('upload-queue')}</p>
     </div>
    </div>
  );
};

export default BookUploadPage;