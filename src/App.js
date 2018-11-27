import React, { Component } from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';

import './App.css';
import DistrictRepository from './helper.js';
import { CardContainer } from './components/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repository: new DistrictRepository(kinderData)
    };
  }

  componentDidMount = () => {};

  render() {
    const { findAllMatches } = this.state.repository;
    return (
      <div>
        <h1>Welcome to HeadCount 3.0</h1>
        <CardContainer findAllMatches={findAllMatches} />
      </div>
    );
  }
}

export default App;
