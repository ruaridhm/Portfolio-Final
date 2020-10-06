import React from 'react';
import './about.css';
import mongo from '../images/mongo.png';
import express from '../images/expressjs.png';

const About = () => {
  return (
    <div className='about-container'>
      <h1 className='about-title'>About Me</h1>
      <h2 className='about-sub-title'>Self taught Front End engineer </h2>
      <p className='about-para'>
        Who enjoys learning new things and challenging myself.Aenean ante erat,
        accumsan ut justo sodales, fermentum sagittis mauris. Nunc sodales
        gravida eros. Integer blandit semper eleifend. Praesent lacinia
        ullamcorper elit, sed scelerisque elit aliquam vel. Donec molestie
        rutrum nisi, et pellentesque neque pharetra ut. Vivamus sed sem lectus.
        Mauris in nunc elementum
      </p>
      <p className='about-para'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis,
        ante vel hendrerit vestibulum, dolor nisl pellentesque augue, sed
        fringilla erat turpis vitae dolor. Cras at turpis vulputate, interdum
        tellus pulvinar, molestie mi. Etiam efficitur mollis vestibulum.
        Maecenas rutrum pharetra augue ac pharetra
      </p>

      <h3 className='tech-list-title'>Working With</h3>
      <ul className='tech-list'>
        <li>
          <i className='fab fa-html5 fa-3x html-icon'></i>
        </li>
        <li>
          <i className='fab fa-css3-alt fa-3x css-icon'></i>
        </li>
        <li>
          <i className='fab fa-js fa-3x js-icon'></i>
        </li>
        <li>
          <i className='fab fa-react fa-3x react-icon'></i>
        </li>
        <li>
          <i className='fab fa-node fa-3x node-icon'></i>
        </li>
        <li>
          <img className='tech-image' src={express} alt='Express' />
        </li>
        <li>
          <img className='tech-image' src={mongo} alt='MongoDb' />
        </li>
        <li>
          <i className='fab fa-github fa-3x git-icon'></i>
        </li>
        <li>
          <i className='fab fa-sass fa-3x sass-icon'></i>
        </li>
      </ul>
    </div>
  );
};

export default About;
