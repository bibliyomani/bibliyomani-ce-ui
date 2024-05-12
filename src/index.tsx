import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import RouteContainer from 'router/RouteContainer';

import { Toaster } from 'sonner';

import relativeTime from 'dayjs/plugin/relativeTime';

import dayjs from 'dayjs';
import 'dayjs/locale/tr'; // import locale
dayjs.extend(relativeTime);

import '@mantine/nprogress/styles.layer.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';
import '@mantine/core/styles/Tabs.css';

import '@mantine/core/styles/ScrollArea.css';
import '@mantine/core/styles/VisuallyHidden.css';
import '@mantine/core/styles/Paper.css';
import '@mantine/core/styles/Popover.css';
import '@mantine/core/styles/CloseButton.css';
import '@mantine/core/styles/Group.css';
import '@mantine/core/styles/Loader.css';
import '@mantine/core/styles/Overlay.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/Checkbox.css';
import '@mantine/core/styles/Flex.css';
import '@mantine/core/styles/global.css';
import '@mantine/dates/styles.css';
import '@mantine/core/styles/Accordion.css';
import '@mantine/core/styles/ActionIcon.css';
import '@mantine/core/styles/Alert.css';
import '@mantine/core/styles/Anchor.css';
import '@mantine/core/styles/Affix.css';
import '@mantine/core/styles/AppShell.css';
import '@mantine/core/styles/AspectRatio.css';
import '@mantine/core/styles/Avatar.css';
import '@mantine/core/styles/Badge.css';
import '@mantine/core/styles/Breadcrumbs.css';
import '@mantine/core/styles/Blockquote.css';
import '@mantine/core/styles/BackgroundImage.css';
import '@mantine/core/styles/Burger.css';
import '@mantine/core/styles/Button.css';
import '@mantine/core/styles/Card.css';
import '@mantine/core/styles/Center.css';
import '@mantine/core/styles/Checkbox.css';
import '@mantine/core/styles/Code.css';
import '@mantine/core/styles/CloseButton.css';
import '@mantine/core/styles/Chip.css';
import '@mantine/core/styles/ColorInput.css';
import '@mantine/core/styles/ColorSwatch.css';
import '@mantine/core/styles/ColorPicker.css';
import '@mantine/core/styles/Combobox.css';
import '@mantine/core/styles/Divider.css';
import '@mantine/core/styles/Dialog.css';
import '@mantine/core/styles/Container.css';
import '@mantine/core/styles/Drawer.css';
import '@mantine/core/styles/Fieldset.css';
import '@mantine/core/styles/Flex.css';
import '@mantine/core/styles/Group.css';
import '@mantine/core/styles/Grid.css';
import '@mantine/core/styles/Image.css';
import '@mantine/core/styles/InlineInput.css';
import '@mantine/core/styles/Indicator.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/List.css';
import '@mantine/core/styles/Kbd.css';
import '@mantine/core/styles/Loader.css';
import '@mantine/core/styles/Mark.css';
import '@mantine/core/styles/Menu.css';
import '@mantine/core/styles/LoadingOverlay.css';
import '@mantine/core/styles/Modal.css';
import '@mantine/core/styles/ModalBase.css';
import '@mantine/core/styles/NavLink.css';
import '@mantine/core/styles/Notification.css';
import '@mantine/core/styles/NumberInput.css';
import '@mantine/core/styles/Overlay.css';
import '@mantine/core/styles/Pagination.css';
import '@mantine/core/styles/Paper.css';
import '@mantine/core/styles/PasswordInput.css';
import '@mantine/core/styles/Pill.css';
import '@mantine/core/styles/PillsInput.css';
import '@mantine/core/styles/Popover.css';
import '@mantine/core/styles/Progress.css';
import '@mantine/core/styles/PinInput.css';
import '@mantine/core/styles/RingProgress.css';
import '@mantine/core/styles/Rating.css';
import '@mantine/core/styles/Radio.css';
import '@mantine/core/styles/SegmentedControl.css';
import '@mantine/core/styles/SimpleGrid.css';
import '@mantine/core/styles/Skeleton.css';
import '@mantine/core/styles/ScrollArea.css';
import '@mantine/core/styles/Slider.css';
import '@mantine/core/styles/Spoiler.css';
import '@mantine/core/styles/Stack.css';
import '@mantine/core/styles/Stepper.css';
import '@mantine/core/styles/Switch.css';
import '@mantine/core/styles/Table.css';
import '@mantine/core/styles/Tabs.css';
import '@mantine/core/styles/Text.css';
import '@mantine/core/styles/ThemeIcon.css';
import '@mantine/core/styles/Timeline.css';
import '@mantine/core/styles/Title.css';
import '@mantine/core/styles/Tooltip.css';
import '@mantine/core/styles/TypographyStylesProvider.css';
import '@mantine/core/styles/VisuallyHidden.css';
import '@mantine/nprogress/styles.css';

import './style.css';

import 'mantine-datatable/styles.layer.css';
import '@mantine/core/styles.layer.css';

import './layout.css';

axios.defaults.baseURL = process.env.REACT_APP_URL_DEVELOPMENT;
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Accept'] = 'application/json';

const Index = () => {
  return (
    <MantineProvider theme={{ fontFamily: 'Open Sans, sans-serif' }} defaultColorScheme="auto">
      <Toaster
        richColors
        expand={true}
        duration={10000}
        toastOptions={{
          style: { fontFamily: 'Open Sans, sans-serif', fontWeight: 500 },
        }}
      />
      <ModalsProvider>
        <RouteContainer />
      </ModalsProvider>
    </MantineProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
