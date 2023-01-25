import { Button, Divider, Menu, Text } from '@mantine/core';
import { IconNotification, IconQuestionMark } from '@tabler/icons';
import HeaderMenuTarget from 'components/header/menu/HeaderMenuTarget';
import React from 'react';
import HeaderMenuDropdown from './HeaderMenuDropdown';

const HeaderMenuContainer = () => {
  return (
    <div className="flex flex-row justify-between gap-[20px]">
      <div className="flex flex-row justify-between items-center gap-4">
        <Button>Create</Button>
        <IconQuestionMark />
        <IconNotification />
        <Divider orientation="vertical" />
      </div>

      <div className="flex flex-row justify-between gap-5 items-center">
        <div className="flex">
          <Text transform="capitalize">Community User</Text>
        </div>

        <Menu shadow="md" position="bottom">
          <HeaderMenuTarget />
          <HeaderMenuDropdown />
        </Menu>
      </div>
    </div>
  );
};

export default HeaderMenuContainer;
