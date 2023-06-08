import { Button, Group, Loader, Space, Text } from '@mantine/core';
import { Dropzone, PDF_MIME_TYPE } from '@mantine/dropzone';
import axios from 'axios';
import BookUploadTable from 'book/BookUploadTable';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Book from 'types/Book';
import { IconCheck, IconFolder, IconX } from '@tabler/icons';
import { notifications } from '@mantine/notifications';

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
      notifications.show({
        id: 'load-data',
        loading: true,
        title: 'Your book is uploading..',
        message: 'Data will be loaded in X seconds, you cannot close this yet',
        autoClose: false,
        withCloseButton: false,
      });
      const res = await axios.post<Book>('/book', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      notifications.update({
        id: 'load-data',
        color: 'teal',
        title: 'The book was uploaded.',
        message: 'Notification will close in 2 seconds, you can close this notification now',
        icon: <IconCheck size="1rem" />,
        autoClose: 2000,
      });
      setLoading(false);
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
