import React from 'react';
import { useNavigate } from 'react-router-dom';
import SettingsNavbar from './SettingsNavbar';
import NavbarUserCard from './NavbarUserCard';
import { UnstyledButton, Group, Avatar, Text, rem, TextInput, Code, Badge } from '@mantine/core';
import { IconBulb, IconUser, IconCheckbox, IconSearch, IconBook, IconBook2, IconBooks } from '@tabler/icons-react';

const Navbar = (props: {}) => {
  const history = useNavigate();

  const links = [
    { icon: IconBooks, label: 'Home1', path: '/home' },
    { icon: IconBook, label: 'Patients', path: '/patients' },
    { icon: IconUser, label: 'Calendar', path: '/calendar' },
    { icon: IconUser, label: 'Management', path: '/management' },
  ];

  const mainLinks = links.map(link => (
    <UnstyledButton key={link.label} className="flex flex-row align-center justify-between">
      <div className="flex flex-row justify-around gap-3">
        <link.icon size={20} stroke={1.5} />
        <span
          className="size-[14px]"
          style={{
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '16px',
          }}
          onClick={() => history(link.path)}
        >
          {link.label}
        </span>
      </div>
    </UnstyledButton>
  ));

  const radius = 8;

  return (
    <nav className="2xl:flex xl:flex md:hidden sm:hidden xs:hidden lg:hidden flex-col justify-between bg-slate-100 w-50 p-4">
      <nav className="flex flex-col justify-around">
        <NavbarUserCard />
        <TextInput
          className="mb-4"
          placeholder="Search"
          size="xs"
          styles={{
            wrapper: {
              borderTopLeftRadius: radius,
              borderTopRightRadius: radius,
              borderBottomLeftRadius: radius,
              borderBottomRightRadius: radius,
            },
            section: { pointerEvents: 'none', marginRight: 5 },
            input: {
              borderTopLeftRadius: radius,
              borderTopRightRadius: radius,
              borderBottomLeftRadius: radius,
              borderBottomRightRadius: radius,
            },
          }}
          leftSection={<IconSearch size={14} />}
          rightSection={
            <Code>
              <Text size="xs" color="dimmed">
                ⌘K
              </Text>
            </Code>
          }
        />

        <nav className="flex flex-col justify-around gap-3 mt-6">{mainLinks}</nav>
      </nav>

      <SettingsNavbar />
    </nav>
  );
};

export default Navbar;
