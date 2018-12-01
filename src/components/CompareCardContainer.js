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
        <Card
          location={schoolData[0].location}
          stats={schoolData[0].stats}
          key={Math.random()}
        />
      </div>
    );
  } else if (compareSchoolSelections.length === 2) {
    const schoolData1 = findAllMatches(compareSchoolSelections[0]);
    const schoolData2 = findAllMatches(compareSchoolSelections[1]);
    return (
      <div className="compare-container">
        <Card
          location={schoolData1[0].location}
          stats={schoolData1[0].stats}
          key={Math.random()}
        />
        <Card
          location={schoolData2[0].location}
          stats={schoolData2[0].stats}
          key={Math.random()}
        />
      </div>
    );
  } else {
    return <div className="compare-container" />;
  }
};
