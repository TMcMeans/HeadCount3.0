import React, { Component } from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';

import './App.css';
import DistrictRepository from './helper.js';
import { CardContainer } from './components/CardContainer';
import SearchInput from './components/SearchInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repository: new DistrictRepository(kinderData),
      inputSearchName: ''
    };
  }

  filterCards = inputSearchName => {
    console.log(inputSearchName);
    this.setState({ inputSearchName });
  };

  render() {
    const { findAllMatches } = this.state.repository;
    return (
      <div>
        <h1>Welcome to HeadCount 3.0</h1>
        <SearchInput filterCards={this.filterCards} />
        <CardContainer findAllMatches={findAllMatches} />
      </div>
    );
  }
}

export default App;
