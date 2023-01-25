import { Menu } from '@mantine/core';
import { IconLogout, IconUserCircle } from '@tabler/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderMenuDropdown = () => {
  const navigate = useNavigate();

  return (
    <Menu.Dropdown>
      <Menu.Label>"a"</Menu.Label>
      <Menu.Item icon={<IconUserCircle size={14} />}>Profile</Menu.Item>
      {/* <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
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
  );
};

export default HeaderMenuDropdown;
