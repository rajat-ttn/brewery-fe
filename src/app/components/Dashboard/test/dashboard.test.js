import React from 'react';
import { fetchBeerList } from '../async.action';
import { shallow } from 'enzyme';
import { setTemperatureType, toggleSound } from '../../Common/RunTimeConfig/action';
import {DashboardContainer, mapStateToProps, mapDispatchToProps} from '../index';


jest.mock('../async.action');
jest.mock('../../Common/RunTimeConfig/action');

const FETCH_ACTION = Symbol('');
fetchBeerList.mockReturnValue(FETCH_ACTION);

const TEMP_ACTION = Symbol('');
setTemperatureType.mockReturnValue(TEMP_ACTION);

const TOGGLE_ACTION = Symbol('');
toggleSound.mockReturnValue(TOGGLE_ACTION);

describe('BeerComponent component renders the BeerComponent correctly', () => {
	let allProps,
		dashboardContainer;

	beforeEach(() => {
		allProps = {
			beerList: [{beerType : "Aler Beer", containerId: 1, id: 1, tempRange: [3,5]}],
			temperatureType: "FAHRENHEIT",
			isMute: 'false',
			isAnyBeerOutOfTempRange: 'false',
			fetchBeerList: () => {},
			toggleSound: () => {},
			setTemperatureType: () => {}
		};
		dashboardContainer = shallow(<DashboardContainer {...allProps}  />);
	});


	it('should have audio event', () => {
		expect(dashboardContainer.instance().AudioEndEvent).toBeDefined();
	});

	it('should have audio event', () => {
		expect(dashboardContainer.instance().state.audio).not.toBeNull();
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

	it('renders correctly with sound', () => {
		allProps.isMute = "true";
		expect(dashboardContainer).toMatchSnapshot();
	});

	it('renders correctly with change in temperature', () => {
		allProps.isAnyBeerOutOfTempRange = "true";
		expect(dashboardContainer).toMatchSnapshot();
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
		   fetchBeerList: expect.any(Function),
		   setTemperatureType: expect.any(Function),
		   toggleSound: expect.any(Function),
	   })
	});

	it('returns the result of dispatching fetchBeerList correctly', () => {
		expect(actionDispatchers.fetchBeerList()).toBe(FETCH_ACTION);
		expect(dispatch).toHaveBeenCalledWith(FETCH_ACTION);
		expect(actionDispatchers.setTemperatureType()).toBe(TEMP_ACTION);
		expect(dispatch).toHaveBeenCalledWith(TEMP_ACTION);
		expect(actionDispatchers.toggleSound()).toBe(TOGGLE_ACTION);
		expect(dispatch).toHaveBeenCalledWith(TOGGLE_ACTION);
	});
});





