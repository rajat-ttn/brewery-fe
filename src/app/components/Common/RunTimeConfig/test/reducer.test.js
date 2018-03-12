import ACTION from '../../../../../constants/actions';
import configReducer from '../reducer';

describe('testing config reducer', () => {

    let initialState = {
        temperatureType: 'CELSIUS',
        isMute: false,
    };

    let action = {
        type: null,
        payload: null
    };

    it('SET_TEMPERATURE_TYPE action should update reducer state', () => {
        action.type = ACTION.SET_TEMPERATURE_TYPE;
        action.payload = 'FAHRENHEIT';
        let changedState = configReducer(initialState, action);
        expect(changedState.temperatureType).toEqual(action.payload);
    });

    it('TOGGLE_SOUND action should update reducer state', () => {
        action.type = ACTION.TOGGLE_SOUND;
        action.payload = true;
        let changedState = configReducer(initialState, action);
        expect(changedState.isMute).toEqual(action.payload);
    });

    it('null action should return state without changing it', () => {
        action.type = null;
        action.payload = null;
        let changedState = configReducer(initialState, action);
        expect(changedState).toEqual(initialState);
    });

});
