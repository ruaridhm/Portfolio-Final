import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={Hero} exact />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Footer} />
      <Footer />
    </Router>
  );
}

export default App;
