import { Button, Center, Paper, Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import { IconTrash, IconX } from '@tabler/icons-react';
import LOADING_OVERLAY_CONSTANT from 'constants/LoadingOverlayConstants';
import dayjs from 'dayjs';
import { useHttpGet } from 'kanca/http';
import { DataTable } from 'mantine-datatable';
import React, { useState } from 'react';
import { hdelete } from 'services/HttpService';
import { BookMetada } from 'types/Book';

interface Props {
  setMetadata: React.Dispatch<React.SetStateAction<BookMetada>>;
}

const HomeRecentsTable = ({ setMetadata }: Props) => {
  const { state, loading, err, setState } = useHttpGet<BookMetada[]>('/book-metadata');
  const [selectedRecords, setSelectedRecords] = useState<BookMetada[]>([]);

  const title = {
    titleStyle: theme => ({
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '14px',
      fontWeight: 'bold',
      borderBottom: 'none',
    }),
  };

  return (
    <div className="flex flex-col gap-8" style={{ height: '100%' }}>
      <div className="w-full flex flex-row justify-between items-center px-3">
        <p>Books</p>
        <Button>New book</Button>
      </div>

      <div style={{ width: '99%', height: '90%' }} className="pl-2">
        <DataTable
          borderRadius="md"
          shadow="xl"
          striped
          highlightOnHover
          scrollAreaProps={{ type: 'never' }}
          records={state}
          fetching={loading}
          idAccessor="bookId"
          columns={[
            {
              ...title,
              accessor: 'name',
              title: 'Name',
              textAlignment: 'left',
              width: '75%',
            },
            {
              ...title,
              accessor: 'size',
              title: 'Size',
              textAlignment: 'left',
              width: '5%',
              render: (record: BookMetada) => record?.size ?? '-',
            },
            {
              ...title,
              accessor: 'status',
              title: 'Status',
              textAlignment: 'center',
              width: '10%',
              render: (record: BookMetada) => `${record.read} / ${record.total}`,
            },
            {
              ...title,
              accessor: 'lastInteraction',
              title: 'Last Interaction',
              textAlignment: 'right',
              width: '10%',
              render: (record: BookMetada) => dayjs().from(record.lastInteraction),
            },
            {
              ...title,
              accessor: 'delete',
              title: 'Sil',
              width: '2%',
              textAlignment: 'center',
              render: (record: BookMetada) => (
                <Center>
                  <IconX
                    className="cursor-pointer hover:text-red-500 transition duration-700 ease-in-out"
                    onClick={() => {
                      openConfirmModal({
                        centered: true,
                        title: 'Tedavi Kaydını Sil',
                        children: <Text>Seçili kitabı silmek üzeresiniz. Emin misiniz?</Text>,
                        labels: { confirm: 'Evet', cancel: 'Hayır' },
                        onCancel: () => console.log('Cancel'),
                        onConfirm: async () => {
                          const { bookId } = record;
                          const [data, res] = await hdelete(`/book/${bookId}`);
                          if (data) {
                            setState((old: BookMetada[]) => {
                              old = old.filter(s => s !== record);
                              return old;
                            });
                          }
                        },
                        confirmProps: { color: 'green' },
                        cancelProps: { color: 'red' },
                      });
                    }}
                  />
                </Center>
              ),
            },
          ]}
          onRowClick={({ record, index, event }) => {
            setMetadata(record);
          }}
          // loadingText="Loading..."
          noRecordsText="No records found"
          // recordsPerPageLabel="Enes"
          customLoader={LOADING_OVERLAY_CONSTANT}
          selectedRecords={selectedRecords}
          onSelectedRecordsChange={setSelectedRecords}
        />
      </div>
    </div>
  );
};

// <Paper my="xl" py="xl" withBorder radius={0}>
//   <Center>
//     <Button uppercase leftIcon={<IconTrash size={16} />} color="red" disabled={!selectedRecords.length}>
//       {selectedRecords.length ? `Delete ${selectedRecords.length === 1 ? 'one selected record' : `${selectedRecords.length} selected records`}` : 'Select records to delete'}
//     </Button>
//   </Center>
// </Paper>

export default HomeRecentsTable;
