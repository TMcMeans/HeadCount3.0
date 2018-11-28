import React from 'react';
import { shallow } from 'enzyme';

import { Card } from './Card';

describe('Card', () => {
  it('should match snapshot with all html elements rendered with correct data', () => {
    const mockLocation = 'COLORADO';
    const mockStats = { 2012: 1, 2013: 1, 2014: 0, 2015: 0.552 };
    const wrapper = shallow(<Card location={mockLocation} stats={mockStats} />);

    expect(wrapper).toMatchSnapshot();
  });
});
