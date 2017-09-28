import React, { Component } from 'react';

import VerticalMenu from './VerticalMenu';
import HorizontalMenu from './HorizontalMenu';
import ReactJS from './ReactJS';

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
                    <Route to='/About' component={About} />
                    <Route to='/React' component={ReactJS} />
                </Switch>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
