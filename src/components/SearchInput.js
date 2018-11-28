import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  handleInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
    this.props.filterCards(this.state.searchInput);
  };

  render() {
    const { searchInput } = this.state;
    return (
      <form>
        <input
          type="text"
          name="searchInput"
          value={searchInput}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default SearchInput;
