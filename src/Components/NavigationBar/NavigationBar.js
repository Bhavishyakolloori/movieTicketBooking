import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavigationBar.css';

function NavigationBar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className='container-fluid'>
      <nav className='navbar navbar-expand-md fs-5 rounded-pill border-dark'>
        <button
          className='navbar-toggler text-white'
          type='button'
          onClick={toggleNavbar}
        >
          {showNavbar ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`collapse navbar-collapse ${showNavbar ? 'show' : ''}`}>
          <div className='navbar-nav nav-item ms-auto'>
            <Link className='nav-link active text-white display-5 fw-bolder' to='/'>
              Home
            </Link>
            <Link className='nav-link text-white display-5 fw-bolder' to='/complete-data/34653'>
              Complete Details
            </Link>
            <Link className='nav-link text-white display-5 fw-bolder' to ='/book-tickets/All%20American'>
              Booking
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
