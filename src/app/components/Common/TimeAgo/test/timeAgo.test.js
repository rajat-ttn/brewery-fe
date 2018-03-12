import React from 'react';
import { shallow, mount } from 'enzyme';
import TimeAgo from '../index';
import {TimeAgoContainer} from '../index';
import {mapStateToProps } from '../index';
import { connect } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('show last temperature correctly', () => {
    const initialState = {};
    const mockStore = configureStore();
    let TimeAgoComponent;
    let store = {
        beerList: [{beerType : "Aler Beer1", containerId: 1, id: 1, currentTemperature: 6, lastUpdatedTime: '', tempRange: [4,6] }, {beerType : "Aler Beer2", containerId: 2, id: 2, currentTemperature: 3, lastUpdatedTime: '', tempRange: [4,6] }],
        beerContentDetail: {beerType : "Aler Beer", containerId: 1, id: 1, currentTemperature: 6, lastUpdatedTime: '', tempRange: [4,6] }
    };
    const beerContentDetail= {beerType : "Aler Beer", containerId: 1, id: 1, currentTemperature: 6, lastUpdatedTime: '', tempRange: [4,6] };
    const beerList= [{beerType : "Aler Beer1", containerId: 1, id: 1, currentTemperature: 6, lastUpdatedTime: '', tempRange: [4,6] }, {beerType : "Aler Beer2", containerId: 2, id: 2, currentTemperature: 3, lastUpdatedTime: '', tempRange: [4,6] }];
    const dispatch= jest.fn();

    beforeEach(() => {
        store = mockStore(initialState);
        TimeAgoComponent = shallow(<TimeAgo store={store} beerContentDetail={beerContentDetail}  />);
    });


    it('last temperature update', () => {
        expect(TimeAgoComponent).toMatchSnapshot();
    });

    it('should set state', () => {
        const TimeAgoContainerComponent = shallow(<TimeAgoContainer beerList={beerList}  beerContentDetail={beerContentDetail}  />);
        expect(TimeAgoContainerComponent.state()).toEqual({ secondsElapsed: 0 });
    });

    it('should trigger tick event', () => {
        it('clicks it', () => {
            const timeAgoContainerInstance = TimeAgoContainer.instance();
            const tick = jest.spyOn(timeAgoContainerInstance.tick, 'tick');
            expect(tick).toHaveBeenCalled();
            expect(timeAgoContainerInstance.state()).toEqual({secondsElapsed: this.state.secondsElapsed + 1});

        })
    });

});