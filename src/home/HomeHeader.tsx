import { Center, Text } from '@mantine/core';
import { IconList, IconSquare } from '@tabler/icons';
import React from 'react';

const HomeHeader = () => {
  return (
    <div className="flex flex-col ">
      <Center>
        <h3>
          Welcome to
          <Text
            component="a"
            href="/"
            sx={{ fontFamily: 'JetBrains Mono, monospace', color: 'orangered' }}
          >
            {' '}
            Bibliyomani!
          </Text>
        </h3>
      </Center>
      <div className="flex flex-row justify-between px-20 items-center">
        <Text size="xl">Recent</Text>
        <div className="flex flex-row justify-between items-center gap-5">
          <IconList size={32} enableBackground="true" color="gray" />
          <IconSquare size={32} enableBackground="true" color="gray" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
