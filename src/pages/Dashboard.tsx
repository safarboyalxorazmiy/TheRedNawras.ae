import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <a href="/">
            <img src="../images/logo.svg" alt="" />
          </a>

          <ul>
            <li>Packages</li>
            <li>Contact</li>
            <li>Certificate</li>
          </ul>

          <button className="btn btn-primary">Start Your Journey</button>
        </nav>

        
      </header>
    </div>
  );
};

export default Dashboard;