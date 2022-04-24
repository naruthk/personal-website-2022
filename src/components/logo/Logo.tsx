import { Link } from 'gatsby';
import * as React from 'react';
import DarkModeToggle from '../dark-mode-toggle/DarkModeToggle';

import './Logo.css';

function LogoSection() {
  return (
    <div className="logo-container">
      <div className="logo-content">
        <Link to="/" title="Home">NK</Link>
      </div>
      <DarkModeToggle />
    </div>
  );
}

export default LogoSection;
