import React, { useState } from 'react';
import logo from '../images/logo.svg';
import menuIcon from '../images/menu-icon.svg';
import backIcon from '../images/back-icon.svg';

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
      </header>
    </div>
  );
};

export default Dashboard;
