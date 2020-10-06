import React from 'react';
import Button from './Button/Button';
import './hero.css';

const Hero = () => {
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
    <div className='hero'>
      <h1 className='hero-header'>Ruaridh McGuckin</h1>
      <p className='hero-sub-header'>
        Hello! I am a Front End Developer from Dublin, Ireland
      </p>
    </div>
  );
};

export default Hero;
