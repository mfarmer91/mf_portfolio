import React, { Component } from 'react';

import VerticalMenu from './VerticalMenu';
import HorizontalMenu from './HorizontalMenu';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink
} from 'react-router-dom'

import '../styles/App.css';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends Component {
    render() { 
        return (
            <div className="App">
        <Router>
            <div>
                <HorizontalMenu />
                <VerticalMenu />
                    <Switch>
                        <Route path='/About' component={About} />
                        <Route path='/Projects' component={Projects} />
                        <Route path='/Resume' component={Resume} />
                                <Route exact={true} path ='/' component={About} />
                                <Route render={({location}) => (
                                <div className='ui segment'><h3>I like your style.  You went beyond the norm, like me.  However, the <code>{location.pathname}</code> path does not exist.</h3></div>
                                )} />
                            </Switch>
                        </div>
                    </Router>
            </div>
        );
    }
}

export default App;


