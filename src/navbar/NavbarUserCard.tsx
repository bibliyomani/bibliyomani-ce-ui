// import { AuthContext, AuthContextInterface } from 'context/AuthContext';
import React, { useContext } from 'react';
import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';

const NavbarUserCard = (props: {}) => {
  // const { auth }: AuthContextInterface = useContext(AuthContext);

  const radius = 12;
  return (
    <UnstyledButton className="block w-full">
      <div
        className="flex flex-row justify-between items-center gap-3 py-3 px-5 mb-4 bg-gray-300 rounded-xl"
        style={{
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        }}
      >
        <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={300}>
            {'Bibliyomani'}
          </Text>

          <Text c="dimmed" size="xs">
            {'Orthorecta Inc'}
          </Text>
        </div>
      </div>
    </UnstyledButton>
  );
};

export default NavbarUserCard;
