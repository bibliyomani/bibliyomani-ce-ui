import {
  completeNavigationProgress,
  startNavigationProgress,
} from '@mantine/nprogress';
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const BookPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [searchParams] = useSearchParams();
  const hash = searchParams.get('hash');
  const bookURL = `http://localhost:8080/book?hash=${hash}`;
  console.log(bookURL);

  useEffect(() => {
    startNavigationProgress();
  }, []);

  return (
    <div className="w-full">
      {hash && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js">
          <Viewer
            fileUrl={bookURL}
            plugins={[defaultLayoutPluginInstance]}
            // defaultScale={"PageFit"}
            // defaultScale={"PageFit"}
            defaultScale={SpecialZoomLevel.PageFit}
            initialPage={50}
            onDocumentLoad={e => {
              console.log('dokument loaded');
              completeNavigationProgress();
            }}
            onPageChange={e => {
              const { currentPage } = e;
              console.log(currentPage);
            }}
          />
        </Worker>
      )}
    </div>
  );
};

export default BookPage;
