import React, { Component } from 'react';
import './App.css';

import GNotesContainer from './components/g-notes';

class App extends Component {
  render() {
    return (
      <div>
        <header>
			G Notes
        </header>
		<GNotesContainer />
      </div>
    );
  }
}

export default App;
