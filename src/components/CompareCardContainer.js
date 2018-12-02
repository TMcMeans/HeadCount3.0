import React from 'react';

import { Card } from './Card';
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
    return (
      <div className="compare-container">
        <CompareCard
          className="compare-card"
          location={schoolData1[0].location}
          stats={schoolData1[0].stats}
          key={Math.random()}
          removeCompareSelections={removeCompareSelections}
        />
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
    return <div className="compare-container" />;
  }
};
