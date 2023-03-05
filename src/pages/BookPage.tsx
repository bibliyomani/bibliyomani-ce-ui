import { Box } from '@mantine/core';
import { completeNavigationProgress, startNavigationProgress } from '@mantine/nprogress';
import { PageChangeEvent, Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useBeforeUnload, useDebouncedCallback } from 'kanca';
import React, { useEffect, useState } from 'react';
import { invokePatchRequestWhichUpdatesLastInteraction, updateLastRead } from 'services/BookService';
import { BookMetada } from 'types/Book';

const BASE_URL = process.env.REACT_APP_URL_DEVELOPMENT;

interface Props {
  metadata: BookMetada;
}

const BookPage = ({ metadata }: Props) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { height } = useWindowDimensions();
  const availableHeightForViewer = height - 80;
  const [last, setLast] = useState<number>();

  // const { bookId } = useParams();
  const { bookId } = metadata;

  const changeHandler = (event: PageChangeEvent) => {
    const { currentPage } = event;
    currentPage > metadata.read && updateLastRead(+bookId, currentPage);
    setLast(currentPage);
  };

  const debounceChangeHandler = useDebouncedCallback<PageChangeEvent>(changeHandler, 1000);

  useEffect(() => {
    startNavigationProgress();
    invokePatchRequestWhichUpdatesLastInteraction(+bookId);
  }, []);

  useBeforeUnload(() => {
    updateLastRead(+bookId, last);
  });

  return (
    <div className="w-full">
      {metadata && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
          <Box sx={{ height: `${availableHeightForViewer}px` }}>
            <Viewer
              fileUrl={`${BASE_URL}/book/${bookId}`}
              plugins={[defaultLayoutPluginInstance]}
              // defaultScale={"PageFit"}
              // defaultScale={SpecialZoomLevel.PageFit}
              initialPage={metadata.read}
              // scrollMode={ScrollMode.Page}
              // viewMode={ViewMode.}
              onDocumentLoad={_ => completeNavigationProgress()}
              onPageChange={debounceChangeHandler}
            />
          </Box>
        </Worker>
      )}
    </div>
  );
};

export default BookPage;
