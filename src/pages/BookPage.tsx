import {
  completeNavigationProgress,
  startNavigationProgress,
} from '@mantine/nprogress';
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import useInvokeLastInteraction from 'hooks/useInvokeLastInteraction';
import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const BookPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // const [searchParams] = useSearchParams();
  // const id = searchParams.get('id');
  const { bookId } = useParams();
  const invoke = useInvokeLastInteraction(bookId);

  const bookURL = `http://localhost:8080/book/${bookId}`;

  useEffect(() => {
    startNavigationProgress();
  }, []);

  return (
    <div className="w-full">
      {bookId && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.2.146/build/pdf.worker.min.js">
          <Viewer
            fileUrl={bookURL}
            plugins={[defaultLayoutPluginInstance]}
            // defaultScale={"PageFit"}
            // defaultScale={"PageFit"}
            defaultScale={SpecialZoomLevel.PageFit}
            initialPage={50}
            onDocumentLoad={_ => completeNavigationProgress()}
            onPageChange={e => {
              const { currentPage } = e;
            }}
          />
        </Worker>
      )}
    </div>
  );
};

export default BookPage;
