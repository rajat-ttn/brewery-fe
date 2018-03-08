import ACTION from '../../../../constants/actions';

export const setErrorMessage = (error) => {
    return {
        type: ACTION.SET_ERROR,
        payload: error,
    }
};

export const removeErrorMessage = () => {
    return {
        type: ACTION.REMOVE_ERROR
    }
};
