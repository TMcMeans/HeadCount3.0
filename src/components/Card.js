import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

export const Card = ({
  location,
  stats,
  handleCompareSelections,
  className
}) => {
  const data = Object.entries(stats);
  const dataGroup = data.map(datapoint => (
    <li className={datapoint[1] > 0.5 ? 'green' : 'red'} key={Math.random()}>
      {datapoint[0]}: {datapoint[1]}
    </li>
  ));
  return (
    <div
      className={className || 'card'}
      onClick={() => {
        handleCompareSelections(location);
      }}
    >
      <h1>{location}</h1>
      <ul>{dataGroup}</ul>
    </div>
  );
};

Card.propTypes = {
  handleCompareSelections: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};
