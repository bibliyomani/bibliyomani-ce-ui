import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import './i18n';
import axios from 'axios';

import { MantineProvider, createEmotionCache } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import RouteContainer from 'router/RouteContainer';
import { QueryClient, QueryClientProvider } from 'react-query';

const appendCache = createEmotionCache({ key: 'mantine', prepend: false });

axios.defaults.baseURL = process.env.REACT_APP_URL_DEVELOPMENT;

const queryClient = new QueryClient();

const Index = () => {
  return (
    <MantineProvider
      emotionCache={appendCache}
      withGlobalStyles
      withNormalizeCSS
    >
      <NotificationsProvider>
        <ModalsProvider>
          <QueryClientProvider client={queryClient}>
            <RouteContainer />
          </QueryClientProvider>
        </ModalsProvider>
      </NotificationsProvider>
    </MantineProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Index />);
