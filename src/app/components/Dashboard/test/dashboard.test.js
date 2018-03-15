import React from 'react';
import { fetchBeerList } from '../async.action';
import { shallow } from 'enzyme';
import { updateBeerTemperature } from '../action';
import {DashboardContainer, mapStateToProps, mapDispatchToProps} from '../index';
import LoadingIndicator from '../../Common/LoadingIndicator';
import BeerList from '../../BeerList';
import Legends from '../../Common/Legends';


jest.mock('../async.action');
jest.mock('../action');

const FETCH_ACTION = Symbol('');
fetchBeerList.mockReturnValue(FETCH_ACTION);

const UPDATE_ACTION = Symbol('');
updateBeerTemperature.mockReturnValue(UPDATE_ACTION);

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
            updateTemperature: () => {}
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

        [play, pause].forEach((spy) => {
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

        [play].forEach((spy) => {
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

        [play].forEach((spy) => {
            spy.mockReset();
            spy.mockRestore();
        });
    });

    describe("rendered `LoadingIndicator Component`", () => {
        it("always renders a `LoadingIndicator Component`", () => {
            expect(dashboardContainer.find(LoadingIndicator).length).toBe(1);
        });

        it("LoadingIndicator receive 1 props", () => {
            const loader = dashboardContainer.find(LoadingIndicator);
            expect(Object.keys(loader.props()).length).toBe(1);
        });
    });

    describe("rendered `BeerList Component`", () => {
        it("always renders a `BeerList Component`", () => {
            expect(dashboardContainer.find(BeerList).length).toBe(1);
        });

        it("BeerList receive 2 props", () => {
            const beerlist = dashboardContainer.find(BeerList);
            expect(Object.keys(beerlist.props()).length).toBe(2);
        });
    });

    describe("rendered `Legends Component`", () => {
        it("always renders a `Legends Component`", () => {
            expect(dashboardContainer.find(Legends).length).toBe(1);
        });

        it("Legends receive 2 props", () => {
            const legend = dashboardContainer.find(Legends);
            expect(Object.keys(legend.props()).length).toBe(2);
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
           updateTemperature: expect.any(Function),
	   })
	});

	it('returns the result of dispatching fetchBeerList correctly', () => {
		expect(actionDispatchers.fetchBeerList()).toBe(FETCH_ACTION);
		expect(dispatch).toHaveBeenCalledWith(FETCH_ACTION);
        expect(actionDispatchers.updateTemperature()).toBe(UPDATE_ACTION);
		expect(dispatch).toHaveBeenCalledWith(UPDATE_ACTION);
	});
});





