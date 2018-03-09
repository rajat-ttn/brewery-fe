import React from 'react';
import { fetchBeerList } from '../async.action';
import { shallow } from 'enzyme';
import { setTemperatureType } from '../../Common/RunTimeConfig/action';
import {DashboardContainer, mapStateToProps, mapDispatchToProps} from '../index';


jest.mock('../async.action');
const FETCH_ACTION = Symbol('');
fetchBeerList.mockReturnValue(FETCH_ACTION);


describe('BeerComponent component renders the BeerComponent correctly', () => {
    let allProps,
        dashboardContainer;

    beforeEach(() => {
        allProps = {
            beerList: [{beerType : "Aler Beer", containerId: 1, id: 1, tempRange: [3,5]}],
            temperatureType: "FAHRENHEIT",
            fetchBeerList: () => {},
            setTemperatureType: () => {}
        };
        dashboardContainer = shallow(<DashboardContainer {...allProps}  />);
    });


    it('renders correctly with beer detail and temperature', () => {
        expect(dashboardContainer).toMatchSnapshot();
    });

    it('renders correctly without beerList', () => {
        allProps.beerList = [];
        expect(dashboardContainer).toMatchSnapshot();
    });

    it('renders correctly with different temperature', () => {
        allProps.temperatureType = "CELSIUS";
        expect(dashboardContainer).toMatchSnapshot();
    });
});

describe('mapStateToProps ', () => {
    const state = {
        beerList: [{beerType : "Aler Beer", containerId: 1, id: 1, tempRange: [3,5]}],
        temperatureType: {
            temperatureType: 'CELSIUS',
        }
    };

    it('should render correct object', () => {
        expect(mapStateToProps(state)).toEqual({
            beerList: state.beerList,
            temperatureType: state.temperatureType.temperatureType,
        });
    });
});

describe('mapDispatchToProps', () => {
    const dispatch = jest.fn().mockImplementation(x => x);
    const actionDispatchers = mapDispatchToProps(dispatch);

    it('should render the correct list of methods', () => {
       expect(mapDispatchToProps()).toEqual({
           fetchBeerList: expect.any(Function),
           setTemperatureType: expect.any(Function)
       })
    });

    it('returns the result of dispatching fetchBeerList correctly', () => {
        expect(actionDispatchers.fetchBeerList()).toBe(FETCH_ACTION);
        expect(dispatch).toHaveBeenCalledWith(FETCH_ACTION);
    });
});





