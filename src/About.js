import React, { Component } from 'react';
import './About.css';


const About = () => (
    <div id='card_ctn'> 
        <h1 id='about_header' className='ui center aligned header'>About</h1>
        <div id='first-card' className="ui centered card">
          <div className="left aligned content">
            <div id='about-header-middle' className="header">Does Michael Farmer exist?</div>
            <div id='about-description-top' className="description">
              <p>Yes.  In fact, I'm a front-end web developer; specializing in building custom websites in ReactJS and Wordpress.</p>
            </div>
          </div>
        </div>

        <div id='middle-card' className="ui centered card">
          <div className="left aligned content">
            <div id='about-header-middle' className="header">Can he build ME a website?</div>
            <div id='about-description-middle' className="description">
              <p><i className='em em-100'></i>  percent yes.  "But I want a..." Yes, I can build that -- webstore, company website, blog, web app, portfolio -- for you.  Plus, we'll design it so you can operate the website on your own.</p>
            </div>
          </div>
        </div>
    
         <div id='last-card' className="ui red centered card">
          <div className="left aligned content">
            <div id='about-header-bottom' className="header">OMG, how do I get one?</div>
            <div id='about-description-bottom' className="description">
              <a className='link' href='mailto: mfarmer91@gmail.com'>email: mfarmer91@gmail.com</a>
            </div>
             <div id='about-description-tel' className="description">
              <a className='link' href='tel:+14343266629'>call: (434) 326-6629</a>
            </div>

          </div>
        </div>
    </div>
);

export default About;