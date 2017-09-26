import React, { Component } from 'react';

import VerticalMenu from './VerticalMenu';
import Seed from './Seed';
import '../App.css';

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
        <VerticalMenu />
      </div>
    );
  }
}

export default App;
