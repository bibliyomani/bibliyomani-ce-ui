import { Button, Group, Loader, Space, Text } from '@mantine/core';
import { Dropzone, PDF_MIME_TYPE } from '@mantine/dropzone';
import axios from 'axios';
import BookUploadTable from 'book/BookUploadTable';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Book from 'types/Book';
import { IconFolder, IconX } from '@tabler/icons';

import { toast } from 'sonner';

const BookUploadPage = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>();
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const uploadHandler = async () => {
    const formData = new FormData();

    acceptedFiles.forEach(book => {
      formData.append('books', book);
    });

    try {
      setLoading(true);
      const promise = axios.post<Book>('/book', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      toast.promise(promise, {
        loading: 'Your book is uploading..',
        success: data => {
          setLoading(false);
          return `The book was uploaded.`;
        },
        error: 'Error',
      });

      history('/');
    } catch (e) {}
  };

  if (loading) {
    <Loader color="yellow" size="xl" variant="bars" />;
  }

  return (
    <>
      <div className="mt-5">
        <Dropzone onDrop={files => setAcceptedFiles(files)} maxSize={3 * 1024 ** 16} accept={PDF_MIME_TYPE}>
          <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
            <Dropzone.Accept>
              {/* <IconUpload size={50} stroke={1.5} /> */}
              <IconFolder size={50} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX size={50} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconFolder size={50} stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag the book here or click to select the book
              </Text>
            </div>
          </Group>
        </Dropzone>
      </div>

      <Space h="xl" />

      {acceptedFiles && (
        <>
          <BookUploadTable books={acceptedFiles} />

          <div className="flex justify-end mt-4">
            <Space h="lg" />
            <Button color="green" onClick={uploadHandler}>
              Upload
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default BookUploadPage;
