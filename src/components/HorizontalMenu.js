import React, { Component } from 'react';


const HorizontalMenu = () => (
    <div id='horizontalmenu'>
        <div id='horizontalmenu_ctn' className="ui top attached segment">
            <h1 className='ui right aligned header'>Hi!<i className="em em-raised_hand"></i> I'm Michael.
              <div className="sub header">The answer is yes.  I'll happily build your next website for you.</div>
    </h1>
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