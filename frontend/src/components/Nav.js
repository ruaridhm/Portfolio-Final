import React from 'react';
import PropTypes from 'prop-types';
import './nav.css';
import { Link } from 'react-router-dom';
import Button from './Button/Button';

const Nav = ({ title, icon }) => {
  const onContactClick = () => {
    document.documentElement.scrollTo({
      left: 0,
      top:
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };

  return (
    <nav className='navbar'>
      <div className='nav-left'>
        <Link to='/'>
          <h1 className='nav-title'>
            {title}
            {icon}
          </h1>
        </Link>
      </div>
      <ul className='nav-right'>
        <li className='nav-list-item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-list-item'>
          <Link to='/about'>About</Link>
        </li>
        <li className='nav-list-item'>
          <Link to='/projects'>Projects</Link>
        </li>
        <li className='nav-list-item'>
          <Button
            buttonSize='btn--small'
            buttonStyle='btn--success--solid'
            onClick={onContactClick}
          >
            Contact Me
          </Button>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Nav.defaultProps = {
  title: 'Ruaridh McGuckin',
};

export default Nav;
