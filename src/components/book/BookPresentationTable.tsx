import { IconEye, IconX } from '@tabler/icons';
import { Table } from 'flowbite-react';
import Book from 'types/Book';
import React from 'react';

interface Props {
  books: Book[];
}

const BookPresentationTable = ({ books }: Props) => {
  return (
    <div className="mt-12">
      {books && books.length > 0 && (
        <>
          <Table hoverable={true}>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Read</Table.HeadCell>
              <Table.HeadCell>Total</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {books.map((each: Book, index: number) => {
                const { name, last, total } = each;
                return (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {name}
                    </Table.Cell>
                    <Table.Cell>{last}</Table.Cell>
                    <Table.Cell>{total}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </>
      )}
    </div>
  );
};

export default BookPresentationTable;
