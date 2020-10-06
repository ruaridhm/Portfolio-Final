import React from 'react';
import Project from './Project';
import './projects.css';
import vinylLibrary from '../images//vinylLibrary/vinylLibrary.png';
import vinylLibrary01 from '../images/vinylLibrary/vinylLib01.png';
import vinylLibrary02 from '../images/vinylLibrary/vinylLib02.png';
import fb2yt from '../images/fb2yt.png';

const Projects = () => {
  return (
    <div className='projects-container'>
      <Project
        title='Vinyl Library'
        subTitle='A full stack CRUD app built using MongoDb, Express, React and Node.'
        description='Built for Vinyl enthusiasts to Store, Search, Sort and Explore their physical record library without digging through crates of records.'
        logo={vinylLibrary}
        image={vinylLibrary01}
        webLink='/'
        gitLink='https://github.com/ruaridhm/vinyl-library'
      />
      <Project
        title='Facebook Group Youtube Playlist Maker'
        subTitle='Scrape Youtube video urls from a Facebook Group Page and add them to a Youtube playlist'
        description='Simply input the Facebook Group URL and name your new Youtube playlist and let the app do the rest. Created using React with Facebook and Youtube Oauth 2.0 as well as Graph api and Youtube Data Api  ** As of 2019 Facebook requires you to be a group administrator to retrieve data from a group**'
        logo={fb2yt}
        image=''
        webLink=''
        gitLink=''
      />
    </div>
  );
};

export default Projects;
