import React from 'react';
import { Navbar } from 'flowbite-react';
import { useTranslation } from 'react-i18next';
import { Text } from '@mantine/core';

import './navigation.scss';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Bibliyomani
        </span> */}
        <p className="nav-brand">Bibliyomani</p>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/home" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/upload">{t('upload')}</Navbar.Link>

        <Navbar.Link href="/navbars">{t('about')}</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
