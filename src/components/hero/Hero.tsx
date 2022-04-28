import * as React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';

import './Hero.css';

function HeroSection() {
  return (
    <section>
      <div>
        <p><span className="prefix-tagline">Hello, I&rsquo;m Sam</span></p>

        <h2>
          Creating
          {' '}
          <span className="tagline-1">full-stack web apps</span>
          {' '}
          products, blogging about
          {' '}
          <span className="tagline-2">technologies and trends</span>
          {' '}
          and
          {' '}
          <span className="tagline-3">bridging the gap between technology and people</span>
        </h2>

        <div className="call-to-action">
          <p>View LinkedIn profile</p>
          <ArrowRightIcon className="call-to-action__icon" />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
