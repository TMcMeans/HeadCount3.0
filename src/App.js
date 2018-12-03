import React, { Component } from 'react';
import kinderData from './data/kindergartners_in_full_day_program.js';

import './App.css';
import DistrictRepository from './helper.js';
import { CardContainer } from './components/CardContainer';
import SearchInput from './components/SearchInput';

import { CompareCardContainer } from './components/CompareCardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repository: new DistrictRepository(kinderData),
      inputSearchName: '',
      compareSchoolSelections: []
    };
  }

  filterCards = inputSearchName => {
    this.setState({ inputSearchName });
  };

  handleCompareSelections = schoolName => {
    const { compareSchoolSelections } = this.state;
    if (compareSchoolSelections.length < 2) {
      this.setState({
        compareSchoolSelections: [schoolName, ...compareSchoolSelections]
      });
    } else {
      this.setState({
        compareSchoolSelections: [schoolName]
      });
    }
  };

  removeCompareSelections = schoolName => {
    const { compareSchoolSelections } = this.state;
    if (compareSchoolSelections.includes(schoolName)) {
      this.setState({
        compareSchoolSelections: compareSchoolSelections.filter(
          school => school !== schoolName
        )
      });
    }
  };

  render() {
    const { findAllMatches, compareDistrictAverages } = this.state.repository;
    const { inputSearchName, compareSchoolSelections } = this.state;

    if (inputSearchName.length > 1) {
      return (
        <div>
          <hr />
          <div className="header">
            <h1 className="title">HeadCount 3.0</h1>
            <p className="heading">
              Search for a school district or compare two school districts by
              clicking on them
            </p>
            <SearchInput filterCards={this.filterCards} />
          </div>
          <CompareCardContainer
            compareDistrictAverages={compareDistrictAverages}
            compareSchoolSelections={compareSchoolSelections}
            findAllMatches={findAllMatches}
            removeCompareSelections={this.removeCompareSelections}
          />
          <CardContainer
            findAllMatches={() => findAllMatches(inputSearchName)}
            handleCompareSelections={this.handleCompareSelections}
            compareSchoolSelections={compareSchoolSelections}
          />
        </div>
      );
    } else {
      return (
        <div>
          <hr />
          <div className="header">
            <h1 className="title">HeadCount 3.0</h1>
            <p className="heading">
              Search for a school district or compare two school districts by
              clicking on them
            </p>
            <SearchInput filterCards={this.filterCards} />
          </div>
          <CompareCardContainer
            compareDistrictAverages={compareDistrictAverages}
            compareSchoolSelections={compareSchoolSelections}
            findAllMatches={findAllMatches}
            removeCompareSelections={this.removeCompareSelections}
          />
          <CardContainer
            findAllMatches={findAllMatches}
            handleCompareSelections={this.handleCompareSelections}
            compareSchoolSelections={compareSchoolSelections}
          />
        </div>
      );
    }
  }
}

export default App;
