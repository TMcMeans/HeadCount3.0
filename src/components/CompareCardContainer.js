import React from 'react';

import { Card } from './Card';

export const CompareCardContainer = ({
  compareDistrictAverages,
  compareSchoolSelections,
  findAllMatches
}) => {
  if (compareSchoolSelections.length === 1) {
    const schoolData = findAllMatches(compareSchoolSelections[0]);
    return (
      <div className="compare-container">
        <h1>Comparison Area</h1>
        <Card
          location={schoolData[0].location}
          stats={schoolData[0].stats}
          key={Math.random()}
          //ADD CLASSNAME TO DELETE CARD ONCE CLICKED AGAIN
        />
      </div>
    );
  } else if (compareSchoolSelections.length > 1) {
    const schoolData1 = findAllMatches(compareSchoolSelections[0]);
    const schoolData2 = findAllMatches(compareSchoolSelections[1]);
    return (
      <div className="compare-container">
        <h1>Comparison Area</h1>
      </div>
    );
  } else {
    return (
      <div className="compare-container">
        <h1>Comparison Area</h1>
      </div>
    );
  }
};
