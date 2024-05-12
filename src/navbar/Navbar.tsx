import React from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsNavbar from './SettingsNavbar';
import NavbarUserCard from './NavbarUserCard';
import { UnstyledButton, Group, Avatar, Text, rem, TextInput, Code, Badge } from '@mantine/core';
import { IconBulb, IconUser, IconCheckbox, IconSearch, IconBook, IconBook2, IconBooks } from '@tabler/icons-react';
import { useOutletContext } from 'react-router-dom';

const Navbar = ({ metadata, setMetadata }) => {
  const history = useNavigate();

  const links = [{ icon: IconBooks, label: 'Home', path: '/' }];

  const mainLinks = links.map(link => (
    <UnstyledButton key={link.label} className="flex flex-row align-center justify-center pr-8">
      <div className="flex flex-row justify-around gap-3">
        <link.icon size={20} stroke={1.5} />
        <span
          className="size-[14px]"
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '16px',
          }}
          onClick={() => {
            setMetadata(null);
            history(link.path);
          }}
        >
          {link.label}
        </span>
      </div>
    </UnstyledButton>
  ));

  const radius = 8;

  return (
    <nav className="2xl:flex xl:flex md:hidden sm:hidden xs:hidden lg:hidden flex-col justify-between bg-slate-100 w-40 p-4">
      <nav className="flex flex-col justify-around pr-2">
        <nav className="flex flex-col justify-center gap-3 mt-6">{mainLinks}</nav>
      </nav>
    </nav>
  );
};

// <NavbarUserCard />
// <SettingsNavbar />
export default Navbar;
