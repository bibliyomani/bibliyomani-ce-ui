import { Box } from '@mantine/core';
import {
  completeNavigationProgress,
  startNavigationProgress,
} from '@mantine/nprogress';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import useInvokeLastInteraction from 'hooks/useInvokeLastInteraction';
import useWindowDimensions from 'hooks/useWindowDimensions';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { updateLastRead } from 'services/BookService';

const BASE_URL = process.env.REACT_APP_URL_DEVELOPMENT;

const BookPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { height } = useWindowDimensions();
  const availableHeightForViewer = height - 80;
  const [last, setLast] = useState<number>(0);

  const { bookId } = useParams();
  const [searchParams] = useSearchParams();
  const i = searchParams.get('i');

  const invoke = useInvokeLastInteraction(bookId);
  const bookURL = `${BASE_URL}/book/${bookId}`;
  console.log(bookURL);
  

  useEffect(() => {
    startNavigationProgress();
    console.log(process.env.REACT_APP_URL_DEVELOPMENT);
    
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (last > +i) updateLastRead(+bookId, last);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [last]);

  return (
    <div className="w-full">
      {bookId && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
          <Box sx={{ height: `${availableHeightForViewer}px` }}>
            <Viewer
              fileUrl={bookURL}
              plugins={[defaultLayoutPluginInstance]}
              // defaultScale={"PageFit"}
              // defaultScale={"PageFit"}
              // defaultScale={SpecialZoomLevel.PageFit}
              initialPage={+i}
              // scrollMode={ScrollMode.Page}
              // viewMode={ViewMode.SinglePage}
              onDocumentLoad={_ => completeNavigationProgress()}
              onPageChange={e => {
                const { currentPage } = e;
                setLast(currentPage);
              }}
            />
          </Box>
        </Worker>
      )}
    </div>
  );
};

export default BookPage;
