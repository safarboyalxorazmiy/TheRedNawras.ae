import React, { useState, useRef } from 'react';
import logo from '../images/logo.svg';
import menuIcon from '../images/menu-icon.svg';
import backIcon from '../images/back-icon.svg';
import playIcon from '../images/play-icon.svg';
import playIconHovered from '../images/play-icon-hovered.svg';
import vehicle1 from '../images/vehicle-1.png';
import vehicle2 from '../images/vehicle-2.png';
import vehicle3 from '../images/vehicle-3.png';
import vehicle4 from '../images/vehicle-4.png';
import map from '../images/map.png';
import instagram from '../images/instagram-icon.svg';
import whatsapp from '../images/whatsapp-icon.svg';

const Dashboard: React.FC = () => {
  const [menuOpened, setMenuOpened] = useState(false); 
  const [imgSrc, setImgSrc] = useState(playIcon); 

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

          <button className="btn btn-outline-primary"  
          onMouseOver={() => setImgSrc(playIconHovered)} 
          onMouseOut={() => setImgSrc(playIcon)}>
            <img src={imgSrc} alt="" />
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

      <section id="packages">
        <h1 className="title">Packages</h1>

        <div className="package">
          <div className="cities">
            <ul>
              <li>Al Reef City</li>
              <li>Al Raha & Gardens</li>
            </ul>
            <ul>
              <li>Khalifa City</li>
              <li>Masdar City</li>
            </ul>
          </div>

          <div className="package-content">
            <h4>400 AED <span>/ month</span></h4>
            <p>For duty use only</p>
            <button>Join</button>
          </div>
        </div>

        <div className="package">
          <div className="cities">
            <ul>
              <li>Shakhbout City</li>
            </ul>
          </div>

          <div className="package-content">
            <h4>550 AED <span>/ month</span></h4>
            <p>For duty use only</p>
            <button>Join</button>
          </div>
        </div>

        <div className="package">
          <div className="cities">
            <ul>
              <li>Shahama</li>
              <li>Yas Island</li>
            </ul>
            <ul>
              <li>Shamha City</li>
              <li>Shuwameh City</li>
            </ul>
          </div>

          <div className="package-content">
            <h4>650 AED <span>/ month</span></h4>
            <p>For duty use only</p>
            <button>Join</button>
          </div>
        </div>

        <div className="package">
          <div className="cities">
            <ul>
              <li>Riyadh City</li>
              <li>Rabdan area</li>
            </ul>
          </div>

          <div className="package-content">
            <h4>700 AED <span>/ month</span></h4>
            <p>For duty use only</p>
            <button>Join</button>
          </div>
        </div>

        <div className="package">
          <div className="cities">
            <ul>
              <li>Muror</li>
              <li>Rotana Hotel</li>
            </ul>
          </div>

          <div className="package-content">
            <h4>800 AED <span>/ month</span></h4>
            <p>For duty use only</p>
            <button>Join</button>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact-content">
          <h1 className="title">Contacts</h1>
          <h2>+971 50 4473294</h2>
          <h2>+971 50 2911488</h2>

          <div className="socials">
            <img src={instagram} alt="" />
            <img src={whatsapp} alt="" />
          </div>
        </div>
        <div className="contact-map">
          <img src={map} alt="" />
          <p>Abu Dhabi, Mussafah city M38-40, Area 9,Bulding 1-4, Office 5.</p>
        </div>
      </section>

      <footer>
        <p>© 2025 The Red Nawras. All Rights Reserved.</p>

        <a href="mailto:nawrasred@gmail.com">nawrasred@gmail.com</a>
      </footer>
    </div>
  );
};

export default Dashboard;
