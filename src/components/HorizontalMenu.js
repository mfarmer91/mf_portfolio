import React, { Component } from 'react';

import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Blog from './Blog';

import {
    Link,
    Switch,
    NavLink
} from 'react-router-dom';

const HorizontalMenu = () => (
    <div id='horizontalmenu'>
        <div id='horizontalmenu_ctn' className="ui top attached segment">
            <h1 className='ui right aligned header'>Michael Farmer
                <div className="sub header">front-end web developer</div>
            </h1>
            <div className='container'>
                <div id='vertical-text' className='description'> <a id='vertical-text-link' href='mailto: mfarmer91@gmail.com'>mfarmer91@gmail.com<i id='arrow' className="em em-arrow_left"></i></a></div>
                <div id='img_card' className="ui card">
                  <div className="image">
                    <img src={require("../images/mf-head.png")} />
                  </div>
                </div>
            </div>

        </div>
        <div className="ui bottom attached tabular menu">
           <NavLink to='/About'
                className='item'>
                    About
            </NavLink>
            <NavLink to='/Projects'
                className="item">
                    Projects
            </NavLink>
            <NavLink to='/Resume'
                className="item">
                    Resume
            </NavLink>
        </div>
    </div>
);

export default HorizontalMenu;