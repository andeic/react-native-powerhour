import React, { Component } from 'react';
import axios from 'axios';

import RootStack from '/routing';

axios.defaults.baseURL = 'https://api.scryfall.com/';

class App extends Component {
  render() {
    return <RootStack />;
  }
}

export default App;
