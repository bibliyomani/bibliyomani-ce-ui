import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { openConfirmModal } from '@mantine/modals';

import { useNavigate } from 'react-router-dom';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconLogout } from '@tabler/icons';

import { Menu, Text, UnstyledButton, Group, Avatar } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons';

export const generateDiceBearAvataaars = (seed: any) =>
  `https://avatars.dicebear.com/api/avataaars/${seed}.svg`;

const NavigationSettings = () => {
  const navigate = useNavigate();

  return (
    <>
      <Menu shadow="md" width={180} position="bottom">
        <Menu.Target>
          <UnstyledButton>
            <Group>
              <Avatar
                src={generateDiceBearAvataaars(Math.random())}
                alt="it's me"
                size={35}
              />
              <Text>some user1</Text>
            </Group>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>enes usta</Menu.Label>
          {/* <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
            <Menu.Item icon={<IconMessageCircle size={14} />}>
              Messages
            </Menu.Item>
            <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
            <Menu.Item
              icon={<IconSearch size={14} />}
              rightSection={
                <Text size="xs" color="dimmed">
                  ⌘K
                </Text>
              }
            >
              Search
            </Menu.Item> */}

          <Menu.Divider />

          {/* <Menu.Label>Danger zone</Menu.Label> */}
          {/* <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
              Transfer my data
            </Menu.Item> */}
          <Menu.Item color="red" icon={<IconLogout size={14} />}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default NavigationSettings;
