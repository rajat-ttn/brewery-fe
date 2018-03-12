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

describe('Dashboard component should render correctly', () => {
	let allProps,
		dashboardContainer;

	beforeEach(() => {
		allProps = {
			beerList: [{beerType : "Aler Beer", containerId: 1, id: 1, tempRange: [3,5]}],
			temperatureType: "FAHRENHEIT",
			isMute: false,
			isAnyBeerOutOfTempRange: false,
			fetchBeerList: () => new Promise((resolve, reject)=>{}),
			toggleSound: () => {},
			setTemperatureType: () => {}
		};
		dashboardContainer = shallow(<DashboardContainer {...allProps}  />);
	});


	it('should have audio event', () => {
		expect(dashboardContainer.instance().attachAudioEvents).toBeDefined();
	});

	it('should have audio instance', () => {
		expect(dashboardContainer.instance().audio).not.toBeNull();
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

    it('audio should not play on mute', () => {

    	const dashboardContainerInstance = dashboardContainer.instance();

        const play = jest.spyOn(dashboardContainerInstance.audio, 'play');
        const pause = jest.spyOn(dashboardContainerInstance.audio, 'pause');
        dashboardContainerInstance.componentWillReceiveProps({
            isMute:true,
            isAnyBeerOutOfTempRange:true
		});

        expect(play).not.toHaveBeenCalled();
        expect(pause).toHaveBeenCalled();

        [play, pause].forEach((spy)=>{
        	spy.mockReset();
            spy.mockRestore();
        });
    });

    it('audio should play if not on mute & Beer temperature is out of range', () => {

        const dashboardContainerInstance = dashboardContainer.instance();

        const play = jest.spyOn(dashboardContainerInstance.audio, 'play');
        const pause = jest.spyOn(dashboardContainerInstance.audio, 'pause');
        dashboardContainerInstance.componentWillReceiveProps({
            isMute:false,
            isAnyBeerOutOfTempRange:true
        });

        expect(play).toHaveBeenCalled();
        expect(pause).not.toHaveBeenCalled();

        [play, pause].forEach((spy)=>{
            spy.mockReset();
            spy.mockRestore();
        });
    });

    it('audio should not play if Beer temperature is in range', () => {

        const dashboardContainerInstance = dashboardContainer.instance();

        const play = jest.spyOn(dashboardContainerInstance.audio, 'play');
        const pause = jest.spyOn(dashboardContainerInstance.audio, 'pause');
        dashboardContainerInstance.componentWillReceiveProps({
            isMute:true,
            isAnyBeerOutOfTempRange:false
        });

        expect(play).not.toHaveBeenCalled();
        expect(pause).toHaveBeenCalled();

        [play, pause].forEach((spy)=>{
            spy.mockReset();
            spy.mockRestore();
        });
    });

    it('audio should restart on ending if beerTemperature is out of Range & sound is enabled', () => {

        dashboardContainer = shallow(<DashboardContainer {...allProps } isAnyBeerOutOfTempRange = {true} isMute={false}  />);

        const dashboardContainerInstance = dashboardContainer.instance();

        const play = jest.spyOn(dashboardContainerInstance.audio, 'play');

        dashboardContainerInstance.audio.onended();

        expect(play).toHaveBeenCalled();

        [play].forEach((spy)=>{
            spy.mockReset();
            spy.mockRestore();
        });
    });

    it('audio should not restart on ending if beerTemperature is in Range', () => {

        dashboardContainer = shallow(<DashboardContainer { ...allProps }  isAnyBeerOutOfTempRange = {false} isMute={false} />);

        const dashboardContainerInstance = dashboardContainer.instance();
        const play = jest.spyOn(dashboardContainerInstance.audio, 'play');

        dashboardContainerInstance.audio.onended();

        expect(play).not.toHaveBeenCalled();

        [play].forEach((spy)=>{
            spy.mockReset();
            spy.mockRestore();
        });
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





