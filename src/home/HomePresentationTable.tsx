import { Box } from '@mantine/core';
import LOADING_OVERLAY_CONSTANT from 'constants/LoadingOverlayConstants';
import useFetch from 'hooks/useFetch';
import { DataTable } from 'mantine-datatable';
import React from 'react';
import { BookMetada } from 'types/Book';

const HomePresentationTable = () => {
  const { state, loading, err } = useFetch<BookMetada[]>('/book-metadata');

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
            width: '80%',
            textAlignment: 'left',
            // sortable: true,
          },
          {
            accessor: 'size',
            title: 'Size',
            width: '20%',
            render: (record: BookMetada) => record?.size ?? '-',
          },
        ]}
        // loadingText="Loading..."
        noRecordsText="No records found"
        // recordsPerPageLabel="Enes"
        customLoader={LOADING_OVERLAY_CONSTANT}
      />
    </Box>
  );
};

export default HomePresentationTable;
