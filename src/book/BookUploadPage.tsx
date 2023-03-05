import React from 'react';
import { Button, Group, Space, Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, PDF_MIME_TYPE } from '@mantine/dropzone';
import { IconFolder, IconX } from '@tabler/icons';
import BookUploadTable from 'book/BookUploadTable';
import { useState } from 'react';
import axios from 'axios';

const BookUploadPage = () => {
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>();

  const uploadHandler = async () => {
    const formData = new FormData();

    acceptedFiles.forEach(book => {
      formData.append('books', book);
    });

    try {
      const res = await axios.post('/book', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (e) {}
  };

  return (
    <>
      <div className="mt-5">
        <Dropzone
          onDrop={files => setAcceptedFiles(files)}
          maxSize={3 * 1024 ** 16}
          accept={PDF_MIME_TYPE}
        >
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: 220, pointerEvents: 'none' }}
          >
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
