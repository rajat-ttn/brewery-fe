import React from 'react';
import renderer from 'react-test-renderer';
import { shallow} from 'enzyme';
import TemperatureFilter from '../temperatureFilter';



describe('Temperature Filter filters beer based on temperature correctly', () => {
    const onSearchMock = jest.fn();
    const temperatureType = 'CELSIUS';
    const event = {
        preventDefault() {},
        target: { value: 'Fahrenheit' }
    };

    it('temperature select should work properly', () => {
        const wrapper = shallow(<TemperatureFilter temperatureType={temperatureType} changeTemperatureType={onSearchMock} />);
        wrapper.find('select').simulate('change', event);
        expect(onSearchMock).toBeCalled();
        expect(wrapper).toMatchSnapshot()
    });
});
