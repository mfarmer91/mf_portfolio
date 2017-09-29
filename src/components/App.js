import React, { Component } from 'react';

import VerticalMenu from './VerticalMenu';
import HorizontalMenu from './HorizontalMenu';
import Projects from './Projects';

import Seed from './Seed';
import About from './About';
import '../styles/App.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink
} from 'react-router-dom'

import createHistory from 'history/createBrowserHistory';

const history = createHistory();


class App extends Component {
    
    state = {
        images: [],
    };

  componentDidMount() {
    this.setState({ images: Seed.images });
  }

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
                    <Route render={({location}) => (
                    <div className='ui segment'><h3>I like your style.  You went beyond the norm, like me.  However, <code>{location.pathname}</code> path does not exist.</h3></div>
                    )} />
                </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
