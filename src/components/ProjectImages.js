import React, { Component } from 'react';

const ProjectImages = () => (

      <div className='container'>
          <div id='visuals_header'>
            <h1 className='v-header top-v-header'>Visuals*</h1>
            <h5 className='v-header'>*Proceed with caution if you are unable to handle mobile-responsive, dynamic, user-friendly websites.</h5>
          </div>
        <div id='img-1' className="ui card">
          <div className="image">
            <img src={require("../images/calder-1.png")} />
          </div>
        </div>
      </div>


    <div className='container'>
        <div id='img-2' className="ui card">
          <div className="image">
            <img src={require("../images/calder-2.png")} />
          </div>
        </div>
      </div>

    <div className='container'>
        <div id='img-3' className="ui card">
          <div className="image">
            <img src={require("../images/calder-3.png")} />
          </div>
        </div>
      </div>

    <div className='container'>
        <div id='img-4' className="ui card">
          <div className="image">
            <img src={require("../images/calder-4.png")} />
          </div>
        </div>
      </div>
    </div>
    
);

export default ProjectImages;
