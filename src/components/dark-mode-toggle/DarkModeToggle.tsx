import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import React from 'react';
import useDarkMode from 'use-dark-mode';

import './DarkModeToggle.css';

function DarkModeToggle() {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle-form">
      <button type="button" onClick={darkMode.value ? darkMode.disable : darkMode.enable}>
        {darkMode.value ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}

export default DarkModeToggle;
