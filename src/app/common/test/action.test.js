import * as actions from '../action';
import * as types from '../../../constants/actions';

describe('update temperature', () => {
    it('should update beer temperature', () => {
        const data = 20;
        const expectedAction = {
            type: types.default.UPDATE_CONTAINER_TEMPERATURE,
            payload: data
        };
        expect(actions.updateBeerTemperature(data)).toEqual(expectedAction);
    });
});