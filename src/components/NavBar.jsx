import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';
import { IoChevronBackSharp } from 'react-icons/io5';
import logo from '../media/CryptocurrencyLogo.png';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex darker-bg">
        <div className="flex nav-container">
          <div
            className="flex nav-side"
            aria-hidden="true"
            onClick={() => navigate('/')}
          >
            <IoChevronBackSharp />
          </div>
          <div className="flex nav-text">
            <Link to="/">
              <img src={logo} alt="Crypto Currency Logo" className="navbar-logo" />
              CCT
            </Link>
          </div>
          <div className="nav-side">
            <CiSettings />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
