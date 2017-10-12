import React, { Component } from 'react';
import '../styles/VerticalMenu.css';

import {
    Link,
    Switch,
    NavLink
} from 'react-router-dom';

const VerticalMenu = () => (
    <div id='verticalmenu_ctn' className="ui left fixed inverted vertical menu">
        <div>
             <div className="ui inverted top attached segment">
                <h1 className='ui right aligned header'>Hi!<i className="em em-raised_hand"></i> I'm Michael.
                    <h4 className="tiny header">And yes, I will build your next website.</h4>
                </h1>
                <div className='container'>
                    <div id='vertical_img_card' className="ui card">
                      <div className="image">
                        <img src={require("../images/mf-head.png")} />
                      </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
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
            <NavLink to='/Blog'
                className="item">
                    Blog
            </NavLink>
            <div className='item'>
            </div>
            </div>
    </div>
);

export default VerticalMenu;