import React from 'react';
import { shallow } from 'enzyme';

import { CompareCard } from './CompareCard';

describe('Compare Card', () => {
  it('should match snapshot with all html elements rendered with correct data', () => {
    const mockFunc = jest.fn();
    const mockLocation = 'COLORADO';
    const mockStats = { 2012: 1, 2013: 1, 2014: 0, 2015: 0.552 };
    const wrapper = shallow(
      <CompareCard
        stats={mockStats}
        location={mockLocation}
        removeCompareSelections={mockFunc}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
