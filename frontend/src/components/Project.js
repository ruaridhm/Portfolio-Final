import React from 'react';
import './project.css';

const Project = ({
  title,
  subTitle,
  description,
  logo,
  image,
  webLink,
  gitLink,
}) => {
  return (
    <div className='project-container'>
      <div className='project-title-container'>
        <img className='project-logo' src={logo} alt={title}></img>
        <h1>{title}</h1>
      </div>
      <img className='project-images' src={image} alt={title} />
      <p className='project-sub-and-description'>
        {subTitle} {description}
      </p>
      <ul className='project-links'>
        <li>
          <a href={gitLink} target='_blank'>
            <i className='fab fa-github fa-3x git-icon'></i>
          </a>
        </li>
        <li>
          <a href={webLink}>
            <i className='fas fa-link fa-3x'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Project;
