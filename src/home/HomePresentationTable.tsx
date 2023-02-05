import { Box } from '@mantine/core';
import LOADING_OVERLAY_CONSTANT from 'constants/LoadingOverlayConstants';
import dayjs from 'dayjs';
import useFetch from 'hooks/useFetch';
import { DataTable } from 'mantine-datatable';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookMetada } from 'types/Book';

const HomePresentationTable = () => {
  const { state, loading, err } = useFetch<BookMetada[]>('/book-metadata');
  const history = useNavigate();

  return (
    <Box
      sx={{
        margin: '0 auto',
        width: '95%',
        height: '80%',
        paddingTop: '1%',
      }}
    >
      <DataTable
        striped
        highlightOnHover
        // withBorder
        // withColumnBorders
        // shadow="lg"
        records={state}
        fetching={loading}
        columns={[
          {
            accessor: 'name',
            title: 'Name',
            textAlignment: 'left',
            width: '80%',
          },
          {
            accessor: 'size',
            title: 'Size',
            textAlignment: 'left',
            width: '10%',
            render: (record: BookMetada) => record?.size ?? '-',
          },
          {
            accessor: 'lastInteraction',
            title: 'Last Interaction',
            textAlignment: 'right',
            width: '10%',
            render: (record: BookMetada) =>
              dayjs().from(record.lastInteraction),
          },
        ]}
        onRowClick={(record: BookMetada, rowIndex: number) => {
          history(`/book/${record.bookId}`);
        }}
        // loadingText="Loading..."
        noRecordsText="No records found"
        // recordsPerPageLabel="Enes"
        customLoader={LOADING_OVERLAY_CONSTANT}
      />
    </Box>
  );
};

export default HomePresentationTable;
