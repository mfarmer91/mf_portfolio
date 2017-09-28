import React, { Component } from 'react';
import '../styles/About.css';


const About = () => (
    <div> 
        <div id='first-card' className="ui centered card">
          <div className="left aligned content">
            <div className="header">Does Michael Farmer exist?</div>
            <div className="description">
              <p>Yes.  In fact, I'm a front-end web developer; specializing in building custom websites in ReactJS and Wordpress.</p>
            </div>
          </div>
          <div className="extra content">
            <span className="left floated like">
              <i className="like icon"></i>
              Agree
            </span>
            <span className="right floated star">
              <i className="star icon"></i>
              He's a star.
            </span>
          </div>
        </div>

        <div className="ui centered card">
          <div className="left aligned content">
            <div className="header">Can he build ME a website?</div>
            <div className="description">
              <p><i className='em em-100'></i>  percent yes.  "But I want a..." Yes, I can build that -- webstore, company website, blog, web app, portfolio -- for you.  Plus, we'll design it so you can operate the website on your own.</p>
            </div>
          </div>
          <div className="extra content">
            <span className="left floated like">
              <i className="like icon"></i>
              Agree
            </span>
            <span className="right floated star">
              <i className="star icon"></i>
              He's a star.
            </span>
          </div>
        </div>
    
         <div id='last-card' className="ui red centered card">
          <div className="left aligned content">
            <div className="header">OMG, how do I get one?</div>
            <div className="description">
              <a className='link' href='mailto: mfarmer91@gmail.com'>email: mfarmer91@gmail.com</a>
            </div>
             <div className="description">
              <a className='link' href='tel:+14343266629'>call: (434) 326-6629</a>
            </div>

          </div>
        </div>
    </div>
);

export default About;