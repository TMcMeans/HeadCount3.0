import React from 'react';
import { shallow } from 'enzyme';
import kinderData from '../data/kindergartners_in_full_day_program.js';

import { CompareCardContainer } from './CompareCardContainer';
import DistrictRepository from '../helper.js';

describe('Compare Card Container', () => {
  it('should match snapshot with all html elements rendered with correct data', () => {
    const repository = new DistrictRepository(kinderData);
    const mockCompareSelections = ['ADAMS COUNTY 14', 'COLORADO'];
    const mockFunc = jest.fn();
    const wrapper = shallow(
      <CompareCardContainer
        compareDistrictAverages={repository.compareDistrictAverages}
        compareSchoolSelections={mockCompareSelections}
        findAllMatches={repository.findAllMatches}
        removeCompareSelections={mockFunc}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
