import { Box } from '@mantine/core';
import LOADING_OVERLAY_CONSTANT from 'constants/LoadingOverlayConstants';
import dayjs from 'dayjs';
import { useHttpGet } from 'kanca/http';
import { DataTable } from 'mantine-datatable';
import React from 'react';
import { BookMetada } from 'types/Book';

interface Props {
  setMetadata: React.Dispatch<React.SetStateAction<BookMetada>>;
}

const HomeRecentsTable = ({ setMetadata }: Props) => {
  const { state, loading, err } = useHttpGet<BookMetada[]>('/book-metadata');

  return (
    <Box sx={{ margin: '0 auto', width: '95%', height: '80%', paddingTop: '1%' }}>
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
            width: '75%',
          },
          {
            accessor: 'size',
            title: 'Size',
            textAlignment: 'left',
            width: '10%',
            render: (record: BookMetada) => record?.size ?? '-',
          },
          {
            accessor: 'status',
            title: 'Status',
            textAlignment: 'center',
            render: (record: BookMetada) => `${record.read} / ${record.total}`,
          },
          {
            accessor: 'lastInteraction',
            title: 'Last Interaction',
            textAlignment: 'right',
            width: '10%',
            render: (record: BookMetada) => dayjs().from(record.lastInteraction),
          },
        ]}
        onRowClick={(record: BookMetada, rowIndex: number) => {
          setMetadata(record);
        }}
        // loadingText="Loading..."
        noRecordsText="No records found"
        // recordsPerPageLabel="Enes"
        customLoader={LOADING_OVERLAY_CONSTANT}
      />
    </Box>
  );
};

export default HomeRecentsTable;
