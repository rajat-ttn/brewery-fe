import ACTION from '../../../../constants/actions';

const initialState = {
    error: {
        type: '',
        errorMsg: ''
    },
};

const setErrorMsg = (state, {error, errorMsg}) => {
    const errorData = {};
    errorData.type = error && error.status;
    errorData.errorMsg = errorMsg
    return {...state, error: errorData};
};

const removeErrorMsg = (state) => {
    return {...state, error: initialState.error};
};

export default function errorHandlingReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.SET_ERROR: return setErrorMsg(state, action.payload);
        case ACTION.REMOVE_ERROR: return removeErrorMsg(state);
        default: return state;
    }
};
