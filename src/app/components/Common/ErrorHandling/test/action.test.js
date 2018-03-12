import * as actions from '../action';
import * as types from '../../../../../constants/actions';

describe('update error message',()=> {
    let error = 'Something went wrong',
        expectedAction = {
            type: types.default.SET_ERROR,
            payload: error
        };

    it('should set error message', () => {
        expect(actions.setErrorMessage(error)).toEqual(expectedAction);
    });

    it('should remove error message', () => {
        expectedAction.type = types.default.REMOVE_ERROR;
        delete expectedAction.payload;
        expect(actions.removeErrorMessage()).toEqual(expectedAction);
    });
});
