import React from 'react';
import PropTypes from 'prop-types';

import './CardContainer.css';
import { Card } from './Card';

export const CardContainer = ({ findAllMatches, handleCompareSelections }) => {
  const schoolData = findAllMatches();
  const schoolCards = schoolData.map(school => (
    <Card
      {...school}
      key={Math.random()}
      handleCompareSelections={handleCompareSelections}
    />
  ));
  return <div className="card-container">{schoolCards}</div>;
};

CardContainer.propTypes = {
  findAllMatches: PropTypes.func.isRequired
};
