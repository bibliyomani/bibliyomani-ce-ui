import { Header, Image, Text } from '@mantine/core';
import HeaderMenuContainer from 'components/header/menu/HeaderMenuContainer';
import React from 'react';

const HeaderContainer = () => {
  return (
    <Header
      height={80}
      p="xs"
      sx={theme => ({ 'box-shadow': theme.shadows.sm })}
    >
      <div className="mx-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex justify-between gap-5 items-center">
            <Image
              width={80}
              radius="md"
              src="https://szalongevity.com/assets/img/logo.svg"
              alt="longevity logo"
            />
            <Text
              component="a"
              href="/"
              sx={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Bibliyomani
            </Text>
          </div>
          <HeaderMenuContainer />
        </div>
      </div>
    </Header>
  );
};

export default HeaderContainer;
