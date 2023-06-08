import axios from 'axios';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';
import './style.css';

import { MantineProvider, createEmotionCache } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import RouteContainer from 'router/RouteContainer';

import { Notifications } from '@mantine/notifications';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const appendCache = createEmotionCache({ key: 'mantine', prepend: false });

axios.defaults.baseURL = process.env.REACT_APP_URL_DEVELOPMENT;

const Index = () => {
  return (
    <MantineProvider emotionCache={appendCache} withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        <Notifications />
        <RouteContainer />
      </ModalsProvider>
    </MantineProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Index />);
