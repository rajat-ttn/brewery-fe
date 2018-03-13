import ACTION from '../../../../constants/actions';

// default value of current Temperature and audio Sound on load
const initialState = {
    temperatureType: 'CELSIUS',
    isMute: false,
};

const setTemperatureType = (state, payload) => {
    return { ...state, temperatureType: payload };
};

export default function configReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION.SET_TEMPERATURE_TYPE: return setTemperatureType(state, action.payload);
        case ACTION.TOGGLE_SOUND: return { ...state, isMute: action.payload };
        default: return state;
    }
};
