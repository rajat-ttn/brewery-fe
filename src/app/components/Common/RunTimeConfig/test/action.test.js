import * as actions from '../action';
import * as types from '../../../../../constants/actions';

describe('update temperature', () => {
    it('should set correct temperature', () => {
        let currentValue = "CELSIUS";
        const expectedAction = {
            type: types.default.SET_TEMPERATURE_TYPE,
            payload: currentValue
        };
        expect(actions.setTemperatureType(currentValue)).toEqual(expectedAction);
    });
    it('On trigger sound should toggle', () => {
        let isMute = false;
        const expectedAction = {
            type: types.default.TOGGLE_SOUND,
            payload: isMute
        };
        expect(actions.toggleSound(isMute)).toEqual(expectedAction);
    });
});