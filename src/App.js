import React, { Component } from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';

import './App.css';
import DistrictRepository from './helper.js';
import { CardContainer } from './components/CardContainer';

const repository = new DistrictRepository(kinderData);

class App extends Component {
  constructor() {
    super();
    this.state = {
      respository: new DistrictRepository(kinderData)
    };
  }

  componentDidMount = () => {};

  render() {
    const { stats } = this.state.respository;
    return (
      <div>
        <h1>Welcome to HeadCount 3.0</h1>
        <CardContainer />
      </div>
    );
  }
}

export default App;
