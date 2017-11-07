import React, { Component } from 'react';
import './VerticalMenu.css';

import {
    Link,
    Switch,
    NavLink
} from 'react-router-dom';

const VerticalMenu = () => (
    <div id='verticalmenu_ctn' className="ui left fixed inverted vertical menu">
        <div>
             <div className="ui inverted top attached segment">
                <h1 id='vertical_header' className='ui right aligned header'>Michael Farmer
                    <h4 id='vertical_sub_header' className="tiny header">front-end web developer</h4>
                </h1>
                <div className='container'>
                    <div id='vertical_img_card' className="ui card">
                      <div className="image">
                        <img src={require("./mf-head.png")} />
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
            <div className='item'>
            </div>
            </div>
    </div>
);

export default VerticalMenu;