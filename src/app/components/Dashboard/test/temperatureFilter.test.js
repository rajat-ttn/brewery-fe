import React from 'react';
import { shallow } from 'enzyme';
import TemperatureFilter from '../temperatureFilter';

describe('Temperature Filter filters beer based on temperature correctly', () => {
    let allProps,
        temperatureFilter;
    const temperatureType = 'CELSIUS';
    const event = {
        preventDefault() {},
        target: { value: 'FAHRENHEIT' }
    };
    beforeEach(() => {
        allProps = {
            temperatureType: "FAHRENHEIT",
            changeTemperatureType: () => {}
        };
        temperatureFilter = shallow(<TemperatureFilter {...allProps} />);
    });

    it('temperature select should work properly', () => {
        expect(temperatureFilter).toMatchSnapshot()
    });

    it('trigger Event', () => {
        temperatureFilter.find('select').simulate('change', event);
        expect(temperatureFilter.find('select').props().value).toBe("FAHRENHEIT");
    });
});
