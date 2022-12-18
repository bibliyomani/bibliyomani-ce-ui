import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.css';
import './i18n';
import axios from 'axios';

import { MantineProvider, createEmotionCache } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

const appendCache = createEmotionCache({ key: 'mantine', prepend: false });

axios.defaults.baseURL = process.env.REACT_APP_URL_DEVELOPMENT;

const Index = () => {
  return (
    <MantineProvider
      emotionCache={appendCache}
      withGlobalStyles
      withNormalizeCSS
    >
      <NotificationsProvider>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Index />);
