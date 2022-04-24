import { Link } from 'gatsby';
import * as React from 'react';
import LogoSection from '../logo/Logo';

import './Hero.css';

function HeroSection() {
  return (
    <section>
      <LogoSection />
      <div className="main-container">
        <div className="main-container-section">
          <div className="content-wrapper">
            <p><span className="prefix-tagline">Hello, I&rsquo;m Sam</span></p>

            <h2>
              I aim to
              {' '}
              <span className="tagline-create">create powerful</span>
              {' '}
              products,
              {' '}
              <span className="tagline-inspire">inspire people </span>
              {' '}
              through the use of technology, and
              {' '}
              <span className="tagline-bridge">bridge the gap </span>
              between the world of technology and people.
            </h2>

            <div className="call-to-action">View LinkedIn profile</div>

          </div>
        </div>
      </div>

      <div>Footer</div>
    </section>
  );
}

export default HeroSection;
