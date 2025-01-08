import React, { useState } from 'react';
import logo from '../images/logo.svg';
import menuIcon from '../images/menu-icon.svg';
import backIcon from '../images/back-icon.svg';
import playIcon from '../images/play-icon.svg';
import vehicle1 from '../images/vehicle-1.png';
import vehicle2 from '../images/vehicle-2.png';
import vehicle3 from '../images/vehicle-3.png';
import vehicle4 from '../images/vehicle-4.png';

const Dashboard: React.FC = () => {
  const [menuOpened, setMenuOpened] = React.useState(false); 

  return (
    <div>
      <div className={`clear ${menuOpened ? 'open' : ''}`}>
        <img src={backIcon} className="back-icon" alt="" onClick={() => {
          setMenuOpened(!menuOpened);
        }} />
      </div>

      <header>
        <nav>
          <a href="/">
            <img src={logo} alt="" />
          </a>

          <ul className={menuOpened ? 'open' : ''}>
            <li><a href="">Packages</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="/certificate">Certificate</a></li>
          </ul>

          <div className="buttons">
            <button className={`btn btn-primary  ${menuOpened ? 'open' : ''}`}>
              Start Your Journey
              <span className="btn-primary__inner">
                <span className="btn-primary__blobs">
                  <span className="btn-primary__blob"></span>
                  <span className="btn-primary__blob"></span>
                  <span className="btn-primary__blob"></span>
                  <span className="btn-primary__blob"></span>
                </span>
              </span>
            </button>
          </div>

          <div 
            className={`menu-icon ${menuOpened ? 'open' : ''}`}
            onClick={() => setMenuOpened(!menuOpened)}>
            <img src={menuIcon} alt="" />
          </div>
        </nav>

        <main>
          <h3>Reliable Transportation. </h3>
          <h1>Based in Abu Dhabi. </h1>
          <h2>Providing service all over UAE. </h2>

          <button className="btn btn-outline-primary">
            <img src={playIcon} alt="" />
            Explore more
          </button>
        </main>
      </header>
      
      <section id="service">
        <h2>
          Reliable passengers transportation via rented <strong>buses</strong> for a group rides and <strong>light vehicles</strong> for your comfort trip - tailored to your needs.
        </h2>

        <h1 className="title">
          SERVICE
        </h1>

        <div className="vehicles">
          <div className="vehicle">
            <img src={vehicle1} alt="" />
          </div>
          
          <div className="vehicle">
            <img src={vehicle2} alt="" />
          </div>
          
          <div className="vehicle">
            <img src={vehicle3} alt="" />
          </div>

          <div className="vehicle">
            <img src={vehicle4} alt="" />
          </div>
        </div>

      </section>
    </div>
  );
};

export default Dashboard;
