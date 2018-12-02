import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

// export const Card = ({ location, stats, handleCompareSelections }) => {
//   const data = Object.entries(stats);

//   const dataGroup = data.map(datapoint => (
//     <li className={datapoint[1] > 0.5 ? 'green' : 'red'} key={Math.random()}>
//       {datapoint[0]}: {datapoint[1]}
//     </li>
//   ));
//   return (
//     <div
//       className="card"
//       onClick={() => {
//         handleCompareSelections(location);
//       }}
//     >
//       <h1>{location}</h1>
//       <ul>{dataGroup}</ul>
//     </div>
//   );
// };

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleClass = () => {
    const currState = this.state.active;
    this.setState({
      active: !currState
    });
    console.log(this.state.active);
  };

  render() {
    const { location, stats, handleCompareSelections } = this.props;
    const data = Object.entries(stats);
    const dataGroup = data.map(datapoint => (
      <li className={datapoint[1] > 0.5 ? 'green' : 'red'} key={Math.random()}>
        {datapoint[0]}: {datapoint[1]}
      </li>
    ));
    return (
      <div
        className={this.state.active ? 'card-active card' : 'card'}
        onClick={() => {
          this.toggleClass();
          handleCompareSelections(location);
        }}
      >
        <h1>{location}</h1>
        <ul>{dataGroup}</ul>
      </div>
    );
  }
}

export default Card;
