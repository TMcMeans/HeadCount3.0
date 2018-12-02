import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

import kinderData from './data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js';

describe('App', () => {
  it('should match snapshot with all html elements rendered correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state with district repository data and properties when App is mounted', () => {
    const wrapper = shallow(<App />);
    const repository = new DistrictRepository(kinderData);
    const expectedState = {
      repository: new DistrictRepository(kinderData),
      inputSearchName: '',
      compareSchoolSelections: []
    };

    // expect(wrapper.state()).toEqual(expectedState);
    expect(wrapper.state().equals(expectedState)).toBe(true);
  });

  it('should update state with inputSearchName when filterCards is called', () => {
    const mockInputName = 'colorado';
    const wrapper = mount(<App />);

    wrapper.instance().filterCards(mockInputName);
    expect(wrapper.state('inputSearchName')).toEqual(mockInputName);
  });

  it('should update state to add school names to compareSchoolSelections array when handleCompareSelections is called', () => {
    const wrapper = mount(<App />);
    const school1 = 'COLORADO';
    const school2 = 'ADAMS COUNTY 14';

    const mockCompareSelections = ['ADAMS COUNTY 14', 'COLORADO'];

    wrapper.instance().handleCompareSelections(school1);
    wrapper.instance().handleCompareSelections(school2);

    expect(wrapper.state('compareSchoolSelections')).toEqual([
      'ADAMS COUNTY 14',
      'COLORADO'
    ]);
  });

  it('should remove an added schoolName from state once removeCompraredSelections is called', () => {
    const wrapper = mount(<App />);
    const school1 = 'COLORADO';
    const school2 = 'ADAMS COUNTY 14';

    const mockCompareSelections = ['ADAMS COUNTY 14', 'COLORADO'];

    wrapper.instance().handleCompareSelections(school1);
    wrapper.instance().handleCompareSelections(school2);

    wrapper.instance().removeCompareSelections('ADAMS COUNTY 14');

    expect(wrapper.state('compareSchoolSelections')).toEqual(['COLORADO']);
  });
});
