import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Plan.<br />
            Manage.<br />
            Build
          </h1>
        </div>
        <div className="hero-right">
          <div className="divider">/</div>
          <div className="difference">
            <p>Our Difference Is In <br />The Finishing</p>
            <button className="work-btn">Work →</button>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="design.jpg" alt="Abstract Design"/>
      </div>

      <div className="hero-logos">
        <img src="Rakuten.png" alt="Rakuten" />
        <img src="ncr.png" alt="NCR" />
        <img src="Monday.png" alt="Monday.com" />
        <img src="Disney.png" alt="Disney" />
        <img src="dropbox.png" alt="Dropbox" />
      </div>
    </section>
  );
}

export default Hero;
