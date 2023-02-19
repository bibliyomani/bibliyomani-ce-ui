import { Box } from '@mantine/core';
import {
  completeNavigationProgress,
  startNavigationProgress
} from '@mantine/nprogress';
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useHttpGet } from 'kanca/http';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateLastRead } from 'services/BookService';
import { patch } from 'services/HttpService';
import { BookMetada } from 'types/Book';

const BASE_URL = process.env.REACT_APP_URL_DEVELOPMENT;

const BookPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { height } = useWindowDimensions();
  const availableHeightForViewer = height - 80;
  const [last, setLast] = useState<number>(0);
  const [page, setPage] = useState(0);

  const { bookId } = useParams();
  const { state, loading, err } = useHttpGet<BookMetada>(
    `/book-metadata/${bookId}`,
  );

  useEffect(() => {
    startNavigationProgress();
    const invokePatchRequest = async () => {
      const [data, err] = await patch(`/book/${bookId}`);
    };
    invokePatchRequest();
  }, []);

  useEffect(() => {
    state && setPage(state.read);
  }, [state]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (last > state.read) updateLastRead(+bookId, last);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [last]);

  return (
    <div className="w-full">
      {bookId && !loading && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
          <Box sx={{ height: `${availableHeightForViewer}px` }}>
            <Viewer
              fileUrl={`${BASE_URL}/book/${bookId}`}
              plugins={[defaultLayoutPluginInstance]}
              // defaultScale={"PageFit"}
              defaultScale={SpecialZoomLevel.PageFit}
              initialPage={page}
              // scrollMode={ScrollMode.Page}
              // viewMode={ViewMode.SinglePage}
              onDocumentLoad={_ => completeNavigationProgress()}
              onPageChange={e => {
                const { currentPage } = e;
                setLast(currentPage);
                setPage(currentPage);
              }}
            />
          </Box>
        </Worker>
      )}
    </div>
  );
};

export default BookPage;
