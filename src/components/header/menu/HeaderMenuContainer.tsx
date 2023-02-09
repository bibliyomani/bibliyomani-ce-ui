import { Button, Divider, Menu, Text } from '@mantine/core';
import { IconNotification, IconQuestionMark } from '@tabler/icons';
import HeaderMenuTarget from 'components/header/menu/HeaderMenuTarget';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderMenuDropdown from 'components/header/menu/HeaderMenuDropdown';

const HeaderMenuContainer = () => {
  const history = useNavigate();
  return (
    <div className="flex flex-row justify-between gap-[20px]">
      <div className="flex flex-row justify-between items-center gap-4">
        <Button color='orange'>
          Playlists
        </Button>
        <Button
          color="orange"
          onClick={() => {
            history('/upload');
          }}
        >
          Upload
        </Button>

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
