import React from 'react';
import { shallow, mount } from 'enzyme';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('should match snapshot with all html elements rendered with correct data', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<SearchInput filterCards={mockFunc} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('updates state of the searchInput with user input values', () => {
    const mockFunc = jest.fn();

    const wrapper = mount(<SearchInput filterCards={mockFunc} />);

    const mockEvent = { target: { value: 'colorado', name: 'searchInput' } };

    const expectedState = {
      searchInput: 'colorado'
    };

    wrapper.instance().handleInputChange(mockEvent);

    expect(wrapper.state()).toEqual(expectedState);
  });
});
