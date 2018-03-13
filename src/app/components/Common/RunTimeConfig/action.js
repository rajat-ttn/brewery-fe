import ACTION from '../../../../constants/actions';

// function to set Temperature type in redux state
export const setTemperatureType = (currentValue) => {
    return {
        type: ACTION.SET_TEMPERATURE_TYPE,
        payload: currentValue,
    }
};

// function to set playing status of sound in redux state
export const toggleSound = (isMute) => {
    return {
        type: ACTION.TOGGLE_SOUND,
        payload: isMute,
    }
};
