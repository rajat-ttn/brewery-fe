import React from 'react';
import { shallow } from 'enzyme';
import TemperatureFilter from '../temperatureFilter';

describe('Temperature Filter filters beer based on temperature correctly', () => {
    const temperatureType = 'CELSIUS';
    const event = {
        preventDefault() {},
        target: { value: 'FAHRENHEIT' }
    };
    let allProps;
    beforeEach(() => {
        allProps = {
            temperatureType: "FAHRENHEIT",
            changeTemperatureType: () => {}
        };
    });

    it('temperature select should work properly', () => {
        const wrapper = shallow(<TemperatureFilter {...allProps} />);
        expect(wrapper).toMatchSnapshot()
    });

    it('trigger Event', () => {
        const wrapper = shallow(<TemperatureFilter {...allProps} />);
        wrapper.find('select').simulate('change', event);
        expect(wrapper.find('select').props().value).toBe("FAHRENHEIT");

    });
});
