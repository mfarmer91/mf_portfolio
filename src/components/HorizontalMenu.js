import React, { Component } from 'react';


const HorizontalMenu = () => (
    <div id='horizontalmenu'>
        <div id='horizontalmenu_ctn' className="ui top attached segment">
            <h1 className='ui right aligned header'>Hi!<i className="em em-raised_hand"></i> I'm Michael.
                <div className="sub header">And yes, I will build your next website.</div>
            </h1>
            <div className='container'>
                <div id='vertical-text' className='description'>mfarmer91@gmail.com<i id='arrow' className="em em-arrow_left"></i></div>
                <div id='img_card' className="ui card">
                  <div className="image">
                    <img src={require("../images/mf-head.png")} />
                  </div>
                </div>
            </div>

        </div>
        <div className="ui bottom attached tabular menu">
          <a className="active item">
            Active Project
          </a>
          <a className="item">
            Project #2
          </a>
          <a className="item">
            Project #3
          </a>
        </div>
    </div>
);

export default HorizontalMenu;