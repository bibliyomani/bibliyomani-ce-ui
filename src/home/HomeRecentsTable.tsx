import { Box, Button, Center, Paper, Text } from '@mantine/core';
import { openConfirmModal } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import { IconTrash, IconX } from '@tabler/icons';
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

  return (
    <Box sx={{ margin: '0 auto', width: '95%', height: '80%', paddingTop: '1%' }}>
      <DataTable
        sx={theme => ({
          // 'box-shadow': '-5px 5px 30px -5px rgba(0,0,0,0.3)',
          'box-shadow': '0px 0px 20px -10px rgba(0,0,0,0.3)',
          borderRadius: '8px',
        })}
        striped
        highlightOnHover
        // withBorder
        // withColumnBorders
        // shadow="lg"
        records={state}
        fetching={loading}
        idAccessor="bookId"
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
            width: '5%',
            render: (record: BookMetada) => record?.size ?? '-',
          },
          {
            accessor: 'status',
            title: 'Status',
            textAlignment: 'center',
            width: '10%',
            render: (record: BookMetada) => `${record.read} / ${record.total}`,
          },
          {
            accessor: 'lastInteraction',
            title: 'Last Interaction',
            textAlignment: 'right',
            width: '10%',
            render: (record: BookMetada) => dayjs().from(record.lastInteraction),
          },
          {
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
                        // try {
                        //   const { treatmentId } = treatment;
                        //   const res = await deleteTreatment(treatmentId);
                        //   setLoading(true);
                        //   await sleep(1200);
                        //   setLoading(false);
                        //   setTreatments((oldState: Treatment[]) => {
                        //     oldState = oldState.filter(t => t !== treatment);
                        //     return oldState;
                        //   });
                        // } catch (e) {}

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
        onRowClick={(record: BookMetada, rowIndex: number) => {
          setMetadata(record);
        }}
        // loadingText="Loading..."
        noRecordsText="No records found"
        // recordsPerPageLabel="Enes"
        customLoader={LOADING_OVERLAY_CONSTANT}
        selectedRecords={selectedRecords}
        onSelectedRecordsChange={setSelectedRecords}
      />
      <Paper my="xl" py="xl" withBorder radius={0}>
        <Center>
          <Button uppercase leftIcon={<IconTrash size={16} />} color="red" disabled={!selectedRecords.length} onClick={() => showNotification({ color: 'red', message: 'Deleting data is dangerous!' })}>
            {selectedRecords.length ? `Delete ${selectedRecords.length === 1 ? 'one selected record' : `${selectedRecords.length} selected records`}` : 'Select records to delete'}
          </Button>
        </Center>
      </Paper>
    </Box>
  );
};

export default HomeRecentsTable;
