import { Table } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Book from 'types/Book';

interface Props {
  books: Book[];
}

const BookPresentationTable = ({ books }: Props) => {
  const history = useNavigate();

  return (
    <div className="mt-12">
      {books && books.length > 0 && (
        <>
          <Table hoverable={true}>
            <Table.Head>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Hash</Table.HeadCell>
              <Table.HeadCell>Read</Table.HeadCell>
              <Table.HeadCell>Total</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {books.map((each: Book, index: number) => {
                const { name, last, total, hash } = each;
                return (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {name}
                    </Table.Cell>
                    <Table.Cell
                      onClick={() => {
                        history(`/book?hash=${hash}`);
                      }}
                    >
                      {hash.substring(0, 50)}
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
