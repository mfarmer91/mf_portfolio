import React, { Component } from 'react';
import '../styles/Projects.css';

class Projects extends Component {
    
    render() {
        return (
            <div>
                 <a className='link' target='_blank' href='https://github.com/mfarmer91/react-calder-site'><button id='react_button_one' className='ui basic red button' target='_blank'>  
                    <h1 className='ui left aligned medium header'> Calder Associates Inc.
                        <div className="sub header">Four-page mobile-responsive website for appraisal firm specializing in the authentication and valuation of Alexander Calder mobile and gauche works.</div>
                    </h1>
                </button></a>

                 <a className='link' target='_blank' href='https://github.com/mfarmer91/crate_inventory_pull'><button id='react_button_two' className='ui basic green button' target='_blank'>
                    <h1 className='ui left aligned medium header'> Crate & Barrel
                        <div className="sub header">App for sales associates to digitally create and send custom inventory lists to merchandising associates in back of house.</div>
                    </h1>
                </button></a>

                <a className='link' target='_blank' href='https://github.com/mfarmer91/crate_card_counteR'><button id='react_button_three' className='ui basic blue button' target='_blank'>
                    <h1 className='ui left aligned medium header'> Crate & Barrel
                        <div className="sub header">App that counts the number of Crate & Barrel credit cards opened by sales associates.</div>
                    </h1>
                </button></a>
            
                <a className='link' target='_blank' href='https://github.com/mfarmer91/eames_jquery_exhibition_arr_two'><button id='react_button_four' className='ui basic yellow button' target='_blank'>
                    <h1 className='ui left aligned medium header'> Digital Exhibition
                        <div className="sub header">No, You Sit Down: Charles and Ray Eames; an interactive (JQuery) digital exhibition.</div>
                    </h1>
                </button></a>

            
            
            </div>
        );
    }
}
export default Projects;