import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner.js';
import About from './components/About.js';
import Project from './components/Project.js';
import Carousel from './components/Carousel.js';
import Contact from './components/Contact';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Banner />
    <About />
    <Project />
    <Carousel/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
