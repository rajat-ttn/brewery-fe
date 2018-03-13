import ACTION from '../../../../constants/actions';

// function to update error message in redux state
export const setErrorMessage = (error) => {
    return {
        type: ACTION.SET_ERROR,
        payload: error,
    }
};

// function to remove error message from redux state
export const removeErrorMessage = () => {
    return {
        type: ACTION.REMOVE_ERROR
    }
};
