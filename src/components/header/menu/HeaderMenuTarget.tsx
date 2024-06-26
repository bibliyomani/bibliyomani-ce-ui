import { Avatar, Menu } from '@mantine/core';
import React, { useEffect, useState } from 'react';
// import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { IconFolder, IconX } from '@tabler/icons';

export const generateDiceBearAvataaars = (seed: any) => `https://avatars.dicebear.com/api/avataaars/${seed}.svg`;

const HeaderMenuTarget = () => {
  const [up, setUp] = useState(false);

  return (
    <Menu.Target>
      <div
        className="flex flex-row justify-center  pb-1 cursor-pointer"
        onClick={() => {
          console.log('1');
          setUp(true);
        }}
        onMouseOut={() => {
          setUp(false);
        }}
      >
        {/* <div className="bg-green-500 rounded-[50px] h-full p-2">EU</div> */}
        <Avatar src={generateDiceBearAvataaars(Math.random())} alt="it's me" size={35} />
        {up ? <IconFolder className="self-center" /> : <IconFolder className="self-center" />}
      </div>

      {/* <Text
        style={{ cursor: 'pointer' }}
      >{`${firstName} ${lastName}`}</Text> */}
    </Menu.Target>
  );
};

export default HeaderMenuTarget;
