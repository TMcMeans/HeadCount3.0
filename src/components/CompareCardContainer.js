import React from 'react';
import './CompareCardContainer.css';
import './CompareCard.css';

import { CompareCard } from './CompareCard';

export const CompareCardContainer = ({
  compareDistrictAverages,
  compareSchoolSelections,
  findAllMatches,
  removeCompareSelections
}) => {
  if (compareSchoolSelections.length === 1) {
    const schoolData = findAllMatches(compareSchoolSelections[0]);
    return (
      <div className="compare-container">
        <CompareCard
          className="compare-card"
          location={schoolData[0].location}
          stats={schoolData[0].stats}
          key={Math.random()}
          removeCompareSelections={removeCompareSelections}
        />
      </div>
    );
  } else if (compareSchoolSelections.length === 2) {
    const schoolData1 = findAllMatches(compareSchoolSelections[0]);
    const schoolData2 = findAllMatches(compareSchoolSelections[1]);
    const comparedData = compareDistrictAverages(
      compareSchoolSelections[0],
      compareSchoolSelections[1]
    );
    const comparedDataEntries = Object.entries(comparedData);
    if (comparedDataEntries.length > 2) {
      return (
        <div className="compare-container">
          <CompareCard
            className="compare-card"
            location={schoolData1[0].location}
            stats={schoolData1[0].stats}
            key={Math.random()}
            removeCompareSelections={removeCompareSelections}
          />
          <div className="comparison-section">
            <h1>COMPARE AVERAGES</h1>
            <h1>
              {comparedDataEntries[0][0]}: {comparedDataEntries[0][1]}
            </h1>
            <h1>
              COMPARED: <br />
              ---- {comparedDataEntries[2][1]} ----
            </h1>
            <h1>
              {comparedDataEntries[1][0]}: {comparedDataEntries[1][1]}
            </h1>
          </div>
          <CompareCard
            className="compare-card"
            location={schoolData2[0].location}
            stats={schoolData2[0].stats}
            key={Math.random()}
            removeCompareSelections={removeCompareSelections}
          />
        </div>
      );
    } else {
      return (
        <div className="compare-container">
          <h1>
            You must select two DIFFERENT school cards to compare averages.
          </h1>
        </div>
      );
    }
  } else {
    return <div className="compare-container" />;
  }
};
