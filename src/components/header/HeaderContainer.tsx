import { Header, Image, Text } from '@mantine/core';
import HeaderMenuContainer from 'components/header/menu/HeaderMenuContainer';
import React, { useEffect, useState } from 'react';

const HeaderContainer = () => {
  const [shouldHide, setShouldHide] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (!shouldHide && position > 80) setShouldHide(true);
    if (position < 80) setShouldHide(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Header
      height={60}
      hidden={shouldHide}
      p="xs"
      sx={theme => ({ 'box-shadow': theme.shadows.sm })}
    >
      <div className="mx-6">
        <div className="flex justify-between items-center">
          <div className="flex justify-between gap-5 items-center">
            <Text
              component="a"
              href="/"
              sx={{ fontFamily: 'JetBrains Mono, monospace', color: 'orangered' }}
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
