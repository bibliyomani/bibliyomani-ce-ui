import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import "./i18n";

import { MantineProvider, createEmotionCache } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

const appendCache = createEmotionCache({ key: 'mantine', prepend: false });

function Index() {
  return (
    <MantineProvider
      emotionCache={appendCache}
      withGlobalStyles
      withNormalizeCSS
    >
      <NotificationsProvider>
          <App />
      </NotificationsProvider>
    </MantineProvider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Index tab="home" />);
