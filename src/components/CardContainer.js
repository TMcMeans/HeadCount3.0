import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './Card';

export const CardContainer = ({ findAllMatches }) => {
  const schoolData = findAllMatches();
  const schoolCards = schoolData.map(school => (
    <Card {...school} key={Math.random()} />
  ));
  return (
    <div>
      <h1>Schools</h1>
      {schoolCards}
    </div>
  );
};

CardContainer.propTypes = {
  findAllMatches: PropTypes.func.isRequired
};
