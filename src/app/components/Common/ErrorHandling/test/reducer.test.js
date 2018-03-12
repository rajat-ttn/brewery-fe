import ACTION from '../../../../../constants/actions';
import errorHandlingReducer from '../reducer';

describe('testing config reducer', ()=> {

    const initialState = {
        error: {
            type: '',
            errorMsg: ''
        },
    };

    let action = {
        type: null,
        payload: null
    };

    it('SET_ERROR action should set error in reducer state', () => {
        action.type = ACTION.SET_ERROR;
        action.payload = {
            error: {
                type: 'any_error_type',
                errorMsg: 'any_error_msg'
            }
        };
        let changedState = errorHandlingReducer(initialState, action);
        expect(changedState.error.type).toEqual(action.payload.type);
        expect(changedState.error.errorMsg).toEqual(action.payload.errorMsg);
    });

    it('REMOVE_ERROR action should remove error from reducer state', () => {
        action.type = ACTION.REMOVE_ERROR;
        action.payload = null;
        let changedState = errorHandlingReducer(initialState, action);
        expect(changedState.error.type).toEqual('');
        expect(changedState.error.errorMsg).toEqual('');
    });

    it('null action should return state without changing it', () => {
        action.type = null;
        action.payload = null;
        let changedState = errorHandlingReducer(initialState, action);
        expect(changedState).toEqual(initialState);
    });

});
