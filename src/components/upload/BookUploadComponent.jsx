import React from 'react';
import { Group, Text, useMantineTheme } from '@mantine/core';
import { IconUpload, IconBook, IconX } from '@tabler/icons';
import { Dropzone, PDF_MIME_TYPE } from '@mantine/dropzone';
import { useTranslation } from 'react-i18next';

const BookUploadComponent = ({ setAcceptedFiles }) => {
  const theme = useMantineTheme();
  const { t } = useTranslation();

  return (
    <Dropzone
      onDrop={files => {
        setAcceptedFiles(prev => [...prev, ...files]);
      }}
      onReject={files => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={PDF_MIME_TYPE}
    >
      <Group
        position="center"
        spacing="xl"
        style={{ minHeight: 220, pointerEvents: 'none' }}
      >
        <Dropzone.Accept>
          <IconUpload
            size={50}
            stroke={1.5}
            color={
              theme.colors[theme.primaryColor][
                theme.colorScheme === 'dark' ? 4 : 6
              ]
            }
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            size={50}
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconBook size={50} stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            {t('upload-text-1')}
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            {t('upload-text-2')}
          </Text>
        </div>

      
      </Group>
    </Dropzone>
  );
};

export default BookUploadComponent;
