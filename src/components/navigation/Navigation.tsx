import React from 'react';
import { Navbar } from 'flowbite-react';
import { useTranslation } from 'react-i18next';
import NavigationSettings from './NavigationSettings';

const NavigationBar = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-10">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Bibliyomani Community Edition
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavigationSettings />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
