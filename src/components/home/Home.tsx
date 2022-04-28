import * as React from 'react';

import LogoSection from '../logo/Logo';
import HeroSection from '../hero/Hero';
import FooterSection from '../footer/Footer';

import './Home.css';

function HomeSection() {
  return (
    <section className="home-section">
      <LogoSection />
      <div className="main-container">
        <div className="main-container-section">
          <div className="content-wrapper">
            <HeroSection />
          </div>
        </div>
      </div>

      <FooterSection />
    </section>
  );
}

export default HomeSection;
