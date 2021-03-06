import React from 'react';
import { shallow } from 'enzyme';
import kinderData from '../data/kindergartners_in_full_day_program.js';

import { CardContainer } from './CardContainer';
import DistrictRepository from '../helper.js';

describe('CardContainer', () => {
  it('should match snapshot with all html elements rendered with correct data', () => {
    const mockFunc = jest.fn();
    const repository = new DistrictRepository(kinderData);
    const wrapper = shallow(
      <CardContainer
        findAllMatches={repository.findAllMatches}
        handleCompareSelections={mockFunc}
        compareSchoolSelections={['COLORADO', 'ADAMS COUNTY 14']}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
