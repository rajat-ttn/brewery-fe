import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { setTemperatureType, toggleSound } from '../../../Common/RunTimeConfig/action';
import {HeaderContainer, mapStateToProps, mapDispatchToProps} from '../index';
import TemperatureFilter from '../temperatureFilter';

jest.mock('../../../Common/RunTimeConfig/action');

const TEMP_ACTION = Symbol('');
setTemperatureType.mockReturnValue(TEMP_ACTION);

const TOGGLE_ACTION = Symbol('');
toggleSound.mockReturnValue(TOGGLE_ACTION);

describe('Header Component Should render correctly', () => {
    let allProps, header;

    beforeEach(()=> {
        allProps = {
            temperatureType: "FAHRENHEIT",
            isMute: false,
            toggleSound: () => {},
            setTemperatureType: () => {},
        };
        header = shallow(<HeaderContainer {...allProps} />);
    });

    it('render the Header component', () => {
        expect(header.length).toEqual(1)
    });

    describe("rendered `TemperatureFilter`", () => {
        it("always renders a `TemperatureFilter`", () => {
            expect(header.find(TemperatureFilter).length).toBe(1);
        });

        it("TemperatureFilter receive 2 props", () => {
            const tempFilter = header.find(TemperatureFilter);
            expect(Object.keys(tempFilter.props()).length).toBe(2);
        });
    });
    
    it('renders correctly', () => {
        const HeaderComponent = renderer.create(
            <HeaderContainer {...allProps} />
        );
        expect(HeaderComponent.toJSON()).toMatchSnapshot();
    });
});

describe('mapStateToProps ', () => {
    it('should render correct object', () => {
        expect(mapStateToProps).toBeDefined();
    });
});

describe('mapDispatchToProps', () => {
    const dispatch = jest.fn().mockImplementation(x => x);
    const actionDispatchers = mapDispatchToProps(dispatch);

    it('should render the correct list of methods', () => {
        expect(mapDispatchToProps()).toEqual({
            setTemperatureType: expect.any(Function),
            toggleSound: expect.any(Function),
        })
    });

    it('returns the result of dispatching fetchBeerList correctly', () => {
        expect(actionDispatchers.setTemperatureType()).toBe(TEMP_ACTION);
        expect(dispatch).toHaveBeenCalledWith(TEMP_ACTION);
        expect(actionDispatchers.toggleSound()).toBe(TOGGLE_ACTION);
        expect(dispatch).toHaveBeenCalledWith(TOGGLE_ACTION);
    });
});
