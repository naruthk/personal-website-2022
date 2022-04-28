import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-section__content">
        <div className="footer-section__content-links">
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faCodepen} />
        </div>
        <p className="footer-section__content-copyright">&copy; 2022 All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
