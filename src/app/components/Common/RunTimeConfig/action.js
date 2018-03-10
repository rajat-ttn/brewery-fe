import ACTION from '../../../../constants/actions';

export const setTemperatureType = (currentValue) => {
    return {
        type: ACTION.SET_TEMPERATURE_TYPE,
        payload: currentValue,
    }
};

export const toggleSound = (isMute) => {
    return {
        type: ACTION.TOGGLE_SOUND,
        payload: isMute,
    }
};
