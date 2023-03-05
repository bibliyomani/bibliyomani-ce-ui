import React from 'react';
import { Table } from 'flowbite-react';
import { Group, Space, Text, Title } from '@mantine/core';

interface Props {
  books: File[];
}

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

const niceBytes = (size: any): String => {
  let l = 0,
    n = parseInt(size, 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l];
};

const BookUploadTable = ({ books }: Props) => {
  return (
    <div className="border-indigo-500 border-5">
      <div className="mt-5 mb-8">
        <Group position="center">
          <Title order={4}>
            Books{' '}
            <Text span color="red" inherit>
              that you've uploaded
            </Text>{' '}
            are listed below
          </Title>
        </Group>
      </div>

      <Space h='xl' />

      <React.Fragment>
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>File</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Size</Table.HeadCell>
            <Table.HeadCell>Last Modified Date</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {books &&
              books.length > 0 &&
              books.map((book: File, index: number) => {
                const {
                  name = undefined,
                  lastModified = undefined,
                  size = undefined,
                  type = undefined,
                }: File = book ?? ({} as File);
                const d = new Date(lastModified).toLocaleDateString('en');

                return (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {name}
                    </Table.Cell>
                    <Table.Cell>{type}</Table.Cell>
                    <Table.Cell>{niceBytes(size)}</Table.Cell>
                    <Table.Cell>{d}</Table.Cell>
                    <Table.Cell>
                      <a
                        // href="/tables"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Remove
                      </a>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </React.Fragment>
    </div>
  );
};

export default BookUploadTable;