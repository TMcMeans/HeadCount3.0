import React from 'react';
import PropTypes from 'prop-types';

export const CompareCard = ({ location, stats, removeCompareSelections }) => {
  const data = Object.entries(stats);

  const dataGroup = data.map(datapoint => (
    <li className={datapoint[1] > 0.5 ? 'green' : 'red'} key={Math.random()}>
      {datapoint[0]}: {datapoint[1]}
    </li>
  ));
  return (
    <div
      className="compare-card"
      onClick={() => {
        removeCompareSelections(location);
      }}
    >
      <h1>{location}</h1>
      <ul>{dataGroup}</ul>
    </div>
  );
};
