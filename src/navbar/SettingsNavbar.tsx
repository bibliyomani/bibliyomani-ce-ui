import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsNavbar = (props: {}) => {
  const history = useNavigate();

  return (
    <nav className="flex flex-col justify-around gap-3">
      <ul>
        <nav className="flex flex-col justify-around gap-3">
          {['Settings', 'Support center'].map(e => {
            return (
              <li className="cursor-pointer" onClick={() => history(e.toLowerCase())}>
                {e}
              </li>
            );
          })}
        </nav>
      </ul>
    </nav>
  );
};

export default SettingsNavbar;
